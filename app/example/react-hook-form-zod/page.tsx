    "use client";
    import { useForm } from "react-hook-form";
    import z from "zod";
    import { zodResolver } from "@hookform/resolvers/zod";

    //import needed from assets under app
    import saitama from  "@/app/assets/saitama.jpg";
    //to ensure that image is bundled and available at build 
    import Image from "next/image";
    //auto optimized image component, next.js recommended
    //use this instead of <img> tag


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
    return <div className="text-center">
        {/*height, width optional for asset import*/}
        <Image src={saitama} alt="Image 2"/>
        {/* height, width required for public, omit "public" on path/src */}
        <Image src="/images/eye.jpg" height={100} width={100} alt="Image 1"/>

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
