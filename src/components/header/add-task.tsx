import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../common";

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
    height: 30px;
    box-sizing: border-box;
`;

const SubmitButton = styled.button`
    padding: 4px;
    height: 30px;
    width: 200px;
    background-color: #6c4f8f;
    color: #fff;
    border: none;
    cursor: pointer;
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
            <StyledInput type="text" value={value} onChange={handleTextInput} />
            <SubmitButton type="submit" onClick={handleSubmit}>SUBMIT</SubmitButton>
        </FlexBox>
    )
})