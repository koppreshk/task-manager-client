
import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { FlexBox } from "common";

const SubHeaderText = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    color: #172b4d;
`;

const SubHeaderValue = styled(Typography)`
    font-size: 14px;
    color: rgb(94, 108, 132);
    background-color: rgb(235 236 240);
    width: calc(100% - 20px);
    padding: 5px;
    border-radius: 4px;
`;

export const MetadataDetails = React.memo((props: { heading: string, value: string }) => {
    const { heading, value } = props;
    return (
        <FlexBox flexDirection="column" width="calc(100% - 40px)">
            <SubHeaderText>{heading}: </SubHeaderText>
            <SubHeaderValue>{value || 'None'}</SubHeaderValue>
        </FlexBox>
    )
})
