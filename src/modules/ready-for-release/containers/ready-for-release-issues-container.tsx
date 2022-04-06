import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { ReadyForReleaseIssues } from "../components";

interface IReadyForReleaseIssuesContainerProps { }

export const ReadyForReleaseIssuesContainer = React.memo((props: IReadyForReleaseIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getAllReadyForReleaseIssues = React.useCallback(() => {
        return getData('/api/v1/readyForReleaseIssues/getAllReadyForReleaseIssues')
            .then(response => response.json())
            .then(data => data.allReadyForReleaseIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery('getAllReadyForReleaseIssues', getAllReadyForReleaseIssues)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <ReadyForReleaseIssues readyForReleaseIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})