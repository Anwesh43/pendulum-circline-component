import React from 'react'
import {
  useStyle
} from './hooks'

const PendulumCircleComponent = ({w, h, scale, n, deg, onClick}) => {
    const { parentStyle, lineStyle, circleStyle } = useStyle(scale, w, h, n, deg)
    return (
        <div onClick = {onClick} style = {parentStyle()}>
            <div style = {lineStyle()}>
            </div>
            <div style = {circleStyle()}>
            </div>
        </div>
    )
}

export default PendulumCircleComponent