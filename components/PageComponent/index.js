import React from 'react';
import './pageComponent.css';
import { Link } from 'react-router-dom';
import Button from '../Button';

function PageComponent(props) {
    const { header, details, url, className, flexDirection, id, img } = props;
    return (
        <section className='container my-3 py-4'>
            <div className={`flex__container d-flex ${flexDirection}`} id={id}>
                <div className=' col-md-6 col-12' id='flex__item__1'>
                    <h5 className='text-primary pb-1'>{header}</h5>
                    <p className='text-decoration-none text-indent-start text-secondary'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.......
                    </p>
                    <Link to={url}>
                        <Button
                            name='Learn More'
                            className='btn btn-outline-primary'
                        />
                    </Link>
                </div>
                <div className='col-md-6 col-12' id='flex__item__2'>
                    <img src={img} className={`component__img  ${className}`}>
                    </img>
                </div>
            </div>
        </section >
    )
}

export default PageComponent;
