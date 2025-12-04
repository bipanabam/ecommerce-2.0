import { useState, useRef, useEffect } from "react";
import {
  User,
  Heart,
  ShoppingCart,
  Phone,
  Search,
  ChevronDown,
  Menu,
  TextAlignStart,
  X
} from "lucide-react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full sticky top-0 bg-white shadow-md z-50">
      <div className="w-11/12 mx-auto py-4 flex flex-col gap-4">

        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-xl text-black">E-commerce</p>
            {/* SEARCH BAR */}
          <div className="hidden md:flex w-1/2 justify-center">
            <div className="relative flex w-full max-w-lg" ref={dropdownRef}>

              {/* Dropdown Button */}
              <button
                type="button"
                onClick={() => setOpenDropdown(!openDropdown)}
                className="flex items-center gap-2 px-4 text-sm text-black rounded-s-md rounded-e-none"
              >
                All Categories <ChevronDown size={18} />
              </button>

              {/* Dropdown Menu */}
              {openDropdown && (
                <div className="absolute top-12 left-0 w-40 bg-white text-black shadow-lg border border-[#A3D78A] animate-fadeIn z-20">
                  <ul className="p-2 text-sm">
                    <li className="p-2 hover:bg-[#A3D78A] cursor-pointer">Shopping</li>
                    <li className="p-2 hover:bg-[#A3D78A] cursor-pointer">Images</li>
                    <li className="p-2 hover:bg-[#A3D78A] cursor-pointer">News</li>
                    <li className="p-2 hover:bg-[#A3D78A] cursor-pointer">Finance</li>
                  </ul>
                </div>
              )}

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 outline-none rounded-e-md focus:bg-gray-50 placeholder-gray-300 text-gray-600"
              />

              <button className="px-4 flex items-center rounded-md">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-8">
            <span className="flex items-center gap-2 text-black">
              <User size={22} /> <text>Account</text>
            </span>

            <span className="flex items-center gap-2 text-black">
              <Heart size={22} /> <text>Wishlist</text>
            </span>

            <span className="flex items-center gap-2 text-black">
              <ShoppingCart size={22} /> <text>Cart</text>
            </span>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden rounded-md"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex justify-between items-center border-t border-gray-300 pt-3 gap-3">
          <span className="border border-gray-300 rounded-sm p-1 flex items-center justify-center">
            <TextAlignStart size={20} color={"black"} />
          </span>
          <ul className="flex gap-8 text-black font-medium">
            <li><text>Home</text></li>
            <li><text>About</text></li>
            <li><text>Customer Support</text></li>
          </ul>

          <span className="flex items-center gap-2 text-black">
            <Phone size={20} />
            +1 234 56789
          </span>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenu && (
          <div className="md:hidden w-full flex flex-col gap-3 border-t pt-3 animate-slideDown">
            {/* Search Bar for Mobile */}
            <div className="flex border rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-3 py-2 outline-none placeholder-gray-300 text-gray-600 rounded-md"
              />
              <button className="px-4 bg-gray-200 flex items-center rounded-md">
                <Search size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col gap-3 font-medium text-black">
              <li>Home</li>
              <li>About</li>
              <li>Customer Support</li>
            </ul>

            {/* <div className="flex flex-col gap-3 pt-2">
              <span className="flex gap-2 items-center"><User size={20} color="black" /> <text>Account</text></span>
              <span className="flex gap-2 items-center"><Heart size={20} color="black" /> <text>Wishlist</text></span>
              <span className="flex gap-2 items-center"><ShoppingCart size={20} color="black" /> <text>Cart</text></span>
            </div> */}

            <span className="pt-2 flex items-center gap-2 text-black"><Phone size={20} color="black" /> +1 234 56789</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
