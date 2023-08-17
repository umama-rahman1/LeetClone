import Navbar from "@/components/Navbar";
import React from "react";

type AuthPageProps = {};

const page: React.FC<AuthPageProps> = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </div>
  );
};
export default page;
