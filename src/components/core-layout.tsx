import React from "react";
import { FlexBox } from "../common";
import { AddTask } from "./add-task";
import { Header } from "./header";

export const CoreLayout = () => {
    return (
        <div>
            <FlexBox flexDirection="column" gap="4px">
                <Header />
                <AddTask />
            </FlexBox>
        </div>
    )
}