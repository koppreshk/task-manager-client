import React from "react"
import { ChangeStatusContainer, IUpdateIssueDetailsContaionerProps } from "../../containers";
import styled from "styled-components";
import { MoreDetails } from "./parts/more-details";
import { FlexBox } from "../../../../common";

interface IIssueDetailsSection2Props extends IUpdateIssueDetailsContaionerProps { }

const StyledTypography = styled.span`
    color: #fff;
`;

const StyledFlexBox = styled(FlexBox)`
    background-color: #00875a;
    width: 300px;
    height: 40px;
    border-radius: 4px;
`;

export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issuesTileMetaData, invalidationKeys, changeStatusItems } = props;
    const { status, assignee, reporter, priority, updatedAt, createdAt, _id } = issuesTileMetaData;

    return (
        <FlexBox flexDirection="column" gap="25px" width="30%">
            {
                changeStatusItems?.length ?
                    <ChangeStatusContainer
                        status={status}
                        invalidateQueryNames={invalidationKeys}
                        _id={_id}
                        changeStatusItem={changeStatusItems} />
                    :
                    <StyledFlexBox alignItems={"center"} justifyContent="center">
                        <StyledTypography>{status === 'readyForRelease' ? 'Ready For Release' : status}</StyledTypography>
                    </StyledFlexBox>
            }
            <MoreDetails
                assignee={assignee}
                reporter={reporter}
                priority={priority}
                updatedAt={updatedAt}
                createdAt={createdAt} />
        </FlexBox>
    )
})