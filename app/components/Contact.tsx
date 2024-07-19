import { FC, useState } from "react";

const Contact: FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
        { id: 1, title: "Card 1", content: "Conteúdo do card 1" },
        { id: 2, title: "Card 2", content: "Conteúdo do card 2" },
        { id: 3, title: "Card 3", content: "Conteúdo do card 3" },
        { id: 4, title: "Card 4", content: "Conteúdo do card 4" }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
    };

    return (
        <div className="contact bg-black text-white p-8 h-full pb-96">
            <div className="w-full flex flex-row mb-12">
                <div className="w-full lg:w-[70%]">
                    <img src="app/assets/Contact.png" alt="Contact Image" className="w-full h-auto" />
                </div>
                <div className="w-[30%] flex justify-center items-end">
                    <div>
                    <button onClick={prevSlide} className="bg-black text-white border border-white font-bold p-8 rounded-full m-4">Next</button>
                    <button onClick={nextSlide} className="bg-white text-black font-bold p-8 rounded-full m-4">Next</button>
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
                                <div className="bg-dark p-16 lg:p-32 rounded-[50px]">
                                    <h2 className="text-2xl font-bold">{card.title}</h2>
                                    <p className="mt-4">{card.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;