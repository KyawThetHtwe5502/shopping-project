import React from 'react'
import {GoStarFill} from "react-icons/go"
const RateStarComponents = ({rate}) => {
    const stars = Array.from({length : 5},(_,index) => index);
  return (
    <div className='flex items-center gap-1'>
        {stars.map((star) => <GoStarFill key={star} className={` text-xs ${ star < rate?.toFixed(0) ? "text-gray-700"  : "text-gray-300"}  `} />)}
    </div>
  )
}

export default RateStarComponents