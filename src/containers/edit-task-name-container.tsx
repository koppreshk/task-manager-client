import React from "react";
import { EditTaskName } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IEditTaskNameContainerProps extends Omit<ITaskMetadata, 'completed'> {
    toggleEditMode: () => void;
}
export const EditTaskNameContainer = React.memo((props: IEditTaskNameContainerProps) => {
    const { _id, name, toggleEditMode } = props;

    const onEditNameChange = React.useCallback((editedName: string) => {
        fetch(`http://localhost:9000/api/v1/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editedName
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [_id]);

    return (
        <EditTaskName name={name} onEditNameChange={onEditNameChange} toggleEditMode={toggleEditMode} />
    )
})