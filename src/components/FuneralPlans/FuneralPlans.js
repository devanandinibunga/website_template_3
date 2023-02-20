import React from 'react';
import './FuneralPlans.scss';
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';

export const FuneralPlans = () => {

   
    
  return (
    <div className='funeral-plans-container'>
        <h1 className='funeral-plans-container-title'>When Someone Dies</h1>
        <p className='funeral-plans-container-para'>Many people feel overwhelmed when a loved one dies and are unsure what to do.</p>
        <div className='funeral-plans-main-container'>
          <funeralcontext.Consumer>
            {({funeralPlansData})=>{
              return(
                <>
                  {funeralPlansData.map((plan,i)=>
            <div key={i} className='funeral-plans-inner-container'>
              <div className='funeral-plans-inner-container-image-container'>
                <img className='funeral-plans-inner-container-image' src={plan.image} alt="journal-pic"/>
              </div>
                <div className='funeral-plans-inner-bottom-container'>
                <h2 className='funeral-plans-inner-container-title'>{plan.title}</h2>
                <p className='funeral-plans-inner-bottom-container'>
                {plan.description}
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
