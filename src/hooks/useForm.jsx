import { useState } from "react";

const useForm = (initialValues, onSubmitHandler) => {

    const [values, setValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(values);
        setValues(initialValues);
    };

    const updateValues = (newValues) => {
        setValues(newValues);
    }

    return {
        values,
        onChangeHandler,
        onSubmit,
        updateValues,
        setValues,
    }
}

export default useForm;