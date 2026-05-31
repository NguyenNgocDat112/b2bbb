"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  ctaText: string;
  ctaActionId: string;
  isPopular?: boolean;
  features: string[];
  limitLabel: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "STARTER",
    badge: "KHỞI ĐẦU",
    monthlyPrice: "750K",
    annualPrice: "600K",
    description: "Giải pháp tinh gọn cho tổ thợ, kiến trúc sư & nhà thầu nhỏ mới hợp tác.",
    ctaText: "Đăng Ký Starter",
    ctaActionId: "registration-form-section",
    features: [
      "Chiết khấu khởi điểm 15%",
      "Cấp 2 cuốn catalogue chất liệu in nổi",
      "Vận chuyển tiêu chuẩn công trình",
      "Hỗ trợ kỹ thuật qua hotline",
      "Tích lũy doanh số hạng Đồng",
    ],
    limitLabel: "Quy mô <1 Tỷ",
  },
  {
    name: "PRO",
    badge: "ĐỐI TÁC CHUYÊN NGHIỆP",
    monthlyPrice: "1.9M",
    annualPrice: "1.5M",
    description: "Đại lý phân phối cấp 2, cửa hàng trưng bày chính thức của Phú Khang.",
    ctaText: "Đăng Ký Bản Pro",
    ctaActionId: "registration-form-section",
    isPopular: true,
    features: [
      "Chiết khấu sỉ bứt phá 25% - 30%",
      "Tặng kệ vỉ đá thực tế & biển hiệu đại lý",
      "Ưu tiên cấp lô hàng giới hạn quốc tế",
      "Hỗ trợ xe bồn/xe cẩu giao hàng thần tốc",
      "Thưởng doanh thu tháng/quý đạt mốc",
      "Ý kiến kỹ sư khảo sát thực địa trực tiếp",
      "Quảng bá đại lý trên bản đồ hệ thống",
    ],
    limitLabel: "Doanh số >200M/th",
  },
  {
    name: "ENTERPRISE",
    badge: "DOANH NGHIỆP VIP",
    monthlyPrice: "Liên Hệ",
    annualPrice: "Liên Hệ",
    description: "Nhà thầu xây dựng quy mô lớn, tổng thầu dự án và tập đoàn đầu tư hạ tầng.",
    ctaText: "Gửi Yêu Cầu Doanh Nghiệp",
    ctaActionId: "registration-form-section",
    features: [
      "Chiết khấu kịch khung từ 30% - 35%",
      "Hợp đồng bảo hộ độc quyền khu vực sỉ",
      "Gia hạn công nợ linh hoạt đến 45 ngày",
      "Điều chỉnh kích thước/gia công riêng biệt",
      "Cơ chế bồi hoàn bảo hành từ nhà máy",
      "Quản lý chuyên trách vip hỗ trợ 24/7",
    ],
    limitLabel: "Dự án lớn/Đại công trình",
  },
];

// Faint isometric 3D stacked cube decoration for left side
const IsometricGridLeft = () => (
  <div className="hidden lg:block absolute left-[-60px] xl:left-[-10px] top-[140px] w-[200px] h-[365px] opacity-[0.16] pointer-events-none select-none blur-[0.2px] -z-10">
    <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" className="text-gray-400 w-full h-full">
      {/* Visual diamonds arranged in a structured mesh stack matching the screenshot layout */}
      <path d="M 50,15 L 85,32 L 50,49 L 15,32 Z" strokeWidth="0.8" />
      <path d="M 15,32 L 15,62 L 50,79 L 50,49 Z" strokeWidth="0.8" />
      <path d="M 85,32 L 85,62 L 50,79 L 50,49 Z" strokeWidth="0.8" />

      <path d="M 50,75 L 85,92 L 50,109 L 15,92 Z" strokeWidth="0.8" />
      <path d="M 15,92 L 15,122 L 50,139 L 50,109 Z" strokeWidth="0.8" />
      <path d="M 85,92 L 85,122 L 50,139 L 50,109 Z" strokeWidth="0.8" />

      <path d="M 50,135 L 85,152 L 50,169 L 15,152 Z" strokeWidth="0.8" />
      <path d="M 15,152 L 15,182 L 50,199 L 50,169 Z" strokeWidth="0.8" />
      <path d="M 85,152 L 85,182 L 50,199 L 50,169 Z" strokeWidth="0.8" />
    </svg>
  </div>
);

