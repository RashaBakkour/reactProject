import React from 'react';
import StoreLineIcon from 'remixicon-react/StoreLineIcon';
import './features.css';

const Features = () => {
  return (
        <section id='features' className='features'>
            <div className='container'>
                <div className='section-title ' >
                    <h2>features</h2>
                    <p className='description'>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-4'>
                        <div className='icon-box'>
                            <i><StoreLineIcon /></i>
                            <h3><a href='#'> Lorem Ipsum</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Features;
