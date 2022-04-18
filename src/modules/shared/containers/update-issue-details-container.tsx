import React from "react"
import { useMutation, useQueryClient } from "react-query";
import { ReactQueryKeys } from "react-query-enums";
import { useServiceClient } from "../../../common";
import { IIssuesTileMetaData, IIssueTileProps } from "../components";
import { IssueDetails } from "../components/issue-details";

interface IChangeItems {
    currentStatusName: string;
    targetStatusName: string;
    targetStatusValue: string;
}

export interface IUpdateIssueDetailsContaionerProps extends IIssueTileProps {
    invalidationKeys: ReactQueryKeys[];
    changeStatusItems: IChangeItems[]
}

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
    const { issuesTileMetaData, changeStatusItems, invalidationKeys } = props;
    const { status, _id } = issuesTileMetaData;
    const { postData } = useServiceClient<IBodyArgs>();
    const queryClient = useQueryClient();

    const onUpdateIssueDetails = React.useCallback(async (body: IBodyArgs) => {
        return await postData(`/api/v1/${updateIssueDetailsEndPoints[status]}/${_id}`, 'PATCH', body)
    }, [_id, postData, status]);

    const mutation = useMutation('updateIssueDetails', onUpdateIssueDetails, {
        onSuccess: () => {
            queryClient.invalidateQueries(ReactQueryKeys.GetNewIssueByID)
        }
    });
    
    return (
        <IssueDetails
            onUpdateIssueDetails={mutation.mutate}
            issuesTileMetaData={issuesTileMetaData}
            invalidationKeys={invalidationKeys}
            changeStatusItems={changeStatusItems} />
    );
})