import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { QAInProgressIssues } from "../components";

interface IQAInProgressIssuesContainerProps { }

export const QAInProgressIssuesContainer = React.memo((props: IQAInProgressIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getAllQAInProgressIssues = React.useCallback(() => {
        return getData('/api/v1/qaInProgressIssues/getAllQAInProgressIssues')
            .then(response => response.json())
            .then(data => data.allQAInProgressIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery('getAllQAInProgressIssues', getAllQAInProgressIssues)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <QAInProgressIssues qaInProgressIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})