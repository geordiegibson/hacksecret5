import { Link } from "react-router-dom"
import Menu from "../components/Menu"
import { useRef, useState } from "react";

const CoinCreation = () => {

    const fileInputRef = useRef<HTMLInputElement | null>(null); 

    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleClick = () => {
        fileInputRef.current?.click();
      };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        setImageSrc(URL.createObjectURL(file)); // Create a local preview
        }
    };

    return (
        <>
            <p className="mt-16 geist font-bold text-gray-400">Lets make it happen</p>
            <p className="text-4xl geist font-bold">Coin Creation</p>

            <div className="flex justify-center items-center w-full items-center h-[calc(100vh-250px)]">

                <div className="flex flex-col p-10 space-y-4 rounded-xl bg-zinc-900 w-96">

                <div className="flex justify-center w-full">
                    <div onClick={handleClick} className="text-3xl w-24 h-24 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-[0_0_20px_white]">

                    {imageSrc ? (
                        <img src={imageSrc} alt="Profile" className="w-full h-full rounded-full object-cover" />
                    ) : (
                        "+"
                    )}

                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />

                </div>

                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="coinName" className="text-gray-400 text-xs">Coin Name</label>
                        <input id="coinName" autoFocus={true} placeholder="Secert Coin" className="rounded-md p-2 bg-zinc-800 text-sm text-white w-full"/>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="coinName" className="text-gray-400 text-xs">Initial Investment</label>
                        <input id="invest" placeholder="10,000" className="rounded-md p-2 bg-zinc-800 text-sm text-white w-full"/>
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        <label htmlFor="coinName" className="text-gray-400 text-xs">Pull Target</label>
                        <input id="target" placeholder="50,000" className="rounded-md p-2 bg-zinc-800 text-sm text-white w-full"/>
                    </div>

                    <Link to="/marketing" className="text-center bg-white rounded-md p-2 text-sm text-black">Next</Link>

                </div>

            </div>

            <Menu page={"create"} />
            
            
        </>
        
    )
}

export default CoinCreation