import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-rio-sand">
      <Header />
      <main className="grow pt-20" role="main">
        {/* pt-20 compensa el navbar fijo */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
