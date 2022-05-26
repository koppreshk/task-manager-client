import React from "react";
import { Route, Routes } from "react-router-dom";
import { GoogleLoginPage } from "./parts/google-login-page";
import { WelcomePage } from "./parts/welcome-page";

export const CoreLayout = React.memo(() => {

    return (
        <>
            <Routes>
                <Route path={"/welcome/*"} element={<WelcomePage />} />
                <Route path="/" element={<GoogleLoginPage />} />
            </Routes>
        </>
    )
})