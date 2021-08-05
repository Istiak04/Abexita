import React from 'react';
import './socialMediaSidebar.css';

function Social(props) {
    const { id } = props;
    return (
        <div class="sidebar-social-icons" id={id}>
            <ul class="social-icons">
                <li><a href="" class="social-icon"> <i class="fa fa-facebook facebook"></i></a></li>
                <li><a href="" class="social-icon"> <i class="fa fa-twitter twitter"></i></a></li>
                <li><a href="" class="social-icon"> <i class="fa fa-rss rss"></i></a></li>
                <li><a href="" class="social-icon"> <i class="fa fa-youtube youtube"></i></a></li>
                <li><a href="" class="social-icon"> <i class="fa fa-linkedin linkedin"></i></a></li>
                <li><a href="" class="social-icon"> <i class="fa fa-github github"></i></a></li>
            </ul>
        </div>
    )
}

export default Social;
