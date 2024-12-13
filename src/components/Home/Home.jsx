import React from "react";

const Home = () => {
  return (
    <div>
      <div className='w-full h-screen bg-[url("/slider-bg.jpg")] bg-cover bg-center flex justify-center items-center px-4'>
        <div className="text-white w-full max-w-[700px] flex flex-col justify-start items-start gap-4 p-4 sm:p-6">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl">
            Best Jewellery
            <br />
            Collection
          </h2>
          <p className="font-medium text-sm sm:text-base md:text-lg leading-6">
            At Healet, we focus on creating timeless gold jewelry
            that captures beauty and elegance. Discover designs that tell your
            story with unmatched craftsmanship.
          </p>
          <button
            className="flex items-center justify-center w-fit px-6 py-2 mt-4 text-sm md:text-base 
                bg-transparent text-[#FD9C6B] border border-[#FD9C6B] font-bold 
                hover:bg-[#FD9C6B] hover:text-white rounded-lg 
                transition duration-500"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
