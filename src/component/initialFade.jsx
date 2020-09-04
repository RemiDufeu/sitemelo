import React, { useState, useEffect } from "react"

const InitialFade = function ({children}) {

    const [transition, setTransition] = useState(false)

    const on = function () {
        let myVar = setTimeout(setTransition(true), 10000)
    }

    useEffect(()=>{
        if (transition === false) {
            on()
        }
    })
    

    const style1 = {opacity : "0", transitionDuration : "3s"}
    const style2 = {opacity : "1", transitionDuration : "3s"}

    return (<div style={transition == true ? style2 : style1} >
        {children}</div>
    )
}

export default InitialFade