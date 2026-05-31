"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { categories } from "@/lib/data";
import { staggerContainer, fadeInUp, revealLeft, revealRight, scaleUp } from "@/lib/animations";

export function ProductCategories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState({ scrollLeft: 0, maxScroll: 0 });
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setScrollRange({
      scrollLeft: el.scrollLeft,
      maxScroll: el.scrollWidth - el.clientWidth,
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    // Recalculate on mount/resize
    window.addEventListener("resize", handleScroll);
    const timer = setTimeout(handleScroll, 500); // safety fallback

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Mouse drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftState(el.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const el = containerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.6; // Scroll speed modifier
    el.scrollLeft = scrollLeftState - walk;
  };

  const percentage = scrollRange.maxScroll > 0 
    ? scrollRange.scrollLeft / scrollRange.maxScroll 
    : 0;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24 lg:py-28">
      {/* Top Wide Banner */}
      <motion.div
        variants={scaleUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full relative aspect-[21/10] sm:aspect-[3/1] lg:aspect-[4/1] bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-16 md:mb-24 shadow-sm"
      >
        <Image quality={100}
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=100&w=3840"
          alt="Thiết kế nội thất hiện đại"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </motion.div>

      {/* Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 lg:gap-16 mb-8 sm:mb-12 md:mb-20 items-end">
        <motion.div
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 lg:col-span-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold text-[#1e1e24] tracking-tight leading-[1.15]">
            Đa Dạng Danh Mục<br className="hidden sm:block" /> Sản Phẩm
          </h2>
        </motion.div>
        
        <motion.div
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="md:col-span-6 lg:col-span-6"
        >
          <p className="text-gray-500 text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed md:leading-[1.8] max-w-lg md:ml-auto">
            Chúng tôi cung cấp đầy đủ các loại vật liệu xây dựng từ cơ bản đến hoàn thiện, 
            đảm bảo chất lượng cao nhất cho mọi công trình của bạn.
          </p>
        </motion.div>
      </div>

      {/* Categories Grid with horizontal scrolling on mobile and drag on desktop */}
      <div className="relative group/scroll-container">
        <motion.div 
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeaveOrUp}
          onMouseUp={onMouseLeaveOrUp}
          onMouseMove={onMouseMove}
          className={`flex overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x select-none ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              variants={fadeInUp}
              className="flex flex-col group cursor-pointer w-[42vw] xs:w-[32vw] sm:w-auto shrink-0 snap-start"
            >
              <div className="relative aspect-[3/4] w-full rounded-[16px] sm:rounded-[24px] overflow-hidden mb-3 sm:mb-5 bg-gray-100 shadow-sm transition-shadow duration-700 ease-[0.16,1,0.3,1] group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] pointer-events-none">
                <Image quality={100}
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-[0.16,1,0.3,1] group-hover:scale-105 pointer-events-none"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700 ease-[0.16,1,0.3,1]" />
                {/* Inner ring for refinement */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[16px] sm:rounded-[24px] z-10" />
              </div>
              <h3 className="text-center font-bold text-[#1e1e24] text-[13px] sm:text-[18px] md:text-[20px] lg:text-[22px] group-hover:text-[#1ca894] transition-colors duration-300 px-1 truncate pointer-events-none">
                {category.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Accent Colored Scroll Progress Bar (Only visible on mobile and small tablet views) */}
        {scrollRange.maxScroll > 0 && (
          <div className="sm:hidden flex justify-center items-center mt-3 pb-2">
            <div className="relative w-20 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 bottom-0 left-0 bg-[#1ca894] rounded-full transition-all duration-100 ease-out"
                style={{ 
                  width: "40%", 
                  transform: `translateX(${percentage * 150}%)` 
                }} 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

