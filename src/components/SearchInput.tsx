import { ChangeEvent, useState } from "react";

export interface SearchInputProps {
    onChange: (value: string) => void;
    placeHolder?: string
}

function SearchInput({ onChange, placeHolder="" }: SearchInputProps) {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <>
            <input
                className="w-full px-3 py-2 rounded-md focus:outline-none "
                placeholder={placeHolder}
                value={inputValue}
                onChange={handleChange}
            />
        </>
    )
}

export default SearchInput