import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../common";
import { TextField } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { LoadingButton } from "@mui/lab";

const AddTaskButton = styled(LoadingButton)`
    
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
        if (value.length > 0) {
            onAddTaskMutation(value);
        }
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
            <AddTaskButton
                loading={onTaskMutationLoading}
                loadingPosition="start"
                onClick={onAddClick}
                variant="contained"
                startIcon={<AddTaskIcon />}>
                Add Task
            </AddTaskButton>
        </FlexBox>
    )
})