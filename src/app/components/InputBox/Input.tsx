import React, { useState } from "react";

interface InputProps {
  handleSubmit: (e: React.FormEvent) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const InputComponent: React.FC<InputProps> = ({
  handleSubmit,
  handleInputChange,
  inputValue,
}) => {
  return (
    <div>
      <div className="mt-2">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="font-mono p-5 block w-full text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-lg sm:leading-6"
          defaultValue={"Ask anything"}
        />
      </div>
    </div>
  );
};

export default InputComponent;
