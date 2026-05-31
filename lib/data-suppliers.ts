export interface ShowcaseItem {
  name: string;
  image: string;
}

export interface Supplier {
  id: number;
  name: string;
  logo: string;
  brandLogoText: string;
  brandSubText: string;
  image: string;
  categories: string[];
  rating: number;
  reviews: number;
  location: string;
  address: string;
  phone: string;
  email: string;
  status: "active" | "inactive";
  established: number;
  description: string;
  badge: string;
  productsScale: string;
  scaleDetails: string;
  isVerified: boolean;
  websiteUrl: string;
  zaloUrl: string;
  representative: string;
  departmentPhone: string;
  productShowcase: ShowcaseItem[];
}

export const AVAILABLE_LOCATIONS = [
  "Hà Nội", "TP. Hồ Chí Minh (TPHCM)", "Đồng Nai", "Bình Dương", "Tp. Đà Nẵng",
  "TP. Hải Phòng", "An Giang", "Bà Rịa-Vũng Tàu", "Bắc Ninh", "Bình Phước",
  "Bình Thuận", "Hưng Yên", "Khánh Hòa", "Nam Định", "Phú Thọ", "Quảng Ninh", "Thái Nguyên"
];
export const AVAILABLE_CATEGORIES = ["Thanh Ren, Ty Ren, Guzong", "Bulong Inox, Ốc Inox, Vít Inox", "Vòng Đệm, Long Đền", "Gạch Ốp Lát"];

export const MOCK_FILTER_DATA = {
  mainCategory: { name: "Ốc, Vít, Bù Loong", count: 778 },
  subCategories: [
    { name: "Thanh Ren, Ty Ren, Guzong", count: 202 },
    { name: "Bulong Neo, Bulong Móng, Bulong Lục Giác,...Các Loại", count: 189 },
    { name: "Bulong Inox, Ốc Inox, Vít Inox", count: 176 },
    { name: "Vòng Đệm, Long Đền", count: 100 },
    { name: "Bulong Nở, Vít Nở, Tắc Kê", count: 91 },
    { name: "Vít Bắn Tôn, Vít Tự Khoan, Vít Thạch Cao,...Các Loại", count: 68 },
    { name: "Bulong, Ốc Vít - Gia Công Bulong, Ốc Vít Theo Yêu Cầu", count: 66 },
    { name: "Đai Treo Ống (Hình Tròn, Quả Bí, Omega,...)", count: 61 },
    { name: "Đinh Rút, Đinh Tán, Rive Nhôm, Rive Inox", count: 42 },
    { name: "Bulong Hóa Chất", count: 27 },
    { name: "Ốc Vít Nhỏ, Ốc Vít Siêu Nhỏ", count: 26 },
  ],
  locations: AVAILABLE_LOCATIONS,
  relatedIndustries: [
    { name: "Cơ Khí - Gia Công và Chế Tạo", count: 2482 },
    { name: "Bản Lề (Bản Lề Inox, Bản Lề Cửa,... Các Loại)", count: 65 }
  ],
  tags: [
    "Ốc Vít Bu Lông",
    "Nhà Cung Cấp Ốc Vít Bu Lông",
    "Công Ty Nhập Khẩu Và Phân Phối Ốc Vít Bu Lông",
    "Danh Sách Công Ty Phân Phối Ốc Vít Bu Lông",
    "Mua Bán Ốc Vít Bu Lông"
  ]
};

