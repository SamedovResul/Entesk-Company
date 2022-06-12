import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const FooterSction = ({setContact}) => {
  

  return (
    <section id="contact" className=" footer-section burger-close-byDiv" >
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-box">
              <p>Keçidlər</p>
              <ul>
                <li>
                  <Link to='/'>
                    Ana Səhifə
                  </Link>
                </li>
                <li>
                  <Link to="offer" onClick={()=> setContact(false)}>
                    Məhsullarımız
                  </Link>
                </li>
                <li>
                  <Link to="about" onClick={()=> setContact(false)}>
                    Haqqımızda
                  </Link>
                </li>
                <li>
                  <Link to='/' className="contact" onClick={()=> setContact(true)}> 
                    Əlaqə
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-box">
              <p>Məhsullarımız</p>
              <ul>
                <li> <a href="https://wakemeup-az.vercel.app/">Wakemeup</a> </li>
                <li> <a href="https://entesk.com/">Metatesk</a> </li>
                <li> <a href="https://www.enteskedu.com/">Enthouse</a> </li>
                <li> <a href="https://www.youtube.com/channel/UCML2-bEpQ6NFKMIYUew_LBQ/featured">Pika</a> </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-box">
              <p>Ünvan</p>
              <ul>
                <li>Bakı ş. Yasamal r.</li>
                <li>A. M. Şərifzadə küç. 237 A</li>
                <li>M. İnşaatçilar yaxınlığı</li>
                <li>contact@enteskedu.com </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-6">
            <div className="footer-box contact">
              <p><a href="https://api.whatsapp.com/send?phone=994559450412">+994 55 945 04 12</a></p>
              <ul>
                <li> <span><i className="fa fa-instagram"></i></span> <a href="https://www.instagram.com/wakemeuptechnology/" target="_blank">@entesk</a> </li>
                <li> <span><i className="fa fa-facebook"></i></span> <a href="https://www.facebook.com/wakemeup.az" target="_blank">@entesk</a> </li>
                <li> <span><i className="fa fa-youtube"></i></span> <a href="https://www.youtube.com/channel/UCOQ9ZUuSBi8oW_uR_V5srFw" target="_blank">@entesk</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="last-div">
              Bütün hüquqlar qorunur 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FooterSction