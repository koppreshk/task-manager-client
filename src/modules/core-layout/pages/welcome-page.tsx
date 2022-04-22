import React from "react";
import { WelcomeHeader } from "modules/welcome-header/components/welcome-header";
import { IssueWrapper } from "../components";
import { LocalStorageKeys } from "common-enums";
import { Link } from "react-router-dom";

export const WelcomePage = React.memo(() => {
    const isLoggedIn = localStorage.getItem(LocalStorageKeys.LOGIN_DATA)
    return (
        <>
            {
                isLoggedIn ?
                    <>
                        <WelcomeHeader />
                        <IssueWrapper />
                    </>
                    : <span>Please login to continue <Link to='/'>Click here to go back to login page</Link></span>
            }
        </>
    )
})