import React from "react";
import { TaskCompletionCheckBox } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface ITaskCompletionContainerProps extends ITaskMetadata {

}
export const CompleteTaskContainer = React.memo((props: ITaskCompletionContainerProps) => {
    const { _id, completed, name } = props;

    const onCheckboxValueChange = React.useCallback((isCompleted: boolean) => {
        fetch(`http://localhost:9000/api/v1/tasks/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                completed: isCompleted
            }),
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [_id, name]);

    return (
        <TaskCompletionCheckBox
            completed={completed}
            onCheckboxValueChange={onCheckboxValueChange} />
    )
})