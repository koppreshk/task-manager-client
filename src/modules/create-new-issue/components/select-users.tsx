import React from "react"
import { SelectAvatarControl } from "./avatar-select-control";

interface ISelectUserProps {
    allUsers: {
        _id: string;
        name: string;
        email: string;
        picture: string;
    }[];
    selectedValue: {
        [x: string]: string;
    };
    onSelectValueChange: (type: string, value: string) => void
}

export const SelectUsers = React.memo((props: ISelectUserProps) => {
    const { allUsers, selectedValue, onSelectValueChange } = props;
    return (
        <>
            <SelectAvatarControl
                label="Assignee"
                users={allUsers.map((item) => ({ fullName: item.name, value: item.name }))}
                selectedValue={selectedValue.assignee}
                onSelectValueChange={onSelectValueChange} />
            <SelectAvatarControl
                label="Reporter"
                users={allUsers.map((item) => ({ fullName: item.name, value: item.name }))}
                selectedValue={selectedValue.reporter}
                onSelectValueChange={onSelectValueChange} />
        </>
    )
})