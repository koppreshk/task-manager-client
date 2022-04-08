import React from "react"
import { MenuItem, Select, SelectChangeEvent, styled, Typography } from "@mui/material"
import { IIssueDetailsProps } from "./issue-details"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FlexBox } from "../../../../common";
import { Statuses } from "../../types";

interface IIssueDetailsSection2Props extends IIssueDetailsProps { }

type StatusesType = keyof typeof Statuses

const StyledSelect = styled(Select)`
    width: 300px;
    height: 40px;
    background-color: #1976d2;
    color: white;
    .MuiSvgIcon-root {
        fill: white;
    }
`;

const statusItems: IStatusItemProps[] = [
    {
        currentStatusName: 'New',
        targetStatusName: 'Development In Progress',
        targetStatusValue: 'developmentInProgress'
    },
    {
        currentStatusName: 'Development In Progress',
        targetStatusName: 'Code Review',
        targetStatusValue: 'codeReview'
    },
    {
        currentStatusName: 'Code Review',
        targetStatusName: 'Packaging',
        targetStatusValue: 'packaging'
    },
    {
        currentStatusName: 'Packaging',
        targetStatusName: 'QA In Progress',
        targetStatusValue: 'qaInProgress'
    },
    {
        currentStatusName: 'QA In Progress',
        targetStatusName: 'Ready For Release',
        targetStatusValue: 'readyForRelease'
    }
]

export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issueMetadata } = props;
    const { status } = issueMetadata;

    const [selectedValue, setValue] = React.useState<StatusesType>(status);

    const handleChange = React.useCallback((event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        setValue(event.target.value as StatusesType)
    }, []);

    return (
        <>
            <StyledSelect
                defaultValue={Statuses[selectedValue]}
                onChange={handleChange}
                renderValue={(value) => <Typography>{Statuses[value as StatusesType]}</Typography>}>
                {statusItems.map((status) =>
                    <MenuItem value={status.targetStatusValue} key={status.targetStatusValue}>
                        <StatusItem {...status} />
                    </MenuItem>)}
            </StyledSelect>
        </>
    )
})

interface IStatusItemProps {
    targetStatusValue: string;
    currentStatusName: string;
    targetStatusName: string;
}

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