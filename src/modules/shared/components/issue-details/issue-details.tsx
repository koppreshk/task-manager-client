import React from "react";
import { Button } from "@mui/material";
import { FlexBox } from "../../../../common";
import { IIssueTileProps } from "../issue-tile";
import { IssueDetailsSection1 } from "./issue-details-section1";
import { IssueDetailsSection2 } from "./issue-details-section2";
import { IBodyArgs } from "../../containers";

export interface IIssueDetailsProps extends IIssueTileProps {
    onUpdateIssueDetails: (body: IBodyArgs) => Promise<Response>
}

export interface IState {
    description: string,
    changeSetDetails: string,
    codeReviewComments: string,
    qaComments: string,
}

export interface IAction {
    type: string;
    payload: string;
}

const reducer = (state: IState, action: IAction) => {
    const { payload, type } = action;
    switch (type) {
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
        default:
            throw new Error(`Cannot update state as type: ${type} does not exist, please check the type `);
    }
}

const intialState: IState = {
    description: '',
    changeSetDetails: '',
    codeReviewComments: '',
    qaComments: '',
}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItem, onUpdateIssueDetails } = props;
    const [state, dispatch] = React.useReducer(reducer, intialState);

    const onSubmitHandler = React.useCallback(() => {
        onUpdateIssueDetails(state);
    }, [onUpdateIssueDetails, state])

    return (
        <FlexBox flexDirection="column" height="100%">
            <FlexBox height="calc(100% - 40px)">
                <IssueDetailsSection1
                    dispatch={dispatch}
                    state={state}
                    issuesTileMetaData={issuesTileMetaData} />
                <IssueDetailsSection2
                    issuesTileMetaData={issuesTileMetaData}
                    invalidationKeys={invalidationKeys}
                    changeStatusItem={changeStatusItem} />
            </FlexBox>
            <Button
                sx={{ width: '200px', position: 'absolute', right: '32px', bottom: '32px' }}
                variant="contained" onClick={onSubmitHandler}>SUBMIT</Button>
        </FlexBox>
    );
})