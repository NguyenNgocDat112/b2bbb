"use client";

import { useState, useMemo } from "react";
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
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            onlyVerified={onlyVerified}
            setOnlyVerified={setOnlyVerified}
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
                {filteredSuppliers.map((supplier, idx) => (
                  <SupplierCard key={supplier.id} supplier={supplier} idx={idx} />
                ))}
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
        setSelectedCategory={setSelectedCategory}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        onlyVerified={onlyVerified}
        setOnlyVerified={setOnlyVerified}
      />
    </div>
    </div>
  );
}
