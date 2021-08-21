import React, { useState } from 'react';
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ThumbNail({ serverUrl, slidesData, activeSlide, setActiveSlide }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlide, setNextSlide] = useState(0);
    const [showNumber, setshownumber] = useState(4);

    var settings = {
        dots: false,
        arrows: false,
        touchMove: false,
        swipe: false,
        swipeToSlide: false,
        infinite: false,
        speed: 500,
        slidesToShow: showNumber,
        slidesToScroll: showNumber,
        beforeChange: (current, next) => {
            setCurrentSlide(current);
            setNextSlide(next);
        },
        afterChange: (current) => {
            setCurrentSlide(current);
        },
    };
    var slider;

    return (
        <div className='thumbnails'>
            <div
                className={`slider-icons previous ${currentSlide === 0 && 'inactive'}`}
                onClick={() => {
                    if (currentSlide + nextSlide > slidesData.length - 1) {
                        setshownumber(4);
                        slider.slickGoTo(currentSlide - 4);
                        setCurrentSlide(currentSlide - 4);
                    } else {
                        slider.slickPrev();
                    }
                }}
            >
            </div>
            <Slider ref={(c) => (slider = c)} {...settings}>
                {slidesData &&
                    slidesData.map((slide, index) => {
                        return (
                            <a
                                className={`thumbnail d-flex flex-column align-items-center  ${index === activeSlide && 'active'
                                    }`}
                                onClick={() => setActiveSlide(index)}
                                key={slide.id}
                            >
                                <img
                                    src={`${serverUrl}thumbnails/${slide.thumbnail}`}
                                    alt='image'
                                    height={100}
                                    className=''
                                />
                                <div className='img-id'>{slide.id}</div>
                            </a>
                        );
                    })}
            </Slider>
            <div
                className={`slider-icons next ${nextSlide + 4 >= slidesData.length - 1 && 'inactive'
                    }`}
                onClick={() => {
                    if (nextSlide + 4 < slidesData.length - 1) {
                        if (currentSlide + nextSlide > slidesData.length - 1) {
                            setshownumber(3);
                            slider.slickGoTo(currentSlide + 6);
                            setCurrentSlide(currentSlide + 6);
                        } else {
                            slider.slickNext();
                        }
                    }
                }}
            >
            </div>
        </div>
    );
}

ThumbNail.propTypes = {
    slidesData: PropTypes.array,
    serverUrl: PropTypes.string,
    activeSlide: PropTypes.number,
    setActiveSlide: PropTypes.func
}

ThumbNail.propTypes = {
}

export default ThumbNail;