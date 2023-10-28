import React from 'react';

const Banner = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12'>
                <h2>{props.title}</h2>
            </div>
        </div>
      </div>
  );
}

export default Banner;
