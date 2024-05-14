"use client"
import Image from "next/image";
import { useState } from "react";

type Props = {
    title: string;
    children: React.ReactNode;
}

const Accordion = ({ title, children }: Props) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    return (
        <div className="box-shadow p-[24px] rounded-[12px] bg-white transition-all">
            <div
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex gap-[12px] text-[20px] font-[500] leading-[30px] tracking-[0.01] cursor-pointer"
            >
                <Image
                    src={"/assets/dashboard/icons/down_icon.svg"}
                    height={14}
                    width={14}
                    alt="logo"
                    className={accordionOpen ? "rotate-180" : ""}
                />
                {title}
            </div>
            {accordionOpen && (
                <div className="mt-[20px]">{children}</div>
            )}
        </div>
    )
}

export default Accordion