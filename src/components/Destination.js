import React from 'react';

function Destination(props) {
  return <div className='card'>
        <div className='card-image'>
            <img src={props.image} alt={props.name}/>
            {/* <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' alt='destination' /> */}
        </div>
        <div className='card-description'>
            <p>{props.name}</p>
            <h3>{props.location}</h3>
            <p> {props.startDate}</p>
            <p>{props.decription}</p>    

        </div>

  </div>;
}

export default Destination;
