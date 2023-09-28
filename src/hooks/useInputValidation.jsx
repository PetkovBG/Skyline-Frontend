import { useState } from "react";

const useInputValidation = () => {

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordvalid] = useState(true);
    const [passwordMatching, setPasswordMatching] = useState(true);
    const [password, setPassword] = useState('');
    const [isFilledOut, setIsFilledOut] = useState(false);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateEmail = (email) => {
        if(isFilledOut) {
            setIsEmailValid(regex.test(email));
        }
    }

    const onBlurHandler = (email) => {
        setIsFilledOut(true);
        setIsEmailValid(regex.test(email));
    }

    const onPasswordChangeHandler = (password) => {
        setPassword(password);
        if(password.length >= 6 && password.length < 20) {
           setIsPasswordvalid(true)
        } else {
            setIsPasswordvalid(false);
        }
    }

    const isPasswordMatching = (confirmPassword) => {
        if(confirmPassword !== password) {
            setPasswordMatching(false)
        } else {
            setPasswordMatching(true);
        }
    }

    return {
        isEmailValid,
        validateEmail,
        onBlurHandler,
        isPasswordValid,
        onPasswordChangeHandler,
        passwordMatching,
        isPasswordMatching,

    }
}

export default useInputValidation;