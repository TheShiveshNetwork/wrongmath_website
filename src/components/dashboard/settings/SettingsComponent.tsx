"use client"
import Image from "next/image";
import { useState } from "react";

type Props = {}

const SettingsComponent = (props: Props) => {
    const [activeSetting, setActiveSetting] = useState<number>(0);

    return (
        <div className="w-full">
            <div className="w-full flex gap-[64px]">
                <div className="flex flex-col gap-[16px] w-full max-w-[354px]">
                <input
                    type="text"
                    className="w-full mb-[16px] p-[16px_10px_16px_45px] bg-[url('/assets/dashboard/icons/search.svg')] bg-no-repeat bg-[center_left_10px] rounded-[12px] box-shadow font-[300] text-[14px] outline-none"
                    placeholder="Search"
                />
                    <div
                        onClick={() => setActiveSetting(0)}
                        className={`box-shadow rounded-[12px] p-[24px] border-[2px] 
                                ${activeSetting === 0 ? "border-[var(--blue-primary)]" : ""} cursor-pointer`}
                    >
                        <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Account Information</h3>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Update personal details like name, email, password
                        </p>
                    </div>
                    <div
                        onClick={() => setActiveSetting(1)}
                        className={`box-shadow rounded-[12px] p-[24px] border-[2px] 
                                ${activeSetting === 1 ? "border-[rgba(52,78,173,1)]" : ""} cursor-pointer`}
                    >
                        <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Notifications</h3>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Manage email and notification preferences
                        </p>
                    </div>
                    <div
                        onClick={() => setActiveSetting(2)}
                        className={`box-shadow rounded-[12px] p-[24px] border-[2px] 
                                ${activeSetting === 2 ? "border-[rgba(52,78,173,1)]" : ""} cursor-pointer`}
                    >
                        <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Security</h3>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Manage two-factor authentication, login sessions
                        </p>
                    </div>
                    <div
                        onClick={() => setActiveSetting(3)}
                        className={`box-shadow rounded-[12px] p-[24px] border-[2px] 
                                ${activeSetting === 3 ? "border-[rgba(52,78,173,1)]" : ""} cursor-pointer`}
                    >
                        <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Theme Preferences</h3>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Choose between light or dark mode for the interface
                        </p>
                    </div>
                    <div
                        onClick={() => setActiveSetting(4)}
                        className={`box-shadow rounded-[12px] p-[24px] border-[2px] 
                                ${activeSetting === 4 ? "border-[rgba(52,78,173,1)]" : ""} cursor-pointer`}
                    >
                        <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Data Management</h3>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Control data sharing, export data, or delete account
                        </p>
                    </div>
                </div>
                <div className="w-full md:mt-[86px]">
                    <div className="box-shadow p-[24px] flex justify-around items-center rounded-[12px] mb-[24px]">
                        <div className="flex gap-[10px] items-center">
                            <Image
                                src={"/assets/temp/profine_pic.svg"}
                                height={80}
                                width={80}
                                alt="profile"
                                className={"rounded-full"}
                            />
                            <div className="">
                                <h3 className="text-primary font-[600] text-[20px] leading-[30px] tracking-[0.01em]">Upload Photo</h3>
                                <p className="text-primary font-[300] text-[12px] leading-[18px]">Profile pic</p>
                            </div>
                        </div>
                        <div className="text-primary box-shadow cursor-pointer rounded-[6px] p-[6px_12px] border-[1px] border-[var(--blue-primary)]">Update</div>
                    </div>
                    <div className="box-shadow p-[48px] rounded-[12px]">
                        <h3 className="text-primary font-[600] text-[24px] leading-[36px] tracking-[0.01em]">Change User Information</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsComponent