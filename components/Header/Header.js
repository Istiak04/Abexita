import React from 'react';
import { connect } from 'react-redux';
import './header.css';

import Button from '../Button';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';



function Header() {

    return (
        <div id='header' className='container py-5'>
            <div className='text-center'>
                <h5 className='text-secondary'>Start your journey with us</h5>
                <HashLink to='#graphics'>
                    <Button
                        name='Explore'
                        className='m-2 btn border-0 btn-warning text-light'
                    />
                </HashLink>
                <Link to='/form'>
                    <Button
                        name='Register'
                        className='m-2 btn border-0  btn-primary text-light'
                    />
                </Link>
            </div>
        </div>
    )
}


export default Header;
