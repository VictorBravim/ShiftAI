import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="hero min-h-screen bg-blue-600 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome to My Landing Page</h1>
        <p className="mt-4 text-lg">This is the hero section of the landing page.</p>
      </div>
    </div>
  );
};

export default Hero;