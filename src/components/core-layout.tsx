import React from "react";
import styled from "styled-components";
import { FlexBox } from "../common";
import { Header } from "./header";

const StyledFlexBox = styled(FlexBox)`
    background-color: #e9e1e1;
    width: 100%;
    height: 100%;
`;

export const CoreLayout = () => {
    return (
        <StyledFlexBox flexDirection="column" alignItems="center" justifyContent="center">
            <Header />
        </StyledFlexBox>
    )
}