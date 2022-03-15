import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { EditTaskName } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IEditTaskNameContainerProps extends Omit<ITaskMetadata, 'completed'> {
    toggleEditMode: () => void;
}
export const EditTaskNameContainer = React.memo((props: IEditTaskNameContainerProps) => {
    const { _id, name, toggleEditMode } = props;
    const queryClient = useQueryClient();

    const onEditNameChange = React.useCallback(async (editedName: string) => {
        return await fetch(`http://localhost:9000/api/v1/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editedName
            }),
        })
    }, [_id]);

    const mutation = useMutation('editTask', onEditNameChange, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTaskList')
        },
    })

    return (
        <EditTaskName name={name} onEditNameMutation={mutation.mutate} toggleEditMode={toggleEditMode} />
    )
})