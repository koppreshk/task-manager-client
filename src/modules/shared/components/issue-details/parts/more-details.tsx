import React from "react"
import { Typography } from "@mui/material";
import styled from "styled-components";
import { FlexBox, UserAvatar } from "../../../../../common";
import { IIssuesTileMetaData } from "../../../types";

interface IMoreDetailsProps extends Pick<IIssuesTileMetaData, 'assignee' | 'reporter' | 'priority' | 'createdAt' | 'updatedAt'> {
}

const HorizontalLine = styled.hr`
    width: 100%;
    border: solid #afafaf;
    border-width: 1px 0px 0px 0px;
    margin: 0px;
`;

export const MoreDetails = React.memo((props: IMoreDetailsProps) => {
    const { assignee, reporter, priority, updatedAt, createdAt } = props;

    return (
        <FlexBox flexDirection="column" gap="10px">
            <Typography>Details</Typography>
            <HorizontalLine />
            <UserAvatar fullName={assignee} heading="Assignee" />
            <UserAvatar fullName={reporter} heading="Reporter" />
            <Typography>Priority: {priority}</Typography>
            {createdAt ? <Typography>Created At: {new Date(createdAt).toDateString()}</Typography> : null}
            <Typography>UpdatedAt: {new Date(updatedAt).toDateString()}</Typography>
        </FlexBox>
    );
})