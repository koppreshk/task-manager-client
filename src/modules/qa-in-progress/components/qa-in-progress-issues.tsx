import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount, IssueTile } from "../../shared";
import { IQAInProgressIssueData } from "../types";

interface IQAInProgressIssues {
    qaInProgressIssues: IQAInProgressIssueData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const QAInProgressIssues = React.memo((props: IQAInProgressIssues) => {
    const { qaInProgressIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={qaInProgressIssues.length} headerLabel="QA IN PROGRESS" />
            {qaInProgressIssues.map((issue) => <IssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})