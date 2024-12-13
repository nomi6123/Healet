const products = [
  {
    id: 1,
    quality: "new", // Fixed the typo from quailty to quality
    img: "/p1.png",
    type: "Necklace",
    price: "price$200",
  },
  {
    id: 2,
    quality: "new",
    img: "/p2.png",
    type: "Necklace",
    price: "price$200",
  },
  {
    id: 3,
    quality: "new",
    img: "/p3.png",
    type: "Necklace",
    price: "price$200",
  },
  {
    id: 4,
    quality: "new",
    img: "/p4.png",
    type: "Ring",
    price: "price$200",
  },
  {
    id: 5,
    quality: "new",
    img: "/p5.png",
    type: "Ring",
    price: "price$200",
  },
  {
    id: 6,
    quality: "new",
    img: "/p6.png",
    type: "Earrings",
    price: "price$200",
  },
  {
    id: 7,
    quality: "new",
    img: "/p7.png",
    type: "Earrings",
    price: "price$200",
  },
  {
    id: 8,
    quality: "new",
    img: "/p8.png",
    type: "Necklace",
    price: "price$200",
  },
];

const Shop = () => {
  return (
    <div>
       <div className="w-full p-10 gap-5 flex justify-center items-center flex-col">
      <h2 className="font-bold text-4xl uppercase text-nowrap">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id} // Using product.id instead of index
            className="bg-gray-200 shadow-xl w-full p-8 flex flex-col hover:bg-slate-300 rounded-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-lg font-semibold">{product.quality}</h2>
            <div className="p-2 flex flex-col justify-center items-center">
              <img
                src={product.img}
                alt={product.type}
                width={200} // Added width and height to optimize images in Next.js
                height={200}
                className="w-fit h-[140px] object-fill object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-black flex w-full font-bold justify-between">
                {product.type}
                <span className="text-red-600 font-bold">{product.price}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center justify-center w-fit px-14 py-3 mt-4 text-sm md:text-base bg-[#FD9C6B] text-white border border-[#FD9C6B] font-bold hover:bg-transparent hover:text-[#FD9C6B] rounded-lg transition duration-500"
      >
        View All Products
      </button>
    </div>
      
    </div>
  )
}

export default Shop
