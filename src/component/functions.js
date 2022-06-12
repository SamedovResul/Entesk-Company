import React,{useEffect,useState,useRef} from 'react';
import { useSpring, animated, } from 'react-spring';

import Data from '../data'
const functions = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const [Class, setClass] = useState({
    className:'',
    index:0
  })
  const [news, setNews] = useState({
    id:0,
    data:{}
  })
  const [burger, setBurger] = useState(false)


  const myRef = useRef(null)
  
  // nav section
  const handleScroll = () =>  setScrollPosition(window.pageYOffset)
  window.addEventListener('scroll', handleScroll)

  // useEffect(() => {

  //   contact ? window.scrollTo(0, 2570 ) :window.scrollTo(0, 0 );
  //   console.log(contact)
  // }, [contact])
  
  // area fade in out 
  
  


  useEffect(() => {
    if(window.innerWidth <= 991){
      if(window.scrollY >= 300 && window.scrollY <= 500){
        setClass({className:"fadeOut", index:0})
      }else if(window.scrollY >= 500 && window.scrollY <= 700){
        setClass({className:"fadeIN", index:0})
      }else if (window.scrollY <= 300){
        setClass({className:"fadeIN", index:0})
      }
      
      if(window.scrollY >= 500 && window.scrollY <= 700){
        setClass({className:"fadeOut", index:1})
      }else if(window.scrollY >= 700 && window.scrollY <= 900){
        setClass({className:"fadeIN", index:1})
      }else if(window.scrollY > 499){
        setClass({className:"fadeIN", index:1})
      }
  
      if(window.scrollY >= 700 && window.scrollY <= 900){
        setClass({className:"fadeOut", index:2})
      }else if(window.scrollY >= 900 && window.scrollY <= 1200){
        setClass({className:"fadeIN", index:2})
      }
  
      if(window.scrollY >= 900 && window.scrollY <= 1200){
        setClass({className:"fadeOut", index:3})
      }else if(window.scrollY >= 1400){
        setClass({className:"fadeIN", index:3})
      }
    }
  }, [window.scrollY])
  
  // burger menu
  const BurgerMenustyles = useSpring({
    from: { 
      right:"-50%",
     },
    to: { 
      right: burger ? "0%" : "-50%",
     },
     config: {
			duration: 350
		}
  })
  
  
  return { 
    scrollPosition,
    myRef,
    Class,
    setClass,
    news, 
    setNews,
    BurgerMenustyles,
    setBurger,
    burger
   }
}

export default functions