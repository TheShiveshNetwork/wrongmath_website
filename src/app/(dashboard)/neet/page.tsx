import AccordionSection from "@/components/dashboard/jm/AccordionSection"

type Props = {}

const NEETPage = (props: Props) => {
    return (
        <div className="w-full">
            <h1 className="text-green font-[600] text-[52px] leading-[78px] -tracking-[0.02em]">NEET</h1>
            <p className="mt-[24px] paragraph-1 text-primary">
                JEE Main is a national-level entrance exam conducted for admission to undergraduate engineering programs at various prestigious institutions across India. It comprises multiple-choice questions covering subjects such as Physics, Chemistry, and Mathematics. JEE Main serves as the first stage for admission to the Indian Institutes of Technology (IITs) and National Institutes of Technology (NITs).
            </p>
            <AccordionSection />
        </div>
    )
}

export default NEETPage