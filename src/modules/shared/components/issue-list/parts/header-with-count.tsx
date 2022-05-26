import React from "react"
import { styled, Typography } from "@mui/material";
import { FlexBox } from "../../../../../common";

interface IHeaderWithCountProps {
    headerLabel: string;
    headerCount: number;
}

const StyledFlexBox = styled(FlexBox)`
    box-sizing: border-box;
`
export const HeaderWithCount = React.memo((props: IHeaderWithCountProps) => {
    const { headerCount, headerLabel } = props;

    return (
        <StyledFlexBox padding="5px" gap="5px" width="100%">
            <Typography variant="caption" sx={{ fontWeight: '600', color: '#3b3b3b' }} title={headerLabel} noWrap>{headerLabel}</Typography>
            <Typography variant="caption" sx={{ fontWeight: '600', color: '#3b3b3b' }} >{headerCount}</Typography>
        </StyledFlexBox>
    )
})