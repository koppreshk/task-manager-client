import React from "react"
import { ChangeStatusContainer, IUpdateIssueDetailsContaionerProps } from "../../containers";
import { Typography } from "@mui/material";
import { MoreDetails } from "./parts/more-details";
import { FlexBox } from "../../../../common";

interface IIssueDetailsSection2Props extends IUpdateIssueDetailsContaionerProps { }


export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItems } = props;
    const { status, assignee, reporter, priority, updatedAt, createdAt, _id } = issuesTileMetaData;

    return (
        <FlexBox flexDirection="column" gap="25px" width="30%">
            {
                changeStatusItems?.length ?
                    <ChangeStatusContainer
                        status={status}
                        invalidateQueryNames={invalidationKeys}
                        _id={_id}
                        changeStatusItem={changeStatusItems} />
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