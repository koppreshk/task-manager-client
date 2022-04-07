import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount, IssueTile } from "../../shared/components";
import { IPackagingIssueData } from "../types";

interface IPackagingIssues {
    packagingIssues: IPackagingIssueData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const PackagingIssues = React.memo((props: IPackagingIssues) => {
    const { packagingIssues } = props;

    return (
        <StyledFlexBox flexDirection="column">
            <HeaderWithCount headerCount={packagingIssues.length} headerLabel="PACKAGING" />
            {packagingIssues.map((issue) => <IssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})