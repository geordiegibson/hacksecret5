import { useRef, useState } from "react"
import CreationProgress from "../components/CreationProgress"
import axios from 'axios'
import Menu from "../components/Menu"

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
            inputRefs.current[index - 1].focus(); // Move back on delete
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

            <Menu page="create" />
            
        </>
        
    )
}

export default Connect