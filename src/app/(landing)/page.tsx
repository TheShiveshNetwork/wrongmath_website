import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const StatData = [
        {
            number: 50,
            text: "Resources",
        },
        {
            number: 200,
            text: "active students",
        },
        {
            number: 25,
            text: "PYQs",
        },
    ]
    return (
        <div className="w-full bg-[rgba(252,252,252,1)]">
            <Navbar />
            <div className="mt-[163px] w-full md:pl-[186px] md:pr-[100px] flex items-start gap-[98px]">
                <div>
                    <h1 className="text-[52px] font-[600] text-[rgba(0,7,52,1)] w-full md:max-w-[550px] tracking-[-0.02em]">
                        Excel in IIT-JEE: Your Path to Achievement
                    </h1>
                    <p className="mt-[42px] text-[24px] font-[300] text-[rgba(0,7,52,1)] w-full md:max-w-[500px] leading-[36px] mb-[24px]">Personalized PYQ Suggestions Tailored to Your Learning Style</p>
                    <Link href={'/signup'} className="bg-[rgba(4,18,115,1)] text-white shadow-[-2px_2px_10px_1px_rgba(4,18,115,0.06)] px-[20px] py-[10px] rounded-[8px] h-[48px]">Sign up</Link>
                    <div className="mt-[146px] flex gap-[48px]">
                        {StatData.map((stat, index) => (
                            <>
                                <div key={stat.text} className="flex flex-col gap-[16px] items-center justify-center">
                                    <h3 className="text-[40px]">{stat.number}+</h3>
                                    <p className="font-[300] text-[20px] leading-[30px]">Resources</p>
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
                />
            </div>
            <Footer />
        </div>
    );
}
