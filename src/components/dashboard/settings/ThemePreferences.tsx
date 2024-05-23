import { useState } from "react";

type Props = {}

const ThemePreferences = (props: Props) => {
    const [selectedTheme, setSelectedTheme] = useState("light");

    return (
        <div className="box-shadow p-[24px] md:p-[48px] flex flex-col gap-[24px] rounded-[12px] mb-[24px]">
            <div
                onClick={() => setSelectedTheme("light")}
                className="flex w-full justify-between items-center cursor-pointer"
            >
                <div className="max-w-[264px] w-full">
                    <div className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Light Mode</div>
                    <p className="text-primary font-[300] text-[14px] leading-[21px]">
                        Enable light mode for a bright and clean interface.
                    </p>
                </div>
                <div className="h-[24px] w-[24px] p-[4px] rounded-full border-[2px] border-[var(--blue-primary)] cursor-pointer">
                    {selectedTheme === "light" && <div className="h-full w-full rounded-full bg-[var(--blue-primary)]" />}
                </div>
            </div>
            <div
                onClick={() => setSelectedTheme("dark")}
                className="flex w-full justify-between items-center cursor-pointer"
            >
                <div className="max-w-[264px] w-full">
                    <div className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Dark Mode</div>
                    <p className="text-primary font-[300] text-[14px] leading-[21px]">
                        Enable dark mode for reduced eye strain and enhanced readability in low-light environments.
                    </p>
                </div>
                <div className="h-[24px] w-[24px] p-[4px] rounded-full border-[2px] border-[var(--blue-primary)] cursor-pointer">
                    {selectedTheme === "dark" && <div className="h-full w-full rounded-full bg-[var(--blue-primary)]" />}
                </div>
            </div>
        </div>
    )
}

export default ThemePreferences