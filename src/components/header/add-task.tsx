import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../common";
import { Button, TextField } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';

const AddTaskButton = styled(Button)`
    background-color: #6c4f8f;
    :hover {
        background-color: #534292b3;
    }
`;

export const AddTask = React.memo(() => {
    const [value, setValue] = React.useState('');

    const handleTextInput = React.useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        setValue(ev.target.value);
    }, []);

    const handleSubmit = React.useCallback(() => {
        fetch('http://localhost:9000/api/v1/tasks', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: value
            }),
        }).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err))
    }, [value]);

    return (
        <FlexBox gap="8px" >
            <TextField
                type="text"
                label="Enter Task Name"
                size="small"
                value={value}
                onChange={handleTextInput} />
            <AddTaskButton type="submit" size="small" onClick={handleSubmit} variant="contained" endIcon={<AddTaskIcon />}>
                Add Task
            </AddTaskButton>
        </FlexBox>
    )
})