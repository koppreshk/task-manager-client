import React from "react"
import styled from "styled-components";
import { FlexBox } from "common";
import { HeaderWithCount } from "./parts/header-with-count";
import { IssueTile } from "./parts/issue-tile";
import { IIssuesTileMetaData } from "modules/shared/types";

interface IIssueListByStatusProps {
    issueList: IIssuesTileMetaData[];
    statusHeaderLabel: string;
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const IssueListByStatus = React.memo((props: IIssueListByStatusProps) => {
    const { issueList, statusHeaderLabel } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={issueList.length} headerLabel={statusHeaderLabel} />
            {issueList.map((issue) =>
                <IssueTile
                    key={issue._id}
                    issuesTileMetaData={issue} />)}
        </StyledFlexBox>
    )
})