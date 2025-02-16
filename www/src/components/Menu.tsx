import { Link } from "react-router-dom"

interface MenuProps {
    page: "create" | "collection" | "wallet"
}

const Menu = (props: MenuProps) => {

    return (
        <div className="flex flex-col w-full items-center justify-center">

            <nav className="fixed bottom-4 z-30 mx-auto flex w-max flex-row items-center justify-center gap-1 overflow-visible rounded-full p-1 shadow-lg ring-1 backdrop-blur-sm bg-zinc-900 ring-zinc-700/50">

                <Link to="/" className="group relative flex select-none items-center rounded-full p-3 outline-none transition-all duration-400 bg-zinc-900 hover:bg-slate-800">
                    <svg className="h-5" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                </Link>

                <div className="mx-1 h-4 w-[1px] bg-white/20 md:mx-2"></div>
                
                <Link to="/create" className={`${props.page === 'create' ? "bg-white" : "hover:bg-slate-800"} group relative flex select-none items-center rounded-full p-3 outline-none transition-all duration-400`}>
                    <svg className="h-4" fill={props.page === 'create' ? 'black' : 'white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                </Link>

                <Link to="/collection" className={`${props.page === 'collection' ? "bg-white" : "hover:bg-slate-800"} group relative flex select-none items-center rounded-full p-3 outline-none transition-all duration-400`}>
                <svg className="h-4" fill={props.page === 'collection' ? 'black' : 'white'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/></svg>                </Link>

                <Link to="/wallet" className={`${props.page === 'wallet' ? "bg-white" : "hover:bg-slate-800"} group relative flex select items-center rounded-full p-3 outline-none transition-all duration-400`}>
                    <svg className="h-4" fill={props.page === 'wallet' ? 'black' : 'white'} viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                </Link>
            </nav>
        </div>
    )
}

export default Menu