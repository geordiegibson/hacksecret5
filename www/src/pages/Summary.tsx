import { Link } from "react-router-dom"
import CreationProgress from "../components/CreationProgress"
import Menu from "../components/Menu"

const Summary = () => {
    return (
        <>
            <CreationProgress page="summary" />

            <div className="flex justify-center items-center w-full items-center h-[calc(100vh-250px)]">

                <div className="flex flex-col p-10 space-y-4 rounded-xl bg-zinc-900 w-124">

                <div className="flex items-center gap-6 w-full mb-10 justify-center">
                    <div className="text-3xl w-24 h-24 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-[0_0_20px_white]"></div>
                    <div>
                        <p className="geist font-bold text-2xl">Goon Coin</p>
                        <p className="geist font-bold text-lg text-gray-400">$GOON</p>
                    </div>
                    
                </div>

                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col w-full items-start gap-1 bg-zinc-800 rounded-md p-3">
                            <label htmlFor="coinName" className="text-gray-400 text-xs">Initial Investment</label>
                            <p className="geist text-xl">$10,000 USD</p>
                        </div>

                        <div className="flex flex-col w-full items-start gap-1 bg-zinc-800 rounded-md p-3">
                            <label htmlFor="coinName" className="text-gray-400 text-xs">Pull Target</label>
                            <p className="geist text-xl">$50,000 USD</p>
                        </div>
                    </div>
                    

                    <div className="bg-zinc-800 rounded-md p-3 flex items-center justify-center gap-4">
                        <svg className="fill-white h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                        <p>Successfully connected to Twitter</p>
                    </div>

                    <Link to="/collection" className="bg-white text-black rounded-md geist text-center p-3 mt-5">Create 🚀</Link>

                </div>

            </div>

            <Menu page="create" />
        </>
        
    )
}

export default Summary