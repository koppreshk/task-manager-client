import React from "react";
import { useNotifications, useServiceClient } from "common";
import { useNavigate, useParams } from "react-router-dom";
import { CloseIssue } from "../components/issue-details/parts";
import { useMutation, useQueryClient } from "react-query";
import { ReactQueryKeys } from "common-enums";

const closeIssuePath = {
    new: 'newIssues/deleteNewIssue',
    readyForRelease: 'readyForReleaseIssues/deleteReadyForReleaseIssue'
}

export const CloseIssueContainer = React.memo(() => {
    const { deleteData } = useServiceClient<{ id: string }>();
    const { id, status } = useParams<{ status: string, id: string }>();
    const queryClient = useQueryClient();
    const { showNotification } = useNotifications();
    const navaigate = useNavigate();

    const onCloseIssue = React.useCallback(async () => {
        return await deleteData(`/api/v1/${closeIssuePath[status!]}/${id}`)
    }, [deleteData, id, status]);

    const mutation = useMutation('CloseIssue', onCloseIssue, {
        onSuccess: (res) => {
            queryClient.invalidateQueries(status === 'new' ? ReactQueryKeys.GetAllNewIssues : ReactQueryKeys.GetAllReadyForReleaseIssues);
            res.json().then(() => showNotification({ message: 'Issue Closed Successfully' }));
            navaigate(-1);
        },
        onError: (err) => showNotification({ message: `Failed to close issu ${err}`, type: 'error' })
    })

    return (
        <CloseIssue status={status!} onCloseIssue={mutation.mutate} />
    )
})