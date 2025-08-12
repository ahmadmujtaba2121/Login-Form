import { useState } from "react"
import { useAuthActions } from "../hooks/useAuthActions"

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
        <div className="w-full max-w-2xl bg-white/30 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-10 mx-auto">
            <div className="text-4xl font-bold tracking-wide text-center mb-10 text-zinc-800">
                <h1>Create an account</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        className="p-3 rounded-md bg-white/70 w-full focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder:text-gray-500 text-zinc-800"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        className="p-3 rounded-md bg-white/70 w-full focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder:text-gray-500 text-zinc-800"
                    />
                </div>

                <div className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-3 rounded-md bg-white/70 w-full focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder:text-gray-500 text-zinc-800"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-3 rounded-md bg-white/70 w-full focus:outline-none focus:ring-2 focus:ring-zinc-500 placeholder:text-gray-500 text-zinc-800"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white w-full p-3 rounded-lg font-medium transition duration-300"
                >
                    Sign Up
                </button>

                <div className="grid grid-cols-1 gap-4">
                    <button
                        type="button"
                        className="border border-zinc-500 text-zinc-800 hover:bg-zinc-700 hover:text-white transition-all duration-300 p-3 rounded-lg"
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
