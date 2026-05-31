"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto h-[56px] md:h-[64px] px-2 md:px-4 lg:px-6 flex items-center justify-between w-full gap-2 md:gap-4 lg:gap-6 relative z-50 bg-white">
        
        {/* Left Section: Logo & Primary Nav */}
        <div className={`items-center shrink-0 ${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
          <Link
            href="/"
            className="flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4] rounded-full md:pr-2"
            aria-label="Home"
          >
            <div className="flex items-center justify-center p-2 rounded-full group-hover:bg-gray-100 transition-colors">
              <svg
                viewBox="0 0 24 24"
                aria-label="Pinterest"
                role="img"
                className="w-5 h-5 md:w-[22px] md:h-[22px] text-[#e60023] fill-current"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.869-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.2 0 1.031.397 2.133.893 2.738.098.12.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.923 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12" />
              </svg>
            </div>
            <span className="text-[#e60023] font-semibold text-[19px] tracking-tight hidden lg:block mr-1">
              Pinterest
            </span>
          </Link>
        </div>

        {/* Center Section: Search Bar */}
        <div className={`flex-1 min-w-0 ${isMobileSearchOpen ? 'flex' : 'hidden sm:flex'} items-center gap-2`}>
          <AnimatePresence>
            {isMobileSearchOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                onClick={() => setIsMobileSearchOpen(false)}
                className="sm:hidden p-2 -ml-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
                aria-label="Đóng tìm kiếm"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.form 
            layout
            className="relative group flex items-center w-full bg-gray-100 rounded-full h-10 md:h-11 px-4 hover:bg-gray-200/70 focus-within:bg-white focus-within:shadow-[0_2px_12px_rgb(0,0,0,0.06)] focus-within:ring-1 focus-within:ring-gray-200 transition-all duration-300 text-gray-500 focus-within:text-gray-900"
          >
            <Search className="w-4 h-4 md:w-[18px] md:h-[18px] flex-shrink-0 transition-colors" strokeWidth={2.5} />
            <input
              type="search"
              placeholder="Tìm vật liệu..."
              className="w-full bg-transparent border-none outline-none focus:ring-0 px-3 md:px-3 text-[14px] md:text-[15px] text-gray-900 placeholder-gray-400 overflow-hidden text-ellipsis whitespace-nowrap hidden sm:block font-medium"
            />
            <input
              type="search"
              autoFocus={isMobileSearchOpen}
              placeholder="Tìm vật liệu..."
              className="w-full bg-transparent border-none outline-none focus:ring-0 px-2 text-[14px] text-gray-900 placeholder-gray-400 overflow-hidden text-ellipsis whitespace-nowrap sm:hidden font-medium"
            />
          </motion.form>
        </div>

        {/* Right Section: Nav & Auth Buttons */}
        <div className={`items-center shrink-0 gap-2 md:gap-4 ${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'}`}>
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="sm:hidden p-2 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
            aria-label="Mở tìm kiếm"
          >
            <Search className="w-5 h-5" />
          </button>

          <nav className="hidden lg:flex items-center font-semibold text-gray-900 text-[15px]">
            <Link
              href="/products"
              className="h-10 px-3 lg:px-4 flex items-center rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4]"
            >
              Danh mục sản phẩm
            </Link>
            <Link
              href="/partner"
              className="h-10 px-3 lg:px-4 flex items-center rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4]"
            >
              Đăng kí đối tác
            </Link>
            <Link
              href="/news"
              className="h-10 px-3 lg:px-4 flex items-center rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4]"
            >
              Tin tức
            </Link>
            <Link
              href="/ebook"
              className="h-10 px-3 lg:px-4 flex items-center rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#71a1d4]"
            >
              Ebook
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button className="bg-[#e60023] text-white font-semibold rounded-full px-3 md:px-4 h-9 md:h-10 hover:bg-[#ad081b] transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ad081b] focus-visible:ring-offset-2 whitespace-nowrap">
              Đăng nhập
            </button>
            <button className="bg-[#e9e9e9] text-gray-900 font-semibold rounded-full px-3 md:px-4 h-9 md:h-10 hover:bg-[#e1e1e1] transition-colors text-sm hidden sm:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 whitespace-nowrap">
              Đăng ký
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 ml-1 text-gray-900 rounded-full hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden absolute top-[56px] md:top-[64px] left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col py-4 px-6 gap-2 z-40 max-h-[calc(100vh-56px)] overflow-y-auto"
          >
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Danh mục sản phẩm
            </Link>
            <Link
              href="/partner"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Đăng kí đối tác
            </Link>
            <Link
              href="/news"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Tin tức
            </Link>
            <Link
              href="/ebook"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-semibold text-gray-900 text-lg py-3 hover:bg-gray-50 rounded-xl px-4 transition-colors"
            >
              Ebook
            </Link>
            
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-100">
              <button className="w-full bg-[#e9e9e9] text-gray-900 font-semibold rounded-full px-4 h-12 hover:bg-[#e1e1e1] transition-colors text-base text-center">
                Đăng ký
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
