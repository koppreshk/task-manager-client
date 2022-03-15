import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface IDeleteTaskProps {
    onDeleteTaskMutation: () => void;
}
export const DeleteTask = React.memo((props: IDeleteTaskProps) => {
    const { onDeleteTaskMutation } = props;

    const deleteClickHandler = React.useCallback(() => {
        onDeleteTaskMutation();
    }, [onDeleteTaskMutation]);

    return (
        <IconButton aria-label="delete" title="Delete" onClick={deleteClickHandler}>
            <DeleteIcon />
        </IconButton>
    );
})