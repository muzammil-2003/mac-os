import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({children, width="40vw", height="40vw", windowName, windowState, setWindowState}) => {
    return (
        <Rnd
        default={{
            height: height,
            width: width,
            x: 300,
            y: 200            
        }}>
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={()=> {
                            setWindowState(state=> ({...state, [windowName]: false}))
                        }} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title"><p>muzammilahmed - zsh</p></div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow