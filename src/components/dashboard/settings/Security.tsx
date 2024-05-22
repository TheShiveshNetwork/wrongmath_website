import { useState } from "react";

type Props = {}

const Security = (props: Props) => {
    const [twoFactorChecked, setTwoFactorChecked] = useState(false);
    return (
        <div className="box-shadow p-[24px] md:p-[48px] flex flex-col gap-[24px] rounded-[12px] mb-[24px]">
            <div className="max-w-[274px]">
                <h3 className="text-primary font-[600] text-[24px] leading-[36px] tracking-[0.01em]">Security</h3>
                <p className="text-primary font-[300] text-[14px]">
                    Manage your account security settings below to keep your account safe and secure.
                </p>
            </div>
            <div
                className="w-full flex items-center justify-between gap-[8px] cursor-pointer"
                onClick={() => setTwoFactorChecked(!twoFactorChecked)}
            >
                <div className="max-w-[274px]">
                    <h3 className="text-primary font-[600] text-[24px] leading-[36px] tracking-[0.01em]">Two-Factor Authentication (2FA)</h3>
                    <p className="text-primary font-[300] text-[14px]">
                        Enable two-factor authentication for an extra layer of security.
                    </p>
                </div>
                <div className={`relative w-[52px] h-[24px] border-[2px] border-[var(--blue-primary)] rounded-[12px] transition-all cursor-pointer flex items-center ${twoFactorChecked ? "bg-[var(--blue-primary)]" : "bg-white"}`}>
                    <div className={`absolute transition-all h-[18px] w-[18px] ${twoFactorChecked ? "left-[calc(100%-20px)] bg-white" : "left-[2px] bg-[var(--blue-primary)]"}  rounded-full`} />
                </div>
            </div>
        </div>
    )
}

export default Security