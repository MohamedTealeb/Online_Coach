import React, { useContext, useState } from 'react';
import photo from '../../assets/wallpapersden.com_minion-in-gym_1920x1220.jpg';
import { motion } from 'framer-motion';
import minionImage from '../../assets/6144f28c-fc41-45de-af88-2ad85b463818.webp'; 
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import dumbel from '../../assets/dumbbell-gym-svgrepo-com.svg';

export default function Login() {
    const navigate = useNavigate();
  

    const users = {
        alluser: [
            { id: 1, username: "admin", password: "password123" },
            { id: 2, username: "zeyad Habib", password: "Zeyad456"  ,"navigateTo": "/zeyadhabib"},
            { id: 3, username: "yossef Lila", password: "Yossef789", "navigateTo": "/yosseflila" },
            { id: 4, username: "mohamed Ashraf", password: "Mohamed654", "navigateTo": "/mohamedashraf" },
            { id: 5, username: "yossef Darawish", password: "Yossef741", "navigateTo": "/yossefdarwish" },
            { id: 6, username: "ahmed Darawish", password: "Ahmed852", "navigateTo": "/ahmeddarwish" },
            { id: 7, username: "mohamed samer", password: "samer852", "navigateTo": "/mohamedsamer" },
            { id: 8, username: "mahmoud saber", password: "saber741", "navigateTo": "/mahmoudsabra" },
        ]
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        const user = users.alluser.find(user => user.username === username && user.password === password);
       

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        
            
            setSuccess(true);
            setError('');
            
            if (user.username === 'admin') {
                navigate("/admin");
            } else {
                navigate(user.navigateTo);
            }
        } else {
            setError('Invalid username or password');
            setSuccess(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
                <link rel="shortcut icon" href={dumbel} type="image/x-icon" />
            </Helmet>

            <div className="bg-black flex flex-col lg:flex-row justify-center items-center h-screen">
                <div className="w-full h-1/2 lg:w-1/2 lg:h-full">
                    <img src={photo} alt="Placeholder Image" className="object-cover w-full h-full" />
                </div>

                <div className="lg:p-36 md:p-20 sm:p-10 p-8 w-full lg:w-1/2">
                <div className="relative">
                    <motion.div
                        initial={{ y: -100 }} 
                        animate={{ y: 300 }} 
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "loop",
                            yoyo: true 
                        }}
                        style={{
                            position: 'absolute',
                            left: '-50px',
                            transform: 'translateX(0)',
                            zIndex: 1,
                            width: '20%',
                            maxWidth: '80px',
                        }}
                    >
                        <img 
                            src={minionImage} 
                            alt="Minion" 
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </motion.div>
                </div>
                    <h1 className="text-2xl text-white font-semibold mb-4 text-center">Login</h1>
                    {success && <p className="text-center bg-green-500 text-white">Login successful!</p>}
                    {error && <p className="error text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit} method="POST">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-white">Username</label>
                            <input 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required 
                                type="text" 
                                id="username" 
                                name="username" 
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-white">Password</label>
                            <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" 
                                autoComplete="off"
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-white" />
                            <label htmlFor="remember" className="text-white ml-2">Remember Me</label>
                        </div>
                        <div className="mb-6 text-white text-center">
                            <a href="#" className="hover:underline hover:text-red-500">Forgot Password?</a>
                        </div>
                        <motion.button 
                            type="submit" 
                            className="bg-white text-black font-semibold rounded-md py-2 px-4 w-full"
                            whileHover={{ scale: 1.05, backgroundColor: '#f56565', color: '#fff' }}
                            transition={{ duration: 0.3 }}
                        >
                            Login
                        </motion.button>
                    </form>
                </div>
            </div>
        </>
    );
}
