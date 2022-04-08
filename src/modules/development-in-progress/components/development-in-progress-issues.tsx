import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount, IssueTile } from "../../shared/components";
import { IDevelopmentInProgressIssuesData } from "../types";

interface IDevelopmentInProgressIssuesProps {
    developmentInProgressIssues: IDevelopmentInProgressIssuesData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const DevelopmentInProgressIssues = React.memo((props: IDevelopmentInProgressIssuesProps) => {
    const { developmentInProgressIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={developmentInProgressIssues.length} headerLabel="DEVELOPMENT IN PROGRESS" />
            {developmentInProgressIssues.map((issue) => <IssueTile key={issue._id} issuesTileMetaData={issue} />)}
        </StyledFlexBox>
    )
})