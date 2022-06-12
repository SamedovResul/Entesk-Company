import React,{useEffect,useState} from 'react';
import video from "../video/Network - 12716.mp4";
import AreaSection from "./AreaSection";
import SlideSection from './SlideSection';
import ContactSection from './ContactSection';
import { Link } from 'react-router-dom';

import functions from './functions';
const headerSection = (props) => {
  const {setNews} = props 
  const {
    myRef,
    Class,
    setClass
  } = functions()

  return (
  <>
    <section className="head-section" id="head-section">
      <video type="video/mp4" src={video} loop autoPlay muted playsInline ></video>
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="icon-div">
                <h1>İnnovasiya ilə biznesinizi hər zaman <br /> bir addım öndə saxlayın.</h1>
                <button> 
                  <Link to="offer">
                    Təkliflərimiz
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AreaSection Class={Class} setClass={setClass} />
    <SlideSection  setNews={setNews} />
    <ContactSection myRef={myRef} />
  </>
  )
}

export default headerSection