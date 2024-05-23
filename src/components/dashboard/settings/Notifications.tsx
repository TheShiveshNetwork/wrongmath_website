import { useState } from "react";

type Props = {}

const Notifications = (props: Props) => {
    const [emailNotificationChecked, setEmailNotificationChecked] = useState<boolean>(false);
    const [selectedFrequency, setSelectedFrequency] = useState<string>("");

    return (
        <div className="box-shadow p-[24px] md:p-[48px] flex flex-col gap-[24px] rounded-[12px] mb-[24px]">
            <div className="flex flex-col gap-[8px]">
                <h3 className="text-primary font-[600] text-[24px] leading-[36px] tracking-[0.01em]">Notifications</h3>
                <p className="text-primary font-[300] text-[14px]">
                    Manage your email notification preferences below. Stay informed about important updates and events.
                </p>
            </div>
            <div className="flex justify-between">
                <h3 className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Email Notifications</h3>
                <div
                    onClick={() => setEmailNotificationChecked(!emailNotificationChecked)}
                    className={`relative w-[52px] h-[24px] border-[2px] border-[var(--blue-primary)] rounded-[12px] transition-all cursor-pointer flex items-center ${emailNotificationChecked ? "bg-[var(--blue-primary)]" : "bg-white"}`}
                >
                    <div className={`absolute transition-all h-[18px] w-[18px] ${emailNotificationChecked ? "left-[calc(100%-20px)] bg-white" : "left-[2px] bg-[var(--blue-primary)]"}  rounded-full`} />
                </div>
            </div>
            <div className="flex flex-col gap-[16px]">
                <h3 className="text-primary font-[500] text-[18px] leading-[27px] -tracking-[0.02em]">Notification frequency</h3>
                <div className="flex w-full justify-between items-center">
                    <div className="max-w-[264px] w-full">
                        <div className="text-primary font-[400] text-[16px] leading-[24px]">Immediate</div>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Receive notifications as soon as they are available.
                        </p>
                    </div>
                    <div
                        onClick={() => setSelectedFrequency("immediate")}
                        className="h-[24px] w-[24px] p-[4px] rounded-full border-[2px] border-[var(--blue-primary)] cursor-pointer"
                    >
                        {selectedFrequency === "immediate" && <div className="h-full w-full rounded-full bg-[var(--blue-primary)]" />}
                    </div>
                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="max-w-[264px] w-full">
                        <div className="text-primary font-[400] text-[16px] leading-[24px]">Daily Digest</div>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Receive notifications as soon as they are available.
                        </p>
                    </div>
                    <div
                        onClick={() => setSelectedFrequency("dailyDigest")}
                        className="h-[24px] w-[24px] p-[4px] rounded-full border-[2px] border-[var(--blue-primary)] cursor-pointer"
                    >
                        {selectedFrequency === "dailyDigest" && <div className="h-full w-full rounded-full bg-[var(--blue-primary)]" />}
                    </div>
                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="max-w-[264px] w-full">
                        <div className="text-primary font-[400] text-[16px] leading-[24px]">Weekly Digest</div>
                        <p className="text-primary font-[300] text-[12px] leading-[18px]">
                            Receive notifications as soon as they are available.
                        </p>
                    </div>
                    <div
                        onClick={() => setSelectedFrequency("weeklyDigest")}
                        className="h-[24px] w-[24px] p-[4px] rounded-full border-[2px] border-[var(--blue-primary)] cursor-pointer"
                    >
                        {selectedFrequency === "weeklyDigest" && <div className="h-full w-full rounded-full bg-[var(--blue-primary)]" />}
                    </div>
                </div>
            </div>
            <button className="w-full p-[16px_10px] bg-[var(--blue-primary)] text-white font-[600] text-[16px] rounded-[12px]">Save</button>
        </div>
    )
}

export default Notifications