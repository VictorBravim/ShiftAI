import { FC } from "react";
import { motion } from "framer-motion";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

const Hero: FC = () => {
    return (
        <div className="hero h-full lg:h-screen bg-black text-white flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <motion.nav 
                    className="flex justify-between items-center p-12 bg-transparent"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="rounded-full">
                        <motion.img 
                            src="/Logo.png" 
                            alt="Logo" 
                            className="w-20 lg:w-24 h-20 lg:h-24 object-contain usernone" 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="w-full hidden lg:flex justify-between items-center space-x-0 lg:space-x-12 bg-gradient-to-r from-white to-blue p-7 rounded-full lg:mx-6">
                        <div className="flex space-x-12">
                            <motion.button 
                                className="text-dark font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                SOLUTIONS
                            </motion.button>
                            <motion.button 
                                className="text-dark font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                INTEGRATIONS
                            </motion.button>
                            <motion.button 
                                className="text-dark font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                PRICING
                            </motion.button>
                        </div>
                        <div className="hidden lg:flex space-x-12">
                            <motion.button 
                                className="text-white font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                SIGN IN
                            </motion.button>
                        </div>
                    </div>
                    <motion.button 
                        className="flex items-center px-8 py-6 bg-blue text-white font-bold rounded-full whitespace-nowrap gap-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        REQUEST SET-UP <GoArrowRight className="text-2xl" />
                    </motion.button>
                </motion.nav>
            </div>
            <div className="w-full h-full lg:h-screen flex items-center justify-center p-4 lg:p-8">
                <div className="bg-dark flex flex-row items-center justify-center rounded-[50px] w-full h-full p-4">
                    <div className="bg-dark flex items-center lg:items-end w-[100%] h-full lg:py-0 py-16 lg:pt-0 pt-32 p-2 lg:p-12">
                        <motion.img 
                            src="/Hero.png" 
                            alt="image" 
                            className="w-full h-full lg:h-[666px] usernone" 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="bg-dark hidden lg:flex justify-end w-0 lg:w-[25%] h-full items-end">
                        <motion.button 
                            className="px-9 py-9 bg-white text-dark font-bold rounded-full text-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <GoArrowDown />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;