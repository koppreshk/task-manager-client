import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { Avatar, Button, Icon, Typography } from "@mui/material";
import { FlexBox, getNameInitials, useServiceClient } from "common";

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
    const altText = React.useMemo(() => signInData?.name ? getNameInitials(signInData?.name) : '', [signInData?.name]);

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
                    <FlexBox flexDirection="column" padding="10px">
                        <Avatar src={signInData.picture} sx={{ width: 30, height: 30 }} alt={altText} />
                        <Typography>{signInData.name}</Typography>
                        <Typography>{signInData.email}</Typography>
                        <Button onClick={handleSignOut} variant="contained">Log Out</Button>
                    </FlexBox>
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