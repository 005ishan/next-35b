"use client";

import { useRegisterForm } from "../input-form/hooks/use-register";

export default function Register() {
  const {
    username,
    email,
    password,
    confirmpassword,
    handleUsername,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  } = useRegisterForm();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold text-white">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsername}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={handleConfirmPassword}
            className="w-full rounded-md bg-white/5 px-3 py-2 text-white"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-indigo-500 py-2 text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
