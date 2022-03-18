import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useServiceClient } from "../common";
import { DeleteTask } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IDeleteTaskContainerProps extends Pick<ITaskMetadata, '_id'> {

}
export const DeleteTaskContainer = React.memo((props: IDeleteTaskContainerProps) => {
    const { _id } = props;
    const queryClient = useQueryClient();
    const { deleteData } = useServiceClient();

    const onDelete = React.useCallback(async () => {
        return await deleteData(`/api/v1/tasks/deleteTask/${_id}`)
    }, [_id, deleteData]);

    const mutation = useMutation('deleteTask', onDelete, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTaskList')
        },
    })

    return (
        <DeleteTask onDeleteTaskMutation={mutation.mutate} />
    )
})