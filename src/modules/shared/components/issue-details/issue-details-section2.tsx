import React from "react"
import { IIssueDetailsProps } from "./issue-details"
import { ChangeStatusContainer } from "../../containers";

interface IIssueDetailsSection2Props extends IIssueDetailsProps { }


export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issueMetadata, invalidationKeys } = props;
    const { status, _id } = issueMetadata;

    return (
        <>
            <ChangeStatusContainer status={status} invalidateQueryNames={invalidationKeys} _id={_id} />
        </>
    )
})