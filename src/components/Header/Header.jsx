import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <header className="bg-[#160E0B] text-white sticky top-0 z-50">
      <div className="w-full max-w-[1300px] mx-auto flex justify-between items-center py-4 px-5">
        {/* Logo */}
        <a
          href="/"
          className="font-bold text-[28px] hover:text-red-400 transition-colors duration-300 cursor-pointer"
        >
          Healet
        </a>

        {/* Hamburger Menu Toggle */}
        <button
          className="text-[40px]" // Always visible on all screen sizes
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <nav
          className="flex flex-col gap-4 text-center bg-[#160E0B] min-h-[100vh] justify-center items-center py-4"
        >
          {["home", "about", "shop", "blog"].map((item) => (
            <a
              key={item}
              href={`/${item}`}
              className="relative group text-white text-3xl hover:text-red-400 transition-colors duration-300"
              onClick={handleLinkClick} // Close menu on click
            >
              <span className="inline-block relative">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {/* Underline */}
                <span
                  className="absolute bottom-0 left-0 h-[2px] bg-red-400 w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                ></span>
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
