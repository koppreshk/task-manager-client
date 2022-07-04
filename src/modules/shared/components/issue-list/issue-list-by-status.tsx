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
    animation: zoomInLeft .5s;

    @keyframes zoomInLeft {
        from {
            opacity: 0;
            transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }

        60% {
            opacity: 1;
            transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
        }
    }
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