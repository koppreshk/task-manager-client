import { Typography } from "@mui/material";
import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../../common";
import { INewIssuesData } from "../types"

interface INewIssueTileProps extends INewIssuesData { }

const StyledFlexBox = styled(FlexBox)`
    width: calc(100% - 20px);
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin: 10px 10px 0px 10px;
`;

export const NewIssueTile = React.memo((props: INewIssueTileProps) => {
    const { priority, title, createdAt } = props;
    return (
        <StyledFlexBox flexDirection="column" gap="4px">
            <Typography variant="subtitle2" sx={{ wordBreak: 'break-word' }}>{title}</Typography>
            <Typography variant="subtitle2">Priority: {priority}</Typography>
            <Typography variant="subtitle2">Created At: {new Date(createdAt).toDateString()}</Typography>
        </StyledFlexBox>
    )
}) 