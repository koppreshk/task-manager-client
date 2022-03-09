import React from "react"
import styled from "styled-components";

const TaskManagerHeading = styled.span`
    font-size: 16px;
`;

export const Header = React.memo(() => {
    return (
        <TaskManagerHeading>Task Manager</TaskManagerHeading>
    )
})