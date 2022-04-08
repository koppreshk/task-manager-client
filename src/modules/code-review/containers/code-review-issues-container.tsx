import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { CodeReviewIssues } from "../components";
import { ReactQueryKeys } from "../../../react-query-enums";

interface ICodeReviewIssuesContainerProps { }

export const CodeReviewIssuesContainer = React.memo((props: ICodeReviewIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getAllCodeReviewIssues = React.useCallback(() => {
        return getData('/api/v1/codeReviewIssues/getAllCodeReviewIssues')
            .then(response => response.json())
            .then(data => data.allCodeReviewIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery(ReactQueryKeys.GetAllCodeReviewIssues, getAllCodeReviewIssues)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <CodeReviewIssues codeReviewIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})