import React from "react";
import { useServiceClient } from "common";
import { useParams, useNavigate } from "react-router-dom";
import { ReactQueryKeys } from "react-query-enums";
import { useQuery } from "react-query";
import { Box, CircularProgress, Modal } from "@mui/material";
import { UpdateIssueDetailsContainer } from "./update-issue-details-container";

interface IGetIssueDetailsContainerProps { }

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(80% - 100px)',
    height: 'calc(80% - 100px)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none'
};

const getIssueDetailsEndPoints = {
    new: 'newIssues/getNewIssue',
    developmentInProgress: 'devIssues/getDevIssue',
    codeReview: 'codeReviewIssues/getCodeReviewIssue',
    packaging: 'packagingIssues/getPackagingIssue',
    qaInProgress: 'qaInProgressIssues/getQAInProgressIssue',
    readyForRelease: 'readyForReleaseIssues/getReadyForReleaseIssue'
}

const invalidationKeys = {
    new: [ReactQueryKeys.GetAllNewIssues, ReactQueryKeys.GetAllDevIssues],
    developmentInProgress: [ReactQueryKeys.GetAllDevIssues, ReactQueryKeys.GetAllCodeReviewIssues],
    codeReview: [ReactQueryKeys.GetAllCodeReviewIssues, ReactQueryKeys.GetAllPackagingIssues],
    packaging: [ReactQueryKeys.GetAllPackagingIssues, ReactQueryKeys.GetAllQAInProgressIssues],
    qaInProgress: [ReactQueryKeys.GetAllQAInProgressIssues, ReactQueryKeys.GetAllReadyForReleaseIssues],
    readyForRelease: []
}

const changeStatusItems = {
    new: [{
        currentStatusName: 'New',
        targetStatusName: 'Development In Progress',
        targetStatusValue: 'developmentInProgress'
    }],
    developmentInProgress: [{
        currentStatusName: 'Development In Progress',
        targetStatusName: 'Code Review',
        targetStatusValue: 'codeReview'
    }],
    codeReview: [{
        currentStatusName: 'Code Review',
        targetStatusName: 'Packaging',
        targetStatusValue: 'packaging'
    }],
    packaging: [{
        currentStatusName: 'Packaging',
        targetStatusName: 'QA In Progress',
        targetStatusValue: 'qaInProgress'
    }],
    qaInProgress: [{
        currentStatusName: 'QA In Progress',
        targetStatusName: 'Ready For Release',
        targetStatusValue: 'readyForRelease'
    }],
    readyForRelease: []
}

export const GetIssueDetailsContainer = (props: IGetIssueDetailsContainerProps) => {
    const { id, status } = useParams<{ status: string, id: string }>();
    const { getData } = useServiceClient();
    const nagivate = useNavigate();

    const getIssueDetailsList = React.useCallback(() => {
        return getData(`/api/v1/${getIssueDetailsEndPoints[status!]}/${id}`)
            .then(response => response.json())
            .then(data => data.data)
            .catch(err => err);
    }, [getData, id, status]);

    const dismissModel = React.useCallback(() => {
        nagivate(-1)
    }, [nagivate]);

    const { isLoading, data, error } = useQuery(ReactQueryKeys.GetNewIssueByID, getIssueDetailsList);

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <Modal
                open={true}
                onClose={dismissModel}>
                <Box sx={style}>
                    <UpdateIssueDetailsContainer
                        issuesTileMetaData={data}
                        key={data._id}
                        invalidationKeys={invalidationKeys[status!]}
                        changeStatusItems={changeStatusItems[status!]} />
                </Box>
            </Modal>
        )
    }

    return (
        <span>Error: {error}</span>
    )
}

