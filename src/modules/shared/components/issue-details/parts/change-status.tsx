import React from "react"
import { FlexBox } from "../../../../../common";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MenuItem, Select, SelectChangeEvent, styled, Typography } from "@mui/material"
import { Statuses, StatusesType } from "../../../types";

interface IStatusItemProps {
    targetStatusValue: string;
    currentStatusName: string;
    targetStatusName: string;
}

interface IChangeStatusProps {
    statusItems: IStatusItemProps[];
    selectedValue: string;
    handleSelectValueChange: (value: string) => void;
}


const StyledSelect = styled(Select)`
    width: 300px;
    height: 40px;
    background-color: #1976d2;
    color: white;
    .MuiSvgIcon-root {
        fill: white;
    }
`;

export const ChangeStatus = React.memo((props: IChangeStatusProps) => {
    const { selectedValue, statusItems, handleSelectValueChange } = props;

    const handleChange = React.useCallback((event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        handleSelectValueChange(event.target.value as string)
    }, [handleSelectValueChange]);

    const renderValue = React.useCallback((value: any) => {
        return <Typography>{Statuses[value as StatusesType]}</Typography>
    }, []);

    return (
        <StyledSelect
            value={selectedValue}
            onChange={handleChange}
            renderValue={renderValue}>
            {statusItems.map((status) =>
                <MenuItem value={status.targetStatusValue} key={status.targetStatusValue}>
                    <StatusItem {...status} />
                </MenuItem>)}
        </StyledSelect>
    );
})

const StatusItem = React.memo((props: IStatusItemProps) => {
    const { currentStatusName, targetStatusName } = props;
    return (
        <FlexBox alignItems="center" gap="8px">
            <span>{currentStatusName}</span>
            <ArrowForwardIcon />
            <span>{targetStatusName}</span>
        </FlexBox>
    );
})