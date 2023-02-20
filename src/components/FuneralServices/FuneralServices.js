import React from 'react';
import './FuneralServices.scss'
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';
export const FuneralServices = () => {

   
    
  return (
    <div className='funeral-services-container'>
        <h1 className='funeral-services-container-title'>Funeral Homes Offer a Service</h1>
        <p className='funeral-services-container-para'>Etiam varius elementum condimentum usce dictum quam duinec pharetra orci venenatis sit amet.</p>
        <div className='funeral-services-main-container'>
        <funeralcontext.Consumer>
          {({funeralServicesData})=>{
            return(
              <>
                {funeralServicesData.map((plan,i)=>
            <div key={i} className='funeral-services-inner-container'>
              <div className='funeral-services-inner-container-image-container'>
                <img className='funeral-services-inner-container-image' src={plan.image} alt="journal-pic"/>
              </div>
                <div className='funeral-services-inner-bottom-container'>
                <h2 className='funeral-services-inner-container-title'>{plan.title}</h2>
                <p className='funeral-services-inner-bottom-container'>
                {plan.description}
                </p>
                <button className='funeral-services-inner-container-button'>READ MORE</button>
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
