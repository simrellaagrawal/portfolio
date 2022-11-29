import React from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <header className=" w-full relative fixed top-0 inset-0">
          <Header />
        </header>
          <Content  />
        <footer className="bottom-0 inset-x-0 h-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
