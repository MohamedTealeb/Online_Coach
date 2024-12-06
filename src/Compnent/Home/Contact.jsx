import React from 'react'

export default function Contact() {
  return <>
  
  
  <section id='Contact' className='bg-black text-white border border-white w-3/4 md:w-1/3 lg:w-1/4 mx-auto my-8 p-6 rounded-lg shadow-lg'>  
            <h2 className='text-4xl text-white mb-4 text-center font-serif'>
                Contact US
            </h2>
            <div className="flex flex-col items-center">

                <div className="flex items-center w-full mb-4">
                    <i className="fa-solid fa-envelope fa-2x mr-3"></i>
                    <div>
                        <p className="text-xl font-semibold">Email</p>
                        <p className="text-base leading-7 font-mono">Contact us at</p>
                        <a className="text-lg font-bold text-purple-blue-500" href="mailto:ooa32145@gmail.com">Omartealeb@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-center w-full mb-4">
                    <i className="fa-solid fa-phone fa-2x mr-3"></i>
                    <div>
                        <p className="text-xl font-semibold">Phone</p>
                        <p className="text-base leading-7">Reach out to us by phone</p>
                        <a className="text-lg font-bold text-purple-blue-500" href="tel:+201500381180">+201500381180</a>
                    </div>
                </div>

                <div className="flex items-center w-full mb-4">
                    <i className="fa-brands fa-facebook fa-2x mr-3"></i>
                    <div>
                        <p className="text-xl font-semibold">Facebook</p>
                        <p className="text-base leading-7">Reach out to us by Facebook</p>
                        <a className="text-lg font-bold text-purple-blue-500" href="https://www.facebook.com/share/14uTu951qj/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Omar Tealeb</a>
                    </div>
                </div>

                <div className="flex items-center w-full mb-4">
                    <i className="fa-brands fa-instagram fa-2x mr-3"></i>
                    <div>
                        <p className="text-xl font-semibold">Instagram</p>
                        <p className="text-base leading-7">Reach out to us by Instagram</p>
                        <a className="text-lg font-bold text-purple-blue-500" href="https://www.instagram.com/tealeb_/profilecard/?igsh=MTNmcXU1b2NvbjNhbw==" target="_blank" rel="noopener noreferrer">Omar Tealeb</a>
                    </div>
                </div>
                <div className="flex items-center w-full mb-4">
                    <i className="fa-brands fa-tiktok fa-2x mr-3"></i>
                    <div>
                        <p className="text-xl font-semibold">Tiktok</p>
                        <p className="text-base leading-7">Reach out to us by TikTok</p>
                        <a className="text-lg font-bold text-purple-blue-500" href="https://www.tiktok.com/@t3lob_?_t=8rgmSbEue7r&_r=1" target="_blank" rel="noopener noreferrer">Omar Tealeb</a>
                    </div>
                </div>
            </div>
        </section>
  
  </>
}
