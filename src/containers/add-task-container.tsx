import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useServiceClient } from "../common";
import { AddTask } from "../components/header";

interface IAddTaskContainerProps { }

export const AddTaskContainer = React.memo((props: IAddTaskContainerProps) => {
    const queryClient = useQueryClient()
    const { postData } = useServiceClient<{ name: string }>();

    const onAddTask = React.useCallback(async (value: string) => {
        return await postData('/api/v1/tasks/createTask', 'POST', { name: value })
    }, [postData]);

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