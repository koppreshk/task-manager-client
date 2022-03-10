import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common";
import { ITaskMetadata } from "../../types";

const StyledFlexBox = styled(FlexBox)`
    background-color: #fff;
    width: 400px;
    height: 400px;
    padding: 25px 20px;
    border-radius: 4px;
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

interface ITaskListProps {
    tasksList: ITaskMetadata[]
}

export const TaskList = React.memo((props: ITaskListProps) => {
    const { tasksList } = props;
    return (
        <StyledFlexBox flexDirection="column">
            {
                tasksList.length > 0
                    ? tasksList.map((item) => <div key={item._id}>{item.name}</div>)
                    : null
            }
        </StyledFlexBox>
    );
})