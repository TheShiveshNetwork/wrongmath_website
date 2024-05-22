import Image from "next/image"

type Props = {}

const SignUpForm = (props: Props) => {
    return (
        <div className="w-[528px] flex flex-col gap-[40px] px-6 md:px-0">
            <div className="flex flex-col items-center">
                <Image
                    src={"/assets/logo.svg"}
                    height={96}
                    width={265}
                    alt={"logo"}
                />
                <h3 className="font-[500] text-[32px] text-[rgba(51,51,51,1)] mt-[24px]">Create an account</h3>
                <p className="text-[rgba(102,102,102,1)]">Already have an account? Login</p>
            </div>
            <button className="bg-white font-[400] text-[20px] tracking-[0.05em] w-full h-[54px] rounded-[40px] text-blue border-[1px] border-[rgba(52,78,173,1)] flex items-center justify-center gap-[16px]">
                <Image
                    src={"/assets/icons/google.svg"}
                    height={24}
                    width={24}
                    alt={"googlelogo"}
                />
                Continue with Google
            </button>
            <div className="flex w-full items-center gap-[17px]">
                <div className="w-full h-[2px] bg-[rgba(102,102,102,0.25)]" />
                <div className="left-1/2 font-[900] text-[rgba(102,102,102,1)]">OR</div>
                <div className="w-full h-[2px] bg-[rgba(102,102,102,0.25)]" />
            </div>
            <p className="text-center font-[200] text-[20px] tracking-[0.01em] text-blue">Enter your email address to create an account.</p>
            <div>
                <label htmlFor="email_input" className="text-gray-400 font-[400] text-[16px] leading-[24px] pb-[7px]">Your email</label>
                <input className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] text-[18px] px-4 mb-[16px]" type="text" id="email_input " name="email" />
                <label htmlFor="email_input" className="text-gray-400 font-[400] text-[16px] leading-[24px] pb-[7px]">Username</label>
                <input className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] text-[18px] px-4 mb-[16px]" type="text" id="email_input " name="email" />
                <label htmlFor="passward" className="text-gray-400 font-[400] text-[16px] leading-[24px] pb-[7px]">Passward</label>
                <input className="w-full h-[56px] outline-none border-[1px] border-[rgba(102,102,102,0.35)] rounded-[12px] text-[18px] px-4 " type="text" id="passward " name="passward" />
            </div>

            <button className="bg-[rgba(52,78,173,1)] text-white font-[500] text-[20px] tracking-[0.01em] w-full h-[54px] rounded-[40px] disabled:opacity-[25%] disabled:bg-[rgba(17,17,17,1)]">Sign up</button>
        </div>
    )
}

export default SignUpForm