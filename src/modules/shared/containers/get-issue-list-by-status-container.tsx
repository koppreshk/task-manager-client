import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { ReactQueryKeys } from "../../../common-enums";
import { IssueListByStatus } from "../components/issue-list";

interface IGetIssueListByStatusContainerProps {
    apiEndPoint: string;
    queryKey: ReactQueryKeys;
    searchValue?: string;
    statusHeaderLabel: string;
}

export const GetIssueListByStatusContainer = (props: IGetIssueListByStatusContainerProps) => {
    const { apiEndPoint, statusHeaderLabel, queryKey, searchValue } = props;
    const { getData } = useServiceClient();

    const getAllIssues = React.useCallback(() => {
        return getData(`${apiEndPoint}${searchValue ? `?searchByTitle=${searchValue}` : ''}`)
            .then(response => response.json())
            .then(data => data.data)
            .catch(err => err);
    }, [apiEndPoint, getData, searchValue]);

    const { isLoading, data, error, refetch } = useQuery(queryKey, getAllIssues)

    React.useEffect(() => {
        refetch()
    }, [refetch, searchValue]);

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
}