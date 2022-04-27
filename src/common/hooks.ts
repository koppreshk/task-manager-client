import { LocalStorageKeys } from "common-enums"

export const useIsUserLoggedIn = () => {
    const isLoggedIn = localStorage.getItem(LocalStorageKeys.LOGIN_DATA);
    return isLoggedIn !== null;
}