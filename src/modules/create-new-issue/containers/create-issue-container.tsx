import React from "react"
import { useMutation, useQueryClient } from "react-query";
import { useNotifications, useServiceClient } from "../../../common";
import { ReactQueryKeys } from "../../../react-query-enums";
import { ICreateNewIssueBody } from "../api-body-types";
import { CreateNewIssue } from "../components"

export const CreateIssueContainer = React.memo(() => {
    const { postData } = useServiceClient<ICreateNewIssueBody>();
    const queryClient = useQueryClient();
    const { showNotification } = useNotifications();

    const onCreateNewIssue = React.useCallback(async (args: ICreateNewIssueBody) => {
        return await postData('/api/v1/newIssues/createNewIssue', 'POST', args)
    }, [postData]);

    const mutation = useMutation('createNewIssue', onCreateNewIssue, {
        onSuccess: () => {
            showNotification({ message: 'Successfully created a new issue', type: 'success' })
            queryClient.invalidateQueries(ReactQueryKeys.GetAllNewIssues)
        },
    })

    return (
        <CreateNewIssue onCreateNewIssue={mutation.mutate} />
    )
})