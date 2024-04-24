import { ParamHTMLAttributes } from "react"

export const Centered = (props: ParamHTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`flex flex-col items-center justify-center h-full w-full ${props.className}`}>
            {props.children}
        </div>
    )
}