import React from "react"
import styled from "styled-components";

const TaskManagerHeading = styled.span`
    font-size: 20px;
    color: #6c4f8f;
`;

export const HeaderLabel = React.memo(() => {
    return (
        <TaskManagerHeading>Task Manager</TaskManagerHeading>
    )
})