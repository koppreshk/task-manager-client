import React from "react";
import styled from "styled-components";
import { FlexBox } from "../common";
import { GetTaskList } from "../containers";
import { Header } from "./header";

const StyledFlexBox = styled(FlexBox)`
    background-color: rgba(199, 230, 200, 0.89);
    width: 100%;
    height: 100%;
`;

export const CoreLayout = () => {
    return (
        <StyledFlexBox flexDirection="column" alignItems="center" gap="10px">
            <Header />
            <GetTaskList />
        </StyledFlexBox>
    )
}