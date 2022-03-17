import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useServiceClient } from "../common";
import { EditTaskName } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IEditTaskNameContainerProps extends Omit<ITaskMetadata, 'completed'> {
    toggleEditMode: () => void;
}
export const EditTaskNameContainer = React.memo((props: IEditTaskNameContainerProps) => {
    const { _id, name, toggleEditMode } = props;
    const queryClient = useQueryClient();
    const { postData } = useServiceClient<{ name: string }>();

    const onEditNameChange = React.useCallback(async (editedName: string) => {
        return await postData(`/api/v1/tasks/${_id}`, 'PATCH', {
            name: editedName
        })
    }, [_id, postData]);

    const mutation = useMutation('editTask', onEditNameChange, {
        onSuccess: () => {
            queryClient.invalidateQueries('getTaskList')
        },
    })

    return (
        <EditTaskName name={name} onEditNameMutation={mutation.mutate} toggleEditMode={toggleEditMode} />
    )
})