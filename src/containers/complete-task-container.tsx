import React from "react";
import { useServiceClient } from "../common";
import { TaskCompletionCheckBox } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface ITaskCompletionContainerProps extends ITaskMetadata {

}
export const CompleteTaskContainer = React.memo((props: ITaskCompletionContainerProps) => {
    const { _id, completed, name } = props;
    const { postData } = useServiceClient<{ name: string, completed: boolean }>();

    const onCheckboxValueChange = React.useCallback((isCompleted: boolean) => {
        postData(`/api/v1/tasks/updateTask/${_id}`, 'PATCH', {
            name,
            completed: isCompleted
        })
    }, [_id, name, postData]);

    return (
        <TaskCompletionCheckBox
            completed={completed}
            onCheckboxValueChange={onCheckboxValueChange} />
    )
})