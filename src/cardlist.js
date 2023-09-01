import React from 'react'

import Cards from './card';

function cardlist({data}) {
    console.log(data);
  return (
   
    <div className='list' >
   
  {data&&data.map((el)=><Cards el={el}  />)}
  

    </div>
  )
}
 
export default cardlist