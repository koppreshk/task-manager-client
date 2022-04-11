import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { PackagingIssues } from "../components";
import { ReactQueryKeys } from "../../../react-query-enums";

interface IPackagingIssuesContainerProps { }

export const PackagingIssuesContainer = React.memo((props: IPackagingIssuesContainerProps) => {
    const { getData } = useServiceClient();

    const getAllPackagingIssues = React.useCallback(() => {
        return getData('/api/v1/packagingIssues/getAllPackagingIssues')
            .then(response => response.json())
            .then(data => data.allPackagingIssues)
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery(ReactQueryKeys.GetAllPackagingIssues, getAllPackagingIssues)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <PackagingIssues packagingIssues={data} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})