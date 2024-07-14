import { useRef } from "react"

export default function UseCustomEffect(cb, deps) {
    //  first render
    const isFirstRender = useRef(true)
    const oldDeps = useRef([])

    if (isFirstRender.current) {
        isFirstRender.current = false
        cb()
        oldDeps.current = deps
    }
    // if any depencies changed
    // const isDepsChanged= deps ? deps.some((dep,i)=>dep!==oldDeps.current[i]) :true
    const isDepsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(oldDeps.current) : true
    if (isDepsChanged) {
        const cleanup = cb()
        if (cleanup && typeof cleanup === 'function' && deps) {
            cleanup()
        }
    }
    oldDeps.current = deps || []
}