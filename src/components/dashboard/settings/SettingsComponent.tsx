"use client"
import Image from "next/image";
import { useState } from "react";
import AccountInfo from "./AccountInfo";
import Notifications from "./Notifications";
import Security from "./Security";
import ThemePreferences from "./ThemePreferences";
import DataManagement from "./DataManagement";

type Props = {}

const SettingsComponent = (props: Props) => {
    const [activeSetting, setActiveSetting] = useState<number>(0);

    return (
        <div className="w-full">
            <div className="w-full flex gap-[64px]">
                <div className="flex flex-col gap-[16px] w-full md:max-w-[354px]">
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
                    {activeSetting === 0 && (
                        <div className="md:hidden block w-full md:mt-[86px]">
                            <AccountInfo />
                        </div>
                    )}
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
                    {activeSetting === 1 && (
                        <div className="md:hidden block w-full md:mt-[86px]">
                            <Notifications />
                        </div>
                    )}
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
                    {activeSetting === 2 && (
                        <div className="md:hidden block w-full md:mt-[86px]">
                            <Security />
                        </div>
                    )}
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
                    {activeSetting === 3 && (
                        <div className="md:hidden block w-full md:mt-[86px]">
                            <ThemePreferences />
                        </div>
                    )}
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
                    {activeSetting === 4 && (
                        <div className="md:hidden block w-full md:mt-[86px]">
                            <DataManagement />
                        </div>
                    )}
                </div>
                <div className="hidden md:block w-full md:mt-[86px]">
                    {activeSetting === 0 && (
                        <AccountInfo />
                    )}
                    {activeSetting === 1 && (
                        <Notifications />
                    )}
                    {activeSetting === 2 && (
                        <Security />
                    )}
                    {activeSetting === 3 && (
                        <ThemePreferences />
                    )}
                    {activeSetting === 4 && (
                        <DataManagement />
                    )}
                </div>
            </div>
        </div>
    )
}

export default SettingsComponent