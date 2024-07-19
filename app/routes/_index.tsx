import { FC } from "react";
import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => [
  { title: "ShiftAI" },
  { name: "description", content: "Descrição da página inicial" }
];

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;