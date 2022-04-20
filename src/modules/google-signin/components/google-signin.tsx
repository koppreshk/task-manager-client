import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { Button, Icon } from "@mui/material";
import { FlexBox, useServiceClient } from "common";
import { SignedInHeader } from "./signedin-header";

interface IGoogleSignInProps { }

enum LocalStorageKeys {
    LOGIN_DATA = 'loginData'
}

const StyledButton = styled(Button)`
  width: 250px;
  height: 45px;
`;

const GoogleIcon = () => {
    return (
        <Icon>
            <img
                src={"https://freesvg.org/img/1534129544.png"}
                alt="Google"
                height={24} width={24} />
        </Icon>
    )
}
export const GoogleSignIn = React.memo((props: IGoogleSignInProps) => {
    const { postData } = useServiceClient<{ tokenId: string }>();

    const [signInData, setSignInData] = React.useState<{ name: string, picture: string, email: string } | null>(localStorage.getItem(LocalStorageKeys.LOGIN_DATA) ? JSON.parse(localStorage.getItem(LocalStorageKeys.LOGIN_DATA)!) : null);

    const handleFailure = React.useCallback((err) => {
        console.log(err);
    }, []);

    const handleSuccess = React.useCallback((response: any) => {
        postData('/api/v1/google-signin', "POST", { tokenId: response.tokenId })
            .then((res) => res.json())
            .then((finalRes) => {
                setSignInData(finalRes);
                localStorage.setItem(LocalStorageKeys.LOGIN_DATA, JSON.stringify(finalRes));
            })
            .catch((err) => setSignInData(err))
    }, [postData]);

    const handleSignOut = React.useCallback(() => {
        localStorage.removeItem(LocalStorageKeys.LOGIN_DATA);
        setSignInData(null);
    }, []);

    const renderCustomLoginButton = React.useCallback((renderProps: { onClick: () => void, disabled?: boolean }) => {
        const { onClick, disabled } = renderProps;
        return (
            <StyledButton onClick={onClick} variant="contained" disabled={disabled} startIcon={<GoogleIcon />}>
                Login with google
            </StyledButton>
        )
    }, []);

    return (
        <>
            {signInData
                ?
                <FlexBox justifyContent={"end"}>
                    <SignedInHeader signInData={signInData} handleSignOut={handleSignOut} />
                </FlexBox>
                :
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
                    render={renderCustomLoginButton}
                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                    style={{ width: '150px', height: '40px' }}
                    cookiePolicy="single_host_origin"
                />
            }

        </>
    )
})