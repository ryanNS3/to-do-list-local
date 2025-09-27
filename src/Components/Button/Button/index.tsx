import type { ReactNode } from "react"

interface ButtonInterface{
    text: string,
    icon: ReactNode
}


export function Button({text, icon}: ButtonInterface){
    return(
        <button className="flex items-center justify-center gap-2 text-body-md font-semibold  min-w-[31.5rem] px-5 py-4 rounded-lg  bg-gray-200 hover:bg-pink-light "> {icon} {text}</button>
    )
}

