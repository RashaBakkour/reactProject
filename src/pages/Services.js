import React from 'react';
import './Services.css';
import Features from './Features';
import MoreServices from './MoreServices';

const Services = () => {
  return (
    <section id='services' className='services'>
            <div className='container'>
                <div className='section-title ' >
                    <h2>Services</h2>
                    <p className='description'>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
                </div>
                <div className='row'>
                    <div className='col-lg-3 col-md-6  mb-5 mb-lg-0'>
                        <div className='card icon-box ' >
                            <div className='card-body'>
                                <div className='icon'>
                                    <i class='bx bxl-dribbble'></i>
                                </div>
                                <h4 className='title'><a href='#'> Lorem Ipsum</a></h4>
                                <p className='description'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 servic mb-lg-0'>
                        <div className='card icon-box ' >
                            <div className='card-body'>
                                <div className='icon'>
                                    <i class='bx bx-file'></i>
                                </div>
                                <h4 className='title'><a href='#'> Sed ut perspiciatis</a></h4>
                                <p className='description'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 servic mb-lg-0'>
                        <div className='card icon-box ' >
                            <div className='card-body'>
                                <div className='icon'>
                                    <i class='bx bx-tachometer'></i>
                                </div>
                                <h4 className='title'><a href='#'> Magni Dolores</a></h4>
                                <p className='description'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 servic mb-lg-0'>
                        <div className='card icon-box ' >
                            <div className='card-body'>
                                <div className='icon'>
                                    <i class='bx bx-world'></i>
                                </div>
                                <h4 className='title'><a href='#'> Nemo Enim</a></h4>
                                <p className='description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <MoreServices/>
            
        </section>

  );
}

export default Services;
