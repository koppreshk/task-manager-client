import React from "react";
import { TaskDeleteButton } from "../components/task-list"
import { ITaskMetadata } from "../types";

interface IDeleteTaskContainerProps extends Pick<ITaskMetadata, '_id'> {

}
export const DeleteTaskContainer = React.memo((props: IDeleteTaskContainerProps) => {
    const { _id } = props;

    const onDelete = React.useCallback(() => {
        fetch(`http://localhost:9000/api/v1/tasks/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [_id]);

    return (
        <TaskDeleteButton onDelete={onDelete} />
    )
})