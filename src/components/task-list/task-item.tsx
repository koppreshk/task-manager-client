import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"

interface ITaskItemProps {
    name: string;
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
            <input type="checkbox" />
            <StyledText>{name}</StyledText>
            <button>Delete</button>
        </StyledFlexBox>
    )
})