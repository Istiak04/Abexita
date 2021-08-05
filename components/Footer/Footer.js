import React from 'react'
import { Link } from 'react-router-dom';
import FooterImage from 'D:/shobuj/src/image/footer-w.png';

import './footer.css'
import Social from '../Social Media/Social';

function Footer() {
    return (
        <section className='mt-5'>
            <div className='container text-center'>
                <div id='footer__img'>
                    <img src={FooterImage} className='img-fluid' alt='footer_img'></img>
                </div>
            </div>
            <div id='footer__menu'>
                <div className='container d-flex flex-row justify-content-md-around'>
                    <ul className='d-flex flex-column justify-content-start my-4'>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>

                    </ul>
                    <ul className='d-flex flex-column justify-content-start my-4'>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                    </ul>
                    <ul className='d-flex flex-column justify-content-start my-4'>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Link to='' className='nav-item nav-link'>
                            <li className=' nav-link text-light'>Menu__1</li>
                        </Link>
                        <Social
                            id='footer-social-icons'
                        />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;
