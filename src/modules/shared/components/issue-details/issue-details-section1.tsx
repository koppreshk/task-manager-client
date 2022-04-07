import React from "react"
import { styled, Typography } from "@mui/material"
import { IIssueDetailsProps } from "./issue-details";
import { FlexBox } from "../../../../common";

interface IIssueDetailsSection1Props extends IIssueDetailsProps {

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
    const { issueMetadata } = props;
    const { title, description, changeSetDetails, qaComments, codeReviewComments } = issueMetadata;

    return (
        <FlexBox flexDirection="column" gap="10px" width="70%">
            <Typography variant="h5">{title}</Typography>
            {description ? <CommonIssueDetails heading="Desription" value={description} /> : null}
            {changeSetDetails ? <CommonIssueDetails heading="Change Set Details" value={changeSetDetails} /> : null}
            {qaComments ? <CommonIssueDetails heading="QA Comments" value={qaComments} /> : null}
            {codeReviewComments ? <CommonIssueDetails heading="Code Review Comments" value={qaComments} /> : null}
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