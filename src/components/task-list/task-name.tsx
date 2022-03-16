import React from "react"
import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { EditTaskNameContainer } from "../../containers";
import { ITaskMetadata } from "../../types";

const StyledText = styled.span`
    width: calc(100% - 50px);
    font-size: 18px;
`;

interface ITaskNameProps extends Pick<ITaskMetadata, '_id' | 'name'> { }

export const TaskName = React.memo((props: ITaskNameProps) => {
    const { _id, name } = props;
    const [inEditMode, setEditMode] = React.useState(false);

    const toggleEditMode = React.useCallback(() => {
        setEditMode((prevValue) => !prevValue);
    }, []);

    return (
        <>
            {
                inEditMode ? <EditTaskNameContainer _id={_id} name={name} toggleEditMode={toggleEditMode} /> : <StyledText>{name}</StyledText>
            }
            <IconButton aria-label="Edit" title="Edit" onClick={toggleEditMode}>
                <EditIcon />
            </IconButton>
        </>
    )
})