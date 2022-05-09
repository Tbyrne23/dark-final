import React from 'react';
import "./sponsor.css";
import coins from "./pics/istockphoto-1199436529-612x612.jpg";
const Sponsors = () => {
  return (
    <div className='Sponsor'>
      
        <h1>Cereal Flakes, “Asbestos free”</h1>
        <h2>Jim’s Brake Pads, “They work every time, 50% of the time”</h2>
        <img alt='coins' className='photo' src={coins}/>
    </div>
  );
};
  
export default Sponsors;