import React from "react"
import { MenuItem, Select, SelectChangeEvent, styled } from "@mui/material"
import { IIssueDetailsProps } from "./issue-details"

interface IIssueDetailsSection2Props extends IIssueDetailsProps { }

const StyledSelect = styled(Select)`
    width: 300px;
    height: 40px;
    background-color: #1976d2;
    color: white;
    .MuiSvgIcon-root {
        fill: white;
    }
`;

export const IssueDetailsSection2 = React.memo((props: IIssueDetailsSection2Props) => {
    const { issueMetadata } = props;
    const { status } = issueMetadata;

    const [selectedValue, setValue] = React.useState<string>(status);

    const handleChange = React.useCallback((event: SelectChangeEvent<unknown>, child: React.ReactNode) => {
        setValue(event.target.value as string)
    }, []);

    return (
        <>
            <StyledSelect
                value={selectedValue}
                onChange={handleChange}
                renderValue={(value) => <><span>{value as string}</span></>}>
                <MenuItem value={'new'}>
                    <span>New</span>
                </MenuItem>
                <MenuItem value="developmentInProgress">
                    <span>New {'-->'} Development In Progress</span>
                </MenuItem>
                <MenuItem value={'codeReview'}>
                    <span>Development In Progress `{'->'}` Code Review</span>
                </MenuItem>
                <MenuItem value={'packaging'}>
                    <span>Code Review `{'->'}` Packaging</span>
                </MenuItem>
                <MenuItem value={'qaInProgress'}>
                    <span>Packaging `{'->'}` QA In Progress</span>
                </MenuItem>
                <MenuItem value={'readyForRelease'}>
                    <span>QA In Progress `{'->'}` Ready For Release</span>
                </MenuItem>
            </StyledSelect>
        </>
    )
})