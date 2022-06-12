import React from 'react';
import Data from '../data';


const AreaSection = (props) => {
  const areaData = Data.area
  const {
    Class,
    setClass} = props
  return (
    <section className="Area-container">
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="product-text">
              <h1> Məhsullarımız </h1>
            </div>
          </div>

          {
            areaData.map((area, i) =>{
              const {img, desc,title} = area
              return(
                <div key={i} className="col-md-6">
                  <div className="Area-box" 
                    onMouseOver={() => setClass({ className: "fadeOut", index:i})}  
                    onMouseOut={() => setClass({className:"fadeIn", index:i})}
                  >
                    <div className="product-information">
                      <div
                       
                       className={  Class.index === i ? `${Class.className} img`: 'img' } >
                        {
                          area.icon ? <img className="youtubeIcon" src={area.icon} alt="Enteskkids" /> :
                          null
                        }
                        <img  src={img} alt="" />
                      </div>
                      <div>
                        <p>
                          {desc}
                        </p>
                        <button>
                          {/* <a href="https://www.youtube.com/channel/UCML2-bEpQ6NFKMIYUew_LBQ" target="_blank"> */}
                            Daxil ol
                          {/* </a> */}
                        </button>
                      </div>
                      
                    </div>
                    <p>
                      {title}
                    </p>
                  </div>
                </div>
              )
            })
          }
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default AreaSection