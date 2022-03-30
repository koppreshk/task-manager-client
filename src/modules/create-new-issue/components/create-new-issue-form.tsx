import React from "react"
import { Button, TextareaAutosize, TextField } from "@mui/material"
import { FlexBox } from "../../../common"
import { ICreateNewIssueBody } from "../api-body-types";
import { SelectAvatarControl } from "./avatar-select-control";

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

export const CreateNewIssueForm = React.memo((props: ICreateIssueFormProps) => {
    const { onCreateNewIssue } = props;
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const onSubmitHandler = React.useCallback(() => {
        if (state.title.length > 0) {
            onCreateNewIssue(state)
        }
    }, [onCreateNewIssue, state]);

    const onSelectValueChange = React.useCallback((type: string, value: string) => {
        dispatch({ type: type, payload: value })
    }, []);

    return (
        <FlexBox gap="8px" width="100%" flexDirection="column">
            <TextField
                id="outlined-basic" label="Title" variant="outlined"
                value={state.title}
                required
                onChange={(ev) => dispatch({ type: 'title', payload: ev.target.value })} />
            <TextareaAutosize
                aria-label="Description"
                minRows={3}
                title="Description"
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
            <SelectAvatarControl
                label="Assignee"
                users={[{ fullName: 'Rakesh Kumar', key: 'Rakesh Kumar' }, { fullName: 'Manish P', key: 'Manish P' }]}
                selectedValue={state.assignee}
                onSelectValueChange={onSelectValueChange} />
            <SelectAvatarControl
                label="Reporter"
                users={[
                    { fullName: 'Rakesh Kumar', key: 'Rakesh Kumar' },
                    { fullName: 'Manish P', key: 'Manish P' },
                    { fullName: 'Krish l', key: 'Krish l' }]}
                selectedValue={state.reporter}
                onSelectValueChange={onSelectValueChange} />
            <Button type="submit" onClick={onSubmitHandler}>SUBMIT</Button>
        </FlexBox>
    )
})