import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { NewIssues } from "../components";
import { NewIssuesQueryName } from "../types";

interface INewIssuesContainerProps { }


export const NewIssuesContainer = React.memo((props: INewIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getNewIssuesList = React.useCallback(() => {
        return getData('/api/v1/newIssues/getAllNewIssues')
            .then(response => response.json())
            .then(data => data.newIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery(NewIssuesQueryName.GetNewIssuesList, getNewIssuesList)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <NewIssues newIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})