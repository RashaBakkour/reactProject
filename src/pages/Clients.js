import React from 'react';
import './Clients.css';
import client1 from '../assets/client-1.png';
import client2 from '../assets/client-2.png';
import client3 from '../assets/client-3.png';
import client4 from '../assets/client-4.png';
import client5 from '../assets/client-5.png';
import client6 from '../assets/client-6.png';

const Clients = () => {
  return (
    <section className='clients'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client1} className='img-fluid'/>
                </div>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client2} className='img-fluid'/>
                </div>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client3} className='img-fluid'/>
                </div>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client4} className='img-fluid'/>
                </div>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client5} className='img-fluid'/>
                </div>
                <div className='col-lg-2 col-md-4 col-6'>
                    <img src={client6} className='img-fluid'/>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Clients;
