import React,{useState} from 'react';
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
    setBurger,
    burger
  } = functions();

  const [contact, setContact] = useState(false)

  

  return (
    <Router>
      <Navbar 
        style={style} 
        scrollPosition={scrollPosition} 
        BurgerMenustyles={BurgerMenustyles}
        setBurger={setBurger}
        burger={burger}
        setContact={setContact}
        />
      <Routes>
        <Route path='/' element={ <HeaderSection  contact={contact} setContact={setContact} myRef={myRef} setNews={setNews} /> }/>
        <Route path='about' element={ <About /> } />
        <Route path='offer' element={ <Offer setContact={setContact} /> } />
        <Route path='news/:id' element={ <News news={news} />} />
      </Routes>
      <FooterSection setContact={setContact} />
    </Router>
  )
}

export default App
