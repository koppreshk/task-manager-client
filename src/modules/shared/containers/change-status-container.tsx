import React from "react"
import { useMutation, useQueryClient } from "react-query";
import { useNotifications, useServiceClient } from "../../../common";
import { IChangeStatusItem } from "../components";
import { ChangeStatus } from "../components/issue-details/parts";
import { StatusesType } from "../types";

interface IChangeStatusContianerProps {
    invalidateQueryNames?: string[];
    changeStatusItem: IChangeStatusItem[];
    status: StatusesType;
    _id: string;
}

const statusChangeEndPoints = {
    developmentInProgress: 'newIssues/moveNewToDev',
    codeReview: 'devIssues/moveDevToCodeReview',
    packaging: 'codeReviewIssues/moveCodeReviewToPackaging',
    qaInProgress: 'packagingIssues/movePackagingToQAInProgress',
    readyForRelease: 'qaInProgressIssues/moveQAInProgressToReadyForRelease'
}

export const ChangeStatusContainer = React.memo((props: IChangeStatusContianerProps) => {
    const { changeStatusItem, invalidateQueryNames, status, _id } = props;
    const queryClient = useQueryClient();
    const { postData } = useServiceClient<{ id: string }>();
    const [selectedValue, setValue] = React.useState<string>(status);
    const { showNotification } = useNotifications();

    const onChangeStatus = React.useCallback(async (targetedStatus: keyof typeof statusChangeEndPoints) => {
        return await postData(`/api/v1/${statusChangeEndPoints[targetedStatus]}`, 'POST', {
            id: _id
        })
    }, [_id, postData]);

    const mutation = useMutation('changeStatus', onChangeStatus, {
        onSuccess: (res) => {
            invalidateQueryNames?.forEach((queryName) => queryClient.invalidateQueries(queryName));
            res.json().then(finalRes => showNotification({ message: `Status successfully updated to ${finalRes.data[0].status}` }));
        },
        onError: (err) => showNotification({ message: `Failed to change status ${err}`, type: 'error' })
    })

    const handleSelectValueChange = React.useCallback((targetedStatus: string) => {
        setValue(targetedStatus);
        mutation.mutate(targetedStatus as keyof typeof statusChangeEndPoints);
    }, [mutation]);

    return (
        <ChangeStatus
            statusItems={changeStatusItem}
            selectedValue={selectedValue}
            handleSelectValueChange={handleSelectValueChange} />
    )
})