import React from 'react';
import SocialImg from '../../images/social.jpg';

export default function Social() {
    return (
        <div id='social-media-marketing' className='content'>
            <div class="article">
                <img id='search-img' src={SocialImg} class="float-left" alt="table meeting with social media images" />
                <h2>Social Media Marketing</h2>
                <p>Social media continues to have a sizable influence on buying habits. Social media marketing helps you
                    determine which platforms are suited to your brand, using analytics to find the right markets and
                    increase your lead generation.</p>
            </div>
        </div>
    );
}