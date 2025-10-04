import type { ReactNode } from "react"

interface ButtonInterface{
    text: string;
    icon: ReactNode;
    onClick: () => void;
}


export function Button({text, icon, onClick}: ButtonInterface){
    return(
        <button onClick={onClick} className="flex items-center justify-center gap-2 text-body-md font-semibold  md:min-w-[31.5rem] px-5 py-4 rounded-lg  bg-gray-200 hover:bg-pink-light "> {icon} {text}</button>
    )
}

