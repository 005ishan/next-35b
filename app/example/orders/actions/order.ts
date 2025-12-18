"use server";

import { redirect } from "next/navigation";

export async function orderAction(status: String){
    if(status == "isAcive"){
        redirect("/example/orders/success")
    }else if(status == "isInActive"){
        redirect("/example/orders/failure")
    }else{
        alert("Display error message")
    }
}