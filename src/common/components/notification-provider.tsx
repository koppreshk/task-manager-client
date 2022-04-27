import React, { useContext } from "react";
import { Alert, AlertColor, Snackbar } from "@mui/material";

const defaultContextValues = {
    showNotification: (args: IShowNotificationArgs) => { /*NOOP */ }
};

const NotificationContext = React.createContext(defaultContextValues);

interface INotificationProviderProps {
    children?: React.ReactNode;
}

interface IShowNotificationArgs {
    message: string;
    type?: AlertColor;
}

export const NotificationProvider = React.memo((props: INotificationProviderProps) => {
    const { children } = props;
    const [isOpen, triggerNotification] = React.useState(false);
    const [messageAndType, setMessageAndType] = React.useState<{ message: string, type: AlertColor }>({ message: '', type: 'success' });

    const handleNotifications = React.useCallback(() => {
        triggerNotification((prevValue) => !prevValue);
    }, []);

    const showNotification = React.useCallback((args: IShowNotificationArgs) => {
        const { message, type } = args;
        handleNotifications();
        setMessageAndType({ message, type: type ? type : 'success' })
    }, [handleNotifications]);

    return (
        <NotificationContext.Provider value={{ showNotification: showNotification }}>
            <Snackbar
                open={isOpen}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                autoHideDuration={3000}
                onClose={handleNotifications}>
                <Alert severity={messageAndType.type} onClose={handleNotifications}>{messageAndType.message}</Alert>
            </Snackbar>
            {children}
        </NotificationContext.Provider>
    )
});

export const useNotifications = () => useContext(NotificationContext);