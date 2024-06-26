import LoginForm from "@/components/forms/LoginForm"

type Props = {}

const Login = (props: Props) => {
    return (
        <div className="h-full w-full flex items-center justify-center py-8">
            <LoginForm />
        </div>
    )
}

export default Login