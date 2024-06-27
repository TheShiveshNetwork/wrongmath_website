"use client"

import { User } from "next-auth"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {
    currentUser: User | undefined;
}

const Navbar = ({ currentUser }: Props) => {
    const pathname = usePathname();
    const [navToggle, setNavToggle] = useState<boolean>(false);
    const [examsAccordionOpen, setExamsAccordionOpen] = useState<boolean>(false);

    useEffect(() => {
        navToggle ? disablePageScroll() : enablePageScroll();
        navToggle ? disablePageScroll() : enablePageScroll();
    }, [navToggle])

    useEffect(() => {
        setNavToggle(false);
    }, [pathname])

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
                <div className="fixed animate-[sildeInFromTop_0.3s_ease-in-out] py-[10px] w-full bg-[var(--blue-primary)] top-0 left-0 text-white flex flex-col">
                    <div className="flex justify-between px-[25px]">
                        <Link href={"/dashboard"}>
                        <Image
                            src={"/assets/logo2.svg"}
                            height={48}
                            width={48}
                            alt="menu"
                        />
                        </Link>
                        <Image
                            src={"/assets/icons/closeX.svg"}
                            height={32}
                            width={32}
                            alt="menu"
                            onClick={() => setNavToggle(false)}
                        />
                    </div>
                    <div className="flex flex-col px-[20px] text-[16px] gap-[10px]">
                        <div className="flex justify-between px-[24px] items-center border-[1px] border-[white] rounded-[12px] h-[66px] my-[16px]">
                            <div className="flex gap-[10px]">
                                <Image
                                    src={"/assets/temp/profine_pic.svg"}
                                    height={42}
                                    width={42}
                                    alt="avatar"
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-[500] text-[18px]">Gaurav</h3>
                                    <p className="font-[300] text-[14px]">Profile</p>
                                </div>
                            </div>
                            <Image
                                src={"/assets/dashboard/icons/right-chevron.svg"}
                                height={12}
                                width={12}
                                alt="avatar"
                                className="rounded-full"
                            />
                        </div>
                        <Link
                            href={"/dashboard"}
                            className="w-full h-[56px] font-[500] text-[20px] flex items-center gap-[10px]"
                        >
                            <Image
                                src={"/assets/icons/House.svg"}
                                height={32}
                                width={32}
                                alt="menu"
                            />
                            Home
                        </Link>
                        <div
                            onClick={() => setExamsAccordionOpen(!examsAccordionOpen)}
                            className="w-full h-[56px] font-[500] text-[20px] flex items-center justify-between"
                        >
                            <div className="flex gap-[10px]">
                                <Image
                                    src={"/assets/icons/Exams.svg"}
                                    height={32}
                                    width={32}
                                    alt="menu"
                                />
                                Exams
                            </div>
                            <Image
                                src={"/assets/dashboard/icons/down_icon.svg"}
                                height={12}
                                width={12}
                                alt="down"
                                className="rounded-full invert"
                            />
                        </div>
                        {examsAccordionOpen && (
                            <div className="flex flex-col">
                                <Link href={"/jee-main"} className="w-full h-[33px]">JEE (M)</Link>
                                <Link href={"/jee-advanced"} className="w-full h-[33px]">JEE (A)</Link>
                                <Link href={"/neet"} className="w-full h-[33px]">NEET</Link>
                            </div>
                        )}
                        <Link
                            href={"/settings"}
                            className="w-full h-[56px] font-[500] text-[20px] flex items-center gap-[10px]"
                        >
                            <Image
                                src={"/assets/icons/Settings.svg"}
                                height={32}
                                width={32}
                                alt="menu"
                            />
                            Settings
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar