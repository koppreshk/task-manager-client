import React from "react";
import { IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';
import { MetadataDetails } from "./metadata-details";
import { IAction } from "../../issue-details";
import { FlexBox } from "common";

interface IEditSpecificMetadataProps {
    metadataValue: string;
    metadataHeading: string;
    dispatchType: string;
    dispatchStateHandler: React.Dispatch<IAction>;
    onSubmitHandler: () => void;
}

export const EditSpecificMetadata = React.memo((props: IEditSpecificMetadataProps) => {
    const { metadataValue, metadataHeading, dispatchStateHandler, dispatchType, onSubmitHandler } = props;
    const [inEditMode, setEditMode] = React.useState(false);
    const toggleEditMode = React.useCallback(() => {
        setEditMode((prevValue) => !prevValue);
    }, []);

    const onSaveHandler = React.useCallback(() => {
        onSubmitHandler();
        toggleEditMode();
    }, [onSubmitHandler, toggleEditMode]);

    return (
        <>
            {
                inEditMode
                    ?
                    <FlexBox alignItems={"center"}>
                        <TextField
                            id="outlined-basic" label={metadataHeading} variant="outlined"
                            value={metadataValue}
                            sx={{ width: 'calc(100% - 90px)' }}
                            required
                            autoComplete="off"
                            onChange={(ev) => dispatchStateHandler({ type: dispatchType, payload: ev.target.value })} />
                        <IconButton aria-label="Save" title="Save" onClick={onSaveHandler}>
                            <DoneIcon />
                        </IconButton>
                        <IconButton aria-label="Cancel" title="Cancel" onClick={toggleEditMode}>
                            <CancelIcon />
                        </IconButton>
                    </FlexBox>
                    :
                    <FlexBox flexDirection="row" alignItems={"end"}>
                        <MetadataDetails heading={metadataHeading} value={metadataValue} />
                        <IconButton sx={{ width: "24px", height: "24px", padding: '0px 0px 5px 0px' }} aria-label="Edit" title="Edit" onClick={toggleEditMode}>
                            <EditIcon />
                        </IconButton>
                    </FlexBox>
            }
        </>
    )
});