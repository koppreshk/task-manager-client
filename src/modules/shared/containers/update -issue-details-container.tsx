import React from "react"
import { useServiceClient } from "../../../common";
import { IIssuesTileMetaData, IIssueTileProps } from "../components";
import { IssueDetails } from "../components/issue-details";

interface IUpdateIssueDetailsContaionerProps extends IIssueTileProps { }

export interface IBodyArgs extends Pick<IIssuesTileMetaData, 'description' | 'changeSetDetails' | 'codeReviewComments' | 'qaComments'> {

}

const updateIssueDetailsEndPoints = {
    new: 'newIssues/updateNewIssue',
    developmentInProgress: 'devIssues/updateDevIssue',
    codeReview: 'codeReviewIssues/updateCodeReviewIssue',
    packaging: 'packagingIssues/updatePackagingIssue',
    qaInProgress: 'qaInProgressIssues/updateQAInProgressIssue',
    readyForRelease: 'readyForReleaseIssues/updateReadyForReleaseIssue'
}
export const UpdateIssueDetailsContainer = React.memo((props: IUpdateIssueDetailsContaionerProps) => {
    const { issuesTileMetaData, changeStatusItem, invalidationKeys } = props;
    const { status, _id } = issuesTileMetaData;
    const { postData } = useServiceClient<IBodyArgs>();

    const onUpdateIssueDetails = React.useCallback(async (body: IBodyArgs) => {
        return await postData(`/api/v1/${updateIssueDetailsEndPoints[status]}/${_id}`, 'PATCH', body)
    }, [_id, postData, status]);

    return (
        <>
            <IssueDetails
                onUpdateIssueDetails={onUpdateIssueDetails}
                issuesTileMetaData={issuesTileMetaData}
                invalidationKeys={invalidationKeys}
                changeStatusItem={changeStatusItem} />
        </>
    );
})