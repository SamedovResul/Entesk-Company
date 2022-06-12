import React,{useEffect} from 'react'
import Data from "../../data"
import { useParams } from 'react-router-dom'
import './style.css'

const News = ({news}) => {
  const { id } = useParams();
  const News = Data.slide
  const {content,img,text } = news.data

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
   const slideInfo =  News.find((data) => data.id === Number(id)  )

  return (
    <section id="news-section" >
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="news-title">
                <h1>
                  Xəbərlər
                </h1> 
              </div>
            </div>
            <div className="col-md-12">
              <div className="news-box">
                <img className="news-img gif" src={ news.id > 0? img : slideInfo.img} alt=""/>
                <h4 className="title" > { news.id > 0? text : slideInfo.text } </h4>
                <p className="content" > {  news.id  > 0? content : slideInfo.content} </p>
                {/* <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt=""> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  )
}

export default News