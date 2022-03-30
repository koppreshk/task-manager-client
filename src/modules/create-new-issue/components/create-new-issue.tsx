import React from "react"
import { Box, Button, Modal } from "@mui/material";
import { CreateNewIssueForm } from "./create-new-issue-form";
import { FlexBox } from "../../../common";
import { ICreateNewIssueBody } from "../api-body-types";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ICreateNewIssueProps {
    onCreateNewIssue: (args: ICreateNewIssueBody) => void;
}

export const CreateNewIssue = React.memo((props: ICreateNewIssueProps) => {
    const { onCreateNewIssue } = props;
    const [open, setOpen] = React.useState(false);

    const toggleModel = React.useCallback(() => {
        setOpen((preValue) => !preValue);
    }, []);

    const formSubmitHandler = React.useCallback((args: ICreateNewIssueBody) => {
        onCreateNewIssue(args)
        toggleModel()
    }, [onCreateNewIssue, toggleModel]);

    return (
        <FlexBox padding="10px" justifyContent="flex-end">
            <Button onClick={toggleModel} variant="contained">Create Issue</Button>
            <Modal
                open={open}
                onClose={toggleModel}>
                <Box sx={style}>
                    <CreateNewIssueForm formSubmitHandler={formSubmitHandler} />
                </Box>
            </Modal>
        </FlexBox>
    )
})