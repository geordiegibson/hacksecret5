import { useRef, useState } from "react"
import CreationProgress from "../components/CreationProgress"
import axios from 'axios'
import Menu from "../components/Menu"
import { Link } from "react-router-dom"

const Connect = () => {

    const [codes, setCodes] = useState(["", "", "", "", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement)[]>([]);

    const handleChange = (index: any, e: any) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const newCodes = [...codes];
        newCodes[index] = value;
        setCodes(newCodes);

        if (value && index < codes.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index: any, e: any) => {
        if (e.key === "Backspace" && !codes[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    
    const handleTwitterOAuthRequest = async () => {
        const result = await axios.get("http://localhost:8000/oauth/request")
        const redirectionUrl = result.data.authorisation_url
        window.open(redirectionUrl, '_blank');
    }

    const handleTwitterOAuthCodeSubmit = async () => {
        const code = codes.join("")
        await axios.get(`http://localhost:8000/oauth/access?verifier=${code}`)
    }

    const handleTwitterPost = async () => {
        await axios.get(`http://localhost:8000/twitter/post`)
    }

    return (
        <>
            <CreationProgress page="connect" />

            <div className="flex flex-col gap-5 justify-center items-center mt-48">

                <p>In order to promote SillyCoin on Twitter, you need to log in.</p>

                <button onClick={handleTwitterOAuthRequest} className="bg-white rounded-md text-black p-3 my-3">Connect to Twitter</button>

                <div className="flex gap-2">
                    {codes.map((code, index) => (
                        <input
                            key={index}
                            ref={(el) => {inputRefs.current[index] = el!}}
                            className="bg-white h-16 w-16 rounded-xl bg-zinc-700 text-center text-xl"
                            value={code}
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </div>
                    
                    <button onClick={handleTwitterOAuthCodeSubmit} className="p-3 my-3">Submit</button>
            </div>

            <Link className="flex items-center justify-center bg-zinc-900 rounded-full h-16 w-16" to="/summary">
                <svg className="fill-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </Link>

            <Menu page="create" />
            
        </>
        
    )
}

export default Connect