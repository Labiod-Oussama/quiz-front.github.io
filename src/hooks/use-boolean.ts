import { useState, useCallback } from 'react';


interface ReturnType {
    value: boolean;
    onTrue: () => void;
    onFalse: () => void;
    onToggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

// this hook is used to create a boolean state
export function useBoolean(defaultValue?: boolean): ReturnType {
    const [value, setValue] = useState(!!defaultValue);

    const onTrue = useCallback(() => {
        setValue(true);
    }, []);

    const onFalse = useCallback(() => {
        setValue(false);
    }, []);

    const onToggle = useCallback(() => {
        setValue((prev) => !prev);
    }, []);

    return {
        value,
        onTrue,
        onFalse,
        onToggle,
        setValue,
    };
}
