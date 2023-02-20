import React from 'react';
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';
import './FuneralObituaries.scss'

export const FuneralObituaries = () => {

 
    
  return (
    <div className='funeral-obituaries-container'>
        <h1 className='funeral-obituaries-container-title'>Recent Funeral Obituaries</h1>
        <p className='funeral-obituaries-container-para'>Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.</p>
        <div className='funeral-obituaries-main-container'>
        <funeralcontext.Consumer>
          {({funeralObituariesData})=>{
            return(
              <>
                {funeralObituariesData.map((obituaries,i)=>
            <div key={i} className='funeral-obituaries-inner-container'>
              <div className='funeral-obituaries-inner-container-image-container'>
                <img className='funeral-obituaries-inner-container-image' src={obituaries.image} alt="journal-pic"/>
              </div>
                <div className='funeral-obituaries-inner-bottom-container'>
                    <h2 className='funeral-obituaries-inner-container-title'>{obituaries.name}   <span>(AGE {obituaries.age})</span></h2>
                    <p className='funeral-obituaries-inner-container-span'>{obituaries.lifeSpan}</p>
                    <p className='funeral-obituaries-inner-bottom-container-description'>
                    {obituaries.description}
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
