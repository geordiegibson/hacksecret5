import { Link } from "react-router-dom"
import Menu from "../components/Menu"
import { useRef, useState } from "react";
import CreationProgress from "../components/CreationProgress";

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
            <CreationProgress page="create" />

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
            
            <Link className="flex items-center justify-center bg-zinc-900 rounded-full h-16 w-16" to="/marketing">
                <svg className="fill-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </Link>
        </>
        
    )
}

export default CoinCreation