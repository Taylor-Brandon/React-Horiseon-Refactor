import React from 'react';
import OnlineImg from '../../images/online.jpg';

export default function Online() {
    return (
        <div className='online-rep'>
            <div className='content'>
            <div class="article">
                <img id='search-img' src={OnlineImg} class="float-right" alt="Computer with graph and reputation text img" />
                <h2>Online Reputation Management</h2>
                <p>The web is full of opinions, and some of these can be negative. Social media allows anyone with an
                    internet connection to say whatever they want about your business. Online Reputation Management
                    gives you the control over what potential customers see when they search for your business.</p>
            </div>
            </div>
        </div>
    );
}