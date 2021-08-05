import React from 'react';
import './service_card.scss';

function ServiceCard(props) {
    const { name, service_img } = props;

    return (
        <div id='service_card' className='mb-5 '>
            <div>
                <div class="main-card">
                    <a href='#' class="flipcard">
                        <div class="front-face">
                            <img src={service_img} alt="" />
                            <div class="card-footer bg-light text- text-black-50 text-center">
                                {name}
                            </div>
                        </div>
                        <div class="back-face">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dicta.
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
