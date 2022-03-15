import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface IDeleteTaskProps {
    onDelete: () => void;
}
export const DeleteTask = React.memo((props: IDeleteTaskProps) => {
    const { onDelete } = props;

    const deleteClickHandler = React.useCallback(() => {
        onDelete();
    }, [onDelete]);

    return (
        <IconButton aria-label="delete" title="Delete" onClick={deleteClickHandler}>
            <DeleteIcon />
        </IconButton>
    );
})