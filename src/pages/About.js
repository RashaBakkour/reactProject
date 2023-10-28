import React from 'react';
import countsimg from '../assets/counts-img.svg';
import './About.css';


const About = () => {
  return (
    <>
        
        <section id='about' className='about-us'>
            <div className='container'>
                <div className='section-title' >
                    <h2>About us</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-md-12' >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                        <li><i class='bx bx-check-double'></i>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </li>
                        <li><i class='bx bx-check-double'></i>
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        </li>
                        <li><i class='bx bx-check-double'></i>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </li>
                    </ul>
                    </div>
                    <div className='col-lg-6 col-md-12 pt-4 pt-lg-0' >
                        <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <a href='#' className='btn-learn-more'>Learn More</a>
                    </div>
                </div>
            </div>
        </section>

        <section className='counts'>
            <div className='container'>
                <div className='row'>
                    <div className='image col-lg-5 d-flex' >
                        <img src={countsimg} className='img-fluid'/>
                    </div>
                    <div className='col-lg-7  aos-animate' >
                        <div className='content'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='count-box'>
                                        <i class='bx bx-smile'></i><span>65</span>
                                        <p><strong>Happy Clients</strong>
                                        consequuntur voluptas nostrum aliquid ipsam architecto ut.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='count-box'>
                                        <i class='bx bx-folder-minus'></i><span>85</span>
                                        <p><strong>Projects </strong>
                                        adipisci atque cum quia aspernatur totam laudantium et quia dere tan
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='count-box'>
                                        <i class='bx bx-time-five'></i><span>18</span>
                                        <p><strong>Years of experience</strong>
                                        aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='count-box'>
                                        <i class='bx bx-award' ></i><span>15</span>
                                        <p><strong>Awards </strong>
                                        rerum asperiores dolor alias quo reprehenderit eum et nemo pad der
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default About;
