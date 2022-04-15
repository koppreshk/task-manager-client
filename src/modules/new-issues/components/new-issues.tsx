import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { HeaderWithCount } from "../../shared/components";
import { INewIssuesData } from "../types";
import { IssueTile } from "../../shared/components";

interface INewIssues {
    newIssues: INewIssuesData[];
}

const StyledFlexBox = styled(FlexBox)`
    width: 200px;
    height: calc(100% - 70px);
    background-color: #e9e9e9;
    border-radius: 4px;
    overflow: auto;
`;

export const NewIssues = React.memo((props: INewIssues) => {
    const { newIssues } = props;

    return (
        <StyledFlexBox flexDirection="column" alignItems="center">
            <HeaderWithCount headerCount={newIssues.length} headerLabel="NEW" />
            {newIssues.map((issue) =>
                <IssueTile
                    key={issue._id}
                    issuesTileMetaData={issue} />)}
        </StyledFlexBox>
    )
})