import React from 'react';
import { moreServices } from '../constants';
import './moreService.css';

const MoreServices = () => {
   

  return (
    <section id='more-services' className='more-services'>
        <div className='container'>
            <div className='row'>
            {moreServices.map((service)=>(
                <div className='col-md-6 d-flex align-items-stretch' key={service.id}>
                    <div className='card' style={{backgroundImage: `url(${service.img})`}}>
                        <div className='card-body'>
                            <h5 className='card-title'><a>{service.title}</a></h5>
                            <p className='card-text'>{service.text}</p>
                            <div className='read-more'>
                                <a>
                                    <i class='bx bx-right-arrow-alt' ></i>read more
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )) }
                
                
            </div>
        </div>
    </section>
  );
}

export default MoreServices;


// <div className='col-md-6 d-flex align-items-stretch'>
// <div className='card'>
// <div className='card-body'>
//     <h5 className='card-title'><a>Lobira Duno</a></h5>
//     <p className='card-text'>
//     Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
//     </p>
//     <div className='read-more'>
//         <a>
//             <i class='bx bx-right-arrow-alt' ></i>read more
//         </a>
//     </div>
    
// </div>
// </div>
// </div>
// <div className='col-md-6 d-flex align-items-stretch'>
// <div className='card'>
// <div className='card-body'>
//     <h5 className='card-title'><a>Lobira Duno</a></h5>
//     <p className='card-text'>
//     Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
//     </p>
//     <div className='read-more'>
//         <a>
//             <i class='bx bx-right-arrow-alt' ></i>read more
//         </a>
//     </div>
    
// </div>
// </div>
// </div>
// <div className='col-md-6 d-flex align-items-stretch'>
// <div className='card'>
// <div className='card-body'>
//     <h5 className='card-title'><a>Lobira Duno</a></h5>
//     <p className='card-text'>
//     Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
//     </p>
//     <div className='read-more'>
//         <a>
//             <i class='bx bx-right-arrow-alt' ></i>read more
//         </a>
//     </div>
    
// </div>
// </div>
// </div>