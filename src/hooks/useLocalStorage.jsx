import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        const peristedStateSerializd = localStorage.getItem(key);

        if (peristedStateSerializd) {
            const persistedState = JSON.parse(peristedStateSerializd);
            return persistedState;
        }
        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [
        state,
        setLocalStorageState,
    ]

}