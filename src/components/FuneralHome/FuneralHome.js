import { Divider } from 'antd';
import React from 'react';
import './FuneralHome.scss';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr';

export const FuneralHome = () => {
  return (
    <div className='funeral-home-container'>
        <h1 className='funeral-home-container-title'>Welcome to our Funeral Caring Home</h1>
        <div className='funeral-home-inner-container'>
            <img className='funeral-home-inner-container-image' src="http://wporganic.com/funeral-service/wp-content/uploads/2016/04/about-pic.jpg" alt="funeral-home-logo"/>
            <div className='funeral-home-inner-middle-container'> 
                <h1 className='funeral-home-inner-middle-container-title'>We strive to set the highest standards for funeral profession in terms of client service and care.</h1>
                <p className='funeral-home-inner-middle-container-para'>Etiam egetdignissim lorem a ullamcorper leoras aliquam quam etmagna dictum pharetra mnec purus sed erat lobortis condimentum auris allow malesuada dolorgravileoras aliquam quam felis illa lacus, ac blandit nulla nulla eu lorem.</p>
            </div>
            <div className='funeral-home-inner-right-container'> 
                <h1 className='funeral-home-inner-right-container-title'>FUNERAL<br/> SUPPORT</h1>
                <p className='funeral-home-inner-right-container-para'>If you'd like to speak to us directly, call free 24 hours a day</p>
                <p><span><BsFillTelephoneFill/></span> 1800-123-4567 / 6789</p>
                <Divider/>
                <p><span><GrMail/></span> info@funeral.com</p>
            </div>
        </div>
    </div>
  )
}
