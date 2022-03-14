import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common";
import { ITaskMetadata } from "../../types";
import { TaskItem } from "./task-item";

const StyledFlexBox = styled(FlexBox)`
    background-color: #fff;
    width: 400px;
    height: 400px;
    padding: 25px 20px;
    border-radius: 4px;
`;

interface ITaskListProps {
    tasksList: ITaskMetadata[]
}

export const TaskList = React.memo((props: ITaskListProps) => {
    const { tasksList } = props;
    return (
        <StyledFlexBox flexDirection="column">
            {
                tasksList.map((item) => <TaskItem key={item._id} {...item} />)
            }
        </StyledFlexBox>
    );
})