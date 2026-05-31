"use client";

import Link from "next/link";
import { Youtube, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="w-full bg-[#fcfcfc] border-t border-gray-100 pt-16 pb-10">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* PRODUCT Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-[#1e1e24] text-[13px] tracking-[0.15em] uppercase mb-5">
              Sản Phẩm
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Gạch Lát Nền
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Cửa Cao Cấp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-350">
                  Hàng Rào Thiết Kế
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Gạch Bóng Kiếng
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* PEMBAYARAN Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-[#1e1e24] text-[13px] tracking-[0.15em] uppercase mb-5">
              Thanh Toán
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-gray-400 text-[14px]">Chuyển Khoản Ngân Hàng</span>
              </li>
              <li>
                <span className="text-gray-400 text-[14px]">Ví Điện Tử MoMo / ZaloPay</span>
              </li>
              <li>
                <span className="text-gray-400 text-[14px]">Thanh Toán Khi Nhận Hàng (COD)</span>
              </li>
              <li>
                <span className="text-gray-400 text-[14px]">Thẻ Visa / Mastercard</span>
              </li>
            </ul>
          </motion.div>

          {/* COMPANY Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-[#1e1e24] text-[13px] tracking-[0.15em] uppercase mb-5">
              Về Chúng Tôi
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Giới thiệu doanh nghiệp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Tin tức & Xu hướng
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                  Hỏi đáp thường gặp (FAQ)
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* KONTAK KAMI Column */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold text-[#1e1e24] text-[13px] tracking-[0.15em] uppercase mb-5">
              Liên Hệ
            </h4>
            <div className="flex flex-col gap-3.5">
              <a href="mailto:admin@vatlieuxaydung.com" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300 break-all">
                admin@vatlieuxaydung.com
              </a>
              <a href="tel:+848221234567" className="text-gray-500 hover:text-[#1ca894] text-[14px] transition-colors duration-300">
                +84 822 123 456
              </a>
              <button className="bg-[#1ca894] hover:bg-[#158979] text-white font-medium text-[13px] tracking-wider px-5 py-2.5 rounded-lg w-fit transition-all duration-300 shadow-[0_4px_12px_rgba(28,168,148,0.15)] hover:shadow-[0_8px_20px_rgba(28,168,148,0.25)] hover:-translate-y-0.5 mt-1.5 uppercase font-semibold">
                Liên Hệ Tư Vấn
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={fadeInUp} className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[13px]">
            © {new Date().getFullYear()} Vật Liệu Xây Dựng Cao Cấp. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-[13px] transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-700 text-[13px] transition-colors">
              Điều Khoản Sử Dụng
            </Link>
            <div className="flex items-center gap-4 ml-2">
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#ff0000] transition-colors duration-300">
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#1877f2] transition-colors duration-300">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#e1306c] transition-colors duration-300">
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
