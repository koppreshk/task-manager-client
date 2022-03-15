import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { AddTask } from "../components/header";

interface IAddTaskContainerProps { }

export const AddTaskContainer = React.memo((props: IAddTaskContainerProps) => {
    const queryClient = useQueryClient()

    const onAddTask = React.useCallback(async (value: string) => {
        return await fetch('http://localhost:9000/api/v1/tasks', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: value
            }),
        })
    }, []);

    const mutation = useMutation('addTask', onAddTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTaskList')
        },
    })

    return (
        <AddTask
            onTaskMutationLoading={mutation.isLoading}
            onAddTaskMutation={mutation.mutate} />
    )
})