export const LIST_SUPPLIERS: Supplier[] = [
  {
    id: 1,
    name: "Công Ty Trách Nhiệm Hữu Hạn Một Thành Viên - Thương Mại Dịch Vụ Cổ Phần Hoá Vốn Hoá Quang Thái",
    logo: "M",
    brandLogoText: "MAXIDI",
    brandSubText: "Chợ Kiểu Mới",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát", "Sắt Thép & Xi Măng"],
    rating: 4.9,
    reviews: 142,
    location: "TPHCM",
    address: "25A An Phú Đông 25, P. An Phú Đông, Q.12, Thành Phố Hồ Chí Minh",
    phone: "0968 779 976",
    email: "willow.saulnguyen@gmail.com",
    status: "active",
    established: 2012,
    description: "Nhà cung cấp uy tín hàng đầu về gỗ tự nhiên, gỗ ghép công nghệ và các giải pháp gỗ nhựa composite cho các công trình trọng điểm toàn thành phố.",
    badge: "Thành Viên Vàng",
    productsScale: "Doanh Nghiệp Trong Nước - Nhà Sản Xuất",
    scaleDetails: "2 Nhà Máy - 1 VPĐĐ - 3 Kho Chứa Hàng\nDiện Tích: 43.000m2",
    isVerified: true,
    websiteUrl: "www.hungduplastics.com",
    zaloUrl: "https://zalo.me/0968779976",
    representative: "Vinh Nguyễn",
    departmentPhone: "0968 779 976",
    productShowcase: [
      {
        name: "Gỗ tự nhiên",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ ghép thanh",
        image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Ván ép / plywood",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ công nghiệp",
        image: "https://images.unsplash.com/photo-1507312436339-df1f07cf1f96?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Gỗ nhựa",
        image: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Sàn gỗ công nghiệp",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Phụ kiện nghành gỗ",
        image: "https://images.unsplash.com/photo-1605814060002-39feaf1bf5e5?auto=format&fit=crop&q=80&w=400&h=260"
      },
      {
        name: "Keo dán gỗ chuyên dụng",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=400&h=260"
      }
    ]
  },
  {
    id: 2,
    name: "Tập Đoàn Hoà Phát - Chi Nhánh Thép Xây Dựng",
    logo: "HP",
    brandLogoText: "HOA PHAT",
    brandSubText: "Thép Việt Bền Vững",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 245,
    location: "Đà Nẵng",
    address: "Đường số 6, KCN Hòa Khánh, Liên Chiểu, Đà Nẵng",
    phone: "0236 3734 567",
    email: "thephe@hoaphat.com.vn",
    status: "active",
    established: 1992,
    description: "Thép xây dựng Hòa Phát chiếm thị phần số 1 tại Việt Nam. Sử dụng công nghệ lò cao khép kín hiện đại, tối ưu chi phí, chịu lực siêu bền cho mọi công trình trọng điểm.",
    badge: "Thị Phần Số 1",
    productsScale: "Tập Đoàn Công Nghiệp - Nhà Sản Xuất Thép",
    scaleDetails: "Khu Liên Hợp Dung Quất - Diện Tích: 4.500.000m² - Công Suất 8.5 Triệu Tấn",
    isVerified: true,
    websiteUrl: "www.hoaphat.com.vn",
    zaloUrl: "https://zalo.me/02363734567",
    representative: "Vinh Nguyễn",
    departmentPhone: "0968 779 976",
    productShowcase: [
      {
        name: "Thép thanh vằn D10-D40",
        image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép cuộn mạ kẽm phi 6",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Ống thép hộp đen siêu bền",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xà gồ mạ kẽm chữ C-Z",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép cốt bê tông đúc",
        image: "https://images.unsplash.com/photo-1628186178303-62ebdbbc16ef?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Dây thép gai 3mm",
        image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Lưới thép B40 bọc nhựa",
        image: "https://images.unsplash.com/photo-1616455246714-fa2d665accac?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Thép hình chữ H",
        image: "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 3,
    name: "Nhà Phân Phối Sơn Dulux AkzoNobel Việt Nam",
    logo: "DL",
    brandLogoText: "DULUX DL",
    brandSubText: "Sơn Màu Kết Nối",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.7,
    reviews: 98,
    location: "Hà Nội",
    address: "Tòa nhà Lotte, 54 Liễu Giai, Ba Đình, Hà Nội",
    phone: "1900 555 561",
    email: "dulux.vietnam@akzonobel.com",
    status: "active",
    established: 2004,
    description: "Cung cấp các dòng sơn nước cao cấp Dulux EasyClean, Dulux Weathershield bảo vệ tổ ấm vượt trội trước thời tiết nhiệt đới khắc nghiệt. Toàn bộ sơn không chứa chì hay thủy ngân, đạt tiêu chuẩn chứng nhận Xanh SGBC.",
    badge: "Đối Tác Kim Cương",
    productsScale: "Chi Nhánh Hãng Hoá Chất Quốc Tế",
    scaleDetails: "2 Tổng Kho Bắc - Nam, 250 Nhà phân phối uỷ quyền",
    isVerified: true,
    websiteUrl: "www.dulux.com.vn",
    zaloUrl: "https://zalo.me/1900555561",
    representative: "Trần Thế Phong",
    departmentPhone: "0988 123 456",
    productShowcase: [
      {
        name: "Sơn Weathershield bóng",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn EasyClean chống bẩn",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chất chống thấm cao cấp",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn lót kháng kiềm nội thất",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bột bét và bả ngoại thất",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sơn phủ vân mây",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Máy pha màu tự động",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Con lăn sơn sợi microfiber",
        image: "https://images.unsplash.com/photo-1510103767138-04b38d3886f4?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 4,
    name: "Thiết Bị Phòng Tắm cao cấp INAX Việt Nam",
    logo: "IX",
    brandLogoText: "INAX IX",
    brandSubText: "Công Nghệ Nhật Bản",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 156,
    location: "TP. Hồ Chí Minh",
    address: "218Bis Nam Kỳ Khởi Nghĩa, Võ Thị Sáu, Quận 3, TP. HCM",
    phone: "028 3930 2040",
    email: "contacts@inax.com.vn",
    status: "active",
    established: 1998,
    description: "Thương hiệu thiết bị vệ sinh hàng đầu Nhật Bản thuộc tập đoàn LIXIL. Nổi tiếng với công nghệ sứ Aqua Ceramic trắng sạch suốt 100 năm, thiết kế tinh tế tối giản cùng hệ thống vòi nước cảm ứng thông minh Eco-smart.",
    badge: "Công Nghệ Nhật Bản",
    productsScale: "Công Ty Liên Doanh - Nhà Sản Xuất Sứ",
    scaleDetails: "3 Nhà Máy Inax Việt Nam - Hệ thống 500 Đại lý sỉ toàn quốc",
    isVerified: true,
    websiteUrl: "www.inax.com.vn",
    zaloUrl: "https://zalo.me/02839302040",
    representative: "Kenji Nakamura",
    departmentPhone: "0909 333 444",
    productShowcase: [
      {
        name: "Bàn cầu Aqua Ceramic",
        image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sen tắm vòi sưởi thông minh",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chậu Lavabo lắp âm bàn",
        image: "https://images.unsplash.com/photo-1584622781463-e380afcf0cf4?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vòi rửa Ecolim nước nhẹ",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch kiến trúc Inax cao cấp",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ kiện nhà tắm inox 304",
        image: "https://images.unsplash.com/photo-1585058178125-ed80b577ba72?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gương LED cảm ứng",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bồn tắm massage acrylic",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 5,
    name: "An Cường Wood Working - Gỗ Công Nghiệp & Decor",
    logo: "AC",
    brandLogoText: "AN CUONG",
    brandSubText: "Decor Gỗ Tự Nhiên",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 137,
    location: "Bình Dương",
    address: "ĐT747B, Phường Khánh Bình, Tân Uyên, Bình Dương",
    phone: "0274 3626 282",
    email: "infoancuong@ancuong.com",
    status: "active",
    established: 1994,
    description: "Nhà sản xuất giải pháp gỗ công nghiệp hàng đầu Việt Nam đại diện cho dòng sản phẩm nội thất sang trọng. Đầy đủ các bề mặt MFC, Laminate, Acrylic từ các tông màu vân gỗ thời thượng đến mặt đá thô mộc đẳng cấp nhất.",
    badge: "Bảo Hành Toàn Diện",
    productsScale: "Doanh Nghiệp Trong Nước - Gỗ Mỹ Nghệ",
    scaleDetails: "Nhà máy Bình Dương: 240.000m² - 20 Showroom Toàn quốc",
    isVerified: true,
    websiteUrl: "www.ancuong.com",
    zaloUrl: "https://zalo.me/02743626282",
    representative: "Lê Đức Thọ",
    departmentPhone: "0903 555 999",
    productShowcase: [
      {
        name: "Gỗ sồi tự nhiên tấm",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ ghép thanh ép áp lực",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Ván ép chống ẩm Plywood",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ công nghiệp MFC",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gỗ nhựa ngoài trời WPC",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bề mặt Laminate An Cường",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chỉ viền nhựa PVC",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4ceae?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Tấm ốp tường 3D",
        image: "https://images.unsplash.com/photo-1517409207049-7e3f22da2ed1?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 6,
    name: "Công Ty TNHH Sika Hữu Hạn Việt Nam",
    logo: "SK",
    brandLogoText: "SIKA CO",
    brandSubText: "Xây Dựng Bền Vững",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.6,
    reviews: 114,
    location: "Bình Dương",
    address: "Khu Công Nghiệp Nhơn Trạch 1, Nhơn Trạch, Đồng Nai",
    phone: "1800 5858 37",
    email: "sikavietnam@vn.sika.com",
    status: "active",
    established: 1993,
    description: "Giải pháp hoá chất xây dựng số 1 toàn cầu đến từ Thụy Sĩ. Chuyên phân phối các phụ gia bê tông trộn sẵn, màng chống thấm elastomeric linh động, keo trám khe nứt đàn hồi cao, kiến tạo sự bảo vệ chắc chắn chống rò rỉ nước.",
    badge: "Tiêu Chuẩn Thuỵ Sĩ",
    productsScale: "Doanh Nghiệp FDI - Hoá Chất Xây Dựng",
    scaleDetails: "2 Chi nhánh lớn TPHCM & Hà Nội - Tiêu chuẩn chống thấm Thuỵ Sỹ",
    isVerified: false,
    websiteUrl: "vn.sika.com",
    zaloUrl: "https://zalo.me/1800585837",
    representative: "Beat Schillig",
    departmentPhone: "0908 444 888",
    productShowcase: [
      {
        name: "Sika Latex TH kết nối",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Chất chống thấm đàn hồi",
        image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Keo trám khe Sikaflex-11FC",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vữa gốc xi măng mác cao",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia hoá dẻo bê tông",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Màng chống thấm bitum",
        image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Dầu lăn bảo dưỡng bê tông",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia chống thấm tường",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 7,
    name: "Gạch Việt-Ý Ceramic & Mosaic Art",
    logo: "VI",
    brandLogoText: "ITALU CO",
    brandSubText: "Đẳng Cấp Nghệ Thuật",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.5,
    reviews: 64,
    location: "Hà Nội",
    address: "KCN Tiên Sơn, Tiên Du, Bắc Ninh",
    phone: "0222 3838 123",
    email: "sales@italuceramic.vn",
    status: "active",
    established: 2011,
    description: "Được hợp tác chuyển giao công nghệ in phun 3D nổi bật trực tiếp từ Italia. Mang đến những nét vân mây tinh xảo và các dòng tranh gạch mosaic thủy tinh cao cấp, biến mỗi diện tích ốp lát trong nhà bạn thành một đại trình nghệ thuật sống động.",
    badge: "Thiết Kế Ý Độc Bản",
    productsScale: "Hợp Tác Toàn Cầu - Nhập Khẩu Ceramic",
    scaleDetails: "Xưởng Mosaic Nghệ Thuật - Phục vụ thiết kế biệt thự cao cấp",
    isVerified: true,
    websiteUrl: "www.vietisaceramic.com",
    zaloUrl: "https://zalo.me/02223838123",
    representative: "Gianni Rossi",
    departmentPhone: "0944 666 777",
    productShowcase: [
      {
        name: "Gạch Mosaic thuỷ tinh vàng",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch Vân Calacatta bóng",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Tranh gạch ốp tường 3D",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch thẻ trang trí hồ bơi",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch terrazzo giả đá thô",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch ốp vân gỗ nhám",
        image: "https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Đá ốp bàn bếp marble",
        image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Gạch lát nền bóng kiếng",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  },
  {
    id: 8,
    name: "Xi Măng Insee Việt Nam - Giải Pháp Bền Vững",
    logo: "IS",
    brandLogoText: "INSEE VN",
    brandSubText: "Liên Doanh Thái Lan",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 109,
    location: "Kiên Giang",
    address: "Khu Phố 3, Thị Trấn Kiên Lương, Kiên Lương, Kiên Giang",
    phone: "028 7300 1010",
    email: "info-vn@siamcitycement.com",
    status: "active",
    established: 1994,
    description: "Trước đây là Holcim Việt Nam, tự hào mang đến các mác xi măng siêu bền móng Insee Đa Dụng và xi măng xây tô chuyên dùng bền bỉ trước khí hậu biển mặn miền Tây. Tiên phong giảm phát thải CO2 đạt chứng nhận nhãn sinh thái.",
    badge: "Vật Liệu Xanh",
    productsScale: "Tập Đoàn Liên Doanh Quốc Tế",
    scaleDetails: "Trạm nghiền Cát Lái & Nhà máy Kiên Lương - Độc quyền cung cấp dự án chính phủ",
    isVerified: true,
    websiteUrl: "www.inseecement.com.vn",
    zaloUrl: "https://zalo.me/02873001010",
    representative: "Somchai Sae-Tang",
    departmentPhone: "0901 888 222",
    productShowcase: [
      {
        name: "Xi măng Insee Đa Dụng",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xi măng xây tô dẻo lâu",
        image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Vữa tô mác cao đóng bao",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Bê tông tươi đạt chuẩn Insee",
        image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Sản phẩm sinh thái Conwood",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Cát xây trộn bê tông mác",
        image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Xi măng trắng Insee",
        image: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?auto=format&fit=crop&q=100&w=400&h=260"
      },
      {
        name: "Phụ gia chống đông nền",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=100&w=400&h=260"
      }
    ]
  }
];
