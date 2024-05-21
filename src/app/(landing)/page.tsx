import { FeaturesContent, PracticeTests, StatData } from "@/constants/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full px-6">
            <div className="mt-[163px] w-full md:pl-[186px] md:pr-[100px] flex items-start gap-[98px]">
                <div className="flex flex-col md:block items-center">
                    <h1 className="heading-primary w-full md:max-w-[550px] text-center md:text-left">
                        Excel in IIT-JEE: Your Path to Achievement
                    </h1>
                    <p className="mt-[42px] text-[24px] font-[300] text-center md:text-left text-[rgba(0,7,52,1)] w-full md:max-w-[500px] leading-[36px] mb-[24px]">Personalized PYQ Suggestions Tailored to Your Learning Style</p>
                    <Link href={'/signup'} className="btn-primary h-[48px] w-[130px]">Get started</Link>
                    <div className="mt-[146px] flex gap-[48px]">
                        {StatData.map((stat, index) => (
                            <>
                                <div key={stat.text} className="flex flex-col gap-[16px] items-center justify-center">
                                    <h3 className="text-[20px] font-[500] md:text-[40px]">{stat.number}+</h3>
                                    <p className="font-[300] text-[12px] md:text-[20px] leading-[30px]">Resources</p>
                                </div>
                                {index != 2 && <div className="w-[2px] bg-[rgba(4,18,115,1)]" />}
                            </>
                        ))}
                    </div>
                </div>
                <Image
                    src={'/assets/hero/hero1.png'}
                    width={520}
                    height={624}
                    alt="Hero1"
                    className="hidden lg:block"
                />
            </div>
            <div className="mt-[150px] md:px-[106px]">
                <h1 className="heading-primary text-center">Practice Tests</h1>
                <div className="mt-[42px] w-full flex flex-col items-center md:flex-row flex-wrap justify-center gap-[32px]">
                    {PracticeTests.map(item => (
                        <div key={item.heading} className="relative max-w-[388px] w-full md:w-1/3 min-h-[620px] shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)] p-[24px] rounded-[12px] flex flex-col gap-[12px]">
                            <Image
                                src={item.img}
                                height={231}
                                width={340}
                                alt={item.heading}
                            />
                            <h1 className="heading-secondary">{item.heading}</h1>
                            <p className="text-[14px] font-[300] leading-[21px] max-w-[323px]">{item.description}</p>
                            <Link href={item.link} className="absolute w-[calc(100%-48px)] bottom-[24px] btn-primary flex gap-[7px] justify-center">
                                View
                                <Image
                                    src={"/assets/icons/ext_link1.svg"}
                                    height={14}
                                    width={14}
                                    alt={item.heading}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[64px] md:px-[106px]">
                <h1 className="heading-primary text-center">Features</h1>
                <div className="mt-[42px] w-full flex flex-col justify-center gap-[32px] text-center md:text-left">
                    {FeaturesContent.map((content, index) => (
                        <div key={`feature-${index}`} className={`flex flex-col items-center md:items-start ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-start justify-between`}>
                            <div className="max-w-[854px]">
                                <h1 className="heading-tertiary">{content.heading}s</h1>
                                <p className="font-[300] text-[24px] leading-[36px]">{content.description}</p>
                            </div>
                            <Image
                                src={content.img}
                                height={276}
                                width={340}
                                alt={content.heading}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
