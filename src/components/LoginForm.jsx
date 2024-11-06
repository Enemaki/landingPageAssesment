import { useState } from "react"
export default function LoginForm() {
    const [login, setLogin] = useState({
        savedEmail: "",
        savedPassword: "",
        remember: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setLogin((prevDetails) => {
            return {
                ...prevDetails,
                [name]: type==='checkbox' ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        submitViaAPI(login)
    }
    
    function submitViaAPI(data) {
        console.log(data)
        console.log("Submitted!")
    }

    return (
        <form className="w-11/12 flex flex-col gap-3">
            <section>
                <label htmlFor="email" className="text-sm font-bold font-semibold leading-5">Email Address</label>
                <input type="email" className="w-full md:w-98 border-grey-300 border p-4 rounded-md" 
                    name="savedEmail" 
                    id="savedEmail" 
                    placeholder="Enter Email"
                    value={login.savedEmail}
                    onChange={handleChange}
                />
            </section>
            <section>
                <label htmlFor="password" className="text-sm font-bold font-semibold leading-5">Password</label>
                <input type="password" className="w-full border-grey-300 border p-4 rounded-md" 
                    name="savedPassword" 
                    id="savedPassword" 
                    placeholder="Enter Password"
                    value={login.savedPassword}
                    onChange={handleChange}
                />
            </section>
            <section className="flex justify-between">
                <div>
                    <input type="checkbox" 
                        name="remember" 
                        id="remember"
                        checked={login.remember}
                        onChange={handleChange}
                    />
                    <label htmlFor="remember" className="font-semibold text-sm px-2">Remember me</label>
                </div>
                <p className="text-red-600 text-sm">Forgot Password?</p>
            </section>
            <section className="py-3">
                <button onClick={handleSubmit} className="bg-blue-700 rounded-lg py-4 px-6 leading-6 w-full text-white">Log into account</button>
            </section>
        </form>
    )
}