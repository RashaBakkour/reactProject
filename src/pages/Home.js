import React from 'react';
import heroimg from '../assets/hero-img.png';
import './Home.css';

const Home = () => {
  return (
    <section id='home'>
    <div className='container'>
         <div className='row'>
            <div className=' col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center'>
                <h1 data-aos="fade-up" className='aos-init aos-animate'>Grow your business with Vesperr </h1>
                <h2 data-aos="fade-up" data-aos-delay='400' className='aos-init aos-animate'>We are team of talented designers making websites with Bootstrap</h2>
                <div data-aos="fade-up" data-aos-delay='800' className='aos-init aos-animate'>
                    <a href='#' className="btn-get-started scrollto">Get Started</a>
                </div>
                
            </div>
            <div className='col-lg-6 order-1 order-lg-2 home-img aos-init aos-animate' data-aos='fade-left' data-aos-delay="200">
                <img src={heroimg} className='img-fluid animated'/>
            </div>
        </div>
    </div>
    </section>
//     <header>
//         <div className='container'>
//             <div className='row'>
//                 <div className=' col-lg-6'>
//                     <h1>Grow your business with Vesperr </h1>
//                     <h2>We are team of talented designers making websites with Bootstrap</h2>
//                     <button><a href='#'>Get Started</a></button>
//                 </div>
//                 <div className='col-lg-6'>
//                     <img src={heroimg}/>
//                 </div>
//             </div>
//         </div>
//   </header>
  );
}

export default Home;
