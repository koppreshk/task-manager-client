import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../common";
import { Button, CircularProgress, TextField } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';

const AddTaskButton = styled(Button)`
    background-color: #6c4f8f;
    :hover {
        background-color: #534292b3;
    }
`;

interface IAddTaskProps {
    onTaskMutationLoading: boolean;
    onAddTaskMutation: (value: string) => void
}

export const AddTask = React.memo((props: IAddTaskProps) => {
    const { onTaskMutationLoading, onAddTaskMutation } = props;
    const [value, setValue] = React.useState('');

    const handleTextInput = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);
    }, []);

    const onAddClick = React.useCallback(() => {
        onAddTaskMutation(value);
        setValue('');
    }, [onAddTaskMutation, value]);

    return (
        <FlexBox gap="8px" >
            <TextField
                type="text"
                label="Enter Task Name"
                size="small"
                value={value}
                onChange={handleTextInput} />
            {<AddTaskButton
                type="submit" size="small"
                onClick={onAddClick} variant="contained"
                disabled={onTaskMutationLoading}
                endIcon={onTaskMutationLoading ? <CircularProgress size="30" /> : <AddTaskIcon />}>
                Add Task
            </AddTaskButton>}
        </FlexBox>
    )
})