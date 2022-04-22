import React from "react"
import { FlexBox, useServiceClient } from "common";
import styled from "styled-components";
import GoogleLogin from "react-google-login";
import { LocalStorageKeys } from "common-enums";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const LoginCard = styled(FlexBox)`
    background-color: #fff;
    border-radius: 6px;
    width: 450px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledButton = styled.button`
    width: 250px;
    height: 45px;
    background-color: #fff;
    color: #42526e;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 25px;
    border: none;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0px;
    border-radius: 4px;

    :hover {
            background: rgba(9, 30, 66, 0.02) !important;
        }
`;

export const GoogleLoginPage = React.memo(() => {
    const { postData } = useServiceClient<{ tokenId: string }>();
    const navigate = useNavigate();

    const renderCustomLoginButton = React.useCallback((renderProps: { onClick: () => void, disabled?: boolean }) => {
        const { onClick, disabled } = renderProps;
        return (
            <StyledButton onClick={onClick} disabled={disabled}>
                <img
                    src={"https://freesvg.org/img/1534129544.png"}
                    alt="Google"
                    height={24} width={24} />
                <span>Login with google</span>
            </StyledButton>
        )
    }, []);

    const handleFailure = React.useCallback((err) => {
        console.log(err);
    }, []);

    const handleSuccess = React.useCallback((response: any) => {
        postData('/api/v1/google-signin', "POST", { tokenId: response.tokenId })
            .then((res) => res.json())
            .then((finalRes) => {
                localStorage.setItem(LocalStorageKeys.LOGIN_DATA, JSON.stringify(finalRes));
                navigate('/welcome')
            })
            .catch((err) => console.log(err))
    }, [navigate, postData]);

    return (
        <FlexBox flexDirection="row">
            <img
                width="50%"
                height="70%"
                alt="Task Manager"
                src="https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.331/static/media/jira-left.d0ab0e98.svg" />
            <FlexBox justifyContent={"center"} alignItems="center">
                <LoginCard justifyContent={"center"} flexDirection="column" gap="30px" alignItems="center">
                    <Typography sx={{ color: '#42526e', fontWeight: 'bold' }}>TASK MANAGER</Typography>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}
                        render={renderCustomLoginButton}
                        onSuccess={handleSuccess}
                        onFailure={handleFailure}
                        style={{ width: '150px', height: '40px' }}
                        cookiePolicy="single_host_origin"
                    />
                </LoginCard>
            </FlexBox>
        </FlexBox>
    )
}) 