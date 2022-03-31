import React from "react"
import styled from "styled-components";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { FlexBox, getDateDiffInDays, getNameInitials } from "../../../common";
import { INewIssuesData } from "../types"
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface INewIssueTileProps extends INewIssuesData { }

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
            return <DensitySmallIcon titleAccess="Medium Priority" />
        case 'high':
            return <ArrowUpwardIcon titleAccess="High Priority" />
        default:
            return <ArrowDownwardIcon titleAccess="Low Priority" />
    }
}

export const NewIssueTile = React.memo((props: INewIssueTileProps) => {
    const { priority, title, createdAt, assignee } = props;
    const intitals = React.useMemo(() => getNameInitials(assignee), [assignee])
    const PriorityComponent = React.useMemo(() => getPriorityIconComponent(priority), [priority]);
    const dateDiffInDays = React.useMemo(() => getDateDiffInDays(new Date(createdAt), new Date()), [createdAt]);

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
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 24, height: 24, fontSize: '12px' }}>{intitals}</Avatar>
                </Tooltip>
            </FlexBox>
        </StyledFlexBox>
    )
}) 