"use client"

import { auth } from "@/app/firebaseConfig";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {

    const router = useRouter();
    useEffect(() => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.push("/login");
        }).catch((error) => {
            // An error happened.
            console.error("Sign-out error:", error);
        });
    }, []);


    return (
        <>
        </>
    );
}