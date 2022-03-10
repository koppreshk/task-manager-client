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
    background-color: rgba(180, 241, 182, 0.89);
    border: none;
    cursor: pointer;
`;

export const AddTask = React.memo(() => {
    return (
        <FlexBox gap="8px" >
            <StyledInput type="text" />
            <SubmitButton type="submit" >SUBMIT</SubmitButton>
        </FlexBox>
    )
})