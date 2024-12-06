import React, { useState } from 'react'
import './Home.css'

import { Link, useNavigate } from 'react-router-dom'
import dumbel from '../../assets/dumbbell-gym-svgrepo-com.svg'
import { motion } from 'framer-motion'

import { Helmet } from 'react-helmet'
import Pricing from './Pricing'
import Features from './Features'
import Contact from './Contact'

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

   

    return <>
        <Helmet>
            <title>Home</title>

            <link rel="shortcut icon" href={dumbel} type="image/x-icon" />

        </Helmet>

        <section className='home text-white '>

            <nav className="w-full py-6  w-screen">
                <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
                    <section className="flex items-center hover:text-red-500  space-x-2">
                        <i className="fa-solid fa-dumbbell fa-2x"></i>
                        <a href="#home" className="font-bold text-xl hover:text-red-500  focus:ring focus:ring-red-500 focus:ring-opacity-25 outline-none rounded-lg"></a>
                    </section>
                    <section>
                        <ul className="md:space-x-8 space-x-6  font-semibold hidden md:flex">
                            <li className="relative group">
                                <a href="#home" className="group focus:ring hover:text-red-400 focus:ring-red-500 focus:ring-opacity-25 outline-none rounded-lg"> Home </a>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-red-500 transition-al absolute bottom-0" />
                            </li>
                            <li className="relative group">
                                <a href="#Pricing" className="focus:ring focus:ring-red-500 hover:text-red-400 focus:ring-opacity-25 outline-none rounded-lg">Pricing</a>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-red-500 transition-al absolute bottom-0" />
                            </li>
                            <li className="relative group">
                                <a href="#Features" className="focus:ring focus:ring-red-500 hover:text-red-400 focus:ring-opacity-25 outline-none rounded-lg">Features</a>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-red-500 transition-al absolute bottom-0" />
                            </li>
                            <li className="relative group">
                                <a href="#Contact" className="focus:ring focus:ring-red-500 hover:text-red-400 focus:ring-opacity-25 outline-none rounded-lg">Contact us</a>
                                <div className="w-full h-0.5 bg-transparent group-hover:bg-red-500 transition-al absolute bottom-0" />
                            </li>
                        </ul>
                    </section>
                    <section>
                        <button 
                            onClick={toggleMenu} 
                            className="flex md:hidden bg-black text-white hover:bg-red-500 p-2 rounded-full transition-all focus:ring focus:ring-red-500 focus:ring-opacity-25 active:bg-red-500 outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>

                        
                        {isMenuOpen && (
                            <ul className="md:hidden flex flex-col space-y-4 bg-black p-4 rounded-lg shadow-lg absolute top-16 left-0 right-0">
                                <li>
                                    <a href="#home" className="text-white hover:text-red-500">Home</a>
                                </li>
                                <li>
                                    <a href="#Pricing" className="text-white hover:text-red-500">Pricing</a>
                                </li>
                                <li>
                                    <a href="#Features" className="text-white hover:text-red-500">Features</a>
                                </li>
                                <li>
                                    <a href="#Contact" className="text-w hover:text-red-500">Contact us</a>
                                </li>
                                <li>
                                    <Link to="login" className="bg-transparent px-4 py-1 rounded-xl border-white border-2 hover:text-white font-semibold hover:bg-red-500 active:bg-white focus:ring focus:ring-white focus:ring-opacity-25 outline-none">Login</Link>
                                </li>
                            </ul>
                        )}

                       
                        <ul className="md:flex hidden space-x-4">
                           <li>
                                <Link to="login" className="bg-transparent px-4 py-1 rounded-xl border-white border-2 hover:text-white font-semibold hover:bg-red-500 active:bg-white focus:ring focus:ring-white focus:ring-opacity-25 outline-none">Login</Link>
                            </li>
                        </ul>
                    </section>
                </div>
            </nav>

            <div className="container mx-auto ">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-12 mt-48">
                        <motion.div
                            className="font-bold text-center"
                            initial={{ color: '#FFFFFF' }}
                            animate={{ 
                                color: [
                                    '#FFFFFF',
                                    '#FF0000',
                                    '#FFFFFF'
                                ]
                            }}
                            transition={{ 
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity
                            }}
                        >
                            <span className='text-3xl sm:text-4xl md:text-5xl'>Build Up Your</span>
                            <h2 className='text-5xl sm:text-7xl md:text-9xl'>Body Shape</h2>
                            <p className='text-lg sm:text-xl m-4 sm:m-8'>Build Your Body and Fitness with Professional Touch</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        <Pricing/>
        <Features/>
       <Contact/>
    </>
}
