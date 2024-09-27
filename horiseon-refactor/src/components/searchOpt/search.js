import React from 'react';
import SearchImg from '../../images/search.jpg';


export default function Search() {
    return(
       <div id='search-engine-optimization' className='content'>
        <div class="content-container">
            <div class="article">
                <img id='search-img' src={SearchImg} class="float-left" alt="Notebook with SEO text Img" />
                <h2>Search Engine Optimization</h2>
                <p>The dominance of mobile internet use means that users are searching for the right business as they
                    travel, shop, or sit on their couch at home. Search Engine Optimization (SEO) allows you to increase
                    your visibility and find the right customers for your business.</p>
                    </div>
        </div>
    </div>
    );
}