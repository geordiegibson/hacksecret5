const AvatarStack = () => {

    const displayCoins = () => {
        return (
            <>
                <img
    alt=""
    src={"./xIcon.png"}
    className="inline-block h-24 w-24 ring-2 rounded-full ring-white object-cover"
/>

<img
    alt=""
    src={"./gradientPFP.svg"}
    className="inline-block h-24 w-24 bg-black rounded-full ring-white object-cover"
/>
            </>
            
        )
    }

    return (
      <>
        <div className="flex -space-x-12">
          {displayCoins()}
        </div>
      </>
    )
  }
  
  export default AvatarStack