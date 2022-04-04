import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount } from "../../shared";
import { INewIssuesData } from "../types";
import { NewIssueTile } from "./new-issue-tile";

interface IListDevelopmentInProgressIssues {
    developmentInProgressIssues: INewIssuesData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const ListDevelopmentInProgressIssues = React.memo((props: IListDevelopmentInProgressIssues) => {
    const { developmentInProgressIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={developmentInProgressIssues.length} headerLabel="DEVELOPMENT IN PROGRESS" />
            {developmentInProgressIssues.map((issue) => <NewIssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})