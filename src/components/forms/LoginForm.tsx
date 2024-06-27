"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { toast } from "../ui/use-toast";
import axios from "axios";
import { login } from "@/actions/login";

const LoginForm = () => {
    const [error, setError] = useState({ error: "", message: "" });
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser((data) => ({
            ...data,
            [name]: value,
        }));
    }

    const handleSubmit = async () => {
        try {
            const response = await login(user);
            console.log(response);
            // if (response.data.success) {
            //     toast({
            //         title: "Successful",
            //         description: "Logged in user successfully",
            //     });
            // }
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Could not sign in",
                description: error.message,
            });
        }
    }

    return (
        <>
            {/* This part to be displayed on the desktop screens */}
            <div className="hidden md:flex w-[528px]  flex-col gap-[40px] px-6 md:px-0">
                <div className="flex flex-col items-center">
                    <Image
                        src={"/assets/logo.svg"}
                        height={96}
                        width={265}
                        alt={"logo"}
                    />
                    <h3 className="font-[500] text-[32px] text-[rgba(51,51,51,1)] mt-[24px]">Login to your account</h3>
                    <p className="text-[rgba(102,102,102,1)]">Dont have an account? <Link href="/signup">Signup</Link></p>
                </div>
                <button className="bg-white font-[400] text-[20px] tracking-[0.05em] w-full h-[54px] rounded-[40px] text-blue border-[1px] border-[rgba(52,78,173,1)] flex items-center justify-center gap-[16px]">
                    <Image
                        src={"/assets/icons/google.svg"}
                        height={24}
                        width={24}
                        alt={"googlelogo"}
                    />
                    Continue with Google
                </button>
                <div className="flex w-full items-center gap-[17px]">
                    <div className="w-full h-[2px] bg-[rgba(102,102,102,0.25)]" />
                    <div className="left-1/2 font-[900] text-[rgba(102,102,102,1)]">OR</div>
                    <div className="w-full h-[2px] bg-[rgba(102,102,102,0.25)]" />
                </div>
                <p className="text-center font-[200] text-[20px] tracking-[0.01em] text-blue">Enter your email address to create an account.</p>
                <div>
                    <label htmlFor="email_input" className="block text-gray-400 py-1 font-medium text-[16px] leading-[24px]">Your email</label>
                    <input
                        className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] text-[18px] px-4"
                        type="text"
                        id="email_input"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="password_input" className="block text-gray-400 py-1 font-medium text-[16px] leading-[24px] mt-[16px]">Password</label>
                    <input
                        className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] text-[18px] px-4"
                        type="password"
                        id="password_input"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-[rgba(52,78,173,1)] text-white font-[500] text-[20px] tracking-[0.01em] w-full h-[54px] rounded-[40px] disabled:opacity-[25%] disabled:bg-[rgba(17,17,17,1)]"
                >
                    Sign in
                </button>
            </div>
            {/* This part to be displayed on the smaller screens */}
            <div className="block md:hidden px-6">
                <Link href={"/"} className="flex gap-[20px] text-primary font-[600] text-[16px] leading-[24px] mb-[40px]">
                    <Image
                        src={"/assets/dashboard/icons/left_chevron_light.svg"}
                        height={14}
                        width={14}
                        alt="avatar"
                    />
                    Sign in
                </Link>
                <h3 className="font-[500] text-[32px] text-[rgba(51,51,51,1)] mt-[24px]">Welcome Back</h3>
                <p className="text-[rgba(102,102,102,1)] font-[400] mt-[16px] text-[16px] mb-[30px]">Sign In to your account</p>

                <div className="flex flex-col">
                    <div>
                        <label htmlFor="email_input" className="text-gray-400 font-[400] text-[16px] leading-[24px] pb-[7px]">Email address</label>
                        <input className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[32px] text-[18px] px-4 mt-[12px] mb-[16px]" type="text" id="email_input " name="email" />
                    </div>
                    <div>
                        <label htmlFor="email_input" className="text-gray-400 font-[400] text-[16px] leading-[24px] pb-[7px]">Password</label>
                        <input className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[32px] text-[18px] px-4 mt-[12px] mb-[16px]" type="password" id="password_input " name="email" />
                    </div>
                </div>
                <div className="flex justify-end">
                    <Link href={"/"} className="text-[rgba(4,18,115,1)] font-[400] text-[16px] mb-[28px]">Forgot Password?</Link>
                </div>

                <button className="bg-[rgba(52,78,173,1)] text-white font-[500] text-[20px] tracking-[0.01em] w-full h-[54px] rounded-[40px] disabled:opacity-[25%] disabled:bg-[rgba(17,17,17,1)]">Sign in</button>
                <p className="text-center font-[200] text-[20px] tracking-[0.01em] text-blue my-[16px]">
                    Don&apos;t have an account? {" "}
                    <Link href={"/signup"} className="text-[rgba(4,18,115,1)] font-[400] mb-[28px]">Sign up</Link>
                </p>

                <p className="text-center font-[200] text-[20px] tracking-[0.01em] text-blue mb-[16px]">
                    Or Sign In With
                </p>

                <button className="bg-white font-[400] text-[20px] tracking-[0.05em] w-full h-[54px] rounded-[40px] text-blue border-[2px] p-[15px_41px] border-[rgba(52,78,173,1)] flex items-center justify-center gap-[16px]">
                    <Image
                        src={"/assets/icons/google.svg"}
                        height={24}
                        width={24}
                        alt={"googlelogo"}
                    />
                    Google
                </button>

                <p className="text-center font-[200] text-[20px] tracking-[0.01em] text-blue my-[16px]">
                    Don&apos;t have an account? {" "}
                    <Link href={"/signup"} className="text-[rgba(4,18,115,1)] font-[400] mb-[28px]">Join us</Link>
                </p>
            </div>
        </>
    )
}

export default LoginForm