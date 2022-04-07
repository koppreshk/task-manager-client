import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount, IssueTile } from "../../shared/components";
import { ICodeReviewIssueData } from "../types";

interface ICodeReviewIssues {
    codeReviewIssues: ICodeReviewIssueData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const CodeReviewIssues = React.memo((props: ICodeReviewIssues) => {
    const { codeReviewIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={codeReviewIssues.length} headerLabel="CODE REVIEW" />
            {codeReviewIssues.map((issue) => <IssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})