import {
  useState, 
  useEffect
}  from 'react'
import { cumulativeRotation } from './utils'

export const useAnimated = (scGap = 0.92, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useAnimated(false)
    return {
        scale, 
        start() {
           if (!animated) {
              setAnimated(true)
              let currScale = 0
              const interval = setInterval(() => {
                  currScale += scGap 
                  setScale(currScale)
                  if (currScale > 1) {
                      setScale(0)
                      setAnimated(false)
                      clearInterval(interval)
                  }
              }, delay)
           }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (scale, w, h, n, deg) => {
    const position = 'absolute'
    const background = '#795548'
    const left = `${w / 2}px`
    const top = `${h / 2}px`
    const lineWidth = Math.min(w, h) / 90
    const lineSize = Math.min(w, h) / 6.9 
    const r = Math.min(w, h) / 12.2 
    return {
        parentStyle() {
            const WebkitTransform = `rotate(${cumulativeRotation(scale, n, deg)})deg`
            return {
                position, 
                left, 
                top, 
                WebkitTransform 
            }
        },
        lineStyle() {
            const top = '0px'
            const left = `${-lineWidth / 2}px`
            const width = `${lineWidth}px`
            const height = `${lineSize}px`
            return {
                position,
                width, 
                top, 
                left, 
                width, 
                height,
                background
            }
        },
        circleStyle() {
            const top = `${lineSize}px`
            const left = `${-r}px`
            const width = `${2 * r}px`
            const height = `${2 * r}px`
            const borderRadius = '50%'
            return {
                position, 
                left, 
                top, 
                width,
                height,
                background 
            }
        }
    }
}