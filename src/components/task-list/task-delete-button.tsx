import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface ITaskDeleteButtonProps {
    onDelete: () => void;
}
export const TaskDeleteButton = React.memo((props: ITaskDeleteButtonProps) => {
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