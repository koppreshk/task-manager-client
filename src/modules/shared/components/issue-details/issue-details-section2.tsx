import React from "react"
import { MenuItem, Select, styled } from "@mui/material"
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

    return (
        <>
            <StyledSelect
                labelId="demo-simple-select-autowidth"
                id="demo-simple-select-autowidth"
                value={selectedValue}
                onChange={(ev) => setValue(ev.target.value as string)}>
                <MenuItem value={'new'}>
                    <span>New</span>
                </MenuItem><MenuItem value="developmentInProgress">
                    <span>Development In Progress</span>
                </MenuItem>
                <MenuItem value={'codeReview'}>
                    <span>Code Review</span>
                </MenuItem>
                <MenuItem value={'packaging'}>
                    <span>Packaging</span>
                </MenuItem>
                <MenuItem value={'qaInProgress'}>
                    <span>QA In Progress</span>
                </MenuItem>
                <MenuItem value={'readyForRelease'}>
                    <span>Ready For Release</span>
                </MenuItem>
            </StyledSelect>
        </>
    )
})