import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import dumbel from '../../../assets/dumbbell-gym-svgrepo-com.svg';


const Days = () => {
    const { id } = useParams()
    const daysArray = Array.from({ length: 6 }, (_, index) => `Day ${index + 1}`);
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(null);

    const handleDayClick = (day,id) => {
        
         
        setSelectedDay(day);
        navigate(`/exercise/${day}`);
      
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return <>
      <Helmet>
                <title>Days</title>
                <link rel="shortcut icon" href={dumbel} type="image/x-icon" />
            </Helmet>

        <div className="p-4">
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {daysArray.map((day) => (
                    <motion.div
                        key={day}
                        variants={item}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex justify-center items-center h-48 sm:h-64 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 text-white cursor-pointer rounded-lg shadow-lg"
                        onClick={() => handleDayClick(day)}
                    >
                        <motion.span 
                            className="text-2xl sm:text-3xl font-serif font-bold"
                            whileHover={{ scale: 1.1 }}
                        >
                            {day}
                        </motion.span>
                        <motion.div 
                            className="absolute bottom-full mb-2 bg-black text-white text-xs rounded p-1"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                        >
                            {`Info about ${day}`}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </>
};

export default Days;