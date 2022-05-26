import React from "react"
import { Typography } from "@mui/material";
import styled from "styled-components";
import { FlexBox, UserAvatar } from "common";
import { IIssuesTileMetaData } from "../../../types";
import { GridLayout } from "../../../../../common/grid-layout";
import { getPriorityIconComponent } from "../../issue-list/parts/issue-tile";
import { CloseIssueContainer } from "modules/shared/containers";

interface IMoreDetailsProps extends Pick<IIssuesTileMetaData, 'assignee' | 'reporter' | 'priority' | 'createdAt' | 'updatedAt'> {
}

const HorizontalLine = styled.hr`
    width: 100%;
    border: solid #afafaf;
    border-width: 1px 0px 0px 0px;
    margin: 0px;
`;

export const MoreDetails = React.memo((props: IMoreDetailsProps) => {
    const { assignee, reporter, priority, updatedAt, createdAt } = props;

    return (
        <FlexBox height="calc(100% - 75px)" flexDirection="column" justifyContent={"space-between"}>
            <FlexBox flexDirection="column" gap="10px">
                <Typography>Details</Typography>
                <HorizontalLine />
                <UserAvatar fullName={assignee} heading="Assignee" />
                <UserAvatar fullName={reporter} heading="Reporter" />
                <Priority priority={priority} />
                {createdAt
                    ?
                    <GridLayout $gridTemplateColumns={"50% 50%"}>
                        <Typography>Created At:</Typography>
                        <Typography>{new Date(createdAt).toDateString()}</Typography>
                    </GridLayout>
                    : null}
                <GridLayout $gridTemplateColumns={"50% 50%"}>
                    <Typography>Updated At:</Typography>
                    <Typography>{new Date(updatedAt).toDateString()}</Typography>
                </GridLayout>
            </FlexBox>
            <CloseIssueContainer />
        </FlexBox>
    );
})

const Priority = React.memo((props: Pick<IMoreDetailsProps, 'priority'>) => {
    const { priority } = props;
    const Icon = React.useMemo(() => getPriorityIconComponent(priority), [priority]);

    return (
        <GridLayout $gridTemplateColumns="50% 50%">
            <Typography>Priority:</Typography>
            <FlexBox gap="10px">
                {Icon}
                <Typography >{priority.toUpperCase()}</Typography>
            </FlexBox>
        </GridLayout>

    )
})