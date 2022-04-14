import React from "react"
import { ChangeStatusContainer } from "../../containers";
import { Typography } from "@mui/material";
import { MoreDetails } from "./parts/more-details";
import { FlexBox } from "../../../../common";
import { IIssueTileProps } from "../issue-tile";

interface IIssueDetailsSection2Props extends IIssueTileProps { }


export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItem } = props;
    const { status, assignee, reporter, priority, updatedAt, createdAt, _id } = issuesTileMetaData;

    return (
        <FlexBox flexDirection="column" gap="25px" width="30%">
            {
                changeStatusItem?.length ?
                    <ChangeStatusContainer status={status} invalidateQueryNames={invalidationKeys} _id={_id} changeStatusItem={changeStatusItem} />
                    :
                    <Typography>Status: {status === 'readyForRelease' ? 'Ready For Release' : status}</Typography>
            }
            <MoreDetails
                assignee={assignee}
                reporter={reporter}
                priority={priority}
                updatedAt={updatedAt}
                createdAt={createdAt} />
        </FlexBox>
    )
})