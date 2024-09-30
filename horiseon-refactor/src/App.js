import React from 'react';
import Header from './components/header/header';
import Img from './images/main.jpg';
import Search from './components/searchOpt/search';
import Online from './components/onlineRep/online';
import Social from './components/socialMedia/social';
import Benefits from './components/benefits/benefits';
import Footer from './components/footer/footer';
import './styles/style.css';

export default function App() {
  return(
    <div className='body'>
    <div>
    <Header />
    </div>
    <img className="hero" src={Img} alt="digital marketing meeting img"></img>
    <div className='main'>
    <Search />
    <Online />
    <Social />
    <Benefits />
    </div>
    <Footer />
    </div>
  );
}
