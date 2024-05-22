import LineGraph from "@/components/dashboard/LineGraph"

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className="w-full">
            <h1 className="heading-primary">
                Welcome back, <span className="text-[rgba(52,78,173,1)]">Gaurav</span>
            </h1>
            <div className="mt-[24px] flex flex-col box-shadow h-auto p-[42px_42px_33px_20px] rounded-[24px] w-full">
                <h1 className="text-[24px] lg:text-[30px] font-[700] text-primary leading-[45px] text-center mb-[35px]">Overall Performance</h1>
                <LineGraph />
            </div>
            <div className="flex flex-row lg:flex-col gap-6">
                <div className="mt-[24px] py-6 min-h-[158px] flex flex-col lg:flex-row box-shadow w-1/2 lg:w-full items-center justify-center gap-[42px] rounded-[24px]">
                    <div className="text-[24px] font-[500] leading-[36px] -tracking-[0.02em] text-center">
                        <span className="text-[rgba(52,78,173,1)] font-[600] text-[44px]">PYQ&apos;s</span><br />Answered
                    </div>
                    <div className="w-[110px] h-[2px] lg:h-[110px] lg:w-[2px] bg-[#BAD6EB]" />
                    <div className="text-[16px] lg:text-[24px] h-[110px] font-[400] leading-[36px] -tracking-[0.02em] text-center">
                        <span className=" text-[rgba(52,78,173,1)]">Physics</span> <br />
                        <span className="text-primary font-[600] text-[32px] lg:text-[44px] leading-[66px]">24/20</span>
                    </div>
                    <div className="w-[110px] h-[2px] lg:h-[110px] lg:w-[2px] bg-[#BAD6EB]" />
                    <div className="text-[16px] lg:text-[24px] h-[110px] font-[400] leading-[36px] -tracking-[0.02em] text-center">
                        <span className=" text-[rgba(52,78,173,1)]">Chemistry</span> <br />
                        <span className="text-primary font-[600] text-[32px] lg:text-[44px] leading-[66px]">10/20</span>
                    </div>
                    <div className="w-[110px] h-[2px] lg:h-[110px] lg:w-[2px] bg-[#BAD6EB]" />
                    <div className="text-[16px] lg:text-[24px] h-[110px] font-[400] leading-[36px] -tracking-[0.02em] text-center">
                        <span className=" text-[rgba(52,78,173,1)]">Mathematics</span> <br />
                        <span className="text-primary font-[600] text-[32px] lg:text-[44px] leading-[66px]">45/20</span>
                    </div>
                </div>
                <div className="mt-[24px] flex flex-col lg:flex-row gap-[24px] w-full">
                    <div className="box-shadow lg:w-1/4 h-[170px] w-full lg:min-w-[238px] flex flex-col gap-[16px] items-center justify-center text-center">
                        <h3 className="text-[rgba(52,78,173,1)] max-w-[158px]">question answered in a day(best)</h3>
                        <div className="text-primary font-[600] text-[44px] leading-[66px]">90</div>
                    </div>
                    <div className="box-shadow lg:w-1/4 h-[170px] w-full lg:min-w-[238px] flex flex-col gap-[16px] items-center justify-center text-center">
                        <h3 className="text-[rgba(52,78,173,1)] max-w-[158px]">question answered in a day(today)</h3>
                        <div className="text-primary font-[600] text-[44px] leading-[66px]">54</div>
                    </div>
                    <div className="box-shadow lg:w-1/4 h-[170px] w-full lg:min-w-[238px] flex flex-col gap-[16px] items-center justify-center text-center">
                        <h3 className="text-[rgba(52,78,173,1)] max-w-[158px]">Average question answered(weekly)</h3>
                        <div className="text-primary font-[600] text-[44px] leading-[66px]">43</div>
                    </div>
                    <div className="box-shadow lg:w-1/4 h-[170px] w-full lg:min-w-[238px] flex flex-col gap-[16px] items-center justify-center text-center">
                        <h3 className="text-[rgba(52,78,173,1)] max-w-[158px]">No of Day Active</h3>
                        <div className="text-primary font-[600] text-[44px] leading-[66px]">4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard