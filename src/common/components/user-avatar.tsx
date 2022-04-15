import React from "react"
import { Avatar, Typography } from "@mui/material"
import { FlexBox } from "../flexbox"
import { chooseRandomColors, getNameInitials } from "../utils";
import { GridLayout } from "../grid-layout";

interface IUserAvatarProps {
    fullName: string;
    heading?: string;
}

export const UserAvatar = React.memo((props: IUserAvatarProps) => {
    const { fullName, heading } = props;
    const { backgroundColor, textColor } = React.useMemo(() => chooseRandomColors(fullName), [fullName]);
    const initials = React.useMemo(() => getNameInitials(fullName), [fullName]);

    return (
        <GridLayout $gridTemplateColumns={`${heading ? '50% 50%' : '100%'}`}>
            {heading ? <Typography>{heading}:</Typography> : null}
            <FlexBox gap="10px" alignItems="center">
                <Avatar sx={{ bgcolor: backgroundColor, color: textColor, width: 30, height: 30, fontSize: '14px' }}>
                    {initials}
                </Avatar>
                <span>{fullName}</span>
            </FlexBox>
        </GridLayout>
    )
})