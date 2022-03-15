import React from "react";
import { IconButton, TextField } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';

interface IEditTaskNameProps {
    name: string;
    toggleEditMode: () => void;
    onEditNameChange: (editedName: string) => void;
}

export const EditTaskName = React.memo((props: IEditTaskNameProps) => {
    const { name, onEditNameChange, toggleEditMode } = props;
    const [value, setValue] = React.useState(name);

    const onTextValueChange = React.useCallback((ev) => {
        setValue(ev.target.value);
    }, []);

    const onSaveClick = React.useCallback(() => {
        onEditNameChange(value);
        toggleEditMode()
    }, [onEditNameChange, toggleEditMode, value]);

    return (
        <>
            <TextField id="standard-basic" size="small" label="Standard" variant="standard" value={value} onChange={onTextValueChange} />
            <IconButton aria-label="Save" title="Save" onClick={onSaveClick}>
                <SaveIcon />
            </IconButton>
        </>
    );
})
