import React from "react"
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "common";
import { GetIssueDetailsContainer } from "modules/shared/containers";
import { CreateIssueContainer } from "modules/create-new-issue/containers";
import { GetIssueListByStatusContainer } from "modules/shared/containers";
import { APIEndPoints, ReactQueryKeys } from "common-enums";

interface IIssueWrapperProps {

}

const StyledFlexBox = styled(FlexBox)`
    width: 100%;
    height: calc(100% - 70px); 
`;

const IssueContainerWrapper = styled(FlexBox)`
      height: calc(100% - 80px);
      padding: 0px 20px;
`;

const statuses = [{
    apiEndPoint: APIEndPoints.GetAllNewIssues,
    queryKey: ReactQueryKeys.GetAllNewIssues,
    statusHeaderLabel: 'NEW'
}, {
    apiEndPoint: APIEndPoints.GetAllDevIssues,
    queryKey: ReactQueryKeys.GetAllDevIssues,
    statusHeaderLabel: 'DEVELOPMENT IN PROGRESS'
}, {
    apiEndPoint: APIEndPoints.GetAllCodeReviewIssues,
    queryKey: ReactQueryKeys.GetAllCodeReviewIssues,
    statusHeaderLabel: 'CODE REVIEW'
}, {
    apiEndPoint: APIEndPoints.GetAllPackagingIssues,
    queryKey: ReactQueryKeys.GetAllPackagingIssues,
    statusHeaderLabel: 'PACKAGING'
}, {
    apiEndPoint: APIEndPoints.GetAllQAInProgressIssues,
    queryKey: ReactQueryKeys.GetAllQAInProgressIssues,
    statusHeaderLabel: 'QA IN PROGRESS'
}, {
    apiEndPoint: APIEndPoints.GetAllReadyForReleaseIssues,
    queryKey: ReactQueryKeys.GetAllReadyForReleaseIssues,
    statusHeaderLabel: 'READY FOR RELEASE'
}];

export const IssueWrapper = React.memo((props: IIssueWrapperProps) => {

    return (
        <StyledFlexBox flexDirection="column" gap="10px">
            <CreateIssueContainer />
            <IssueContainerWrapper flexDirection="row" gap="10px">
                {statuses.map((sts) => <GetIssueListByStatusContainer {...sts} key={sts.statusHeaderLabel} />)}
            </IssueContainerWrapper>
            <Routes>
                <Route path={':status/:id'} element={<GetIssueDetailsContainer />} />
            </Routes>
        </StyledFlexBox>
    )
})