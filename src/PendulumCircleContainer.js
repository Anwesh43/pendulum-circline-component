import React from 'react'
import {
  useAnimatedScale,
  useDimension 
} from './hooks'
import PendulumCircleComponent from './PendulumCircleComponent'

const PendulumCircleContainer = ({n, deg}) => {  
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 20)
    return (
        <PendulumCircleComponent scale = {scale} w = {w} h = {h} onClick = {onClick} n = {n} deg = {deg}>
        </PendulumCircleComponent>
    )
}

export default PendulumCircleContainer