import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Items from './Items';

function TestPage() {
  const [foodData, setFoodData] = useState([]);

  const getFoodData = () =>{
    axios
      .get('http://43.201.253.162:3000/getFoodData')  
      .then((response)=>{ 
        setFoodData(response.data); 
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(getFoodData, []);

  return (
    <div className='content-overall'>
        {
        foodData.map((item)=>
          <Items item={item}/>
        )
        }

      <Link to="/result">
        <div>
        <button className='button-radio-big'>전혀 안 먹는다</button>
        </div>
        <div>
        <button className='button-radio-small'>그냥 그렇다</button>
        </div>
        <div>
        <button className='button-radio-small'>조금 좋아한다</button>
        </div>
        <div>
        <button className='button-radio-big'>매우 좋아한다</button>
        </div>
      </Link>
    </div>
  );
}

export default TestPage;
