import React from "react"
import { useMutation, useQueryClient } from "react-query";
import { useServiceClient } from "../../../common";
import { NewIssuesQueryName } from "../../new-issues/types";
import { ICreateNewIssueBody } from "../api-body-types";
import { CreateNewIssue } from "../components"

export const CreateIssueContainer = React.memo(() => {
    const { postData } = useServiceClient<ICreateNewIssueBody>();
    const queryClient = useQueryClient();

    const onCreateNewIssue = React.useCallback(async (args: ICreateNewIssueBody) => {
        return await postData('/api/v1/newIssues/createNewIssue', 'POST', args)
    }, [postData]);

    const mutation = useMutation('createNewIssue', onCreateNewIssue, {
        onSuccess: () => {
            queryClient.invalidateQueries(NewIssuesQueryName.GetNewIssuesList)
        },
    })

    return (
        <CreateNewIssue onCreateNewIssue={mutation.mutate} />
    )
})