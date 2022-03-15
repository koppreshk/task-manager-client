import React from "react";
import { IconButton, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

interface IEditTaskNameProps {
    name: string;
    toggleEditMode: () => void;
    onEditNameMutation: (editedName: string) => void;
}

export const EditTaskName = React.memo((props: IEditTaskNameProps) => {
    const { name, onEditNameMutation, toggleEditMode } = props;
    const [value, setValue] = React.useState(name);

    const onTextValueChange = React.useCallback((ev) => {
        setValue(ev.target.value);
    }, []);

    const onSaveClick = React.useCallback(() => {
        onEditNameMutation(value);
        toggleEditMode()
    }, [onEditNameMutation, toggleEditMode, value]);

    return (
        <>
            <TextField id="standard-basic" size="small" label="Edit Task Name" variant="standard" value={value} onChange={onTextValueChange} />
            <IconButton aria-label="Save" title="Save" onClick={onSaveClick}>
                <SaveIcon />
            </IconButton>
        </>
    );
})
