import { useState } from "react";

type Props = {}

const DataManagement = (props: Props) => {
    const [dataSharingChecked, setDataSharingChecked] = useState<boolean>(false);

    return (
        <div className="box-shadow p-[24px] md:p-[48px] flex flex-col gap-[24px] rounded-[12px] mb-[24px]">
            <div className="flex justify-between">
                <div className="max-w-[264px]">
                    <h3 className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Data Sharing</h3>
                    <p className="text-primary font-[300] text-[14px] leading-[21px]">
                        Control sharing settings for your data with third-party services or within the platform.
                    </p>
                </div>
                <div
                    onClick={() => setDataSharingChecked(!dataSharingChecked)}
                    className={`relative w-[52px] h-[24px] border-[2px] border-[var(--blue-primary)] rounded-[12px] transition-all cursor-pointer flex items-center ${dataSharingChecked ? "bg-[var(--blue-primary)]" : "bg-white"}`}
                >
                    <div className={`absolute transition-all h-[18px] w-[18px] ${dataSharingChecked ? "left-[calc(100%-20px)] bg-white" : "left-[2px] bg-[var(--blue-primary)]"}  rounded-full`} />
                </div>
            </div>
            <div className="max-w-[264px]">
                <h3 className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Delete Account</h3>
                <p className="text-primary font-[300] text-[14px] leading-[21px]">
                    Permanently delete your account and associated data from the platform.
                </p>
            </div>
            <button className="text-primary w-[190px] transition-all border-[1px] border-red-800 bg-white hover:bg-red-300 rounded-[8px] p-[12px_24px] font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Delete Account</button>
        </div>
    )
}

export default DataManagement