import React from 'react'
import photo from '../../assets/03d84326a3c2f94a188ac8ac81bd4a53.jpg';
import photo2 from '../../assets/healthy-eating-concept-with-fresh-vegetables-and-eggs-on-black-background-bowls-of-healthy-food-on-black-background-healthy-eating-concept-ai-generated-free-photo.jpg';
import { Link, useParams } from 'react-router-dom';
import dumbel from '../../assets/dumbbell-gym-svgrepo-com.svg';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
export default function Exercises() {
  return <>

  <Helmet>
            <title>Exercises</title>

            <link rel="shortcut icon" href={dumbel} type="image/x-icon" />

        </Helmet>
      
  <div className="grid  grid-cols-1 sm:grid-cols-2   gap-4 ">
   
            <div className="shadow-md overflow-hidden relative flex">
              
                <img 
                    src={photo} 
                    alt="Image 1" 
                    className="w-full h-full    object-cover"
                />
                
                 <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to="/days"
                    className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg shadow-md
                               transition-all duration-300 ease-in-out"
                >
                    Exercises
                </Link>
            </motion.div>
        </div>
            </div>
            <div className="shadow-md overflow-hidden  relative flex">
                <img 
                    src={photo2}
                    alt="Image 2" 
                    className="w-full h-full object-cover"
                />
                               
                <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,
                }}
                whileHover={{
                    scale: 1.1,
                    rotate: 3,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    to="/month"
                    className="text-white text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg shadow-md
                               transition-all duration-300 ease-in-out"
                >
                   Diet Plan
                </Link>
            </motion.div>
        </div>
            </div>
        </div>
  
  
  </>
}
