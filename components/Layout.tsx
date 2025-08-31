
import React, { ReactNode } from 'react';

// This component is defined outside of Layout to prevent re-renders.
const Background = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"
    ></div>
    <div 
      className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#31c4b822,transparent)]"
    ></div>
  </div>
);

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Background />
      <main className="min-h-screen p-4 sm:p-6 md:p-8 relative z-10">
        <div className="max-w-7xl mx-auto">
            {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
