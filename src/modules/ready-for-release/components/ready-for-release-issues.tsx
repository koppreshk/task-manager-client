import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount, IssueTile } from "../../shared/components";
import { IReadyForReleaseIssueData } from "../types";

interface IReadyForReleaseIssues {
    readyForReleaseIssues: IReadyForReleaseIssueData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const ReadyForReleaseIssues = React.memo((props: IReadyForReleaseIssues) => {
    const { readyForReleaseIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={readyForReleaseIssues.length} headerLabel="READY FOR RELEASE" />
            {readyForReleaseIssues.map((issue) => <IssueTile key={issue._id} issuesTileMetaData={issue} />)}
        </StyledFlexBox>
    )
})