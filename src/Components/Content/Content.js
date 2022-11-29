import React from "react";
import image from "../../images/simrella agrawal.jpeg";
const Content = () => {
  return (
    <>
      <div
        id="home"
        className=" w-full flex justify-items-center items-center bg-black h-screen"
      >
        <div className="flex flex-row justify-center container">
          <div className="avatar">
            <div className=" mobileMd:w-32 tablet:w-64  desktopMd:w-80 ">
              {/* <img className="" src={image} alt="pic" /> */}
            </div>
          </div>
          <div className="ml-8 w-[450px] tablet:w-[250px] desktopMd:w-[450px] ">
            <p className="text-white mobileMd:text-base mobileMd:mt-1 tablet:text-lg tablet:mt-3 desktopMd:text-2xl font-bold mt-5">
              Hey , I'm Simrella Agrawal
            </p>
            <h1 className=" text-yellow-600 laptopMd:text-8xl desktopMd:text-8xl font-bold">
              Full Stack
            </h1>
            <h1 className=" text-white laptopMd:text-8xl desktopMd:text-8xl font-bold">
              Developer
            </h1>
          </div>
        </div>
      </div>
      <div id="about" className="flex flex-col w-full bg-[#393b39] h-[500px]">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-7xl uppercase text-yellow-500 mt-10  ">
            About Me
          </h1>
          <hr className=" mt-2 w-[350px] border-t-2 border-white" />
          
          <p className="mt-14 font-bold  text-2xl text-white">
            Hello! I am Simrella Agrawal
          </p>
          <hr className=" mt-2 w-20 border-t-2 border-yellow-500" />
          <p className=" w-[450px] text-white mobileMd:text-[10px] mobileMd:mt-0  mobileMd:leading-4 
          tablet:text-base tablet:leading-5 tablet:mt-2 leading-7 desktopMd:text-lg mt-3">
            I'm a Full Stack Developer. With good knowledge in Front-end
            Development using React js , Back-end Development using Node js ,
            MongoDb and 4 star on Hackerrank with language JAVA
          </p>
        </div>
      </div>



      <div className="w-full flex flex-col h-[70vh] bg-[#201f1f]">
        <div className="flex flex-col items-center justify-center mt-14">
          <h1 className="uppercase text-white text-7xl">My Skills</h1>
        <hr className=" mt-2 w-80 border-t-2 border-yellow-500" />
        </div>
        


        <div className="mx-auto" >
          <div className="flex flex-row justify-start items-center  mt-10 gap-20">
            <div className="flex flex-row gap-10 mt-12">
            <div className="flex flex-col gap-1">
            <p className="text-white text-2xl font-bold  uppercase">html</p>
            <p className="text-white text-2xl font-bold uppercase">css</p>
            <p className="text-white text-2xl font-bold ">Bootstrap</p>
            <p className="text-white text-2xl font-bold ">Javascript</p>
            <p className="text-white text-2xl font-bold ">React Js</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rating rating-base">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  checked/>
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-yellow-500"  checked/>
              <input type="radio" name="rating-3" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" checked />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500" checked />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-500" />
              </div>
              </div>
          </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-1 ">
            <p className="text-white text-2xl font-bold  ">Node Js</p>
            <p className="text-white text-2xl font-bold ">MongoDb</p>
            <p className="text-white text-2xl font-bold ">Tailwind css</p>
            <p className="text-white text-2xl font-bold uppercase">Java</p>
            {/* <p className="text-white text-2xl font-bold uppercase">react Js</p> */}
            </div>
            <div className="flex flex-col gap-3">
              <div className="rating rating-base">
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" checked />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500"  checked/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-yellow-500" />
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-8" className="mask mask-star-2 bg-yellow-500" checked/>
              </div>
              <div className="rating rating-base">
              <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-500"  checked/>
              <input type="radio" name="rating-9" className="mask mask-star-2 bg-yellow-500" />
              </div>
              {/* <div className="rating rating-base">
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500" />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  />
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500"  checked/>
              <input type="radio" name="rating-1" className="mask mask-star-2 bg-yellow-500" />
              </div> */}
              
          </div>
          </div>

          </div>
         
        </div>








      </div>
    </>
  );
};
export default Content;
