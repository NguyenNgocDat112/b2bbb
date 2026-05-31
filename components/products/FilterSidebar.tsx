import React from "react";
import { 
  Eye,
  Tag,
  MapPin
} from "lucide-react";
import { MOCK_FILTER_DATA } from "@/lib/data-suppliers";

interface FilterSidebarProps {
  activeFilterCount: number;
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

export const FilterSidebar = React.memo(({
  activeFilterCount,
  resetFilters,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  selectedRating,
  setSelectedRating,
  onlyVerified,
  setOnlyVerified
}: FilterSidebarProps) => {
  return (
    <aside className="hidden lg:block space-y-8 font-sans">
      <div className="bg-white p-5 border border-gray-100 rounded-[10px] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        {/* Section 1: Ngành nghề */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-[#1d2a44]">
            {/* Custom SVG for layers icon matched to image */}
            <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] text-[#c81e51]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 12 12 17 22 12"></polyline>
              <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
            <h4 className="font-semibold text-[15px] tracking-tight">Ngành nghề</h4>
          </div>
          
          <div className="ml-[26px] mb-5">
            <button 
              onClick={() => setSelectedCategory("Tất cả")}
              className={`text-left text-[14px] leading-snug transition-colors pr-2 text-[#c81e51] font-medium`}
            >
              {MOCK_FILTER_DATA.mainCategory.name} <span className="text-gray-400 font-normal text-[13px] ml-0.5">({MOCK_FILTER_DATA.mainCategory.count})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3 text-[#1d2a44]">
            {/* Custom Leaf/Sprout map to image */}
            <svg viewBox="0 0 24 24" fill="none" className="w-[18px] h-[18px] text-[#4ea0d8]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-7l-2-2"></path>
              <path d="M12 15l2-2"></path>
              <path d="M12 15c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6z"></path>
            </svg>
            <h4 className="font-semibold text-[15px] tracking-tight">Nhóm ngành nghề</h4>
          </div>
          
          <div className="ml-[26px] flex flex-col gap-3">
            {MOCK_FILTER_DATA.subCategories.map((cat) => {
              const isActive = selectedCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`text-left text-[14px] leading-relaxed transition-colors pr-2 block w-full
                    ${isActive ? "text-[#c81e51] font-medium" : "text-gray-700 hover:text-[#c81e51]"}
                  `}
                >
                  {cat.name} <span className="text-gray-400 font-normal text-[13px] ml-0.5">({cat.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 2: Tỉnh/ Thành phố */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-[#1d2a44]">
            <MapPin className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5}/>
            <h4 className="font-semibold text-[15px] tracking-tight">Tỉnh/ Thành phố</h4>
          </div>
          <div className="ml-[26px] flex flex-col gap-3">
            {MOCK_FILTER_DATA.locations.map((loc) => {
              const isActive = selectedLocation === loc;
              return (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`text-left text-[14px] leading-relaxed transition-colors pr-2 block w-full
                    ${isActive ? "text-[#c81e51] font-medium" : "text-gray-700 hover:text-[#c81e51]"}
                  `}
                >
                  {loc}
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Ngành xem thêm */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-[#1d2a44]">
            <Eye className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={2.5}/>
            <h4 className="font-semibold text-[15px] tracking-tight">Ngành xem thêm</h4>
          </div>
          <div className="ml-[26px] flex flex-col gap-3">
            {MOCK_FILTER_DATA.relatedIndustries.map((ind) => (
              <button
                key={ind.name}
                className="text-left text-[14px] leading-relaxed text-gray-700 hover:text-[#c81e51] transition-colors pr-2 block w-full"
              >
                {ind.name} <span className="text-gray-400 text-[13px] ml-0.5">({ind.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section 4: Tag ngành nghề */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3 text-[#1d2a44]">
            <Tag className="w-[18px] h-[18px] text-[#ef4444]" strokeWidth={2.5} fill="#ef4444" fillOpacity={0.2}/>
            <h4 className="font-semibold text-[15px] tracking-tight">Tag ngành nghề</h4>
          </div>
          <div className="ml-[26px] flex flex-col gap-3">
            {MOCK_FILTER_DATA.tags.map((tag) => (
              <button
                key={tag}
                className="text-left text-[14px] leading-relaxed text-[#1d2a44] hover:text-[#c81e51] transition-colors pr-2 block w-full"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
});
FilterSidebar.displayName = "FilterSidebar";
