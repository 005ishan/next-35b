"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export const useRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setConfirmPassword(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (!username || !email || !password || !confirmpassword) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Registration Successful");
  };

  return {
    username,
    email,
    password,
    confirmpassword,
    handleUsername,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  };
};
