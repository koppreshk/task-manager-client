import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount } from "../../shared";
import { INewIssuesData } from "../types";
import { IssueTile } from "../../shared";

interface IListNewIssues {
    newIssues: INewIssuesData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: 100%;
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const ListNewIssues = React.memo((props: IListNewIssues) => {
    const { newIssues } = props;

    return (
        <StyledFlexBox flexDirection="column" alignItems="center">
            <HeaderWithCount headerCount={newIssues.length} headerLabel="NEW" />
            {newIssues.map((issue) => <IssueTile key={issue._id} {...issue} />)}
        </StyledFlexBox>
    )
})