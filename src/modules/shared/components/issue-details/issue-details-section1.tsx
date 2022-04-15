import React from "react"
import { styled, TextField, Typography } from "@mui/material"
import { FlexBox } from "../../../../common";
import { IIssueTileProps } from "../issue-tile";
import { IState, IAction } from "./issue-details";

interface IIssueDetailsSection1Props extends Pick<IIssueTileProps, 'issuesTileMetaData'> {
    dispatch: React.Dispatch<IAction>;
    state: IState;
}

const SubHeaderText = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    color: #172b4d;
`;

const SubHeaderValue = styled(Typography)`
    font-size: 14px;
    color: rgb(94, 108, 132);
`;

export const IssueDetailsSection1 = React.memo((props: IIssueDetailsSection1Props) => {
    const { issuesTileMetaData, state, dispatch } = props;
    const { title, description, changeSetDetails, qaComments, codeReviewComments } = issuesTileMetaData;

    return (
        <FlexBox flexDirection="column" gap="10px" width="70%">
            <Typography variant="h5">{title}</Typography>
            {
                description
                    ? <CommonIssueDetails heading="Description" value={description} />
                    : <TextField
                        id="outlined-basic" label="Description" variant="outlined"
                        value={state.description}
                        sx={{ width: '400px' }}
                        required
                        autoComplete="off"
                        onChange={(ev) => dispatch({ type: 'description', payload: ev.target.value })} />
            }
            {
                changeSetDetails
                    ? <CommonIssueDetails heading="Change Set Details" value={changeSetDetails} />
                    : <TextField
                        id="outlined-basic" label="Change Set Details" variant="outlined"
                        value={state.changeSetDetails}
                        sx={{ width: '400px' }}
                        required
                        autoComplete="off"
                        onChange={(ev) => dispatch({ type: 'changeSetDetails', payload: ev.target.value })} />
            }
            {
                qaComments
                    ? <CommonIssueDetails heading="QA Comments" value={qaComments} />
                    : <TextField
                        id="outlined-basic" label="QA Comments" variant="outlined"
                        value={state.qaComments}
                        sx={{ width: '400px' }}
                        required
                        autoComplete="off"
                        onChange={(ev) => dispatch({ type: 'qaComments', payload: ev.target.value })} />
            }
            {
                codeReviewComments
                    ? <CommonIssueDetails heading="Code Review Comments" value={codeReviewComments} />
                    : <TextField
                        id="outlined-basic" label="Code Review Comments" variant="outlined"
                        value={state.codeReviewComments}
                        sx={{ width: '400px' }}
                        required
                        autoComplete="off"
                        onChange={(ev) => dispatch({ type: 'codeReviewComments', payload: ev.target.value })} />
            }
        </FlexBox>
    )
})

const CommonIssueDetails = React.memo((props: { heading: string, value: string }) => {
    const { heading, value } = props;
    return (
        <FlexBox flexDirection="column">
            <SubHeaderText>{heading}: </SubHeaderText>
            <SubHeaderValue>{value}</SubHeaderValue>
        </FlexBox>
    )
})