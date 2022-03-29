import React from "react"
import { useServiceClient } from "../../../common";
import { ICreateNewIssueBody } from "../api-body-types";
import { CreateIssue } from "../components"

export const CreateIssueContainer = React.memo(() => {
    const { postData } = useServiceClient<ICreateNewIssueBody>();

    const onCreateNewIssue = React.useCallback(async (args: ICreateNewIssueBody) => {
        return await postData('/api/v1/newIssues/createNewIssue', 'POST', args)
    }, [postData]);

    return (
        <CreateIssue onCreateNewIssue={onCreateNewIssue} />
    )
})