import React from "react"
import { Typography } from "@mui/material"
import { FlexBox } from "../../../../common";
import { IState, IAction } from "./issue-details";
import { EditSpecificMetadata } from "./parts";

interface IIssueDetailsSection1Props {
    title: string;
    dispatch: React.Dispatch<IAction>;
    onSubmitHandler: () => void;
    state: IState;
}

export const IssueDetailsSection1 = React.memo((props: IIssueDetailsSection1Props) => {
    const { title, state, dispatch, onSubmitHandler } = props;

    return (
        <FlexBox flexDirection="column" gap="25px" width="70%">
            <Typography variant="h5">{title}</Typography>
            <EditSpecificMetadata
                dispatchStateHandler={dispatch}
                onSubmitHandler={onSubmitHandler}
                dispatchType="description"
                metadataHeading="Description"
                metadataValue={state.description} />
            <EditSpecificMetadata
                dispatchStateHandler={dispatch}
                onSubmitHandler={onSubmitHandler}
                dispatchType="changeSetDetails"
                metadataHeading="Change Set Details"
                metadataValue={state.changeSetDetails} />
            <EditSpecificMetadata
                dispatchStateHandler={dispatch}
                onSubmitHandler={onSubmitHandler}
                dispatchType="qaComments"
                metadataHeading="QA Comments"
                metadataValue={state.qaComments} />
            <EditSpecificMetadata
                dispatchStateHandler={dispatch}
                onSubmitHandler={onSubmitHandler}
                dispatchType="codeReviewComments"
                metadataHeading="Code Review Comments"
                metadataValue={state.codeReviewComments} />
        </FlexBox>
    )
})