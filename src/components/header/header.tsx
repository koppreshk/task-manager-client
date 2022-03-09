import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"
import { AddTask } from "./add-task"
import { HeaderLabel } from "./header-label"

const StyledFlexBox = styled(FlexBox)`
    background-color: #fff;
    box-shadow: 1px;
    padding: 25px 20px;
    width: 400px;
`;

export const Header = React.memo(() => {
    return (
        <StyledFlexBox flexDirection="column" gap="16px" justifyContent="center" alignItems="center">
            <HeaderLabel />
            <AddTask />
        </StyledFlexBox>
    )
})