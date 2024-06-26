"use client"
import { Dispatch, SetStateAction, useEffect } from "react"
import SignUpForm from "../forms/SignUpForm"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const SignUpModal = ({ modalOpen, setModalOpen }: Props) => {
    useEffect(() => {
        if(window.innerWidth > 740)
            modalOpen ? disablePageScroll() : enablePageScroll();
    }, [modalOpen])
    return (
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white bg-opacity-60 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
        >
            <div className="bg-white max-w-[795px] h-screen overflow-y-scroll overflow-x-hidden rounded-[24px] px-[133px] py-10" onClick={e => e.stopPropagation()}>
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUpModal