import React from "react"
import { Avatar, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { chooseRandomColors, FlexBox, getNameInitials } from "../../../common";
import InputLabel from '@mui/material/InputLabel';
interface IUsers {
    fullName: string;
    key: string;
}

interface ISelectControlProps {
    label: string;
    users: IUsers[];
    selectedValue: string;
    onSelectValueChange: (type: string, value: string) => void
}

export const SelectAvatarControl = React.memo((props: ISelectControlProps) => {
    const { label, users, selectedValue, onSelectValueChange } = props

    const handleChange = React.useCallback((event: SelectChangeEvent<typeof selectedValue>) => {
        onSelectValueChange(label.toLowerCase(), event.target.value);
    }, [label, onSelectValueChange]);

    return (
        <FormControl sx={{ m: 1, minWidth: 80, margin: 0 }}>
            <InputLabel id="demo-simple-select-autowidth">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth"
                id="demo-simple-select-autowidth"
                value={selectedValue}
                label={label}
                onChange={handleChange}>
                {
                    users.map((user) => <AvatarWithText {...user} />)
                }
            </Select>
        </FormControl>
    )
})

const AvatarWithText = React.memo((props: IUsers) => {
    const { fullName, key } = props;
    const { backgroundColor, textColor } = React.useMemo(() => chooseRandomColors(fullName), [fullName]);
    const initials = React.useMemo(() => getNameInitials(fullName), [fullName]);

    return (
        <MenuItem value={key} key={key}>
            <FlexBox gap="10px" alignItems="center">
                <Avatar sx={{ bgcolor: backgroundColor, color: textColor, width: 30, height: 30, fontSize: '14px' }}>
                    {initials}
                </Avatar>
                <span>{fullName}</span>
            </FlexBox>
        </MenuItem>
    )
})