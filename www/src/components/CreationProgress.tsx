type CreationProgressProps = {
    page: "create" | "marketing" | "connect" | "summary"
}

const CreationProgress = (props: CreationProgressProps) => {
    return (
        <div className="flex w-full justify-between">
            <div className="mt-12">
                <p className="geist font-bold text-gray-400">Get Started</p>
                <p className={`text-4xl geist font-bold ${props.page === "create" ? "text-white" : "text-gray-400"}`}>Coin Creation</p>
            </div>

            <div className="mt-12">
                <p className="geist font-bold text-gray-400">To the Moon</p>
                <p className={`text-4xl geist font-bold ${props.page === "marketing" ? "text-white" : "text-gray-400"}`}>Marketing</p>
            </div>

            <div className="mt-12">
                <p className="geist font-bold text-gray-400">Lets make it happen</p>
                <p className={`text-4xl geist font-bold ${props.page === "connect" ? "text-white" : "text-gray-400"}`}>Connect</p>
            </div>

            <div className="mt-12">
                <p className="geist font-bold text-gray-400">Final Touches</p>
                <p className={`text-4xl geist font-bold ${props.page === "summary" ? "text-white" : "text-gray-400"}`}>Summary</p>
            </div>
        </div>
    )
}

export default CreationProgress