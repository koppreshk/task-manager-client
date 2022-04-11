import React from "react";
import { FlexBox } from "../../../../common";
import { IIssueTileProps } from "../issue-tile";
import { IssueDetailsSection1 } from "./issue-details-section1";
import { IssueDetailsSection2 } from "./issue-details-section2";

export interface IIssueDetailsProps extends IIssueTileProps {

}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItem } = props;

    return (
        <FlexBox flexDirection="row">
            <IssueDetailsSection1 issuesTileMetaData={issuesTileMetaData} invalidationKeys={invalidationKeys} changeStatusItem={changeStatusItem} />
            <IssueDetailsSection2 issuesTileMetaData={issuesTileMetaData} invalidationKeys={invalidationKeys} changeStatusItem={changeStatusItem} />
        </FlexBox>
    );
})