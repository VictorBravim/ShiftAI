import { FC } from "react";

const About: FC = () => {
  return (
    <div className="about bg-black text-white p-4">

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[30%] flex justify-center bg-dark rounded-[60px]">
          <img src="app/assets/Card1.png" alt="Card1" className="w-full h-auto usernone" />
        </div>
        <div className="w-full lg:w-[70%] flex justify-center bg-dark rounded-[60px]">
          <img src="app/assets/Card2.png" alt="Card1" className="w-full h-auto usernone" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-[50%] bg-dark p-32 lg:p-80 rounded-[60px]">
          <h2 className="text-2xl font-bold">Card 3 (50%)</h2>
          <p className="mt-4">Conteúdo do card 3.</p>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col gap-8">
          <div className="bg-dark py-32 lg:py-64 rounded-[60px]">
            <h2 className="text-2xl font-bold">Card 4</h2>
            <p className="mt-4">Conteúdo do card 4.</p>
          </div>
          <button className="bg-dark py-32 lg:py-24 rounded-[60px]">
            <h2 className="text-2xl font-bold">Card 5</h2>
            <p className="mt-4">Conteúdo do card 5.</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-[25%] bg-dark p-32 lg:p-40 rounded-[60px]">
          <h2 className="text-2xl font-bold">Card 6</h2>
          <p className="mt-4">Conteúdo do card 6.</p>
        </div>
        <div className="w-full lg:w-[25%] bg-dark p-32 lg:p-40 rounded-[60px]">
          <h2 className="text-2xl font-bold">Card 7</h2>
          <p className="mt-4">Conteúdo do card 7.</p>
        </div>
        <div className="w-full lg:w-[25%] bg-dark p-32 lg:p-40 rounded-[60px]">
          <h2 className="text-2xl font-bold">Card 8</h2>
          <p className="mt-4">Conteúdo do card 8.</p>
        </div>
        <div className="w-full lg:w-[25%] bg-dark p-32 lg:p-40 rounded-[60px]">
          <h2 className="text-2xl font-bold">Card 9</h2>
          <p className="mt-4">Conteúdo do card 9.</p>
        </div>
      </div>

    </div>
  );
};

export default About;