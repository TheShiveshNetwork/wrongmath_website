"use client"
import Image from "next/image"

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className="w-[280px] sticky top-[42px] bg-white h-screen py-[32px] px-[40px] flex flex-col gap-[10px] rounded-[16px] shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)]">
            <Image
                src={"/assets/logo.svg"}
                height={73}
                width={214}
                alt="logo"
            />
            <div className="flex flex-col items-center mt-[66px] w-full h-full">
                <Image
                    src={"/assets/temp/profine_pic.svg"}
                    height={96}
                    width={96}
                    alt="logo"
                    className="rounded-[10px_0px_0px_0px]"
                />
                <h2 className="font-[500] text-[24px] leading-[36px] -tracking-[0.02em]">Gaurav</h2>
                <div className="flex flex-col gap-[32px] w-full mt-[45px]">
                    <div className="w-full bg-[rgba(186,214,235,1)] h-[47px] rounded-[8px] flex gap-[8px] items-center justify-center text-blue cursor-pointer">
                        <Image
                            src={"/assets/dashboard/icons/space_dashboard.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        Dashboard
                    </div>
                    <div className="w-full h-[47px] rounded-[8px] flex gap-[8px] items-center justify-center text-blue cursor-pointer">
                        <Image
                            src={"/assets/dashboard/icons/contract.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        Exams
                        <Image
                            src={"/assets/dashboard/icons/down_icon.svg"}
                            height={12}
                            width={12}
                            alt="logo"
                            className="ml-[12px]"
                        />
                    </div>
                    <div className="w-full h-[47px] rounded-[8px] flex gap-[8px] items-center justify-center text-blue cursor-pointer">
                        <Image
                            src={"/assets/dashboard/icons/settings.svg"}
                            height={24}
                            width={24}
                            alt="logo"
                        />
                        Settings
                    </div>
                </div>
                <div className="flex gap-[4px] h-full items-end font-[500] text-[20px] leading-[30px] tracking-[0.01]">
                    <Image
                        src={"/assets/dashboard/icons/logout.svg"}
                        height={32}
                        width={32}
                        alt="logo"
                    />
                    Logout
                </div>
            </div>
        </div>
    )
}

export default Sidebar