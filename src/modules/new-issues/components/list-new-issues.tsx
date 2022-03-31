import { Typography } from "@mui/material";
import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { INewIssuesData } from "../types";
import { NewIssueTile } from "./new-issue-tile";

interface IListNewIssues {
    newIssues: INewIssuesData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #eceaea;
    border-radius: 4px;
    overflow: auto;
`;

export const ListNewIssues = React.memo((props: IListNewIssues) => {
    const { newIssues } = props;

    return (
        <StyledFlexBox flexDirection="column" alignItems="center">
            <Typography variant="subtitle1">NEW ISSUES {newIssues.length}</Typography>
            {newIssues.map((issue) => <NewIssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})