import React from "react"
import { IIssueDetailsProps } from "./issue-details"
import { ChangeStatusContainer } from "../../containers";
import { Typography } from "@mui/material";

interface IIssueDetailsSection2Props extends IIssueDetailsProps { }


export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItem } = props;
    const { status, _id } = issuesTileMetaData;

    return (
        <>
            {
                changeStatusItem?.length ?
                    <ChangeStatusContainer status={status} invalidateQueryNames={invalidationKeys} _id={_id} changeStatusItem={changeStatusItem} />
                    :
                    <Typography>Status: {status}</Typography>
            }
        </>
    )
})