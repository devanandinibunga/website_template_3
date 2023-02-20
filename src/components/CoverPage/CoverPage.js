import React from 'react';
import './CoverPage.scss'
import Carousel from 'react-bootstrap/Carousel';

export const CoverPage = () => {
  return (
    <div className='cover-page-container'>
      <Carousel className="carousel-container" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="	https://wporganic.com/funeral-service/wp-content/uploads/2016/04/front-slider.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption-to-carousel">
            <h3 className='cover-page-carousel-title'>Arranging funeral</h3>
            <div className='cover-page-details-container-only-xl'>
                <p>We are here to help you arrange the funeral you want for your loved one-every step of the way.</p>
                <button className='cover-page-carousel-btn'>READ MORE</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wporganic.com/funeral-service/wp-content/uploads/2016/04/front-slider-3.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="caption-to-carousel">
            <h3 className='cover-page-carousel-title'>Arrange the funeral event</h3>
            <div className='cover-page-details-container-only-xl'>
                <p>We are here to help you arrange the funeral you want for your loved one-every step of the way.</p>
                <button className='cover-page-carousel-btn'>VIEW EVENT</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wporganic.com/funeral-service/wp-content/uploads/2016/04/front-slider-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption-to-carousel">
            <h3 className='cover-page-carousel-title'>Helping you cope with grief</h3>
            <div className='cover-page-details-container-only-xl'>
                <p>We explain some of the feelings you may have and suggest ways of dealing with it.</p>
                <button className='cover-page-carousel-btn'>VIEW SERVICE</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
 