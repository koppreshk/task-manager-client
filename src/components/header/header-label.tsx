import React from "react"
import styled from "styled-components";

const TaskManagerHeading = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #1976d2;
`;

export const HeaderLabel = React.memo(() => {
    return (
        <TaskManagerHeading>Task Manager</TaskManagerHeading>
    )
})