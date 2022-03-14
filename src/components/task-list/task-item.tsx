import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"
import { TaskCompletionContainer, TaskDeleteContainer } from "../../containers";
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
    const { name, _id } = props;

    return (
        <StyledFlexBox gap="10px" width="100%" height="40px" alignItems="center">
            <TaskCompletionContainer {...props} />
            <StyledText>{name}</StyledText>
            <TaskDeleteContainer _id={_id} />
        </StyledFlexBox>
    )
})