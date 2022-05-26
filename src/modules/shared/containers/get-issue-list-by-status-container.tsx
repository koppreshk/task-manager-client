import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { ReactQueryKeys } from "../../../common-enums";
import { IssueListByStatus } from "../components/issue-list";

interface IGetIssueListByStatusContainerProps {
    apiEndPoint: string;
    queryKey: ReactQueryKeys;
    statusHeaderLabel: string;
}

export const GetIssueListByStatusContainer = React.memo((props: IGetIssueListByStatusContainerProps) => {
    const { apiEndPoint, statusHeaderLabel, queryKey } = props;
    const { getData } = useServiceClient();

    const getAllIssues = React.useCallback(() => {
        return getData(apiEndPoint)
            .then(response => response.json())
            .then(data => data.data)
            .catch(err => err);
    }, [apiEndPoint, getData]);

    const { isLoading, data, error } = useQuery(queryKey, getAllIssues)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <IssueListByStatus issueList={data} statusHeaderLabel={statusHeaderLabel} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})