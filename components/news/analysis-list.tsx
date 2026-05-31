"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { analysisNews } from "@/lib/data-analysis";
import { AnalysisCard } from "./analysis-card";
import { ChevronDown } from "lucide-react";

export function AnalysisList() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, analysisNews.length));
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-[1240px] px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-light text-[#333333] tracking-tight">
            Data Analysis
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-10 md:gap-y-14 mb-14 md:mb-20"
        >
          {analysisNews.slice(0, visibleCount).map((news, index) => (
            <AnalysisCard key={news.id} data={news} priority={index < 4} index={index} />
          ))}
        </div>

        {visibleCount < analysisNews.length && (
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="flex justify-center w-full px-4"
          >
            <button 
              onClick={handleMore}
              className="flex items-center justify-center gap-2 w-full max-w-[800px] h-[54px] bg-white/80 hover:bg-white text-gray-500 hover:text-gray-900 border border-gray-200/60 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_25px_rgb(0,0,0,0.06)] rounded-full font-medium text-[12px] md:text-[13px] tracking-widest uppercase transition-all duration-500 ease-out group"
            >
              MORE
              <ChevronDown className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
