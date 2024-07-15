import { FC } from "react";

const About: FC = () => {
  return (
    <div className="about py-16 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-lg">
          We are a company dedicated to providing the best services to our customers.
        </p>
      </div>
    </div>
  );
};

export default About;