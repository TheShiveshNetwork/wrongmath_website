"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {}

const Navbar = (props: Props) => {
    const [navToggle, setNavToggle] = useState<boolean>(false);

    useEffect(() => {
        navToggle ? disablePageScroll() : enablePageScroll();
        navToggle ? disablePageScroll() : enablePageScroll();
    }, [navToggle])

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
        <nav className="w-full h-[80px] flex md:hidden items-center justify-between px-[30px] xl:px-[150px]">
            <Image
                src={"/assets/icons/menu.svg"}
                height={24}
                width={24}
                alt="menu"
                onClick={() => setNavToggle(!navToggle)}
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
                </div>
            )}
        </nav>
    )
}

export default Navbar