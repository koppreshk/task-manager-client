import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { DeleteTask } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IDeleteTaskContainerProps extends Pick<ITaskMetadata, '_id'> {

}
export const DeleteTaskContainer = React.memo((props: IDeleteTaskContainerProps) => {
    const { _id } = props;
    const queryClient = useQueryClient();

    const onDelete = React.useCallback(async () => {
        return await fetch(`http://localhost:9000/api/v1/tasks/${_id}`, {
            method: 'DELETE'
        })
    }, [_id]);

    const mutation = useMutation('deleteTask', onDelete, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTaskList')
        },
    })

    return (
        <DeleteTask onDeleteTaskMutation={mutation.mutate} />
    )
})