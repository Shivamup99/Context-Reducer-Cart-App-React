import React from 'react'
import {AiFillStar , AiOutlineStar} from 'react-icons/ai'
function Rating({rating,onClick,style}) {
  return (
   <>
   {[...Array(5)].map((_,i)=>(
       <span key={i} onClick={()=>onClick(i)} style={style}>
           {rating >i ?(
               <AiFillStar fontSize ="15px" color='yellow'/>
           ):(
               <AiOutlineStar fonSize="15px"/>
           )}
           </span>
   ))}
   </>
  )
}

export default Rating