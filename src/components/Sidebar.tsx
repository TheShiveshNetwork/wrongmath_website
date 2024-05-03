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
        </div>
    )
}

export default Sidebar