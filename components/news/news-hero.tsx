"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    whileHover={{
      scale: 1.08,
      y: -2,
    }}
    transition={{
      type: "spring",
      stiffness: 400,
      damping: 15,
    }}
    className="bg-[linear-gradient(-45deg,rgba(217,45,119,0.95)_0%,rgba(217,57,45,0.95)_100%)] px-3 py-1 text-[10px] sm:text-[11px] rounded-[2px] font-bold uppercase tracking-wide text-white inline-block"
  >
    {children}
  </motion.span>
);

const featuredPost = {
  title:
    "Chiến lược vận hành và tăng doanh số Shopee mà Marketer cần biết (Phần 1)",
  desc: "Bạn đang chạy Shopee, hay Shopee đang chạy bạn? Nhiều team e-commerce bỏ ra hàng chục triệu mỗi tháng cho...",
  image:
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
  tags: [
    "CHIẾN LƯỢC",
    "DIGITAL MARKETING",
    "KIẾN THỨC",
    "TRADE MARKETING",
  ],
};

const posts = [
  {
    title: "Chiến lược Digital Marketing cho doanh nghiệp B2B",
    tags: ["CHIẾN LƯỢC", "DIGITAL MARKETING", "KIẾN THỨC"],
  },
  {
    title:
      "Brand Growth Model là gì? Ứng dụng Brand Growth Model trong việc xây dựng kế hoạch Marketing",
    tags: ["BRAND MARKETING", "CHIẾN LƯỢC", "KIẾN THỨC"],
  },
  {
    title:
      "AI đang tái định nghĩa chiến lược Go-to-Market của doanh nghiệp như thế nào?",
    tags: ["CHIẾN LƯỢC", "DIGITAL MARKETING", "KIẾN THỨC"],
  },
];

export function NewsHero() {
  return (
    <main className="w-full max-w-[1420px] mx-auto overflow-hidden bg-[#1f1624] text-white">
      <section className="relative w-full overflow-hidden">
        {/* BG IMAGE */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={featuredPost.image}
            alt="hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,0,20,0.85)_0%,rgba(35,0,25,0.75)_50%,rgba(80,0,40,0.9)_100%)]" />

        {/* FLOATING BLURS */}
        <motion.div
          className="absolute right-[-120px] top-[-80px] h-[260px] w-[260px] rounded-full bg-pink-700/30 blur-3xl sm:h-[500px] sm:w-[500px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute left-[-100px] bottom-[-100px] h-[240px] w-[240px] rounded-full bg-fuchsia-500/20 blur-3xl sm:h-[400px] sm:w-[400px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex pt-10 max-w-[1500px] flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-[850px]"
          >
            {/* TITLE */}
            <motion.h1
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="mt-5 max-w-[620px] text-[28px] leading-tight text-white drop-shadow-2xl sm:text-[34px] md:text-[40px] lg:text-[42px]"
            >
              {featuredPost.title}
            </motion.h1>

            {/* TAGS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="mt-4 flex flex-wrap gap-2 sm:gap-3"
            >
              {featuredPost.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </motion.div>

            {/* DESC */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="mt-4 max-w-[780px] text-sm leading-relaxed text-white/75 sm:text-base"
            >
              {featuredPost.desc}
            </motion.p>
          </motion.div>

          {/* BOTTOM CARDS */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="relative mt-10 grid gap-4 rounded-tl-xl rounded-tr-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl sm:mt-14 sm:gap-6 sm:p-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.8 + index * 0.15,
                  duration: 0.8,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group cursor-pointer rounded-xl border border-transparent p-3 transition-all duration-500 hover:border-pink-500/40 hover:bg-white/[0.06]"
              >
                <motion.h3
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="text-[14px] leading-snug text-white transition-all duration-300 group-hover:text-pink-300 sm:text-[16px]"
                >
                  {post.title}
                </motion.h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}