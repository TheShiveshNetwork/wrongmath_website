import SignUpForm from "@/components/forms/SignUpForm"

type Props = {}

const SignUp = (props: Props) => {
    return (
        <div className="h-full w-full flex items-center justify-center py-8">
            <SignUpForm />
        </div>
    )
}

export default SignUp