import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900">Welcome to My Landing Page</h1>
        <p className="mt-4 text-center text-gray-600">
          This is a simple landing page built with Remix, Tailwind CSS, and TypeScript.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}