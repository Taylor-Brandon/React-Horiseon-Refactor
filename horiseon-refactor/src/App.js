import React from 'react';
import Header from './components/header/header';
import Img from './images/main.jpg';
import Search from './components/searchOpt/search';
import './styles/style.css';

export default function App() {
  return(
    <div>
    <Header />
    <img className="hero" src={Img} alt="digital marketing meeting img"></img>
    <div className='main'>
    <Search />
    </div>
    </div>
  );
}
