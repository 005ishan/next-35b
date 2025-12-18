"use client";

import { loginAction } from "./actions/login";
import { startTransition, useState, useTransition } from "react";


export default function Page() {
    const [username, setUsername]= useState("");
    const [isPending, startTransition]= useTransition();
    // const handleSubmit = async () => {
    //     try{
    //         await loginAction(username);
    //     }catch( err: Error | any){
    //         alert(err.message ?? "Form error")
    //     }

    // }
    const handleSubmit = () => {
        startTransition( async () => {
            try{
                await new Promise(receive => setTimeout(receive, 2000));//simulate delay
                await loginAction(username);
            }catch (err: Error | any){
                alert(err.message ?? "Form error");
            }
        });
        //navigate will be pending and wont block the ui
        //can use state isPending to show loading indicator
    }   
    return (
        <div className="mx-auto max-w-md border p-4 items-center text-center">
            <label>Username</label>
            <input  onChange={ (e) => setUsername(e.target.value)}/>
            <div>
                <button 
                    disabled={isPending}
                    className="p-2 bg-gray-600" onClick={handleSubmit}>{isPending? "Loading..." : "Submit"}</button>
            </div>
        </div>
    );
}

