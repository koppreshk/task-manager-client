import React from "react"
import { Typography } from "@mui/material"
import { IIssueDetailsProps } from "./issue-details";
import { FlexBox } from "../../../../common";

interface IIssueDetailsSection1Props extends IIssueDetailsProps {

}

export const IssueDetailsSection1 = React.memo((props: IIssueDetailsSection1Props) => {
    const { issueMetadata } = props;
    const { title, description } = issueMetadata;

    return (
        <FlexBox flexDirection="column">
            <Typography variant="h5">{title}</Typography>
            <Typography sx={{ fontSize: '16px' }}>Desription: </Typography>
            <Typography sx={{ fontSize: '14px' }}>{description}</Typography>
        </FlexBox>
    )
})