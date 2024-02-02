import React from 'react'
import "./Hero.css"

const Hero = () => {
    return (
        <section id='home' className='hero-container'>

            {/* Left side */}
            <div className='hero-content'>
                <h2>Michele Cascarano <span>fullStack Developer</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci reprehenderit voluptas laudantium dolorem soluta, earum culpa.</p>
            </div>

            {/* Right side */}
            <div className='hero-img'>

                <div>
                    {/* Left */}
                    <div className='prova'>
                        <div className='tech-icon'>
                            <img src='./assets/images/logo_miki.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/logo_miki.png' alt='' />
                        </div>
                        <div className='tech-icon'>
                            <img src='./assets/images/logo_miki.png' alt='' />
                        </div>
                    </div>

                    {/* Center */}
                    <img src='./assets/images/logo.png' alt='' />
                </div>

                {/* Bottom */}
                <div>
                    <div className='tech-icon'>
                        <img src='./assets/images/logo_miki.png' alt='' />
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/logo_miki.png' alt='' />
                    </div>
                    <div className='tech-icon'>
                        <img src='./assets/images/logo_miki.png' alt='' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero
