import React from 'react';
import './FuneralFooter.scss';
import { funeralcontext } from '../FuneralDataContext/FuneralDataContext';


export const FuneralFooter = () => {

    
  return (
    <div className='funeral-footer-container'>
        <div className='funeral-footer-logo-container'>
            <img className='funeral-footer-logo-container-img' src='https://wporganic.com/funeral-service/wp-content/uploads/2016/04/logo.png' alt="funeral-footer-logo"/>
            <p className='funeral-footer-logo-container-para'>Phasellus faucibus ut purus a condimentued id risus eget sem quis lorem lorem ipsum doloe ipsum condimentued id risus dolor sit diam eleioeincid.</p>
        </div>
        <funeralcontext.Consumer>
        {({funeralFooterData})=>{
            return(
                <>
                {funeralFooterData.map((eachName,i)=>
            <div key={i} className='funeral-footer-data-container'>
                <h1 className='funeral-footer-data-container-title'>{eachName.name}</h1>
                {eachName.details.map((detail,i)=>
                <p key={i} className='funeral-footer-data-container-para'>{detail}</p>
                )}
            </div>
        )}
                </>
            )
        }}
        
        </funeralcontext.Consumer>
        <div className='funeral-newsletter-container'>
            <div className='funeral-newsletter-image-container'>
                <img className='funeral-newsletter-image' src="http://wporganic.com/funeral-service/wp-content/themes/funeral/assets/images/ft-icon.png" alt='/'/>
                <p className='funeral-newsletter-image-para'>Subscribe to Newsletter</p>
            </div>
            <input placeholder='Email address here' className='funeral-newsletter-container-input'/>
            <button className='funeral-newsletter-container-btn'>Subscribe</button>
        </div>
    </div>
  )
}
