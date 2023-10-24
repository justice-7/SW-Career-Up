import React from 'react';

function Items({item}){
  return (
    <div className='content-food'>
      <p >{item.food_name}</p>
      <img src={item.food_url}/>
    </div>
    );
}
export default Items;