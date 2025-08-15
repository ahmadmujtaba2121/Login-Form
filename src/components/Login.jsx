import { useState } from "react"
import { useAuthActions } from "../hooks/useAuthActions"
import {
    formContainer,
    formHeading,
    inputGroupTwoCols,
    inputGroupStack,
    inputBase,
    buttonPrimary,
    buttonSocial,
    socialButtonGroup
} from "../FormStyles"

function Form() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signInWithProvider, signUpWithEmail } = useAuthActions({
        redirectUrl: "/dashboard"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpWithEmail(email, password, firstName, lastName)
    }

    return (
        <div className={formContainer}>
            <div className={formHeading}>
                <h1>Create an account</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className={inputGroupTwoCols}>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className={inputBase}
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className={inputBase}
                    />
                </div>

                <div className={inputGroupStack}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className={inputBase}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className={inputBase}
                    />
                </div>

                <button type="submit" className={buttonPrimary}>
                    Sign Up
                </button>

                <div className={socialButtonGroup}>
                    <button
                        type="button"
                        className={buttonSocial}
                        onClick={() => signInWithProvider("google")}
                    >
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    )
}


export default Form
