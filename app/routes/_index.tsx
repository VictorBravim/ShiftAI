import { FC } from "react";
import Hero from "~/components/Hero";
import About from "~/components/About";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default HomePage;