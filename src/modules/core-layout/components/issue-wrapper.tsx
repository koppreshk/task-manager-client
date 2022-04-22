import React from "react"
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "common";
import { GetIssueDetailsContainer } from "modules/shared/containers";
import { CodeReviewIssuesContainer } from "modules/code-review/containers";
import { CreateIssueContainer } from "modules/create-new-issue/containers";
import { DevelopmentInProgressIssuesContainer } from "modules/development-in-progress/containers";
import { NewIssuesContainer } from "modules/new-issues/containers";
import { PackagingIssuesContainer } from "modules/packaging/containers";
import { QAInProgressIssuesContainer } from "modules/qa-in-progress/containers";
import { ReadyForReleaseIssuesContainer } from "modules/ready-for-release/containers";

interface IIssueWrapperProps {

}

const StyledFlexBox = styled(FlexBox)`
    width: 100%;
    height: 100%; 
`;

const IssueContainerWrapper = styled(FlexBox)`
      height: 79%;
      padding: 0px 20px;
`;


export const IssueWrapper = React.memo((props: IIssueWrapperProps) => {

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
                <Route path={':status/:id'} element={<GetIssueDetailsContainer />} />
            </Routes>
        </StyledFlexBox>
    )
})