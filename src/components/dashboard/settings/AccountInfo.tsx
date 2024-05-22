import Image from "next/image"

type Props = {}

const AccountInfo = (props: Props) => {
    return (
        <>
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
                <h3 className="text-primary font-[600] text-[24px] leading-[36px] tracking-[0.01em] mb-[24px]">Change User Information</h3>
                <div>
                    <div className="text-gray font-[600] text-[16px] leading-[24px] tracking-[0.01em] mb-[8px]">Name</div>
                    <input type="text" className="text-primary w-full mb-[32px] p-[16px] border-[2px] border-[var(--text-primary)] rounded-[12px] font-[500] text-[18px] leading-[27px] -tracking-[0.02em]" placeholder="Enter name" />
                    <div className="text-gray font-[600] text-[16px] leading-[24px] tracking-[0.01em] mb-[8px]">Password</div>
                    <input type="text" className="text-primary w-full mb-[32px] p-[16px] border-[2px] border-[var(--text-primary)] rounded-[12px] font-[500] text-[18px] leading-[27px] -tracking-[0.02em]" placeholder="Enter password" />
                    <div className="text-gray font-[600] text-[16px] leading-[24px] tracking-[0.01em] mb-[8px]">E-mail</div>
                    <input type="text" className="text-primary w-full mb-[24px] p-[16px] border-[2px] border-[var(--text-primary)] rounded-[12px] font-[500] text-[18px] leading-[27px] -tracking-[0.02em]" placeholder="Enter email" />
                    <button className="h-[56px] w-full rounded-[12px] text-white bg-[var(--blue-primary)] font-[600] text-[16px]">Update information</button>
                </div>
            </div>
        </>
    )
}

export default AccountInfo