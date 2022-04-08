import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { DevelopmentInProgressIssues } from "../components";

interface IDevelopmentInProgressIssuesContainer { }

export const DevelopmentInProgressIssuesContainer = React.memo((props: IDevelopmentInProgressIssuesContainer) => {
    const { getData } = useServiceClient();

    const getDevIssuesList = React.useCallback(() => {
        return getData('/api/v1/devIssues/getAllDevIssues')
            .then(response => response.json())
            .then(data => data.allDevIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery('getDevIssuesList', getDevIssuesList)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <DevelopmentInProgressIssues developmentInProgressIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})