import React from "react";
import { WelcomeHeader } from "modules/welcome-header/components/welcome-header";
import { IssueWrapper } from "../components";

export const WelcomePage = React.memo(() => {

    return (
        <>
            <WelcomeHeader />
            <IssueWrapper />
        </>
    )
})