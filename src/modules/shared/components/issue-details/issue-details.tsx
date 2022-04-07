import { Typography } from "@mui/material";
import React from "react";
import { FlexBox } from "../../../../common";
import { IIssuesTileMetaData } from "../../types";

interface IIssueDetailsProps {
    issueMetadata: IIssuesTileMetaData;
}

export const IssueDetails = React.memo((props: IIssueDetailsProps) => {
    const { issueMetadata } = props;
    const { title } = issueMetadata;
    return (
        <FlexBox flexDirection="column" width="450px">
            <Typography variant="h5">{title}</Typography>
        </FlexBox>
    );
})