import { FC } from "react";

const About: FC = () => {
  return (
    <div className="about bg-black text-white p-4">

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[30%] flex justify-center bg-dark rounded-[60px]">
          <img src="app/assets/Card1.png" alt="Card1" className="w-full h-auto usernone" />
        </div>
        <div className="w-full lg:w-[70%] flex justify-center bg-dark rounded-[60px]">
          <img src="app/assets/Card2.png" alt="Card2" className="w-full h-auto usernone" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <div className="w-full lg:w-[50%] bg-dark rounded-[65px]">
        <img src="app/assets/Card3.png" alt="Card3" className="w-full h-auto usernone" />
        </div>
        <div className="w-full lg:w-[50%] flex flex-col gap-8">
          <div className="bg-dark rounded-[60px]">
          <img src="app/assets/Card4.png" alt="Card4" className="w-full h-auto usernone" />
          </div>
          <div className="bg-dark rounded-[60px]">
          <img src="app/assets/Card5.png" alt="Card5" className="w-full h-auto usernone" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        <button className="w-full lg:w-[25%] bg-dark rounded-[60px]">
        <img src="app/assets/Card6.png" alt="Card6" className="w-full h-auto usernone" />
        </button>
        <button className="w-full lg:w-[25%] bg-dark rounded-[60px]">
        <img src="app/assets/Card7.png" alt="Card7" className="w-full h-auto usernone" />
        </button>
        <button className="w-full lg:w-[25%] bg-dark rounded-[60px]">
        <img src="app/assets/Card8.png" alt="Card8" className="w-full h-auto usernone" />
        </button>
        <button className="w-full lg:w-[25%] bg-dark rounded-[60px]">
        <img src="app/assets/Card9.png" alt="Card9" className="w-full h-auto usernone" />
        </button>
      </div>

    </div>
  );
};

export default About;