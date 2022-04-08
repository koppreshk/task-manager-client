import React from "react";
import { FlexBox } from "../../../../common";
import { IIssuesTileMetaData } from "../../types";
import { IssueDetailsSection1 } from "./issue-details-section1";
import { IssueDetailsSection2 } from "./issue-details-section2";

export interface IIssueDetailsProps {
    issueMetadata: IIssuesTileMetaData;
    invalidationKeys?: string[];
}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issueMetadata, invalidationKeys } = props;

    return (
        <FlexBox flexDirection="row">
            <IssueDetailsSection1 issueMetadata={issueMetadata} invalidationKeys={invalidationKeys} />
            <IssueDetailsSection2 issueMetadata={issueMetadata} invalidationKeys={invalidationKeys} />
        </FlexBox>
    );
})