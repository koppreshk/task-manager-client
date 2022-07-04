import React from "react"
import styled, { css } from "styled-components";
import { Avatar, Tooltip, Typography } from "@mui/material";
import { FlexBox, getDateDiffInDays, getNameInitials, chooseRandomColors } from "../../../../../common";
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IIssuesTileMetaData } from "../../../types";
import { useMatch, useNavigate } from "react-router-dom";

export interface IChangeStatusItem {
    currentStatusName: string;
    targetStatusName: string;
    targetStatusValue: string;
}

export interface IIssueTileProps {
    issuesTileMetaData: IIssuesTileMetaData;
}

export const tileAnimation = css`
    animation: zoomInLeft 0.5s;

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

const StyledFlexBox = styled(FlexBox)`
    width: calc(100% - 20px);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 10px 0px 10px;
    cursor: pointer;
    ${tileAnimation};
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
    const match = useMatch('/welcome');

    const onIssueTileClick = React.useCallback(() => {
        navigate(`${match?.pathname}/${status}/${_id}`);
    }, [_id, match, navigate, status]);

    return (
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
    )
}) 