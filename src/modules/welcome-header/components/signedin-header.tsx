import React from "react"
import styled from "styled-components";
import { FlexBox, getNameInitials } from "common";
import { Button, Popper, Typography } from "@mui/material";

interface ISignedInHeaderProps {
    signInData: {
        name: string;
        picture: string;
        email: string;
    };
    handleSignOut: () => void
}

const StyledFlexBox = styled(FlexBox)`
    background-color: #000;
    width: 100%;
    height: 50px;
    padding: 10px 100px;
`;

const PopoverContent = styled(FlexBox)`
    background-color: #fff;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
`;

const DisplayPicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`;

export const SignedInHeader = React.memo((props: ISignedInHeaderProps) => {
    const { signInData, handleSignOut } = props;
    const altText = React.useMemo(() => signInData?.name ? getNameInitials(signInData.name) : '', [signInData?.name]);
    const [open, setOpen] = React.useState(false);
    const avatarRef = React.useRef<HTMLImageElement>(null);
    const popperRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        /**
         * Manage state if clicked outside of popper element
         */
        function handleClickOutside(event: any) {
            if (popperRef.current && !popperRef.current.contains(event.target)) {
                setOpen((preValue) => !preValue);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleAvatarClick = React.useCallback(() => setOpen((preValue) => !preValue), []);

    return (
        <StyledFlexBox alignItems={"center"} justifyContent="flex-end">
            <DisplayPicture
                src={signInData.picture}
                ref={avatarRef}
                referrerPolicy="no-referrer"
                alt={altText} onClick={handleAvatarClick} />
            <Popper
                open={open}
                anchorEl={avatarRef.current}
                ref={popperRef}
                placement="bottom">
                <PopoverContent flexDirection="column" gap="10px">
                    <Typography>{signInData.name}</Typography>
                    <Typography>{signInData.email}</Typography>
                    <Button onClick={handleSignOut} variant="contained">Log Out</Button>
                </PopoverContent>
            </Popper>
        </StyledFlexBox>
    )
})