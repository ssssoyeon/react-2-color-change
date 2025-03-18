import React, {useState, useRef} from 'react'
import './ColorChange.scss'

const ColorChange = () => {

    const getRandomColor = () => {
        const randomColor = '#' + Math.random().toString(16).slice(2,8).padEnd(6,'0')

        return randomColor
    }

    const [bgColor, setBgColor] = useState(getRandomColor())
    const [isPlaying, setIsPlaying] = useState(false)
    const interValRef = useRef(null)

    const startBgChange = () => {
        if(!interValRef.current){
            interValRef.current = setInterval(() => {
                setBgColor(getRandomColor())
            }, 2000)
            setIsPlaying(true)
        }
    }

    const stopBgChange = () => {
        if(interValRef.current){
            clearInterval(interValRef.current)
            interValRef.current = null
            setIsPlaying(false)
        }
    }

    return (
        <div className='bg-container'style={{backgroundColor: bgColor}}>
            <h1 className='color-code'>{bgColor.toUpperCase()}</h1>
            <div className="button-group">
                <button onClick={startBgChange} className="control-button" disabled={isPlaying}>play</button>
                <button onClick={stopBgChange} className="control-button" disabled={!isPlaying}>stop</button>
            </div>
        </div>
    )
}

export default ColorChange