import {
  useState, 
  useEffect
}  from 'react'

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
