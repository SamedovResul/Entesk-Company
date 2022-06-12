import React,{useEffect} from 'react';
import "./about.css";
import functions from '../functions'

const About = () => {
  // const {setBurger,setContact} = functions()
  useEffect(() => {
    window.scrollTo(0, 10);
  }, [])


  return (
  <section className="about-section">
    <div className="container">
      <div className="container-fluid">
        <div className="row about-container">
          <div className="col-md-12">
            <div className="about-title">
              <h1>
                Haqqımızda
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* <!--  --> */}

    <div className="container desktop-container ">
      <div className="container-fluid">
        <div className="row about-container">
          <div className="col-md-6">
              <div className="about-text-box">
                <b >Komanda haqqında</b>
                  <ul>
                    <li> <span>&#10003;</span>Komandanın aydın məqsədləri və planları var</li>
                    <li> <span>&#10003;</span>Komandanın güclü liderliyi var</li>

                    <li> <span>&#10003;</span>Komanda üzvləri öz vəzifələrini yerinə yetirir və bir-birlərinə kömək edirlər</li>
                    <li> <span>&#10003;</span>Komanda üzvləri öz aralarında açıq ünsiyyət qururlar</li>
                    <li> <span>&#10003;</span>Komanda üzvləri münaqişəni konstruktiv şəkildə həll edirlər</li>
                    <li> <span>&#10003;</span>Komanda üzvləri şirkətin uğuruna birbaşa töhfə verdiklərini hiss edirlər</li>
                  </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-img-box">
                <img src="../img/section1.png" alt=""/>
              </div>
            </div>
        </div>
      </div>
    </div>

  {/* <!-- responsive --> */}

    <div className="container responsive-container ">
      <div className="container-fluid">
        <div className="row about-container">
          <div className="col-md-6 text-center">
            <b>Komanda haqqında</b>
            <div className="about-img-box">
              <img src="../img/section1.png" alt=""/>
            </div>
          </div>
          <div className="col-md-6">
              <div className="about-text-box">
                
                  <ul>
                    <li> Komandanın aydın məqsədləri və planları var<span>&#10003;</span></li>
                    <li> Komandanın güclü liderliyi var<span>&#10003;</span></li>

                    <li> Komanda üzvləri öz vəzifələrini yerinə yetirir və bir-birlərinə kömək edirlər<span>&#10003;</span></li>
                    <li> Komanda üzvləri öz aralarında açıq ünsiyyət qururlar<span>&#10003;</span></li>
                    <li> Komanda üzvləri münaqişəni konstruktiv şəkildə həll edirlər<span>&#10003;</span></li>
                    <li> Komanda üzvləri şirkətin uğuruna birbaşa töhfə verdiklərini hiss edirlər<span>&#10003;</span></li>
                  </ul>
              </div>
            </div>
            
        </div>
      </div>
    </div>
        

{/* <!--  --> */}


{/* <!--  --> */}
    <div className="container desktop-container ">
      <div className="container-fluid">
        <div className="row about-container">

          <div className="col-md-6">
              <div className="about-img-box">
                <img src="../img/section2.png" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text-box right">
                <b>Mühəndislərimiz haqqında </b>
                  <ul>
                    <li>Davamlı təkmilləşməyə çalışırlar.   <span>&#10003;</span></li>
                    <li>İşlərində yaradıcılıq və innovasiya tətbiq edirlər.  <span>&#10003;</span></li>
                    <li>Riyazi və analitik qabiliyyətlər və məntiqi təfəkkürləri ilə seçilirlər.  <span>&#10003;</span></li>
                    <li>Detallara diqqətli və sərrast yanaşırlar.  <span>&#10003;</span></li>
                    <li>Dəyişikliyə sürətli adaptasiya edirlər.  <span>&#10003;</span></li>
                    <li>Çətin və stresli vaxtlarda optimist qalırlar. <span>&#10003;</span></li>
                  </ul>
              </div>
            </div>

        </div>
      </div>
    </div>

  {/* <!-- responsive --> */}

    <div className="container responsive-container">
      <div className="container-fluid">
        <div className="row about-container">

          <div className="col-md-6 text-center">
              <b>Mühəndislərimiz haqqında </b>
              <div className="about-img-box">
                <img src="../img/section2.png" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text-box right">
                
                  <ul>
                    <li>Davamlı təkmilləşməyə çalışırlar.   <span>&#10003;</span></li>
                    <li>İşlərində yaradıcılıq və innovasiya tətbiq edirlər.  <span>&#10003;</span></li>
                    <li>Riyazi və analitik qabiliyyətlər və məntiqi təfəkkürləri ilə seçilirlər.  <span>&#10003;</span></li>
                    <li>Detallara diqqətli və sərrast yanaşırlar.  <span>&#10003;</span></li>
                    <li>Dəyişikliyə sürətli adaptasiya edirlər.  <span>&#10003;</span></li>
                    <li>Çətin və stresli vaxtlarda optimist qalırlar. <span>&#10003;</span></li>
                  </ul>
              </div>
            </div>

        </div>
      </div>
    </div>

        
{/* <!--  --> */}

{/* <!--  --> */}
    <div className="container desktop-container">
      <div className="container-fluid">
        <div className="row about-container">

          <div className="col-md-6">
            <div className="about-text-box">
              <b>Məhsulumuz haqqında</b>
                <ul>
                  <li> <span>&#10003;</span>Yaxşı məhsul yaxşı görünməlidir.</li>
                  <li> <span>&#10003;</span>Yaxşı məhsulun mənimsənilmə müddəti qısa olmalıdır.</li>

                  <li> <span>&#10003;</span>Yaxşı məhsul aydın dəyər təklifi ilə səmərəli şəkildə satılmalıdır.</li>
                  <li> <span>&#10003;</span>Yaxşı məhsul problemi həll etməlidir.</li>
                  <li> <span>&#10003;</span>Yaxşı məhsul məhsul bazara uyğun olmalıdır.</li>
                  <li> <span>&#10003;</span>Yaxşı məhsulun dəyər qazanma müddəti qısa olmalıdır.</li>

                  <li> <span>&#10003;</span>Yaxşı məhsul ehtiyacı ödəməlidir.</li>
                  <li> <span>&#10003;</span>Yaxşı məhsul kütləvi cəlbediciliyə malik olmalıdır.</li>
                </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-img-box">
              <img src="../img/section3.png" alt=""/>
            </div>
          </div>

        </div>
      </div>
    </div>

  {/* <!-- responsive --> */}
      
    <div className="container responsive-container">
      <div className="container-fluid">
        <div className="row about-container">

          <div className="col-md-6 text-center">
            <b>Məhsulumuz haqqında</b>
            <div className="about-img-box">
              <img src="../img/section3.png" alt=""/>
            </div>
          </div>

          <div className="col-md-6">
            <div className="about-text-box">
              
                <ul>
                  <li> Yaxşı məhsul yaxşı görünməlidir. <span>&#10003;</span> </li>
                  <li> Yaxşı məhsulun mənimsənilmə müddəti qısa olmalıdır. <span>&#10003;</span> </li>

                  <li> Yaxşı məhsul aydın dəyər təklifi ilə səmərəli şəkildə satılmalıdır. <span>&#10003;</span> </li>
                  <li> Yaxşı məhsul problemi həll etməlidir. <span>&#10003;</span> </li>
                  <li> Yaxşı məhsul məhsul bazara uyğun olmalıdır. <span>&#10003;</span> </li>
                  <li> Yaxşı məhsulun dəyər qazanma müddəti qısa olmalıdır. <span>&#10003;</span> </li>

                  <li> Yaxşı məhsul ehtiyacı ödəməlidir. <span>&#10003;</span> </li>
                  <li> Yaxşı məhsul kütləvi cəlbediciliyə malik olmalıdır. <span>&#10003;</span> </li>
                </ul>
            </div>
          </div>
          

        </div>
      </div>
    </div>

  {/* <!--  --> */}

      
    </section>
  )
}

export default About