import { useRef } from "react"

export const useComponentWillMount = (callback: Function) => {
    const willMount = useRef(true)

    if (willMount.current) {
        callback();
    }

    willMount.current = false
}