// Faint isometric 3D stacked cube decoration for right side
const IsometricGridRight = () => (
  <div className="hidden lg:block absolute right-[-60px] xl:right-[-10px] top-[140px] w-[200px] h-[365px] opacity-[0.16] pointer-events-none select-none blur-[0.2px] -z-10">
    <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" className="text-gray-400 w-full h-full">
      <path d="M 50,15 L 85,32 L 50,49 L 15,32 Z" strokeWidth="0.8" />
      <path d="M 15,32 L 15,62 L 50,79 L 50,49 Z" strokeWidth="0.8" />
      <path d="M 85,32 L 85,62 L 50,79 L 50,49 Z" strokeWidth="0.8" />

      <path d="M 50,75 L 85,92 L 50,109 L 15,92 Z" strokeWidth="0.8" />
      <path d="M 15,92 L 15,122 L 50,139 L 50,109 Z" strokeWidth="0.8" />
      <path d="M 85,92 L 85,122 L 50,139 L 50,109 Z" strokeWidth="0.8" />

      <path d="M 50,135 L 85,152 L 50,169 L 15,152 Z" strokeWidth="0.8" />
      <path d="M 15,152 L 15,182 L 50,199 L 50,169 Z" strokeWidth="0.8" />
      <path d="M 85,152 L 85,182 L 50,199 L 50,169 Z" strokeWidth="0.8" />
    </svg>
  </div>
);

interface ComparisonRow {
  name: string;
  starter: string;
  pro: string;
  enterprise: string;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

const COMPARISON_CATEGORIES: ComparisonCategory[] = [
  {
    title: "USER & AGENT CAPABILITIES",
    rows: [
      { name: "Active Agents", starter: "1", pro: "Up to 5", enterprise: "Unlimited" },
      { name: "Team Collaboration", starter: "—", pro: "Included (up to 5 users)", enterprise: "Unlimited users" },
      { name: "Custom Roles & Permissions", starter: "—", pro: "Basic access control", enterprise: "Full RBAC & SSO support" }
    ]
  },
  {
    title: "INTEGRATIONS & DEPLOYMENT",
    rows: [
      { name: "Tool Integrations", starter: "Up to 2", pro: "Unlimited", enterprise: "Unlimited & priority setup" },
      { name: "Channels Supported", starter: "Slack, Docs", pro: "Email, Web widgets", enterprise: "All channels incl. Voice,\nWhatsApp" },
      { name: "Custom Domain & Branding", starter: "—", pro: "White-label available", enterprise: "Full customization" }
    ]
  },
  {
    title: "AI CAPABILITIES & USAGE LIMITS",
    rows: [
      { name: "Monthly Task / Message Limit", starter: "500", pro: "Up to 10,000", enterprise: "Custom / Unlimited" },
      { name: "Outcome-based Pricing Option", starter: "—", pro: "Optional add-on", enterprise: "Available as custom model" },
      { name: "Knowledge Base (Storage)", starter: "15GB", pro: "50GB", enterprise: "100+ GB" },
      { name: "Outcome Tracking & Analytics", starter: "Basic logs", pro: "7-day detailed logs", enterprise: "Custom retention, dashboards" }
    ]
  },
  {
    title: "SECURITY, COMPLIANCE & SUPPORT",
    rows: [
      { name: "Support Level", starter: "Community only", pro: "Priority support", enterprise: "SLA-backed + dedicated CSM" },
      { name: "Compliance & Certifications", starter: "—", pro: "SOC 2 / ISO 27001 available", enterprise: "Full compliance support" },
      { name: "Data Residency & Hosting", starter: "Standard cloud", pro: "Custom region options", enterprise: "On-premise / hybrid by request" }
    ]
  }
];

export function PartnerPricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftVal = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.55; // Pixels per frame

    const scroll = () => {
      if (!isDown.current) {
        container.scrollLeft += speed;
        // Reaching the midpoint resets seamlessly
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - container.offsetLeft;
    scrollLeftVal.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity
    container.scrollLeft = scrollLeftVal.current - walk;

    // Loop around
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += container.scrollWidth / 2;
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - container.offsetLeft;
    scrollLeftVal.current = container.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeftVal.current - walk;

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft -= container.scrollWidth / 2;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += container.scrollWidth / 2;
    }
  };

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const isTableDown = useRef(false);
  const tableStartX = useRef(0);
  const tableScrollLeft = useRef(0);
  const [isTableDragging, setIsTableDragging] = useState(false);

