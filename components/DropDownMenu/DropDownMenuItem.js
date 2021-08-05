import React from 'react';
import { Link } from 'react-router-dom';

function DropDownMenuItem(props) {
    const { link, title } = props;
    return (
        <Link to={link} className='text-decoration-none'>
            <li className='nav-item nav-link'>
                {title}
            </li>
        </Link>
    )
}

export default DropDownMenuItem;

