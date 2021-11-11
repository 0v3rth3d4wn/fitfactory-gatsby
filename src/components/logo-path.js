import React from 'react'
// import useWindowSize from '../hooks/useWindowSize'
import { useWindowSize } from '@react-hook/window-size'
import useSize from '@react-hook/size'

const LogoPath = () => {
  const [windowWidth, height] = useWindowSize({ fps: 60, leading: true })
  const target = React.useRef(null)
  const [svgWidth, svgHeight] = useSize(target)
  return (
    <svg
      ref={target}
      version="1.1"
      id="SVG"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 269.8 303"
    >
      <clipPath id="logo-path" clipPathUnits="objectBoundingBox">
        <path
          d=" M 88 176.1 L 113.3 140 L 224 140 L 224 166.9 L 128.8 303 L 84.8 303 L 173.4 176.1 L 88 176.1"
          fill="rgb(0,0,0)"
        />
        <path
          d=" M 211.3 0 L 255.4 0 L 189.5 94.2 L 233.6 94.2 L 263.8 94.2 L 269.7 94.2 L 269.7 165.5 L 233.5 165.5 L 233.5 130.4 L 164.1 130.4 L 120 130.4 L 211.3 0 Z  M 0 221.9 L 129.5 221.9 L 154.8 185.7 L 69.5 185.7 L 76.3 176.1 L 101.6 139.9 L 108.4 130.3 L 111.2 124.9 L 113.4 119.3 L 115.1 113.5 L 116.2 107.6 L 116.8 101.6 L 116.8 95.6 L 116.2 89.6 L 115.1 83.7 L 113.4 77.9 L 111.2 72.3 L 108.5 66.9 L 105.2 61.7 L 101.4 56.9 L 97.2 52.5 L 92.6 48.5 L 87.6 44.9 L 82.3 41.8 L 76.7 39.2 L 70.2 37.1 L 63.6 35.5 L 56.9 34.5 L 50.1 34 L 43.3 34.1 L 36.7 35 L 30 36.2 L 23.4 37.9 L 17 40.2 L 10.8 43 L 4.8 46.3 L 4.8 85.5 L 9.2 81.9 L 14 78.7 L 19 76 L 24.3 73.8 L 29.8 72.1 L 35.4 70.9 L 41.1 70.3 L 46.8 70.2 L 52.5 70.6 L 58.1 71.6 L 63.6 73.1 L 67.3 75 L 70.7 77.4 L 73.7 80.3 L 76.2 83.6 L 78.2 87.2 L 79.6 91.1 L 80.4 95.2 L 80.6 99.3 L 80.2 103.4 L 79.2 107.4 L 77.6 111.2 L 64.2 130.4 L 57.5 140 L 32.2 176.2 L 25.4 185.8 L 0 221.9 Z "
          fill="rgb(0,0,0)"
        />
      </clipPath>
    </svg>
  )
}

export default LogoPath
