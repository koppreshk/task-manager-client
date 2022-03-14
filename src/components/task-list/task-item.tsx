import React from "react"
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { FlexBox } from "../../common"
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskCompletionContainer } from "../../containers";
import { ITaskMetadata } from "../../types";

interface ITaskItemProps extends ITaskMetadata {

};

const StyledFlexBox = styled(FlexBox)`
    box-sizing: border-box;
`;

const StyledText = styled.span`
    width: calc(100% - 50px);
`;

export const TaskItem = React.memo((props: ITaskItemProps) => {
    const { name } = props;

    return (
        <StyledFlexBox gap="10px" width="100%" height="40px" alignItems="center">
            <TaskCompletionContainer {...props} />
            <StyledText>{name}</StyledText>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </StyledFlexBox>
    )
})