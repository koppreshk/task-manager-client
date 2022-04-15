import React from "react"
import styled from "styled-components";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { FlexBox, getDateDiffInDays, getNameInitials, chooseRandomColors } from "../../../common";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IIssuesTileMetaData } from "../types";
import { useNavigate } from "react-router-dom";

export interface IChangeStatusItem {
    currentStatusName: string;
    targetStatusName: string;
    targetStatusValue: string;
}
export interface IIssueTileProps {
    issuesTileMetaData: IIssuesTileMetaData;
}

const StyledFlexBox = styled(FlexBox)`
    width: calc(100% - 20px);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 10px 0px 10px;
    cursor: pointer;
`;

export const getPriorityIconComponent = (priority: string) => {
    switch (priority) {
        case 'medium':
            return <DensitySmallIcon sx={{ color: '#15e9e6' }} />
        case 'high':
            return <ArrowUpwardIcon sx={{ color: '#e91515' }} />
        default:
            return <ArrowDownwardIcon sx={{ color: '#26c43b' }} />
    }
}

export const IssueTile = React.memo((props: IIssueTileProps) => {
    const { issuesTileMetaData } = props;
    const { priority, title, createdAt, updatedAt, assignee, status, _id } = issuesTileMetaData;
    const intitals = React.useMemo(() => getNameInitials(assignee), [assignee])
    const PriorityComponent = React.useMemo(() => getPriorityIconComponent(priority), [priority]);
    const dateDiffInDays = React.useMemo(() => getDateDiffInDays(new Date(createdAt ? createdAt : updatedAt), new Date()), [createdAt, updatedAt]);
    const { backgroundColor, textColor } = React.useMemo(() => chooseRandomColors(assignee), [assignee]);
    const navigate = useNavigate();

    const onIssueTileClick = React.useCallback(() => {
        navigate(`/${status}/${_id}`);
    }, [_id, navigate, status]);

    return (
        <>
            <StyledFlexBox flexDirection="column" gap="4px" onClick={onIssueTileClick}>
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
        </>
    )
}) 