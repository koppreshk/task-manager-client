import React from "react";
import styled from "styled-components";
import { FlexBox } from "../common";
import { GetTaskListContainer } from "../containers";
import { Header } from "./header";

const StyledFlexBox = styled(FlexBox)`
    background: linear-gradient(to bottom,#654a86,#534292);
    width: 100%;
    height: 100%;
`;

export const CoreLayout = () => {
    return (
        <StyledFlexBox flexDirection="column" alignItems="center" gap="10px">
            <Header />
            <GetTaskListContainer />
        </StyledFlexBox>
    )
}