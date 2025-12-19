"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginScheme = z.object({
  email: z.email({ message: "Email milena" }),
  password: z.string().min(0, { message: "Password pugena" }),
});
export type LoginForm = z.infer<typeof loginScheme>;
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginScheme),
    values: { email: "xyz", password: "abc" }, //initial(optional)
  });
  const onSubmit = async (data: LoginForm) => {
    alert(data.email);
  };
  return <div></div>;
}
