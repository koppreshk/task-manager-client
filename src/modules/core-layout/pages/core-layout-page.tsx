import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { CreateIssueContainer } from "../../create-new-issue/containers";
import { ListDevelopmentInProgressIssuesContainer } from "../../development-in-progress/containers";
import { ListNewIssuesContainer } from "../../new-issues/containers";

const StyledFlexBox = styled(FlexBox)`
    width: 100%;
    height: 100%;
`;

const IssueContainerWrapper = styled(FlexBox)`
      height: calc(100% - 70px);  
`;

export const CoreLayout = React.memo(() => {
    return (
        <StyledFlexBox flexDirection="column" gap="10px">
            <CreateIssueContainer />
            <IssueContainerWrapper flexDirection="row" gap="10px">
                <ListNewIssuesContainer />
                <ListDevelopmentInProgressIssuesContainer />
            </IssueContainerWrapper>
        </StyledFlexBox>
    )
})
