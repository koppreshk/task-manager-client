import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { CodeReviewIssuesContainer } from "../../code-review/containers";
import { CreateIssueContainer } from "../../create-new-issue/containers";
import { DevelopmentInProgressIssuesContainer } from "../../development-in-progress/containers";
import { NewIssuesContainer } from "../../new-issues/containers";
import { PackagingIssuesContainer } from "../../packaging/containers";
import { QAInProgressIssuesContainer } from "../../qa-in-progress/containers";
import { ReadyForReleaseIssuesContainer } from "../../ready-for-release/containers";
import { GetIssueDetailsContainer } from "modules/shared/containers";

const StyledFlexBox = styled(FlexBox)`
    width: 100%;
    height: 100%;
`;

const IssueContainerWrapper = styled(FlexBox)`
      height: calc(100% - 70px);  
`;

export const CoreLayout = React.memo(() => {
    const match = useMatch('/:status/:id');

    return (
        <StyledFlexBox flexDirection="column" gap="10px">
            <CreateIssueContainer />
            <IssueContainerWrapper flexDirection="row" gap="10px">
                <NewIssuesContainer />
                <DevelopmentInProgressIssuesContainer />
                <CodeReviewIssuesContainer />
                <PackagingIssuesContainer />
                <QAInProgressIssuesContainer />
                <ReadyForReleaseIssuesContainer />
            </IssueContainerWrapper>
            <Routes>
                <Route path={`${match?.pattern.path}`} element={<GetIssueDetailsContainer />} />
            </Routes>
        </StyledFlexBox>
    )
})