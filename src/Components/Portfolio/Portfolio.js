import React from "react";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-col  ">
        <header>
          <Header />
        </header>
        <div className="">
          <Content />
        </div>
        <footer className="fixed bottom-0 inset-x-0 h-16">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Portfolio;
