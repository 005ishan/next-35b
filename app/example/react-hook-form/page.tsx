"use client";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register, //bind input fields
    handleSubmit, //handle form submission
    formState: { errors, isSubmitting },
  } = useForm({ values: { email: "", password: "" } }); //input states and initial
  const onSubmit = async (data: any) => {
    //data formdata
    alert(data.email);
  };
  return <div className="text-center">
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto p-2 max-w-xl border p-20">
    <div className="mt-2 space-x-5">
        <label>Username</label>
        <input{...register("email", {required: "Email hala"})} className="bg-amber-500"/>
        {
            errors.email && //conditional rendering
            <span className="text-red-500">{errors.email.message}</span>
        }
    </div>
    <button type="submit" className="p-2 bg-green-500">Submit</button>
    </form>
    </div>;
}
