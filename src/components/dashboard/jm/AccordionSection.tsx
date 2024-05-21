"use client"
import Accordion from "@/components/dashboard/Accordion"
import { useState } from "react";

type Props = {}

const AccordionSection = (props: Props) => {
    const [selectedSubject, setSelectedSubject] = useState<number>(0);
    const ChaptersTempArray = {
        physics: [
            {
                chapter: "Mechanics",
            },
            {
                chapter: "Thermodynamics",
            },
            {
                chapter: "Elasticity",
            },
            {
                chapter: "Optics",
            },
            {
                chapter: "Modern Physics",
            },
            {
                chapter: "Waves",
            },
        ],
        chemistry: [
            {
                chapter: "P block",
            },
            {
                chapter: "S block",
            },
            {
                chapter: "States of Matter",
            },
            {
                chapter: "Atomic Structure",
            },
            {
                chapter: "Redox",
            },
            {
                chapter: "Chemical Bonding",
            },
        ],
        mathematics: [
            {
                chapter: "Complex Numbers",
            },
            {
                chapter: "Determinants",
            },
            {
                chapter: "Matrix",
            },
            {
                chapter: "Permutation and Combination",
            },
            {
                chapter: "Sequence and Series",
            },
            {
                chapter: "3D Geometry",
            },
        ],
    }

    return (
        <>
            <div className="mt-[32px]">
                <h2 className="text-blue font-[600] text-[32px] -tracking-[0.02em]">Subjects</h2>
                <div className="mt-[24px] flex flex-wrap gap-[20px]">
                    <div
                        onClick={() => setSelectedSubject(0)}
                        className={`box-shadow rounded-[12px] ${selectedSubject === 0 ? "bg-[var(--blue-primary)] text-white" : "text-primary"} p-[6px_12px] md:p-[12px_24px] font-[600] text-[16px] md:text-[24px] leading-[36px] tracking-[0.01em] cursor-pointer transition-all`}
                    >
                        Physics
                    </div>
                    <div
                        onClick={() => setSelectedSubject(1)}
                        className={`box-shadow rounded-[12px] ${selectedSubject === 1 ? "bg-[var(--blue-primary)] text-white" : "text-primary"} p-[6px_12px] md:p-[12px_24px] font-[600] text-[16px] md:text-[24px] leading-[36px] tracking-[0.01em] cursor-pointer transition-all`}
                    >
                        Chemistry
                    </div>
                    <div
                        onClick={() => setSelectedSubject(2)}
                        className={`box-shadow rounded-[12px] ${selectedSubject === 2 ? "bg-[var(--blue-primary)] text-white" : "text-primary"} p-[6px_12px] md:p-[12px_24px] font-[600] text-[16px] md:text-[24px] leading-[36px] tracking-[0.01em] cursor-pointer transition-all`}
                    >
                        Mathematics
                    </div>
                </div>
            </div>
            <div className="mt-[32px] flex flex-col gap-[24px]">
                {Object.values(ChaptersTempArray)[selectedSubject].map((item, index) => (
                    <Accordion
                        key={`${selectedSubject}-${item.chapter}-${index}`}
                        title={`Chapter ${index+1} - ${item.chapter}`}
                    >
                        asdf
                    </Accordion>
                ))}
            </div>
        </>
    )
}

export default AccordionSection