import { useState } from 'react';

export const useUserInfo = () => {
    const [value, setValue] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const resetField = () => {
        setValue("");
    };

    // return {value: value, handleInputChange: handleInputChange, resetField: resetField} // or just :
    return {value, handleInputChange, resetField}
};