import React from "react";
import { FlexBox } from "../../../../common";
import { IIssuesTileMetaData } from "../../types";
import { IssueDetailsSection1 } from "./issue-details-section1";

export interface IIssueDetailsProps {
    issueMetadata: IIssuesTileMetaData;
}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issueMetadata } = props;

    return (
        <FlexBox flexDirection="column">
            <IssueDetailsSection1 issueMetadata={issueMetadata} />
        </FlexBox>
    );
})