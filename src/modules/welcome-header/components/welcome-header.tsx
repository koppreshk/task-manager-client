import React from "react";
import { FlexBox } from "common";
import { SignedInHeader } from "./signedin-header";
import { LocalStorageKeys } from "common-enums";
import { useNavigate } from "react-router-dom";

interface IWelcomeHeaderProps { }

export const WelcomeHeader = React.memo((props: IWelcomeHeaderProps) => {
    const navigate = useNavigate();

    const handleSignOut = React.useCallback(() => {
        localStorage.removeItem(LocalStorageKeys.LOGIN_DATA);
        navigate('/');
    }, [navigate]);

    return (
        <>
            <FlexBox justifyContent={"end"}>
                <SignedInHeader signInData={localStorage.getItem(LocalStorageKeys.LOGIN_DATA) ? JSON.parse(localStorage.getItem(LocalStorageKeys.LOGIN_DATA)!) : null} handleSignOut={handleSignOut} />
            </FlexBox>
        </>
    )
})