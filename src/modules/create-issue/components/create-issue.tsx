import React from "react"
import { Box, Button, Modal } from "@mui/material";
import { CreateIssueForm } from "./create-issue-form";
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
    onCreateNewIssue: (args: ICreateNewIssueBody) => Promise<Response>
}

export const CreateIssue = React.memo((props: ICreateNewIssueProps) => {
    const { onCreateNewIssue } = props;
    const [open, setOpen] = React.useState(false);

    const toggleModel = React.useCallback(() => {
        setOpen((preValue) => !preValue);
    }, []);

    return (
        <FlexBox padding="10px 0px 0px 0px">
            <Button onClick={toggleModel} variant="outlined">Create Issue</Button>
            <Modal
                open={open}
                onClose={toggleModel}>
                <Box sx={style}>
                    <CreateIssueForm onCreateNewIssue={onCreateNewIssue} />
                </Box>
            </Modal>
        </FlexBox>
    )
})