"use client"

import Image from "next/image"
import Link from "next/link"
import SignUpModal from "./modals/SignUpModal"
import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {}

const Navbar = (props: Props) => {
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

    useEffect(() => {
        signUpModalOpen ? disablePageScroll() : enablePageScroll();
    }, [signUpModalOpen])

    const NavLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "JEE(M)",
            href: "/jee-mains",
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
        <nav className="w-full shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)] h-[80px] flex items-center justify-between md:px-[150px]">
            <Image
                src={"/assets/logo.svg"}
                height={48}
                width={132}
                alt="Wrongmath"
            />
            <div className="flex gap-[24px] items-center text-[16px]">
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
            <div className="flex gap-[10px]">
                {/* <Link href={'/signup'} className="btn-primary">Sign up</Link> */}
                <div className="btn-primary cursor-pointer" onClick={() => setSignUpModalOpen(true)}>Sign up</div>
                <Link href={'/login'} className="border-[rgba(4,18,115,1)] border-[2px] shadow-[_-2px_2px_10px_1px_rgba(4,18,115,0.06)] px-[20px] py-[10px] rounded-[8px]">Login</Link>
            </div>

            {signUpModalOpen && <SignUpModal setModalOpen={setSignUpModalOpen} />}
        </nav>
    )
}

export default Navbar