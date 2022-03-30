import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { ListNewIssues } from "../components";

interface INewListIssuesContainerProps { }

export const ListNewIssuesContainer = React.memo((props: INewListIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getNewIssuesList = React.useCallback(() => {
        return getData('/api/v1/newIssues/getAllNewIssues')
            .then(response => response.json())
            .then(data => data.newIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery('getNewIssuesList', getNewIssuesList)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <ListNewIssues newIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})