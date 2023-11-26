import React, { useState } from 'react';
import TotalCal from "./Totalcalories.jsx";
import './FoodBox.css';

const Foodbox = (props) => {
  const [counter, setCounter] = useState(0);
  // const [id, setId] = useState(-1);
  const [totalCal, setTotalCal] = useState(0);

  const handleChange = (e, id) => {
    setCounter(e);
    setId(id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalCal(props.food.cal * counter);
  }

  const handleReset = (e) => {
    e.preventDefault();
    setCounter(0);
    setId(-1);
    setTotalCal(0);
  }

  return (
    <div className='maincontent'>
      <div className="inner">
        <article className="content">
          <div>
            <figure>
              <img src={props.food.img} alt="" />
            </figure>
          </div>
          <div>
            <div>
              <p>
                <strong>{props.food.name}</strong> <br />
                <small>{props.food.cal}</small>
              </p>
            </div>
          </div>
          <div>
            <div className="inpu">
              <div>
                <input type="number" placeholder='Enter a number here' onChange={e => handleChange(e.target.value, props.food.id)} />
              </div>
              <div>
                <button onClick={handleSubmit}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      <TotalCal name={props.food.name} totalCal={totalCal} count={counter} />
      <button className="reset" onClick={handleReset}>reset</button>
    </div>
  )
}
export default Foodbox;
