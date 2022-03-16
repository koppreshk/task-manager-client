import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"
import { CompleteTaskContainer, DeleteTaskContainer } from "../../containers";
import { ITaskMetadata } from "../../types";
import { TaskName } from "./task-name";

interface ITaskItemProps extends ITaskMetadata { };

const StyledFlexBox = styled(FlexBox)`
    box-sizing: border-box;
`;

export const TaskItem = React.memo((props: ITaskItemProps) => {
    const { name, _id } = props;

    return (
        <StyledFlexBox gap="10px" width="100%" alignItems="center">
            <CompleteTaskContainer {...props} />
            <TaskName name={name} _id={_id} />
            <DeleteTaskContainer _id={_id} />
        </StyledFlexBox>
    )
})