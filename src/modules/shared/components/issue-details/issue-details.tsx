import React from "react";
import { FlexBox } from "../../../../common";
import { IssueDetailsSection1 } from "./issue-details-section1";
import { IssueDetailsSection2 } from "./issue-details-section2";
import { IBodyArgs, IUpdateIssueDetailsContaionerProps } from "../../containers";
import { IIssuesTileMetaData } from "modules/shared/types";

export interface IIssueDetailsProps extends IUpdateIssueDetailsContaionerProps {
    onUpdateIssueDetails: (body: IBodyArgs) => void;
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

const getIntialState = (args: Pick<IIssuesTileMetaData, 'description' | 'changeSetDetails' | 'codeReviewComments' | 'qaComments'>): IState => {
    const { changeSetDetails, codeReviewComments, description, qaComments } = args;
    return {
        description: description || '',
        changeSetDetails: changeSetDetails || '',
        codeReviewComments: codeReviewComments || '',
        qaComments: qaComments || '',
    }
}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItems, onUpdateIssueDetails } = props;
    const { title, description, changeSetDetails, codeReviewComments, qaComments } = issuesTileMetaData;
    const [state, dispatch] = React.useReducer(reducer, getIntialState({ description, changeSetDetails, codeReviewComments, qaComments }));

    const onSubmitHandler = React.useCallback(() => {
        onUpdateIssueDetails(state);
    }, [onUpdateIssueDetails, state])

    return (
        <FlexBox height="calc(100% - 40px)">
            <IssueDetailsSection1
                title={title}
                dispatch={dispatch}
                onSubmitHandler={onSubmitHandler}
                state={state} />
            <IssueDetailsSection2
                issuesTileMetaData={issuesTileMetaData}
                invalidationKeys={invalidationKeys}
                changeStatusItems={changeStatusItems} />
        </FlexBox>
    );
})