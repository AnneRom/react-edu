import { useId } from "react"

const LoginForm = ({ onLogin }) => {
    const loginId = useId();
    const passwordId = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const form = evt.target
        const { login, password } = form.elements

        console.log(form)
        console.log(login, password)

        onLogin({
            login: login.value,
            password: password.value
        })

        form.reset()
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={loginId}>Login: </label>
            <input type="text" name="login"/>
            <br />
            <label htmlFor={passwordId}>Password: </label>
            <input type="password" name="password" />
            <br />
            <button type="submit">Log in</button>
        </form>
    )

}
export default LoginForm