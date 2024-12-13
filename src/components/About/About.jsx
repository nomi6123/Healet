// import React from 'apos;react'apos;;

const About = () => {
    return (
      <div>
        <div className="w-full min-h-[70vh] flex justify-center items-center px-4">
          <div className="mx-auto max-w-[1300px] w-full p-3 flex flex-col md:flex-row justify-center items-center gap-4">
            <img
              src="/about-img.jpg" 
              alt="About Us" 
              className="w-full md:w-[40%] h-[250px] md:h-[350px] object-cover rounded-lg"
            />
  
            <div className="w-full md:w-[50%] p-5 flex flex-col justify-start items-start">
              <h2 className="uppercase font-bold text-2xl md:text-4xl mb-2">About Us</h2>
              <p className="text-sm md:text-base leading-relaxed">
                Welcome to Healet, where we craft timeless gold jewelry that blends elegance with exceptional craftsmanship. 
                Each piece is designed to celebrate your unique moments with sophistication and grace.
              </p>
              <button
                className="flex items-center justify-center w-fit px-6 md:px-10 py-2 md:py-[10px] mt-4 text-sm md:text-base 
                           bg-[#FD9C6B] text-white border border-[#FD9C6B] font-bold 
                           hover:bg-transparent hover:text-[#FD9C6B] 
                           transition duration-500"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  