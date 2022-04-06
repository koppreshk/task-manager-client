import React from "react"
import styled from "styled-components";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { FlexBox, getDateDiffInDays, getNameInitials, chooseRandomColors } from "../../common";
import { INewIssuesData } from "../new-issues/types"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface IIssueTileProps extends INewIssuesData { }

const StyledFlexBox = styled(FlexBox)`
    width: calc(100% - 20px);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 10px 0px 10px;
`;

const getPriorityIconComponent = (priority: string) => {
    switch (priority) {
        case 'medium':
            return <DensitySmallIcon titleAccess="Medium Priority" sx={{ color: '#15e9e6' }} />
        case 'high':
            return <ArrowUpwardIcon titleAccess="High Priority" sx={{ color: '#e91515' }} />
        default:
            return <ArrowDownwardIcon titleAccess="Low Priority" sx={{ color: '#26c43b' }} />
    }
}

export const IssueTile = React.memo((props: IIssueTileProps) => {
    const { priority, title, createdAt, updatedAt, assignee } = props;
    const intitals = React.useMemo(() => getNameInitials(assignee), [assignee])
    const PriorityComponent = React.useMemo(() => getPriorityIconComponent(priority), [priority]);
    const dateDiffInDays = React.useMemo(() => getDateDiffInDays(new Date(createdAt ? createdAt : updatedAt), new Date()), [createdAt, updatedAt]);
    const { backgroundColor, textColor } = React.useMemo(() => chooseRandomColors(assignee), [assignee]);

    return (
        <StyledFlexBox flexDirection="column" gap="4px">
            <Typography variant="subtitle2" sx={{ wordBreak: 'break-word' }}>{title}</Typography>
            <FlexBox gap="8px">
                <Tooltip title={priority} arrow>
                    {PriorityComponent}
                </Tooltip>
                <Tooltip title={`${dateDiffInDays} days in this column`} arrow>
                    <AccessTimeIcon />
                </Tooltip>
                <Tooltip title={`Assignee: ${assignee}`} arrow>
                    <Avatar sx={{ bgcolor: backgroundColor, color: textColor, width: 24, height: 24, fontSize: '12px', fontWeight: 600 }}>{intitals}</Avatar>
                </Tooltip>
            </FlexBox>
        </StyledFlexBox>
    )
}) 