import React from "react";
import { useQuery } from "react-query";
import { TaskList } from "../components/task-list"
import { ITaskMetadata } from "../types";
import { CircularProgress } from '@mui/material';
import { useServiceClient } from "../common";

export const GetTaskListContainer = () => {
    const { getData } = useServiceClient();
    const { isLoading, data, error } = useQuery('getTaskList', () => {
        return getData('/api/v1/tasks')
            .then(response => response.json())
            .then(data => data.tasks)
            .catch(err => err);
    })

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }

    if (data) {
        const tasksList = data as unknown as ITaskMetadata[];

        return (
            tasksList.length > 0 ? <TaskList tasksList={tasksList} /> : null
        )
    }

    return <span>Error: {error}</span>
}