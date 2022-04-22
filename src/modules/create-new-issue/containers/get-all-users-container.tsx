import React from "react"
import { CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import { useServiceClient } from "../../../common"
import { ReactQueryKeys } from "../../../react-query-enums";
import { SelectUsers } from "../components/select-users";

interface IGetAllUsers {
    selectedValue: {
        [x: string]: string;
    };
    onSelectValueChange: (type: string, value: string) => void
}

export const GetAllUsersContainer = React.memo((props: IGetAllUsers) => {
    const { onSelectValueChange, selectedValue } = props;
    const { getData } = useServiceClient();

    const getAllUsers = React.useCallback(() => {
        return getData('/api/v1/getAllUsers')
            .then(response => response.json())
            .catch(err => err);
    }, [getData]);

    const { isLoading, data, error } = useQuery(ReactQueryKeys.GetAllUsers, getAllUsers)

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        return (
            <SelectUsers allUsers={data} onSelectValueChange={onSelectValueChange} selectedValue={selectedValue} />
        )
    }

    return (
        <span>Error: {error}</span>
    )
})