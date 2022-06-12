import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import HeaderSection from "./component/headerSection"
import functions from './component/functions';
import About from './component/about/About';
import FooterSection from './component/FooterSection';
import Offer from './component/offer/Offer';
import News from "./component/news/News"
const App = (props) => {
  const {
    style,
    scrollPosition,
    myRef,
    news, 
    setNews,
    BurgerMenustyles,
    setBurger
  } = functions() 

  return (
    <Router>
      <Navbar 
        style={style} 
        scrollPosition={scrollPosition} 
        BurgerMenustyles={BurgerMenustyles}
        setBurger={setBurger}
        />
      <Routes>
        <Route path='/' element={ <HeaderSection myRef={myRef} setNews={setNews} /> }/>
        <Route path='about' element={ <About /> } />
        <Route path='offer' element={ <Offer /> } />
        <Route path='news/:id' element={ <News news={news} />} />
      </Routes>
      <FooterSection />
    </Router>
  )
}

export default App
