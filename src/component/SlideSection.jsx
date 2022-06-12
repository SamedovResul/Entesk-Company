import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from '../data'
import { Link } from 'react-router-dom';


const SlideSection = ({setNews}) => {

  const slideData = Data.slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // className: "center",
    centerPadding: "0px",
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
    ]
  };


  return (
    <section  className="section-3 section">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-12">
            <div className="news">
              <h2>Xəbərlər</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="wrapper">

            <Slider {...settings}>

              {
                slideData.map((slide,i) =>{
                  const {img,text,id} = slide
                  return(
                    <div key={i} className="product-div">
                      <img src={img} alt=""/>
                      <p> {text} </p>
                        <button className="js-button" onClick={()=> setNews({
                          id:id,
                          data:slide
                        })} >
                          <Link to={`news/${id}`} >
                            Daxil ol
                          </Link>
                        </button>
                    </div> 
                  )
                })
              }

            </Slider>
              
            </div>
          </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default SlideSection