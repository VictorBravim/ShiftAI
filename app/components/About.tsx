import { FC } from "react";

const About: FC = () => {
  return (
    <div className="about bg-black text-white p-4">

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4 bg-dark p-32 lg:p-72 rounded-[50px]">
          <img src="app/assets/card1.png" alt="Card1" className="w-full h-auto" />
          <h2 className="text-2xl font-bold mt-4">Card 1 (30%)</h2>
          <p className="mt-4">Conteúdo do card 1.</p>
        </div>
        <div className="w-full lg:w-2/3 bg-dark p-32 lg:p-72 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 2 (70%)</h2>
          <p className="mt-4">Conteúdo do card 2.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/2 bg-dark p-32 lg:p-80 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 3 (50%)</h2>
          <p className="mt-4">Conteúdo do card 3.</p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="bg-dark p-32 lg:p-56 rounded-[50px]">
            <h2 className="text-2xl font-bold">Card 4</h2>
            <p className="mt-4">Conteúdo do card 4.</p>
          </div>
          <div className="bg-dark p-32 lg:p-32 rounded-[50px]">
            <h2 className="text-2xl font-bold">Card 5</h2>
            <p className="mt-4">Conteúdo do card 5.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-1/4 bg-dark p-32 lg:p-40 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 6</h2>
          <p className="mt-4">Conteúdo do card 6.</p>
        </div>
        <div className="w-full lg:w-1/4 bg-dark p-32 lg:p-40 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 7</h2>
          <p className="mt-4">Conteúdo do card 7.</p>
        </div>
        <div className="w-full lg:w-1/4 bg-dark p-32 lg:p-40 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 8</h2>
          <p className="mt-4">Conteúdo do card 8.</p>
        </div>
        <div className="w-full lg:w-1/4 bg-dark p-32 lg:p-40 rounded-[50px]">
          <h2 className="text-2xl font-bold">Card 9</h2>
          <p className="mt-4">Conteúdo do card 9.</p>
        </div>
      </div>

    </div>
  );
};

export default About;