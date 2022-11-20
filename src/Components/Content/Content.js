import React from "react";
import image from "../../images/simrella agrawal.jpeg";
const Content = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center container  h-screen">
        <div className="avatar">
          <div className="w-80 rounded-full">
            <img src={image} />
          </div>
        </div>
        <div className="ml-10 w-[450px]">
          <p className="text-8xl font-bold font-mono">Hello</p>
          <h1 className=" text-xl font-bold mt-10">A Bit About Me:</h1>
          <p className="leading-7 mt-3">
           I'm a Full Stack Developer. With good knowledge in Front-end
            Development using React js , Back-end Development using Node js ,
            MongoDb and 4 star on Hackerrank with language JAVA
          </p>
        </div>
      </div>
    </>
  );
};
export default Content;
