"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";

import Image from "next/image";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import { ChangeEvent } from "react";
import Message from "./components/Message";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      console.log("No file uploaded");
      return;
    }
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Do something with reader.result
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the user's question here
    console.log("User question:", inputValue);
    setInputValue("");
  };

  const ButtonDetails = [
    {
      text: "Clear",
      imageSrc: "./public/broom.svg",
    },
    {
      text: "Logs",
      imageSrc: "./public/logs.svg",
    },
  ];

  return (
    <div className="App">
      <Header ButtonDetails={ButtonDetails} threadId="s1234" />
      <Message messages={messages} />
      <InputBox
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
    </div>
  );
};

export default App;