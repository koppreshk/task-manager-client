import React from "react";
import { Checkbox } from "@mui/material";

interface ITaskCompletionCheckBoxProps {
    completed: boolean;
    onCheckboxValueChange: (isCompleted: boolean) => void;
}
export const TaskCompletionCheckBox = React.memo((props: ITaskCompletionCheckBoxProps) => {
    const { completed, onCheckboxValueChange } = props;
    const [isCompleted, setCompleted] = React.useState(completed);

    const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        setCompleted(checked);
        onCheckboxValueChange(checked);
    }, [onCheckboxValueChange]);

    return (
        <Checkbox onChange={handleChange} checked={isCompleted} />
    );
})