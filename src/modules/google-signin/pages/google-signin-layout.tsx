import React from "react";
import { GoogleSignIn } from "../components/google-signin";

interface IGoogleSignInLayoutProps { }

export const GoogleSignInLayout = React.memo((props: IGoogleSignInLayoutProps) => {
    return (
        <>
            <GoogleSignIn />
        </>
    )
})