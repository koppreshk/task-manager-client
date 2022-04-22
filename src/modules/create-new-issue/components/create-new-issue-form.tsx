import React from "react"
import { Button, TextField } from "@mui/material"
import { FlexBox } from "../../../common"
import { ICreateNewIssueBody } from "../api-body-types";
import { GetAllUsersContainer } from "../containers";

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
    formSubmitHandler: (args: ICreateNewIssueBody) => void;
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
    const { formSubmitHandler } = props;
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const onSubmitHandler = React.useCallback(() => {
        if (state.title.length > 0) {
            formSubmitHandler(state)
        }
    }, [formSubmitHandler, state]);

    const onSelectValueChange = React.useCallback((type: string, value: string) => {
        dispatch({ type: type, payload: value })
    }, []);

    return (
        <FlexBox gap="8px" width="100%" flexDirection="column">
            <TextField
                id="outlined-basic" label="Title" variant="outlined"
                value={state.title}
                autoComplete="off"
                required
                onChange={(ev) => dispatch({ type: 'title', payload: ev.target.value })} />
            <TextField
                label="Description"
                variant="outlined"
                title="Description"
                autoComplete="off"
                onChange={(ev) => dispatch({ type: 'description', payload: ev.target.value })}
            />
            <TextField
                id="outlined-basic" label="Change Set Details" variant="outlined" autoComplete="off"
                onChange={(ev) => dispatch({ type: 'changeSetDetails', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="Code Review Comments" variant="outlined" autoComplete="off"
                onChange={(ev) => dispatch({ type: 'codeReviewComments', payload: ev.target.value })} />
            <TextField
                id="outlined-basic" label="QA Comments" variant="outlined" autoComplete="off"
                onChange={(ev) => dispatch({ type: 'qaComments', payload: ev.target.value })} />
            <GetAllUsersContainer
                selectedValue={{ [state.reporter]: state.reporter, [state.assignee]: state.assignee }}
                onSelectValueChange={onSelectValueChange} />
            <Button type="submit" onClick={onSubmitHandler}>SUBMIT</Button>
        </FlexBox>
    )
})