  const handleTableMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = tableContainerRef.current;
    if (!container) return;
    isTableDown.current = true;
    setIsTableDragging(true);
    tableStartX.current = e.pageX - container.offsetLeft;
    tableScrollLeft.current = container.scrollLeft;
  };

  const handleTableMouseLeave = () => {
    isTableDown.current = false;
    setIsTableDragging(false);
  };

  const handleTableMouseUp = () => {
    isTableDown.current = false;
    setIsTableDragging(false);
  };

  const handleTableMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTableDown.current) return;
    e.preventDefault();
    const container = tableContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - tableStartX.current) * 1.5; // Drag sensitivity multiplier
    container.scrollLeft = tableScrollLeft.current - walk;
  };

  const handleTableTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = tableContainerRef.current;
    if (!container) return;
    isTableDown.current = true;
    setIsTableDragging(true);
    tableStartX.current = e.touches[0].pageX - container.offsetLeft;
    tableScrollLeft.current = container.scrollLeft;
  };

  const handleTableTouchEnd = () => {
    isTableDown.current = false;
    setIsTableDragging(false);
  };

  const handleTableTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isTableDown.current) return;
    const container = tableContainerRef.current;
    if (!container) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - tableStartX.current) * 1.5;
    container.scrollLeft = tableScrollLeft.current - walk;
  };

  const handleCtaClick = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] pt-0 pb-4 sm:pb-10 md:pb-12 text-center px-4">
      {/* Double Side Isometric Stacked Cube Decorations */}
      <IsometricGridLeft />
      <IsometricGridRight />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Toggle Switch Container - Precisely 1:1 with reference design screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center mb-10 sm:mb-14"
        >
          <div className="bg-white border border-gray-100/90 px-4 sm:px-5 py-2.5 rounded-full flex items-center shadow-[0_3px_12px_rgba(0,0,0,0.025)] select-none whitespace-nowrap overflow-x-auto sm:overflow-visible">
            <span 
              onClick={() => setIsAnnual(false)}
              className={`text-[12px] sm:text-sm font-bold tracking-tight cursor-pointer transition-colors duration-200 mr-2 sm:mr-3 ${
                !isAnnual ? "text-[#111111]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Hàng Tháng
            </span>
            
            {/* Smooth spring sliding Toggle */}
            <div 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative shrink-0 w-[42px] sm:w-11 h-[22px] sm:h-6 rounded-full flex items-center p-0.5 cursor-pointer flex-none transition-colors duration-350 ${
                isAnnual ? "bg-[#ff4130]" : "bg-gray-300"
              }`}
            >
              <motion.div 
                layout
                transition={{ type: "spring", stiffness: 450, damping: 28 }}
                className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] bg-white rounded-full shadow-md ${
                  isAnnual ? "ml-auto" : "mr-auto"
                }`}
              />
            </div>

            <span 
              onClick={() => setIsAnnual(true)}
              className={`text-[12px] sm:text-sm font-bold tracking-tight cursor-pointer transition-colors duration-200 ml-2 sm:ml-3 mr-2 text-left sm:text-center ${
                isAnnual ? "text-[#111111]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              Hàng Năm
            </span>

            <span className="bg-[#ffebeb] text-[#ff4130] text-[9.5px] sm:text-[11px] font-extrabold px-1.5 sm:px-2 py-0.5 rounded-md tracking-tight font-sans shrink-0">
              -20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch"
        >
          {PRICING_PLANS.map((plan) => {
            const hasStaticPrice = plan.monthlyPrice === "Liên Hệ";
            const priceVal = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  boxShadow: plan.isPopular 
                    ? "0 30px 60px rgba(255,59,48,0.12)" 
                    : "0 24px 48px rgba(0,0,0,0.06)",
                  transition: { duration: 0.25, ease: "easeOut" }
                }}
                className={`relative flex flex-col bg-white rounded-3xl text-left border overflow-hidden ${
                  plan.isPopular 
                    ? "border-[3px] border-[#ff3b30]" 
                    : "border-gray-200/60 shadow-m font-medium"
                }`}
              >
                {/* Popular Badge directly integrated with senior polish */}
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 bg-[#ff3b30] text-white text-[9px] font-extrabold tracking-[0.2em] uppercase py-1.5 text-center rounded-t-[18px] font-sans select-none">
                    PHỔ BIẾN NHẤT
                  </div>
                )}

                <div className={`p-6 sm:p-8 md:p-9 flex flex-col h-full ${plan.isPopular ? "pt-11 sm:pt-12" : ""}`}>
                  
                  {/* Badge & Meta Title */}
                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 bg-gray-50 border border-gray-200/60 rounded-md text-[10px] font-bold text-gray-500 tracking-wider uppercase font-sans mb-4">
                      {plan.name}
                    </span>
                    
                    {/* Big Bold Typography Pricing Title with satisfying Carousel slide transition */}
                    <div className="flex items-baseline gap-1 mt-2 mb-2 h-14 overflow-hidden">
                      {hasStaticPrice ? (
                        <span className="text-3xl sm:text-4xl font-bold text-[#111111] tracking-tight leading-none self-end pb-1 inline-block">
                          Liên Hệ
                        </span>
                      ) : (
                        <div className="flex items-baseline h-full pt-1.5 overflow-hidden">
                          <AnimatePresence mode="wait">
                            <motion.span
                              key={priceVal}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -20, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                              className="text-4xl sm:text-[46px] font-extrabold text-[#111111] tracking-tight leading-none self-end inline-block"
                            >
                              {priceVal}
                            </motion.span>
                          </AnimatePresence>
                          <span className="text-gray-400 text-xs sm:text-sm font-semibold self-end pb-1 font-medium select-none ml-1">
                            /tháng
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-450 text-[13px] leading-relaxed font-semibold min-h-[48px] pt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Primary Call-To-Action Button with custom gradients & shapes */}
                  <div className="mb-8">
                    <button
                      type="button"
                      onClick={() => handleCtaClick(plan.ctaActionId)}
                      className={`w-full py-3 px-6 rounded-2xl font-bold text-[13px] tracking-wide uppercase transition-all duration-300 ${
                        plan.isPopular
                          ? "bg-[#ff3b30] hover:bg-[#e02f25] text-white shadow-[0_4px_16px_rgba(255,59,48,0.2)] hover:shadow-[0_8px_20px_rgba(255,59,48,0.3)] hover:-translate-y-0.5"
                          : "bg-white border border-gray-200 hover:border-gray-900 text-gray-900 hover:-translate-y-0.5"
                      } select-none cursor-pointer`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>

                  {/* High Contrast Thin Divider */}
                  <div className="w-full h-px bg-gray-100/95 mb-8" />

                  {/* Premium Bullet List Area */}
                  <div className="mb-8 flex-1">
                    <span className="block text-[#111111] font-bold text-xs sm:text-[13px] tracking-wide mb-4">
                      Quyền Lợi Gồm Có:
                    </span>
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start text-[13px] leading-relaxed font-semibold text-gray-500">
                          <div className="w-4 h-4 rounded-full bg-gray-100/80 flex items-center justify-center mr-2.5 mt-0.5 shrink-0 select-none">
                            <Check className="w-2.5 h-2.5 text-gray-500 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Metagame Label */}
                  <div className="mt-auto pt-5 border-t border-gray-100/80 flex items-center justify-between text-xs font-sans text-gray-400 font-bold">
                    <span className="uppercase tracking-widest text-[9.5px]">Điều kiện thầu</span>
                    <span className="bg-gray-100/90 text-gray-700 px-2.5 py-1 rounded-md text-[11px] font-mono">
                      {plan.limitLabel}
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Brand partners trust section (Infinite Horizontal Smooth Scrolling Marquee) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-20 sm:mt-24 md:mt-28 pt-10 sm:pt-12 border-t border-gray-100/90 max-w-full overflow-hidden"
        >
          <p className="text-[#a0a0a5] text-xs sm:text-[13px] font-bold tracking-wider font-sans mb-8 selection:bg-gray-100 uppercase text-center">
            Được tin tưởng & đồng hành bởi các nhà thầu, doanh nghiệp hàng đầu
          </p>

          {/* Marquee Wrapper with soft radial gradient fades on both sides */}
          <div className="relative w-full py-4 select-none
            before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-[#fafafa] before:to-transparent before:z-10 before:pointer-events-none
            after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-[#fafafa] after:to-transparent after:z-10 after:pointer-events-none"
          >
            {/* Draggable and Automatic Continuous Scrolling Frame */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchMove={handleTouchMove}
              className={`w-full overflow-x-auto flex flex-nowrap gap-0 selection:bg-transparent cursor-grab active:cursor-grabbing scrollbar-none [&::-webkit-scrollbar]:hidden`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex flex-nowrap gap-x-12 sm:gap-x-16 md:gap-x-20 px-4 py-1">
                {[
                  // First copy of partners
                  {
                    id: "cote",
                    name: "COTECCONS",
                    hoverColor: "hover:text-[#00529b]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )
                  },
                  {
                    id: "hb",
                    name: "HOA BINH GP",
                    hoverColor: "hover:text-[#0047ba]",
                    icon: (
                      <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3-1.912 5.886L5 9l4.777 3.516L8 18.5 12 15l4 3.5-1.777-5.984L19 9l-5.088-.114L12 3z" />
                      </svg>
                    )
                  },
                  {
                    id: "ac",
                    name: "AN CUONG",
                    hoverColor: "hover:text-[#111111]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    )
                  },
                  {
                    id: "vc",
                    name: "VICOSTONE",
                    hoverColor: "hover:text-[#005691]",
                    icon: (
                      <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                        <polyline points="12 22 12 12 22 8.5" />
                        <line x1="12" y1="12" x2="2" y2="8.5" />
                      </svg>
                    )
                  },
                  {
                    id: "vla",
                    name: "VIGLACERA",
                    hoverColor: "hover:text-[#e01e26]",
                    icon: (
                      <span className="font-mono font-black text-[#ff3b30] text-sm shrink-0 pr-0.5">V_</span>
                    )
                  },
                  {
                    id: "dlp",
                    name: "DULUX PRO",
                    hoverColor: "hover:text-[#002f6c]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                    )
                  },
                  {
                    id: "rc",
                    name: "RICONS",
                    hoverColor: "hover:text-[#0461b1]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22 L22 12 L12 2 L2 12 Z M2 12 H22" />
                      </svg>
                    )
                  },
                  {
                    id: "ntc",
                    name: "NEWTECONS",
                    hoverColor: "hover:text-[#ee7c1e]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21" />
                      </svg>
                    )
                  },
                  {
                    id: "dt",
                    name: "DELTA GROUP",
                    hoverColor: "hover:text-[#005c2a]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polygon points="12 2 2 22 22 22" />
                      </svg>
                    )
                  },
                  {
                    id: "cc",
                    name: "CENTRAL",
                    hoverColor: "hover:text-[#172b4d]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="12 8 8 12 12 16 16 12" />
                      </svg>
                    )
                  },
                  {
                    id: "hp",
                    name: "HOA PHAT",
                    hoverColor: "hover:text-[#0249aa]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11a8 8 0 0 1 16 0" />
                        <line x1="12" y1="2" x2="12" y2="22" />
                      </svg>
                    )
                  },
                  {
                    id: "vnc",
                    name: "VINACONEX",
                    hoverColor: "hover:text-[#013580]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )
                  },

                  // Duplicate copy of partners to allow seamless infinite loops visual matching
                  {
                    id: "cote-dup",
                    name: "COTECCONS",
                    hoverColor: "hover:text-[#00529b]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    )
                  },
                  {
                    id: "hb-dup",
                    name: "HOA BINH GP",
                    hoverColor: "hover:text-[#0047ba]",
                    icon: (
                      <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 3-1.912 5.886L5 9l4.777 3.516L8 18.5 12 15l4 3.5-1.777-5.984L19 9l-5.088-.114L12 3z" />
                      </svg>
                    )
                  },
                  {
                    id: "ac-dup",
                    name: "AN CUONG",
                    hoverColor: "hover:text-[#111111]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    )
                  },
                  {
                    id: "vc-dup",
                    name: "VICOSTONE",
                    hoverColor: "hover:text-[#005691]",
                    icon: (
                      <svg className="w-5.5 h-5.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                        <polyline points="12 22 12 12 22 8.5" />
                        <line x1="12" y1="12" x2="2" y2="8.5" />
                      </svg>
                    )
                  },
                  {
                    id: "vla-dup",
                    name: "VIGLACERA",
                    hoverColor: "hover:text-[#e01e26]",
                    icon: (
                      <span className="font-mono font-black text-[#ff3b30] text-sm shrink-0 pr-0.5">V_</span>
                    )
                  },
                  {
                    id: "dlp-dup",
                    name: "DULUX PRO",
                    hoverColor: "hover:text-[#002f6c]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                      </svg>
                    )
                  },
                  {
                    id: "rc-dup",
                    name: "RICONS",
                    hoverColor: "hover:text-[#0461b1]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22 L22 12 L12 2 L2 12 Z M2 12 H22" />
                      </svg>
                    )
                  },
                  {
                    id: "ntc-dup",
                    name: "NEWTECONS",
                    hoverColor: "hover:text-[#ee7c1e]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21" />
                      </svg>
                    )
                  },
                  {
                    id: "dt-dup",
                    name: "DELTA GROUP",
                    hoverColor: "hover:text-[#005c2a]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <polygon points="12 2 2 22 22 22" />
                      </svg>
                    )
                  },
                  {
                    id: "cc-dup",
                    name: "CENTRAL",
                    hoverColor: "hover:text-[#172b4d]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="12 8 8 12 12 16 16 12" />
                      </svg>
                    )
                  },
                  {
                    id: "hp-dup",
                    name: "HOA PHAT",
                    hoverColor: "hover:text-[#0249aa]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 11a8 8 0 0 1 16 0" />
                        <line x1="12" y1="2" x2="12" y2="22" />
                      </svg>
                    )
                  },
                  {
                    id: "vnc-dup",
                    name: "VINACONEX",
                    hoverColor: "hover:text-[#013580]",
                    icon: (
                      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    )
                  }
                ].map((partner) => (
                  <div
                    key={partner.id}
                    className={`flex items-center gap-2.5 h-7 text-gray-400 whitespace-nowrap transition-all duration-300 select-none cursor-default grayscale opacity-65 hover:grayscale-0 hover:opacity-100 ${partner.hoverColor}`}
                  >
                    {partner.icon}
                    <span className="font-sans font-black tracking-[-0.03em] text-sm sm:text-[15px] uppercase">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detailed Comparison Table Section - Exactly matching the reference layout in design, contrast and premium style */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="mt-16 pt-12 sm:mt-32 sm:pt-20 border-t border-gray-100 max-w-6xl mx-auto text-left"
        >
          {/* Section Header with exact reference badge and typography */}
          <div className="text-center mb-8 sm:mb-14">
            <span className="inline-block px-3.5 py-1 bg-white border border-[#f3f3f5] rounded-md text-[10px] font-extrabold text-[#ff3b30] tracking-[0.18em] uppercase font-mono mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.015)] select-none">
              COMPARISON
            </span>
            <h3 className="text-3xl sm:text-[44px] font-black text-gray-950 tracking-[-0.03em] leading-[1.12] font-sans max-w-3xl mx-auto">
              Pick the perfect plan to launch your <br className="hidden sm:inline" />
              <span className="text-[#8e8e93] font-extrabold">AI buddies at any scale</span>
            </h3>
            <p className="text-[#8e8e93] text-[14px] sm:text-[15px] font-semibold max-w-3xl mx-auto mt-4 leading-relaxed font-sans px-2">
              Whether you&apos;re just getting started or scaling AI across your organization, Saber offers flexible plans designed for every stage of growth.
            </p>
          </div>

          <div className="sm:hidden text-center text-[11px] font-bold text-[#ff3b30] tracking-tight mb-2 flex items-center justify-center gap-1.5 opacity-80 select-none font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] animate-ping" />
            <span>Vuốt sang ngang để xem đầy đủ bảng so sánh</span>
          </div>
          
          <div 
            ref={tableContainerRef}
            onMouseDown={handleTableMouseDown}
            onMouseLeave={handleTableMouseLeave}
            onMouseUp={handleTableMouseUp}
            onMouseMove={handleTableMouseMove}
            onTouchStart={handleTableTouchStart}
            onTouchEnd={handleTableTouchEnd}
            onTouchMove={handleTableTouchMove}
            className="w-full overflow-x-auto select-none pb-4 sm:pb-12 touch-pan-x cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
          >
            {/* The actual table layout with matching minimum width and exact grid column fractions */}
            <div className="min-w-[970px] pb-4 pt-2 sm:pb-8 sm:pt-4">
              
              {/* Table Upper Header Sticky Column Labels */}
              <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr] px-8 py-4 sm:py-6 items-end gap-4">
                <div className="pr-4 select-none pb-4">
                  {/* Empty left corner according to the reference image */}
                </div>
                
                {/* Column STARTER */}
                <div className="text-center flex flex-col items-center">
                  <span className="text-[17px] sm:text-[19px] font-bold text-gray-950 tracking-tight font-sans select-none mb-3">Starter Plan</span>
                  <button
                    onClick={() => handleCtaClick("registration-form-section")}
                    className="w-full max-w-[130px] py-2 bg-white border border-gray-200/80 hover:border-gray-500 text-gray-800 hover:text-gray-950 text-xs font-semibold rounded-full transition-all shadow-[0_1px_2.5px_rgba(0,0,0,0.035)] select-none cursor-pointer active:scale-95"
                  >
                    Get Started
                  </button>
                </div>

                {/* Column PRO (Growth Plan) */}
                <div className="text-center flex flex-col items-center px-4">
                  <span className="text-[17px] sm:text-[19px] font-bold text-gray-950 tracking-tight font-sans select-none mb-3">Growth Plan</span>
                  <button
                    onClick={() => handleCtaClick("registration-form-section")}
                    className="w-full max-w-[130px] py-2 bg-white border border-gray-200/80 hover:border-gray-500 text-gray-800 hover:text-gray-950 text-xs font-semibold rounded-full transition-all shadow-[0_1px_2.5px_rgba(0,0,0,0.035)] select-none cursor-pointer active:scale-95"
                  >
                    Get Started
                  </button>
                </div>

                {/* Column ENTERPRISE */}
                <div className="text-center flex flex-col items-center">
                  <span className="text-[17px] sm:text-[19px] font-bold text-gray-950 tracking-tight font-sans select-none mb-3">Enterprise Plan</span>
                  <button
                    onClick={() => handleCtaClick("registration-form-section")}
                    className="w-full max-w-[130px] py-2 bg-white border border-gray-200/80 hover:border-gray-500 text-gray-800 hover:text-gray-950 text-xs font-semibold rounded-full transition-all shadow-[0_1px_2.5px_rgba(0,0,0,0.035)] select-none cursor-pointer active:scale-95"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Dynamically Map Categories and Rows */}
              <div className="flex flex-col gap-1 mt-4">
                {COMPARISON_CATEGORIES.map((category, catIdx) => (
                  <div key={catIdx} className="flex flex-col">
                    
                    {/* Category Separator Block - Formatted exactly like gray rounded bars in reference */}
                    <div className="px-6 sm:px-8 py-2 select-none">
                      <div className="bg-[#f4f4f6] text-[#1c1c1e] px-5 py-3 rounded-2xl font-mono text-[11px] font-extrabold tracking-[0.14em] uppercase">
                        {category.title}
                      </div>
                    </div>

                    {/* Rows with crisp text alignment and equal column widths */}
                    <div className="px-6 sm:px-8">
                      {category.rows.map((row, rowIdx) => (
                        <div key={rowIdx} className="grid grid-cols-[2.2fr_1fr_1fr_1fr] px-4 py-5 items-center border-b border-gray-100/60 last:border-0 hover:bg-gray-50/30 transition-all duration-150">
                          
                          {/* Name of benefit (Left aligned) */}
                          <div className="pr-6">
                            <span className="text-[14px] sm:text-[14.5px] font-semibold text-gray-950 leading-tight block font-sans">
                              {row.name}
                            </span>
                          </div>

                          {/* Starter Value (Centered) */}
                          <div className="text-center text-[13.5px] sm:text-[14px] text-gray-950 font-bold px-2 font-sans flex items-center justify-center">
                            {row.starter === "—" ? (
                              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#efeff1] text-gray-400 font-extrabold text-[12px] select-none">
                                —
                              </span>
                            ) : (
                              row.starter
                            )}
                          </div>

                          {/* Pro Value (Centered) */}
                          <div className="text-center text-[13.5px] sm:text-[14px] text-gray-950 font-semibold px-4 font-sans flex items-center justify-center">
                            {row.pro === "—" ? (
                              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#efeff1] text-gray-400 font-extrabold text-[12px] select-none">
                                —
                              </span>
                            ) : (
                              row.pro
                            )}
                          </div>

                          {/* Enterprise Value (Centered) */}
                          <div className="text-center text-[13.5px] sm:text-[14px] text-gray-950 font-semibold px-2 flex items-center justify-center font-sans">
                            {row.enterprise === "—" ? (
                              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#efeff1] text-gray-400 font-extrabold text-[12px] select-none">
                                —
                              </span>
                            ) : (
                              row.enterprise
                            )}
                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
