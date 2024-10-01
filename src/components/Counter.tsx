import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0)
    const plusClick = ()=>(
        setValue(value + 1)
    )
    const minusClick = () =>{
        if(value == 0){
            return(setValue(0))
        }
        else{
            return (setValue(value - 1))
        }
    }

    return (
        <div className='border border-[#A3A3A3] rounded-[5px] grid grid-cols-3 items-center j w-full max-w-[123px] h-[44px] text-center'>
            <button onClick={()=>minusClick()}>-</button>
            <span>{value}</span>
            <button onClick={()=>plusClick()}>+</button>
        </div>
    )
}

export default Counter