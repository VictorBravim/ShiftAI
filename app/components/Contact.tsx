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
        <div className="contact bg-black text-white p-4 min-h-screen">
            <div className="flex justify-between mt-4">
                <button onClick={prevSlide} className="bg-blue text-white font-bold p-4 rounded-full">Prev</button>
                <button onClick={nextSlide} className="bg-blue text-white font-bold p-4 rounded-full">Next</button>
            </div>
            <div className="w-full lg:w-1/4 flex items-center justify-center">
                <img src="app/assets/contact-image.jpg" alt="Contact Image" className="rounded-[50px] w-full h-auto" />
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-3/4 flex flex-col justify-center">
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