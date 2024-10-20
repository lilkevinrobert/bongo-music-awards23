import React, { ReactNode } from "react";
import JudgeSidebar from "../navbar/JudgeSidebar.tsx";

interface LayoutProps {
  children: ReactNode;
}

const JudgeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <div className="text-black w-auto lg:w-80 bg-transparent h-[100vh] sticky top-0 hidden lg:flex flex-col items-center justify-normal bg-red-500 shadow">
        <JudgeSidebar />
      </div>
      <section className="w-full bg-transparent px-1 md:px-2 lg:px-6">
        {children}
      </section>
    </div>
  );
};

export default JudgeLayout;