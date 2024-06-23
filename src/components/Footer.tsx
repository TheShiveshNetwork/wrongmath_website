import Image from "next/image"

type Props = {}

const Footer = (props: Props) => {
    const SocialLinks = [
        {
            link: "#1",
            image: "/assets/icons/instagram.svg",
        },
        {
            link: "#2",
            image: "/assets/icons/facebook.svg",
        },
        {
            link: "#3",
            image: "/assets/icons/twitter.svg",
        },
        {
            link: "#4",
            image: "/assets/icons/linkedin.svg",
        },
    ]
    const FooterLinks = [
        {
            name: "Products",
            items: [
                { title: "Features", href: "#11", icon: null },
                { title: "Exams", href: "#25", icon: null },
                { title: "Updates", href: "#23", icon: null },
            ]
        },
        {
            name: "Company",
            items: [
                { title: "About", href: "#45", icon: null },
                { title: "Blog", href: "#6", icon: null },
                { title: "Contact", href: "#23", icon: null },
            ]
        },
        {
            name: "Contact us",
            items: [
                { title: "contact@justpyqs.com", icon: "/assets/icons/Email.svg", href: "mailto:contact@justpyqs.com" },
                { title: "+91 9110827904", icon: "/assets/icons/Phone.svg", href: null },
                {
                    title: `2nd Floor, # 255, 1st Main Road, AKG Coloney, Opp MVJ College, Channasandra Main Road,
                Kadugodi Post,Bengaluru,
                560067.`, icon: "/assets/icons/Location_Point.svg", href: null
                },
            ]
        },
    ]
    return (
        <footer className="flex flex-col gap-[32px] bg-[rgba(4,18,115,1)] md:px-[112px] py-[40px] px-4">
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4 md:gap-[137px] w-full">
                <div className="flex flex-col md:gap-[137px]">
                    <div>
                        <Image
                            src={"/assets/logo_light.svg"}
                            height={48}
                            width={132}
                            alt="Wrongmath"
                        />
                        <div className="hidden md:flex gap-[12px] mt-[32px]">
                            {SocialLinks.map(social => (
                                <a key={social.image} href={social.link}>
                                    <Image
                                        src={social.image}
                                        height={24}
                                        width={24}
                                        alt={social.link}
                                        className="invert-0"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row w-full justify-between text-white px-[40px] mt-[32px] md:mt-0">
                    {FooterLinks.map((footer, index) => (
                        <div key={`footer-${index}`} className="flex flex-col gap-[16px] max-w-[248px]">
                            <h3 className="text-[24px] font-[600] tracking-[0.01em]">{footer.name}</h3>
                            {footer.items.map(item => (
                                <a
                                    key={item.title}
                                    href={item.href ? item.href : "#"}
                                    className="flex gap-[8px] items-center leading-[21px] text-[14px] font-[400] opacity-80"
                                >
                                    {item.icon && <Image
                                        src={item?.icon}
                                        height={20}
                                        width={20}
                                        alt={item.title}
                                    />}
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    ))}
                    <div className="flex md:hidden gap-[12px] mb-[24px]">
                        {SocialLinks.map(social => (
                            <a key={social.image} href={social.link}>
                                <Image
                                    src={social.image}
                                    height={24}
                                    width={24}
                                    alt={social.link}
                                    className="invert-0"
                                />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex md:hidden gap-[16px] text-white">
                    <a href="#">Terms of Service</a> <span className="text-[rgba(186,214,235,1)]">|</span> <a href="#">Privacy Policy</a>
                </div>
            </div>
            <div className="bg-[rgba(186,214,235,1)] h-[1px]" />
            <div className="flex justify-between text-white">
                <div className="w-full text-center md:text-left">© 2024 JustPYQs - All rights reserved</div>
                <div className="hidden md:flex gap-[16px]">
                    <a href="#">Terms of Service</a> <span className="text-[rgba(186,214,235,1)]">|</span> <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer