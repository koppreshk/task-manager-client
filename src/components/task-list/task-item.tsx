import { IconButton } from "@mui/material";
import React from "react"
import styled from "styled-components";
import { FlexBox } from "../../common"
import { EditTaskNameContainer, CompleteTaskContainer, DeleteTaskContainer } from "../../containers";
import { ITaskMetadata } from "../../types";
import EditIcon from '@mui/icons-material/Edit';

interface ITaskItemProps extends ITaskMetadata {

};

const StyledFlexBox = styled(FlexBox)`
    box-sizing: border-box;
`;

const StyledText = styled.span`
    width: calc(100% - 50px);
    font-size: 18px;
`;

export const TaskItem = React.memo((props: ITaskItemProps) => {
    const { name, _id } = props;
    const [inEditMode, setEditMode] = React.useState(false);

    const toggleEditMode = React.useCallback(() => {
        setEditMode((prevValue) => !prevValue);
    }, []);

    return (
        <StyledFlexBox gap="10px" width="100%" alignItems="center">
            <CompleteTaskContainer {...props} />
            {
                inEditMode
                    ? <EditTaskNameContainer _id={_id} name={name} toggleEditMode={toggleEditMode} />
                    : <StyledText>{name}</StyledText>
            }
            <IconButton aria-label="Edit" title="Edit" onClick={toggleEditMode}>
                <EditIcon />
            </IconButton>
            <DeleteTaskContainer _id={_id} />
        </StyledFlexBox>
    )
})