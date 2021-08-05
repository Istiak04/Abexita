import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import DropDownMenu from '../DropDownMenu';
import '../Button/Button.css';
import './nav.css';
import '../DropDownMenu/dropDownMenu.css';
import { connect } from 'react-redux';
import { auth } from './../../firebase/utils';

function Nav(props) {
    const { currentUser } = props;
    const { theme } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isServiceOpen, setIsServiceOpen] = useState(false);

    const handleLogOut = (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log('signed out');
        });
    }


    return (
        <>
            <div className={theme == 'dark' ? 'nav__container dark' : 'nav__container light'}>
                <nav className='navbar navbar-expand justify-content-between position-sticky'>
                    <ul className='navbar-nav'>
                        <Link className='nav-link' to='/'>
                            <li className='nav-item'>Home</li>
                        </Link>
                        <Link className='nav-link' onClick={() => setIsServiceOpen(!isServiceOpen)}>
                            <li className='nav-item'>Services</li>
                        </Link>
                        <Link className='nav-link' to='/team'>
                            <li className='nav-item'>Team</li>
                        </Link>
                    </ul>
                    <Link className='nav-link logo' to='/'>
                        <img src='../image/download' alt='img'></img>
                    </Link>
                    <ul className='navbar-nav'>
                        <Link className='nav-link' to='/contact'>
                            <li className='nav-item'>Contact Us</li>
                        </Link>
                        {currentUser &&
                            (<button className='btn btn-outline-warning' onClick={handleLogOut}>logout</button>)
                        }
                        {!currentUser && (
                            <>
                                <Link className='nav-link' to='/form'>
                                    <Button className='btn btn__1 btn-outline-primary' name='SignUp' />
                                </Link>
                                <Link className='nav-link' to='/form'>
                                    <Button className='btn btn-outline-primary btn__1' name='SignIn' />
                                </Link>
                            </>
                        )

                        }
                    </ul>


                    {/* Mobile Menu Button */}
                    <button className='mobile__menu__icon' onClick={() => setIsOpen(!isOpen)}>
                        <i className='fa fa-bars'></i>
                    </button>
                </nav>
            </div>
            <div className={isOpen ? 'nav__mobile' : 'hide'}>
                <ul>
                    <Link to='/'>
                        <li className='nav-item'>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className='nav-item'>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li className='nav-item'>Contact</li>
                    </Link>
                    <Link to='/'>
                        <li className='nav-item'>Home</li>
                    </Link>
                    {!currentUser && (
                        <>
                            <Link to='/signIn'>
                                <Button className='btn btn__1 text-warning' name='SignUp' />
                            </Link>
                            <Link to='/signIn'>
                                <Button className='btn btn__1 text-warning' name='SignIn' />
                            </Link>
                        </>
                    )}
                    {currentUser && (
                        <button className='btn btn-outline-warning' onClick={handleLogOut}>logout</button>
                    )}
                </ul>
            </div>
            {isServiceOpen ? (<DropDownMenu className='dropdown-menu'></DropDownMenu>) : (<DropDownMenu className='dropdown-menu slideUp'></DropDownMenu>)}
        </>
    )
}

Nav.defaultProps = {
    currentUser: null
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})


export default connect(mapStateToProps, null)(Nav)
