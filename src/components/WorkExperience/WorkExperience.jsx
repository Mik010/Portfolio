import React, { useRef } from 'react'
import "./WorkExperience.css"
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from "react-slick"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const WorkExperience = () => {

    const sliderRef = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slideRight = () => {
        sliderRef.current.slickNext()
    }
    const slideLeft = () => {
        sliderRef.current.slickPrev()
    }

    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className='experience-content'>
                <div className='arrow-right' onClick={slideRight}>
                    <span> <FontAwesomeIcon icon={faChevronRight} /></span>
                </div>

                <div className='arrow-left' onClick={slideLeft}>
                    <span> <FontAwesomeIcon icon={faChevronLeft} /></span>
                </div>


                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience
