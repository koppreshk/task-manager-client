import React from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from "styled-components";
import { Button } from "@mui/material";

interface ICloseIssueProps {
    status: string;
    onCloseIssue: () => void;
}

const StyledButton = styled(Button)`
    background-color: #e72929;
    width: 175px;
    :hover {
        background-color: #e72929ab;
    }
`;

export const CloseIssue = React.memo((props: ICloseIssueProps) => {
    const { status, onCloseIssue } = props;

    const onCloseIssueHandler = React.useCallback(() => {
        onCloseIssue();
    }, [onCloseIssue]);

    return (
        <>
            {(status === 'readyForRelease' || status === 'new')
                ? <StyledButton startIcon={<DeleteForeverIcon />} onClick={onCloseIssueHandler} variant="contained">Close Issue</StyledButton>
                : null}
        </>
    )
})