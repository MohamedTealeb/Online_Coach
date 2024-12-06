import React from 'react'
import photo from '../../assets/photo_2024-11-24_14-25-39.jpg'
import photo2 from '../../assets/photo_2024-11-24_16-17-03.jpg'
import photo3 from '../../assets/photo_6021537161536454712_y (2).jpg'
export default function Pricing() {
  return<>
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-black text-white" id='Pricing'>
            <h2 className='text-4xl sm:text-6xl md:text-8xl text-white m-4 sm:m-6 md:m-8 flex items-center justify-center font-mono'>
                Our Pricing
            </h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="rounded-lg border border-white overflow-hidden mb-10">
                        <img
                            src={photo}
                            alt="image"
                            className="w-full h-auto"
                        />
                        <div className="p-8 text-center">
                            <p className="text-base text-body-color leading-relaxed mb-7">
                                #1 MONTH = <span  className='line-through'>600EGP</span>❌  <br />
                                500EGP✅
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-white overflow-hidden mb-10">
                        <img
                            src={photo2}
                            alt="image"
                            className="w-full h-auto"
                        />
                        <div className="p-8 text-center">
                            <p className="text-base text-body-color leading-relaxed mb-7">
                                #3 MONTHS = <span className='line-through'>1800EGP</span>❌ <br />
                                1400EGP✅
                            </p>
                        </div>
                    </div>
                    <div className="rounded-lg border border-white overflow-hidden mb-10">
                        <img
                            src={photo3}
                            alt="image"
                            className="w-full h-auto"
                        />
                        <div className="p-8 text-center">
                            <p className="text-base text-body-color leading-relaxed mb-7">
                                #6 MONTHS = <span className='line-through'>3600EGP</span>❌ <br />
                                2800EGP✅
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  
  </>
}
