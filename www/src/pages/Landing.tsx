import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className="flex h-screen w-screen justify-center items-center flex flex-col">

            <h1 className="geist">⛽️ & 💩</h1>

            <p>You're a terrible person!</p>

            <Link className="bg-white p-2 text-black rounded-md mt-10" to="create">Get Started</Link>
        </div>
    )
}

export default Landing