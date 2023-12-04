import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function ButtonSpinnerLoader({color}) {
    return (
        <div className='flex justify-center items-center'>
            <RotatingLines
                strokeColor={color}
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={true}
            />
        </div>
    )
}

export default ButtonSpinnerLoader
