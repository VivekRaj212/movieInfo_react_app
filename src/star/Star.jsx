import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star = ({stars}) => {

    console.log(stars);
  const rating=  Array.from({length:5},(elem,index)=> {

       let number= index + 0.5;  
  return (
    <span key={index}>
          
          {
            stars >= index+1 ? (
                <FaStar className='icon'/>
            ): stars >= number? (
                <FaStarHalfAlt className='icon'/>
            ): (<AiOutlineStar className='icon'/>
            
            )}
    </span>
  )
});

return (
    <div className="icon-style" style={{marginTop: "2px"}}>
         <p>{stars} <br/> {rating} </p>
    </div>
)
}
export default Star;
