import React from 'react';
import './Contact.css';
import FormContact from './FormContact';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
            <div className='container'>
                <div className='section-title'>
                    <h2>contact us</h2>
                </div>
                <div className='row'>
                    <div className='col-lg-4 col-md-6'>
                        <div className='contact-about'>
                            <h3>Vesperr</h3>
                            <p>
                            Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus.
                             Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
                            </p>
                            <div className='social-links'>
                                <a href='#' className='twitter'><i class='bx bxl-twitter'></i></a>
                                <a href='#' className='facebook'><i class='bx bxl-facebook-circle'></i></a>
                                <a href='#' className='instgram'><i class='bx bxl-instagram'></i></a>
                                <a href='#' className='linkedin'><i class='bx bxl-linkedin-square'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <div className='info'>
                            <div>
                                <i class='bx bx-map'></i>
                                <p>A108 Adam Street <br/> New York, NY 535022</p>
                            </div>
                            <div>
                                <i class='bx bx-mail-send'></i>
                                <p>info@example.com</p>
                            </div>
                            <div>
                                <i class='bx bx-phone'></i>
                                <p>+1 5589 55488 55s</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12'>
                        <FormContact/>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Contact;
