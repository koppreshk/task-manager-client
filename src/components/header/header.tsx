import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"
import { AddTaskContainer } from "../../containers";
import { HeaderLabel } from "./header-label"

const StyledFlexBox = styled(FlexBox)`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 25px 20px;
    margin-top: 50px;
    width: 400px;
    border-radius: 4px;
`;

export const Header = React.memo(() => {
    return (
        <StyledFlexBox flexDirection="column" gap="16px" justifyContent="center" alignItems="center">
            <HeaderLabel />
            <AddTaskContainer />
        </StyledFlexBox>
    )
})