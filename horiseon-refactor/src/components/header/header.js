import React from 'react';


export default function Header() {
    return (
        <div className='header'>
                <div id='heading'>
            <h1>Hori<span id='span' class="seo">seo</span>n</h1>
            </div>
            <div className='nav'>
            <ul className='nav-list'>
                <li><a className='text-decoration-none text-white' href="#search-engine-optimization">Search Engine Optimization</a></li>
                <li><a className='text-decoration-none text-white' href="#online-reputation-management">Online Reputation Management</a></li>
                <li><a className='text-decoration-none text-white' href="#social-media-marketing">Social Media Marketing</a></li>
            </ul>
            </div>
        </div>
    );
}