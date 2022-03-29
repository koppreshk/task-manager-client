import React from "react"
import { Button, TextareaAutosize, TextField } from "@mui/material"
import { FlexBox } from "../../../common"
import { ICreateNewIssueBody } from "../api-body-types";

interface IState {
    title: string,
    description: string,
    changeSetDetails: string,
    codeReviewComments: string,
    qaComments: string,
    assignee: string,
    reporter: string
}

interface IAction {
    type: string;
    payload: string;
}

const intialState: IState = {
    title: '',
    description: '',
    changeSetDetails: '',
    codeReviewComments: '',
    qaComments: '',
    assignee: '',
    reporter: ''
}

interface ICreateIssueFormProps {
    onCreateNewIssue: (args: ICreateNewIssueBody) => Promise<Response>
}
const reducer = (state: IState, action: IAction) => {
    const { payload, type } = action;
    switch (type) {
        case 'title':
            return {
                ...state, title: payload
            };
        case 'description':
            return {
                ...state, description: payload
            };
        case 'changeSetDetails':
            return {
                ...state, changeSetDetails: payload
            };
        case 'codeReviewComments':
            return {
                ...state, codeReviewComments: payload
            };
        case 'qaComments':
            return {
                ...state, qaComments: payload
            };
        case 'assignee':
            return {
                ...state, assignee: payload
            };
        case 'reporter':
            return {
                ...state, reporter: payload
            };
        default:
            throw new Error("Cannot update state");
    }
}

export const CreateIssueForm = React.memo((props: ICreateIssueFormProps) => {
    const { onCreateNewIssue } = props;
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const onSubmitHandler = React.useCallback(() => {
        onCreateNewIssue(state)
    }, [onCreateNewIssue, state]);

    return (
        <FlexBox gap="8px" width="100%" flexDirection="column">
            <TextField
                id="outlined-basic" label="Title" variant="outlined"
                value={state.title}
                onChange={(ev) => dispatch({ type: 'title', payload: ev.target.value })} />
            <TextareaAutosize
                aria-label="Description"
                minRows={3}
                title="Description"
                placeholder="Minimum 3 rows"
                style={{ width: 394 }}
                onChange={(ev) => dispatch({ type: 'description', payload: ev.target.value })}
            />
            <TextField
                id="outlined-basic" label="Change Set Details" variant="outlined"
                onChange={(ev) => dispatch({ type: 'changeSetDetails', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="Code Review Comments" variant="outlined"
                onChange={(ev) => dispatch({ type: 'codeReviewComments', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="QA Comments" variant="outlined"
                onChange={(ev) => dispatch({ type: 'qaComments', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="Assignee" variant="outlined"
                onChange={(ev) => dispatch({ type: 'assignee', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="Reporter" variant="outlined"
                onChange={(ev) => dispatch({ type: 'reporter', payload: ev.target.value })} />
            <Button type="submit" onClick={onSubmitHandler}>SUBMIT</Button>
        </FlexBox>
    )
})