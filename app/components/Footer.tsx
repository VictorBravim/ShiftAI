import { FC } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer: FC = () => {
    return (
        <footer className="bg-black text-white p-4 lg:p-8">
            <div className="flex justify-between items-center border border-white rounded-full">
                <div className="text-2xl font-bold text-dark bg-blue px-4 py-4 rounded-full">
                    <img src="/assets/logo.png" alt="Logo" className="rounded-full w-16 h-16"/>
                </div>
                <div className="hidden md:flex space-x-12">
                    <button className="text-white font-bold text-sm">Home</button>
                    <button className="text-white font-bold text-sm">About</button>
                    <button className="text-white font-bold text-sm">Services</button>
                    <button className="text-white font-bold text-sm">Contact</button>
                </div>
                <div className="flex space-x-6 mr-8">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white text-3xl">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;