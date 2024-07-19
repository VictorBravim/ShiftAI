import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="flex justify-between items-center border border-white rounded-full">
                <div className="text-2xl font-bold text-dark bg-blue px-4 py-4 rounded-full">
                    <img src="app/assets/logo.png" alt="Logo" className="rounded-full w-16 h-16"/>
                </div>
                <div className="flex space-x-12">
                    <button className="text-white font-bold">Home</button>
                    <button className="text-white font-bold">About</button>
                    <button className="text-white font-bold">Services</button>
                    <button className="text-white font-bold">Contact</button>
                </div>
                <div className="flex space-x-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <img src="app/assets/facebook-icon.png" alt="Facebook" className="w-8 h-8"/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <img src="app/assets/twitter-icon.png" alt="Twitter" className="w-8 h-8"/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                        <img src="app/assets/instagram-icon.png" alt="Instagram" className="w-8 h-8"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;