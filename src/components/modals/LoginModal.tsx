"use client"
import { Dispatch, SetStateAction, useEffect, useLayoutEffect } from "react"
import LoginForm from "../forms/LoginForm"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

type Props = {
    modalOpen: boolean;
    setModalOpen: Dispatch<SetStateAction<boolean>>
}

const LoginModal = ({ modalOpen, setModalOpen }: Props) => {
    useEffect(() => {
        if(window.innerWidth > 740)
            modalOpen ? disablePageScroll() : enablePageScroll();
    }, [modalOpen])
    return (
        <div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-white bg-opacity-60 flex items-center justify-center"
            onClick={() => setModalOpen(false)}
        >
            <div className="bg-white w-full md:max-w-[795px] h-screen overflow-y-scroll overflow-x-hidden rounded-[24px] md:px-[133px] py-10" onClick={e => e.stopPropagation()}>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginModal