import React from "react";
import { useQuery } from "react-query";
import { TaskList } from "../components/task-list"
import { ITaskMetadata } from "../types";

export const GetTaskList = () => {
    const { isLoading, isError, data, error } = useQuery('getTaskList', () => {
        return fetch('http://localhost:9000/api/v1/tasks')
            .then(response => response.json())
            .then(data => data.tasks)
            .catch(err => err);
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error}</span>
    }
    const tasksList = data as unknown as ITaskMetadata[];

    return (
        tasksList.length > 0 ? <TaskList tasksList={tasksList} /> : null
    )
}