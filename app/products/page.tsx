"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Calendar, 
  Building2, 
  Filter, 
  X, 
  SlidersHorizontal, 
  Check, 
  Award, 
  ShieldCheck, 
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Globe,
  Network,
  Smartphone,
  Building,
  Factory,
  Briefcase,
  Users,
  Layers,
  Sprout
} from "lucide-react";
import { LIST_SUPPLIERS, AVAILABLE_LOCATIONS, AVAILABLE_CATEGORIES } from "@/lib/data-suppliers";
import { SupplierCard } from "@/components/products/SupplierCard";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { MobileFilterDrawer } from "@/components/products/MobileFilterDrawer";

export default function ProductsPage() {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả");
  const [selectedLocation, setSelectedLocation] = useState<string>("Tất cả");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [onlyVerified, setOnlyVerified] = useState(false);
  
  // Mobile drawer filter toggle state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Active filter count computed
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory !== "Tất cả") count++;
    if (selectedLocation !== "Tất cả") count++;
    if (selectedRating !== null) count++;
    if (onlyVerified) count++;
    if (searchQuery.trim() !== "") count++;
    return count;
  }, [selectedCategory, selectedLocation, selectedRating, onlyVerified, searchQuery]);

  // Handle clearing all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Tất cả");
    setSelectedLocation("Tất cả");
    setSelectedRating(null);
    setOnlyVerified(false);
    setCurrentPage(1);
  };

  // Wrap filter setters to automatically reset current page
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };
  
  const handleLocationChange = (loc: string) => {
    setSelectedLocation(loc);
    setCurrentPage(1);
  };
  
  const handleRatingChange = (rating: number | null) => {
    setSelectedRating(rating);
    setCurrentPage(1);
  };
  
  const handleOnlyVerifiedChange = (val: boolean) => {
    setOnlyVerified(val);
    setCurrentPage(1);
  };

  // Filtered Suppliers List
  const filteredSuppliers = useMemo(() => {
    return LIST_SUPPLIERS.filter((supplier) => {
      // 1. Search Query
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = supplier.name.toLowerCase().includes(query);
        const matchesDesc = supplier.description.toLowerCase().includes(query);
        const matchesAddr = supplier.address.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesAddr) return false;
      }

      // 2. Category Filter
      if (selectedCategory !== "Tất cả") {
        if (!supplier.categories.includes(selectedCategory)) return false;
      }

      // 3. Location Filter
      if (selectedLocation !== "Tất cả") {
        if (supplier.location !== selectedLocation) return false;
      }

      // 4. Rating Filter
      if (selectedRating !== null) {
        if (supplier.rating < selectedRating) return false;
      }

      // 5. Verified/Auth Partner
      if (onlyVerified) {
        if (!supplier.isVerified) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedLocation, selectedRating, onlyVerified]);

  // Paginated Suppliers List
  const paginatedSuppliers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredSuppliers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredSuppliers, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredSuppliers.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#fafafb] to-[#f4f5f7] min-h-screen font-sans w-full overflow-x-hidden">
      <div className="pt-8  pb-20 px-4 sm:px-6 lg:px-10 max-w-[1500px] mx-auto w-full">
      


      {/* Main Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-5">

        {/* ================= LEFT SIDEBAR FILTER (DESKTOP) ================= */}
        <div className="hidden lg:block lg:col-span-1">
          <FilterSidebar 
            activeFilterCount={activeFilterCount}
            resetFilters={resetFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
            selectedLocation={selectedLocation}
            setSelectedLocation={handleLocationChange}
            selectedRating={selectedRating}
            setSelectedRating={handleRatingChange}
            onlyVerified={onlyVerified}
            setOnlyVerified={handleOnlyVerifiedChange}
          />
        </div>


        {/* ================= RIGHT CONTENT AREA: HORIZONTAL RESORT CARDS ================= */}
        <section className="lg:col-span-1 space-y-3 min-w-0">
          <AnimatePresence>
            {filteredSuppliers.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[10px] p-12 text-center border border-gray-100 shadow-sm space-y-4 max-w-xl mx-auto mt-10"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-gray-400">
                  <Search className="w-6 h-6" strokeWidth={2.5}/>
                </div>
                <h3 className="text-[20px] font-bold text-gray-900 font-serif">Không tìm thấy nhà cung cấp nào</h3>
                <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed px-4">
                  Rất tiếc, các tiêu chí lọc hiện tại của bạn không khớp với nhà cung cấp nào trong kho bảo chứng của chúng tôi. Hãy thử xoá bớt một số bộ lọc hoặc gõ từ khoá tìm kiếm khác rộng rãi hơn.
                </p>
                <button 
                  onClick={resetFilters}
                  className="bg-[#cc1a26] text-white hover:bg-[#a8141f] transition-all py-3 px-8 rounded-[10px] font-bold text-[13px] inline-block mt-4 shadow-sm"
                >
                  Xoá bộ lọc & tải lại danh mục
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="supplier-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 min-w-0"
              >
                {paginatedSuppliers.map((supplier, idx) => (
                  <SupplierCard key={supplier.id} supplier={supplier} idx={idx} />
                ))}

                {/* Pagination Controls */}
                {totalPages > 1 && (() => {
                  const getPages = () => {
                    const pages: (number | string)[] = [];
                    if (totalPages <= 7) {
                      for (let i = 1; i <= totalPages; i++) {
                        pages.push(i);
                      }
                    } else {
                      if (currentPage <= 4) {
                        pages.push(1, 2, 3, 4, 5, "...", totalPages);
                      } else if (currentPage >= totalPages - 3) {
                        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
                      } else {
                        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
                      }
                    }
                    return pages;
                  };

                  const pages = getPages();

                  return (
                    <div className="flex flex-col items-center justify-center pt-10 pb-6 w-full select-none">
                      {/* Interactive Minimalist Capsule (Beautiful Red & White Theme with 8px Border Radius) */}
                      <div className="bg-white border border-red-50/80 rounded-[8px] py-2 px-3.5 sm:px-5 w-auto flex items-center gap-3 shadow-[0_4px_20px_rgba(204,26,38,0.03)] hover:shadow-[0_6px_24px_rgba(204,26,38,0.06)] transition-all duration-300">
                        
                        {/* Previous Arrow Button */}
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className="flex items-center justify-center w-8 h-8 rounded-[8px] text-[#cc1a26]/75 hover:text-[#cc1a26] hover:bg-red-50/50 disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer group"
                          aria-label="Trang trước"
                        >
                          <ChevronLeft className="w-4 h-4 text-current group-hover:-translate-x-0.5 transition-transform" />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1 sm:gap-1.5 justify-center">
                          {pages.map((page, index) => {
                            if (page === "...") {
                              return (
                                <span 
                                  key={`ellipsis-${index}`} 
                                  className="text-red-200 font-semibold px-1 select-none text-[14.5px] tracking-wider"
                                >
                                  ...
                                </span>
                              );
                            }

                            const pageNum = page as number;
                            const isCurrent = pageNum === currentPage;

                            return (
                              <button
                                key={pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`w-8.5 h-8.5 rounded-[8px] font-bold text-[14px] transition-all duration-200 flex items-center justify-center cursor-pointer focus:outline-none
                                  ${isCurrent 
                                    ? 'bg-[#cc1a26] text-white shadow-[0_3px_10px_rgba(204,26,38,0.25)] scale-102' 
                                    : 'text-zinc-600 hover:text-[#cc1a26] bg-transparent hover:bg-red-50/40'
                                  }
                                `}
                              >
                                {pageNum}
                              </button>
                            );
                          })}
                        </div>

                        {/* Next Arrow Button */}
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className="flex items-center justify-center w-8 h-8 rounded-[8px] text-[#cc1a26]/75 hover:text-[#cc1a26] hover:bg-red-50/50 disabled:opacity-20 disabled:pointer-events-none transition-all duration-200 cursor-pointer group"
                          aria-label="Trang sau"
                        >
                          <ChevronRight className="w-4 h-4 text-current group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </div>

      {/* ================= MOBILE BOTTOM SHEET FILTER DRAWER ================= */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        setIsOpen={setIsMobileFilterOpen}
        activeFilterCount={activeFilterCount}
        filteredCount={filteredSuppliers.length}
        resetFilters={resetFilters}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        selectedLocation={selectedLocation}
        setSelectedLocation={handleLocationChange}
        selectedRating={selectedRating}
        setSelectedRating={handleRatingChange}
        onlyVerified={onlyVerified}
        setOnlyVerified={handleOnlyVerifiedChange}
      />
    </div>
    </div>
  );
}
