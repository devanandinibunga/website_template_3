import React from 'react';
import './FuneralNews.scss';
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';
import {FaCalendarAlt,FaRegCommentDots} from 'react-icons/fa';

export const FuneralNews = () => {

   
  return (
    <div className='funeral-news-container'>
        <h1 className='funeral-news-container-title'>Funeral Latest News</h1>
        <p className='funeral-news-container-para'>Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.</p>
        <div className='funeral-news-main-container'>
          <funeralcontext.Consumer>
            {({funeralNewsData})=>{
              return(
                <>
                  {funeralNewsData.map((news,i)=>
            <div key={i} className='funeral-news-inner-container'>
              <div className='funeral-news-inner-container-image-container'>
                <img className='funeral-news-inner-container-image' src={news.image} alt="journal-pic"/>
              </div>
              <div className='funeral-news-inner-middle-container'>
                <div className='funeral-news-inner-middle-icons-container'><span><FaCalendarAlt/> 19 APRIL,2016</span><span><FaRegCommentDots/></span></div>
                <div>(0) COMMENTS</div>
              </div>
                <div className='funeral-news-inner-bottom-container'>
                    <h2 className='funeral-news-inner-container-title'>{news.title}</h2>
                    <p className='funeral-news-inner-container-para'>
                    {news.description}
                    </p>
                </div>
            </div>
        )}
                </>
              )
            }}
          </funeralcontext.Consumer>
        
        </div>
    </div>
  )
}


