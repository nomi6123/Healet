import React from 'react';

const Blog = () => {
  // Get today's date and next day's date
  const today = new Date();
  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  // Format dates to display as "DD MMM"
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Dec"
    return `${day} ${month}`;
  };

  const nextDayFormatted = formatDate(nextDay);

  return (
    <div>
      <div className='min-h-screen flex flex-col justify-center items-center w-full'>
        <h2 className='w-full text-center font-bold text-4xl uppercase mb-4 mt-4'>
          Latest From Blog
        </h2>
        <div className='flex flex-wrap justify-center items-center w-full p-3 gap-8'>
          {/* Card 1 */}
          <div className='flex flex-col justify-center items-center w-full md:w-[80%] lg:w-[40%] gap-3'>
            <div className='bg-[url("/b1.jpg")] bg-cover bg-no-repeat w-full h-[300px] md:h-[450px] flex justify-start items-end'>
              <div className='bg-white w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex justify-center items-center translate-y-3 ml-5 md:ml-10'>
                <div className='bg-[#160E0B] w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-white text-xl md:text-3xl font-semibold text-center'>
                  {nextDayFormatted.split(' ')[0]}
                  <br />
                  {nextDayFormatted.split(' ')[1]}
                </div>
              </div>
            </div>
            <div className='w-full p-3 md:p-5'>
              <h2 className='font-bold text-lg md:text-2xl tracking-tighter leading-tight'>
                Look even slightly believable. If you are
              </h2>
              <p className='text-sm md:text-base'>
                Alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable.
              </p>
              <button
                className='flex items-center justify-center w-fit px-6 md:px-8 py-2 md:py-3 mt-4 text-sm md:text-base 
                bg-transparent text-black text-nowrap border border-black font-bold 
                hover:bg-black hover:text-white 
                transition duration-500'>
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col justify-center items-center w-full md:w-[80%] lg:w-[40%] gap-3'>
            <div className='bg-[url("/b2.jpg")] bg-cover bg-no-repeat w-full  h-[300px] md:h-[450px] flex justify-start items-end'>
              <div className='bg-white w-[70px] h-[70px] md:w-[90px] md:h-[90px] flex justify-center items-center translate-y-3 ml-5 md:ml-10'>
                <div className='bg-[#160E0B] w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-white text-xl md:text-3xl font-semibold text-center'>
                  {nextDayFormatted.split(' ')[0]}
                  <br />
                  {nextDayFormatted.split(' ')[1]}
                </div>
              </div>
            </div>
            <div className='w-full p-3 md:p-5'>
              <h2 className='font-bold text-lg md:text-2xl tracking-tighter leading-tight'>
                Look even slightly believable. If you are
              </h2>
              <p className='text-sm md:text-base'>
                Alteration in some form, by injected humour, or randomised
                words which don't look even slightly believable.
              </p>
              <button
                className='flex items-center justify-center w-fit px-6 md:px-8 py-2 md:py-3 mt-4 text-sm md:text-base 
                bg-transparent text-black border text-nowrap border-black font-bold 
                hover:bg-black hover:text-white 
                transition duration-500'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
