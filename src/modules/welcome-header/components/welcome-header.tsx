import React from "react";
import { FlexBox } from "common";
import styled from "styled-components";
import { SignedInHeader } from "./signedin-header";
import { LocalStorageKeys } from "common-enums";
import { useNavigate } from "react-router-dom";
import { CreateIssueContainer } from "modules/create-new-issue/containers";

interface IWelcomeHeaderProps { }

const StyledFlexBox = styled(FlexBox)`
    background-color: #a3aba6;
`;

export const WelcomeHeader = React.memo((props: IWelcomeHeaderProps) => {
    const navigate = useNavigate();

    const handleSignOut = React.useCallback(() => {
        localStorage.removeItem(LocalStorageKeys.LOGIN_DATA);
        navigate('/');
    }, [navigate]);

    return (
        <StyledFlexBox justifyContent={"space-between"}>
            <CreateIssueContainer />
            <SignedInHeader signInData={localStorage.getItem(LocalStorageKeys.LOGIN_DATA) ? JSON.parse(localStorage.getItem(LocalStorageKeys.LOGIN_DATA)!) : null} handleSignOut={handleSignOut} />
        </StyledFlexBox>
    )
})