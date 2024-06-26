"use client"

import Image from "next/image"
import Link from "next/link"
import SignUpModal from "./modals/SignUpModal"
import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"
import LoginModal from "./modals/LoginModal"

type Props = {}

const Navbar = (props: Props) => {
    const [navToggle, setNavToggle] = useState<boolean>(false);
    const [signUpModalOpen, setSignUpModalOpen] = useState<boolean>(false);
    const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if(window.innerWidth > 740) {
            (signUpModalOpen || navToggle) ? disablePageScroll() : enablePageScroll();
            (loginModalOpen || navToggle) ? disablePageScroll() : enablePageScroll();
        }
    }, [signUpModalOpen, loginModalOpen, navToggle])

    const NavLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "JEE(M)",
            href: "/jee-main",
        },
        {
            name: "JEE(A)",
            href: "/jee-advanced",
        },
        {
            name: "NEET",
            href: "/neet",
        },
    ]
    return (
        <nav className="w-full shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)] h-[80px] flex items-center justify-between px-[30px] lg:px-[150px]">
            <Image
                src={"/assets/icons/menu.svg"}
                height={24}
                width={24}
                alt="menu"
                onClick={() => setNavToggle(!navToggle)}
                className="block md:hidden"
            />

            <Link href={"/"}>
                <Image
                    src={"/assets/logo.svg"}
                    height={48}
                    width={132}
                    alt="Wrongmath"
                />
            </Link>

            <div className="md:hidden block">
                <Image
                    src={"/assets/temp/profine_pic.svg"}
                    height={32}
                    width={32}
                    alt="menu"
                    className="rounded-full"
                />
            </div>

            <div className="hidden md:flex gap-[24px] items-center text-[16px]">
                {NavLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="font-[500] text-[16px]"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div className="hidden md:flex gap-[10px]">
                {/* <Link href={'/signup'} className="btn-primary">Sign up</Link> */}
                <div className="btn-primary cursor-pointer" onClick={() => setSignUpModalOpen(true)}>Sign up</div>
                <div className="border-[rgba(4,18,115,1)] cursor-pointer border-[2px] shadow-[_-2px_2px_10px_1px_rgba(4,18,115,0.06)] px-[20px] py-[10px] rounded-[8px]" onClick={() => setLoginModalOpen(true)}>Login</div>
            </div>

            {navToggle && (
                <div className="fixed w-full h-screen top-[80px] left-0 bg-white flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col gap-[24px] items-center text-[16px]">
                        {NavLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-[500] text-[24px]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {/* <Link href={'/signup'} className="btn-primary">Sign up</Link> */}
                        <div className="hidden md:block btn-primary cursor-pointer" onClick={() => setSignUpModalOpen(true)}>Sign up</div>
                        <div className="hidden md:block border-[rgba(4,18,115,1)] cursor-pointer border-[2px] shadow-[_-2px_2px_10px_1px_rgba(4,18,115,0.06)] px-[20px] py-[10px] rounded-[8px]" onClick={() => setLoginModalOpen(true)}>Login</div>
                        <Link href={"/signup"} className="block md:hidden btn-primary cursor-pointer" onClick={() => setSignUpModalOpen(true)}>Sign up</Link>
                        <Link href={"/login"} className="block md:hidden border-[rgba(4,18,115,1)] cursor-pointer border-[2px] shadow-[_-2px_2px_10px_1px_rgba(4,18,115,0.06)] px-[20px] py-[10px] rounded-[8px]" onClick={() => setLoginModalOpen(true)}>Login</Link>
                    </div>
                </div>
            )}

            {signUpModalOpen && <SignUpModal modalOpen={signUpModalOpen} setModalOpen={setSignUpModalOpen} />}
            {loginModalOpen && <LoginModal modalOpen={loginModalOpen} setModalOpen={setLoginModalOpen} />}
        </nav>
    )
}

export default Navbar