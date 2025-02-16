import { useState } from "react"
import Menu from "../components/Menu"
import CollectionItem from "../components/CollectionItem"
import NoResult from "../components/NoResult"

const Collection = () => {

    const [collection, setCollection] = useState(1)

    return (
        <>
            <p className="mt-16 geist font-bold text-gray-400">To the Moon</p>
            <p className="text-4xl geist font-bold">Collection</p>

            {!collection ?
            <NoResult />
            :
            <div className="mt-5">
                <CollectionItem coinName={"Goon"} platforms={["instagram"]} target={50000} current={40000}/>
                <CollectionItem coinName={"SUI"} platforms={[]} target={50000} current={25000}/>
                <CollectionItem coinName={"Chur"} platforms={["tiktok", "twitter"]} target={50000} current={30000}/>
                <CollectionItem coinName={"UpTheWahs"} platforms={["tiktok", "twitter", "instagram"]} target={50000} current={50000}/>
            </div>
            }


            <Menu page={"collection"} />
        </>
    )
}

export default Collection