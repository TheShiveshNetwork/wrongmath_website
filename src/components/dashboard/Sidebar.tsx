"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type Props = {}

const Sidebar = (props: Props) => {
    const pathname = usePathname();
    const [collapseSidebar, setCollapseSidebar] = useState<boolean>(false);
    const [examsAccordionOpen, setExamsAccordionOpen] = useState(false);

    useEffect(() => {
        if (pathname.split('/')[2] === "question") setCollapseSidebar(true);
        else setCollapseSidebar(false);
    }, [pathname])

    return (
        <div className={`${collapseSidebar ? "w-[103px]" : "w-[280px]"} sticky top-[42px] 
        bg-white h-[calc(100vh-64px)] py-[32px] px-[40px] hidden md:flex flex-col gap-[10px] rounded-[16px] 
        shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)]`}>
            <Link href={"/"}>
                <Image
                    src={collapseSidebar ? "/assets/logo2.svg" : "/assets/logo.svg"}
                    height={collapseSidebar ? 64 : 73}
                    width={collapseSidebar ? 64 : 214}
                    alt="logo"
                />
            </Link>
            <div className="flex flex-col items-center mt-[66px] w-full h-full">
                <Image
                    src={"/assets/temp/profine_pic.svg"}
                    height={collapseSidebar ? 42 : 96}
                    width={collapseSidebar ? 42 : 96}
                    alt="logo"
                    className={collapseSidebar ? "rounded-[10px] h-[42px]" : "rounded-[10px_0px_0px_0px]"}
                />
                <h2 className={`font-[500] ${collapseSidebar ? "text-[16px]" : "text-[24px] mt-[15px]"} leading-[36px] -tracking-[0.02em]`}>Gaurav</h2>
                <div className="flex flex-col items-center w-full mt-[45px]">
                    <Link
                        href={"/dashboard"}
                        className={`w-full ${pathname === "dashboard" && "bg-[rgba(186,214,235,1)]"} ${collapseSidebar ? "rounded-full h-[40px] w-[40px]" : "rounded-[8px] h-[47px]"} flex gap-[8px] items-center justify-center text-primary cursor-pointer`}
                    >
                        <Image
                            src={"/assets/dashboard/icons/space_dashboard.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        {!collapseSidebar && "Dashboard"}
                    </Link>
                    <div
                        onClick={() => setExamsAccordionOpen(!examsAccordionOpen)}
                        className={`w-full mt-[16px] ${pathname === "" && "bg-[rgba(186,214,235,1)]"} 
                    ${collapseSidebar ? "rounded-full h-[40px] w-[40px]" : "rounded-[8px] h-[47px]"} 
                    flex gap-[8px] items-center justify-center text-primary cursor-pointer`}
                    >
                        <Image
                            src={"/assets/dashboard/icons/contract.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        {!collapseSidebar && (
                            <>
                                Exams
                                <Image
                                    src={"/assets/dashboard/icons/down_icon.svg"}
                                    height={12}
                                    width={12}
                                    alt="logo"
                                    className="ml-[12px]"
                                />
                            </>
                        )}
                    </div>
                    {examsAccordionOpen && (
                        <div className="flex flex-col text-center">
                            <Link href={"/jee-main"}>JEE (M)</Link>
                            <Link href={"/jee-advanced"}>JEE (A)</Link>
                            <Link href={"/neet"}>NEET</Link>
                        </div>
                    )}
                    <Link href={"/settings"} className={`w-full mt-[16px] ${pathname === "settings" && "bg-[rgba(186,214,235,1)]"} ${collapseSidebar ? "rounded-full h-[40px] w-[40px]" : "rounded-[8px] h-[47px]"} flex gap-[8px] items-center justify-center text-primary cursor-pointer`}>
                        <Image
                            src={"/assets/dashboard/icons/settings.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        {!collapseSidebar && "Settings"}
                    </Link>
                </div>
                <div className="flex gap-[4px] h-full items-end font-[500] text-[20px] leading-[30px] tracking-[0.01] cursor-pointer">
                    <Image
                        src={"/assets/dashboard/icons/logout.svg"}
                        height={32}
                        width={32}
                        alt="logo"
                    />
                    {!collapseSidebar && "Logout"}
                </div>
            </div>
        </div>
    )
}

export default Sidebar