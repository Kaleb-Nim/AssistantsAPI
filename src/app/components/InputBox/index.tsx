import React from 'react';
import FileUpload from './FileUpload';
import InputComponent from "./Input";

interface InputBoxProps {
    // onFileUpload: (file: File) => void;
    handleSubmit : (e: React.FormEvent) => void;
    handleInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue : string;

}

const InputBox: React.FC <InputBoxProps> = ({ handleSubmit, handleInputChange, inputValue }) => {
    return (
        <div className="m-6 p-6 items-center justify-between rounded-xl">
            <InputComponent handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue} />
            <FileUpload/>
        </div>
    )
}

export default InputBox;
