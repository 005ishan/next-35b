"use client";

import { startTransition, useState } from "react";
import { orderAction } from "./actions/order";

export default function Page() {
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const handleSubmit = () => {
        startTransition( async() => {
            try{
                            await new Promise(receive => setTimeout(receive, 2000));//simulate delay
                            await orderAction(status);
                        }catch (err: Error | any){
                            alert(err.message ?? "Form error");
                        }
        })
    }

    return (
        <div className="mx-auto max-w-md border p-4">
            <label>Status</label>
            <input  onChange={(e) => setStatus(e.target.value)}/>
            <label>Price</label>
            <input  onChange={(e) => setStatus(e.target.value)}/>   
            <div className="">
                <button>Apply</button>
            </div>
            <div>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
}