"use client"
import { Dispatch, SetStateAction, useEffect } from "react"
import LoginForm from "../forms/LoginForm"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const LoginModal = ({ modalOpen, setModalOpen }: Props) => {
    useEffect(() => {
        modalOpen ? disablePageScroll() : enablePageScroll();
    }, [modalOpen])
    return (
        <div
            className="fixed h-screen overflow-y-scroll top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white bg-opacity-60 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
        >
            <div className="bg-white max-w-[795px] max-h-[806px] rounded-[24px] px-[133px] py-[33px]" onClick={e => e.stopPropagation()}>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginModal