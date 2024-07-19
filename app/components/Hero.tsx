import { FC } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";

const Hero: FC = () => {
    return (
        <div className="hero min-h-screen bg-black text-white flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <nav className="flex justify-between items-center p-12 bg-transparent">
                    <div className="hidden lg:flex rounded-full">
                        <img src="app/assets/Logo.png" alt="Logo" className="w-24 h-24 object-contain usernone" />
                    </div>
                    <div className="w-full flex justify-between items-center space-x-0 lg:space-x-12 bg-gradient-to-r from-white to-blue p-7 rounded-full lg:mx-6">
                        <div className="flex space-x-12">
                            <button className="text-dark font-bold">SOLUTIONS</button>
                            <button className="text-dark font-bold">INTEGRATIONS</button>
                            <button className="text-dark font-bold">PRICING</button>
                        </div>
                        <div className="hidden lg:flex space-x-12">
                            <button className="text-white font-bold">SIGN IN</button>
                        </div>
                    </div>
                    <button className="hidden lg:flex items-center px-8 py-6 bg-blue text-white font-bold rounded-full whitespace-nowrap gap-2">
                        REQUEST SET-UP <GoArrowRight className="text-2xl" />
                    </button>
                </nav>
            </div>
            <div className="w-full h-screen flex items-center justify-center p-8">
                <div className="bg-dark flex flex-row items-center justify-center rounded-[50px] w-full h-full p-4">
                    <div className="bg-dark flex items-end w-[100%] h-full p-12">
                        <img src="app/assets/Hero.png" alt="image" className="w-full h-[666px] usernone" />
                    </div>
                    <div className="bg-dark flex justify-end w-[25%] h-full items-end">
                        <button className="px-9 py-9 bg-white text-dark font-bold rounded-full text-3xl">
                            <GoArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;