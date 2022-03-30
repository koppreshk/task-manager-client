import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { CreateIssueContainer } from "../../create-new-issue/containers";
import { ListNewIssuesContainer } from "../../new-issues/containers";

const StyledFlexBox = styled(FlexBox)`
    width: 100%;
    height: 100%;
`;

export const CoreLayout = React.memo(() => {
    return (
        <StyledFlexBox flexDirection="column" gap="10px">
            <CreateIssueContainer />
            <ListNewIssuesContainer />
        </StyledFlexBox>
    )
})
