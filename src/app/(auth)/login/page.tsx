import LoginForm from "@/components/forms/LoginForm"

type Props = {}

const Login = (props: Props) => {
    return (
        <div className="h-full w-full md:flex md:items-center jmd:ustify-center py-8">
            <LoginForm />
        </div>
    )
}

export default Login