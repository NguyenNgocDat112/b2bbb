import type {Metadata} from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css'; // Global styles
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { OpeningLoader } from '@/components/opening-loader';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '700', '900'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s | VLXD Nguyễn Vinh',
    default: 'VLXD Nguyễn Vinh - Vật Liệu Xây Dựng Uy Tín',
  },
  description: 'Nhà phân phối sỉ lẻ vật liệu xây dựng cao cấp hàng đầu: Gạch ốp lát, thiết bị vệ sinh, sơn chống thấm, sắt thép, xi măng nội ngoại nhập.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="vi" className={`${inter.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-gray-900 flex flex-col min-h-screen">
        <OpeningLoader />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
