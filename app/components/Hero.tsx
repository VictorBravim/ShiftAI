import { FC } from "react";

const Hero: FC = () => {
    return (
        <div className="hero min-h-screen bg-black text-white flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full">
                <nav className="flex justify-between items-center p-12 bg-transparent">
                    <div className="text-2xl font-bold text-gray-900 bg-blue-600 px-10 py-10 rounded-full">
                    </div>
                    <div className="w-full flex justify-between items-center space-x-12 bg-gradient-to-r from-white to-blue-600 p-7 rounded-full mx-4">
                        <div className="flex space-x-12">
                            <button className="text-gray-900 font-bold hover:text-gray-600">SOLUTIONS</button>
                            <button className="text-gray-900 font-bold hover:text-gray-600">INTEGRATIONS</button>
                            <button className="text-gray-900 font-bold hover:text-gray-600">PRICING</button>
                        </div>
                        <div className="flex space-x-12">
                            <button className="text-white font-bold hover:text-gray-600">SIGN IN</button>
                        </div>
                    </div>
                    <button className="px-8 py-6 bg-blue-600 text-white font-bold rounded-full whitespace-nowrap">
                        REQUEST SET-UP
                    </button>
                </nav>
            </div>
            <div className="w-full h-screen flex items-center justify-center p-4">
                <div className="bg-dark flex flex-col items-center justify-center rounded-[50px] w-full h-full p-4">
                    <h1 className="text-6xl font-bold text-center">Welcome to My Landing Page</h1>
                    <p className="mt-4 text-lg text-center">This is the hero section of the landing page.</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;