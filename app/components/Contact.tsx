import { FC, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Contact: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        { id: 1, imageUrl: "/Slider1.png" },
        { id: 2, imageUrl: "/Slider1.png" },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    };

    return (
        <div className="contact bg-black text-white p-4 lg:p-8 h-full pb-28 lg:pb-96">
            <div className="w-full flex flex-col lg:flex-row mb-12">
                <div className="w-full lg:w-[70%]">
                    <img src="/Contact.png" alt="Contact Image" className="w-full h-auto usernone" />
                </div>
                <div className="w-full lg:w-[30%] flex justify-center items-end mt-8 lg:mt-0">
                    <div>
                        <button onClick={prevSlide} className="bg-black text-white border border-white text-3xl font-bold p-6 lg:p-8 rounded-full m-4"><GoArrowLeft /></button>
                        <button onClick={nextSlide} className="bg-white text-black text-3xl font-bold p-6 lg:p-8 rounded-full m-4"><GoArrowRight /></button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="w-full flex flex-col justify-center">
                    <div className="relative">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src={card.imageUrl} alt={`Slide ${card.id}`} className="w-full h-auto rounded-[50px] usernone" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;