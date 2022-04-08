import React from "react"
import { useMutation, useQueryClient } from "react-query";
import { useServiceClient } from "../../../common";
import { ChangeStatus } from "../components/issue-details/parts";
import { StatusesType } from "../types";

interface IChangeStatusContianerProps {
    invalidateQueryNames?: string[];
    status: StatusesType;
    _id: string;
}

const statusItems = [
    {
        currentStatusName: 'New',
        targetStatusName: 'Development In Progress',
        targetStatusValue: 'developmentInProgress'
    },
    {
        currentStatusName: 'Development In Progress',
        targetStatusName: 'Code Review',
        targetStatusValue: 'codeReview'
    },
    {
        currentStatusName: 'Code Review',
        targetStatusName: 'Packaging',
        targetStatusValue: 'packaging'
    },
    {
        currentStatusName: 'Packaging',
        targetStatusName: 'QA In Progress',
        targetStatusValue: 'qaInProgress'
    },
    {
        currentStatusName: 'QA In Progress',
        targetStatusName: 'Ready For Release',
        targetStatusValue: 'readyForRelease'
    }
]

const statusChangeEndPoints = {
    developmentInProgress: 'newIssues/moveNewToDev',
    codeReview: 'devIssues/moveDevToCodeReview',
    packaging: 'codeReviewIssues/moveCodeReviewToPackaging',
    qaInProgress: 'packagingIssues/movePackagingToQAInProgress',
    readyForRelease: 'qaInProgressIssues/moveQAInProgressToReadyForRelease'
}

export const ChangeStatusContainer = React.memo((props: IChangeStatusContianerProps) => {
    const { invalidateQueryNames, status, _id } = props;
    const queryClient = useQueryClient();
    const { postData } = useServiceClient<{ id: string }>();
    const [selectedValue, setValue] = React.useState<string>(status);

    const onChangeStatus = React.useCallback(async (targetedStatus: keyof typeof statusChangeEndPoints) => {
        return await postData(`/api/v1/${statusChangeEndPoints[targetedStatus]}`, 'POST', {
            id: _id
        })
    }, [_id, postData]);

    const mutation = useMutation('changeStatus', onChangeStatus, {
        onSuccess: () => {
            invalidateQueryNames?.forEach((queryName) => queryClient.invalidateQueries(queryName))
        },
        onError: (err) => alert(err)
    })

    const handleSelectValueChange = React.useCallback((targetedStatus: string) => {
        setValue(targetedStatus);
        mutation.mutate(targetedStatus as keyof typeof statusChangeEndPoints);
    }, [mutation]);

    return (
        <ChangeStatus
            statusItems={statusItems}
            selectedValue={selectedValue}
            handleSelectValueChange={handleSelectValueChange} />
    )
})