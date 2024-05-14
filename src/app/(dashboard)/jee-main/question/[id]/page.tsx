"use client"

import Image from "next/image"
import { useState } from "react";

type Props = {}

const QuestionPage = ({ params }: { params: { id: string } }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);
    const TempAnswers = [
        "Force equals mass times acceleration",
        "Acceleration equals force times mass",
        "Mass equals force times acceleration",
        "Acceleration equals mass divided by force",
    ]
    return (
        <div className="w-full">
            <p className="text-primary font-[300] text-[20px] leading-[30px] -tracking-[0.02em]">
                Sharpen your exam skills with our realistic practice test paper, tailored for JEE Main preparation
            </p>
            <div className="mt-[30px]">
                <div className="flex text-primary gap-[4px] items-center">
                    <h2 className="text-[32px] font-[600] leading-[48px]-tracking-[0.02em]">Q1.</h2>
                    <p className="font-[500] text-[20px] leading-[30px] tracking-[0.01em]">Which of the following statements about Newton&apos;s second law of motion is correct?</p>
                </div>
                <div className="mt-[45px] text-primary flex flex-col gap-[16px]">
                    {TempAnswers.map((answer, index) => (
                        <div
                            key={`ans-${index}`}
                            onClick={() => setSelectedAnswer(index)}
                            className="flex gap-[12px] items-center"
                        >
                            <div className="h-[32px] w-[32px] p-[4px] rounded-full border-[2px] border-[rgba(0,7,52,1)] cursor-pointer">
                                {selectedAnswer === index && <div className="h-full w-full rounded-full bg-[rgba(0,7,52,1)]" />}
                            </div>
                            <p className="font-[500] text-[20px] leading-[30px] tracking-[0.01em]">{answer}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[45px] bg-whtie box-shadow p-[16px_32px] rounded-[12px] items-center flex justify-between">
                <div onClick={() => { }} className="btn-primary box-shadow cursor-pointer">Submit</div>
                <div className="flex gap-[16px]">
                    <div onClick={() => { }} className="btn-secondary box-shadow flex gap-[5px] cursor-pointer">
                        <Image
                            src="/assets/icons/arrow_downward_alt.svg"
                            height={24}
                            width={24}
                            alt="icon"
                        />
                        Previous
                    </div>
                    <div onClick={() => { }} className="btn-secondary box-shadow flex gap-[5px] cursor-pointer">
                        <Image
                            src="/assets/icons/arrow_downward_alt.svg"
                            height={24}
                            width={24}
                            alt="icon"
                            className="rotate-180"
                        />
                        Next
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionPage