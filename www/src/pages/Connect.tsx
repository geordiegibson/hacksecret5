import { useState } from "react"
import CreationProgress from "../components/CreationProgress"
import axios from 'axios'

const Connect = () => {

    const [code, setCode] = useState("")
    const [oauthSuccess, setOAuthSuccess] = useState(false)
    
    const handleTwitterOAuthRequest = async () => {
        const result = await axios.get("http://localhost:8000/oauth/request")
        const redirectionUrl = result.data.authorisation_url
        window.open(redirectionUrl, '_blank');
    }

    const handleTwitterOAuthCodeSubmit = async () => {
        const result = await axios.get(`http://localhost:8000/oauth/access?verifier=${code}`)
        if (result.status === 200) {
            setOAuthSuccess(true)
        }
    }

    const handleTwitterPost = async () => {
        await axios.get(`http://localhost:8000/twitter/post`)
    }

    return (
        <>
            <CreationProgress page="connect" />
            <p>In order to promote SillyCoin on Twitter, you need to log in.</p>

            <button onClick={handleTwitterOAuthRequest}>Connect to Twitter</button>

            <div className="flex bg-zinc-900 w-96">
                <input value={code} onChange={(e) => setCode(e.target.value)} />
                <button onClick={handleTwitterOAuthCodeSubmit}>Submit</button>
            </div>

            {oauthSuccess ?? <p>Successfully connected to Twitter</p>}

            <button onClick={handleTwitterPost}>Post</button>
        </>
        
    )
}

export default Connect