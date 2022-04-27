import React from "react";
import { Link } from "react-router-dom";
import { WelcomeHeader } from "modules/welcome-header/components/welcome-header";
import { IssueWrapper } from "../components";
import { useIsUserLoggedIn } from "common/hooks";

export const WelcomePage = React.memo(() => {
    const isLoggedIn = useIsUserLoggedIn();
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