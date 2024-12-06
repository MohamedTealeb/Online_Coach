import React from 'react'
import machine1 from '../../assets/1.svg'
import machine2 from '../../assets/2.svg'
import machine3 from '../../assets/3.svg'
import machine4 from '../../assets/4.svg'
import Slider from 'react-slick';
export default function Features() {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 2, 
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return <>
  <section id='Features' className='bg-black text-white'>

<div className="container mx-auto px-4">
    <div className="flex flex-col items-center mb-12">
        <div className="text-center mb-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono">Our Features</h3>

        </div>
    </div>
    <Slider {...settings}>
        <div className="single_feature text-center mb-6">
            <div className="icon">
                <img src={machine1} alt="Weightlifting" className="mx-auto" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Weightlifting</h4>
        </div>
        <div className="single_feature text-center mb-6">
            <div className="icon">
                <img src={machine2} alt="Specific Muscles" className="mx-auto" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Specific Muscles</h4>
        </div>
        <div className="single_feature text-center mb-6">
            <div className="icon">
                <img src={machine3} alt="Flex Your Muscles" className="mx-auto" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Flex Your Muscles</h4>
        </div>
        <div className="single_feature text-center mb-6">
            <div className="icon">
                <img src={machine4} alt="Cardio Exercises" className="mx-auto" />
            </div>
            <h4 className="mt-4 text-xl font-semibold">Cardio Exercises</h4>
        </div>
    </Slider>
</div>
</section>
  
  </>
}
