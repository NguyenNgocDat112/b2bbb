import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  SlidersHorizontal, 
  X,
  MapPin,
  Eye,
  Tag,
  ChevronDown
} from "lucide-react";
import { MOCK_FILTER_DATA } from "@/lib/data-suppliers";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  activeFilterCount: number;
  filteredCount: number;
  resetFilters: () => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  selectedRating: number | null;
  setSelectedRating: (rating: number | null) => void;
  onlyVerified: boolean;
  setOnlyVerified: (val: boolean) => void;
}

const AccordionItem = ({ 
  title, 
  icon, 
  children,
  defaultOpen = false
}: { 
  title: string, 
  icon?: React.ReactNode, 
  children: React.ReactNode,
  defaultOpen?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 last:border-0 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="font-semibold text-[15px] text-[#1d2a44] tracking-tight">{title}</h4>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 ml-[26px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const MobileFilterDrawer = React.memo(({
  isOpen,
  setIsOpen,
  activeFilterCount,
  filteredCount,
  resetFilters,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  onlyVerified,
  setOnlyVerified
}: MobileFilterDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark backdrop overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0f172a] z-50 pointer-events-auto backdrop-blur-sm lg:hidden"
          />

          {/* Bottom Drawer container */}
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 max-h-[90vh] bg-white rounded-t-[10px] shadow-2xl z-50 flex flex-col pointer-events-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 shrink-0">
              <span className="font-bold text-gray-900 text-[17px] flex items-center gap-2">
                <SlidersHorizontal className="w-[18px] h-[18px] text-gray-500" strokeWidth={2.5}/>
                Bộ lọc tìm kiếm {activeFilterCount > 0 && `(${activeFilterCount})`}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors bg-gray-50"
              >
                <X className="w-5 h-5" strokeWidth={2.5}/>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-2">
              
              <AccordionItem 
                defaultOpen={true}
                title="Ngành nghề" 
                icon={
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] text-[#c81e51]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 12 12 17 22 12"></polyline>
                    <polyline points="2 17 12 22 22 17"></polyline>
                  </svg>
                }
              >
                <div className="mb-6">
                  <button 
                    onClick={() => setSelectedCategory("Tất cả")}
                    className={`text-left text-[14px] leading-snug transition-colors pr-2 text-[#c81e51] font-medium`}
                  >
                    {MOCK_FILTER_DATA.mainCategory.name} <span className="text-gray-400 font-normal text-[13px] ml-0.5">({MOCK_FILTER_DATA.mainCategory.count})</span>
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-[#1d2a44] -ml-[26px]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] text-[#4ea0d8]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-7l-2-2"></path>
                    <path d="M12 15l2-2"></path>
                    <path d="M12 15c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6z"></path>
                  </svg>
                  <h4 className="font-semibold text-[15px] tracking-tight">Nhóm ngành nghề</h4>
                </div>
                <div className="flex flex-col gap-4">
                  {MOCK_FILTER_DATA.subCategories.map((cat) => {
                    const isActive = selectedCategory === cat.name;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`text-left text-[14px] leading-relaxed transition-colors pr-2
                          ${isActive ? "text-[#c81e51] font-medium" : "text-gray-700 hover:text-[#c81e51]"}
                        `}
                      >
                        {cat.name} <span className="text-gray-400 font-normal text-[13px] ml-0.5">({cat.count})</span>
                      </button>
                    );
                  })}
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Tỉnh/ Thành phố"
                icon={<MapPin className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5}/>}
              >
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setSelectedLocation("Tất cả")}
                    className={`text-left text-[14px] leading-relaxed transition-colors pr-2
                      ${selectedLocation === "Tất cả" ? "text-[#c81e51] font-medium" : "text-gray-700 hover:text-[#c81e51]"}
                    `}
                  >
                    Tất cả khu vực
                  </button>
                  {MOCK_FILTER_DATA.locations.map((loc) => {
                    const isActive = selectedLocation === loc;
                    return (
                      <button
                        key={loc}
                        onClick={() => setSelectedLocation(loc)}
                        className={`text-left text-[14px] leading-relaxed transition-colors pr-2
                          ${isActive ? "text-[#c81e51] font-medium" : "text-gray-700 hover:text-[#c81e51]"}
                        `}
                      >
                        {loc}
                      </button>
                    );
                  })}
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Ngành xem thêm"
                icon={<Eye className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={2.5}/>}
              >
                <div className="flex flex-col gap-4">
                  {MOCK_FILTER_DATA.relatedIndustries.map((ind) => (
                    <button
                      key={ind.name}
                      className="text-left text-[14px] leading-relaxed text-gray-700 hover:text-[#c81e51] transition-colors pr-2 block w-full"
                    >
                      {ind.name} <span className="text-gray-400 text-[13px] ml-0.5">({ind.count})</span>
                    </button>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem 
                title="Tag ngành nghề"
                icon={<Tag className="w-[18px] h-[18px] text-[#ef4444]" strokeWidth={2.5} fill="#ef4444" fillOpacity={0.2}/>}
              >
                <div className="flex flex-col gap-4">
                  {MOCK_FILTER_DATA.tags.map((tag) => (
                    <button
                      key={tag}
                      className="text-left text-[14px] leading-relaxed text-[#1d2a44] hover:text-[#c81e51] transition-colors pr-2 block w-full"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </AccordionItem>

            </div>

            {/* Bottom Footer Actions */}
            <div className="border-t border-gray-100 p-5 shrink-0 flex items-center gap-4 bg-white">
              {activeFilterCount > 0 && (
                <button 
                  onClick={() => {
                    resetFilters();
                    setIsOpen(false);
                  }}
                  className="flex-[0.4] text-center py-3.5 bg-gray-50 border border-gray-200 text-gray-600 font-bold text-[14px] rounded-[10px] hover:bg-gray-100 transition-colors"
                >
                  Xoá lọc
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center py-3.5 bg-[#cc1a26] text-white font-bold text-[14px] rounded-[10px] hover:bg-[#a8141f] shadow-[0_4px_12px_rgba(204,26,38,0.25)] transition-all"
              >
                Xem {filteredCount} kết quả
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
MobileFilterDrawer.displayName = "MobileFilterDrawer";
