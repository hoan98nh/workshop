import React, { act, useState } from 'react'

const ColorSelect = () => {
    const [active, setActive] = useState(false)

  return (
    <button className={`w-[30px] h-[30px] bg-[#816DFA] rounded-[50%] border-2 border-${active?"[#816DFA]": "transparent"}`} onClick={()=>(setActive(!active))}/>
  )
}
// transparent
export default ColorSelect