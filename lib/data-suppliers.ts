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
  "Hà Nội", 
  "TP. Hồ Chí Minh", 
  "Đà Nẵng", 
  "Bình Dương", 
  "Đồng Nai", 
  "Quảng Ninh", 
  "Bà Rịa-Vũng Tàu", 
  "Kiên Giang"
];
export const AVAILABLE_CATEGORIES = [
  "Gạch Ốp Lát",
  "Sắt Thép & Xi Măng",
  "Sơn & Chống Thấm",
  "Thiết Bị Vệ Sinh"
];

export const MOCK_FILTER_DATA = {
  mainCategory: { name: "Vật Liệu Xây Dựng", count: 852 },
  subCategories: [
    { name: "Gạch Ốp Lát", count: 245 },
    { name: "Sắt Thép & Xi Măng", count: 312 },
    { name: "Sơn & Chống Thấm", count: 185 },
    { name: "Thiết Bị Vệ Sinh", count: 110 },
  ],
  locations: AVAILABLE_LOCATIONS,
  relatedIndustries: [
    { name: "Xây Dựng & Kiến Trúc", count: 1540 },
    { name: "Thiết Kế Nội Thất", count: 862 }
  ],
  tags: [
    "Vật Liệu Xây Dựng",
    "Gạch Ốp Cao Cấp",
    "Sơn Chống Thấm Tốt",
    "Sắt Thép Xây Dựng",
    "Thiết Bị Vệ Sinh"
  ]
};

const BASE_LIST_SUPPLIERS: Supplier[] = [
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
    location: "TP. Hồ Chí Minh",
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

const EXTRA_SUPPLIERS: Supplier[] = [
  {
    id: 10,
    name: "Tập Đoàn Thép Pomina - Nhà Máy Pomina 3",
    logo: "PM",
    brandLogoText: "POMINA",
    brandSubText: "Thép Việt Chất Lượng Cao",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 112,
    location: "Bà Rịa-Vũng Tàu",
    address: "KCN Phú Mỹ I, Phường Phú Mỹ, Thị xã Phú Mỹ, Bà Rịa-Vũng Tàu",
    phone: "0254 3895 111",
    email: "sales@pomina-steel.com",
    status: "active",
    established: 1999,
    description: "Nhà máy Thép Pomina với công nghệ luyện kim từ Đức, tự hào cung cấp các mác thép xây dựng cường độ cao cho các dự án hạ tầng, giao thông trọng điểm.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà Máy Luyện Phôi & Cán Thép Công Suất Lớn",
    scaleDetails: "Đạt chuẩn ISO 9001 và ISO 14001, sản lượng cán thép hàng triệu tấn/năm",
    isVerified: true,
    websiteUrl: "www.pomina-steel.com",
    zaloUrl: "https://zalo.me/02543895111",
    representative: "Đỗ Duy Thái",
    departmentPhone: "0903 456 789",
    productShowcase: [
      { name: "Thép cuộn phi 6 - phi 10", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thép vằn Pomina mác cao", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 11,
    name: "Tổng Công Ty Công Nghiệp Xi Măng Việt Nam - VICEM",
    logo: "VC",
    brandLogoText: "VICEM",
    brandSubText: "Trụ Cột Xây Dựng",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 195,
    location: "Hà Nội",
    address: "387 Kim Mã, Ngọc Khánh, Ba Đình, Hà Nội",
    phone: "024 3843 0157",
    email: "contact@vicem.vn",
    status: "active",
    established: 1979,
    description: "Tập đoàn sản xuất xi măng lớn nhất Việt Nam, sở hữu các thương hiệu nổi tiếng như Vicem Hoàng Mai, Vicem Bỉm Sơn, Vicem Hà Tiên... đảm bảo đáp ứng mọi quy mô dự án.",
    badge: "Thương Hiệu Quốc Gia",
    productsScale: "Tổng Công Ty Nhà Nước",
    scaleDetails: "Quy tụ 10 nhà máy xi măng thành viên trên toàn quốc",
    isVerified: true,
    websiteUrl: "www.vicem.vn",
    zaloUrl: "https://zalo.me/02438430157",
    representative: "Bùi Hồng Minh",
    departmentPhone: "0912 345 678",
    productShowcase: [
      { name: "Xi măng Vicem Hà Tiên đa dụng", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Xi măng Vicem Bỉm Sơn PCB40", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 12,
    name: "Công Ty Cổ Phẩn Đồng Tâm - Gạch & VLXD Đồng Tâm",
    logo: "DT",
    brandLogoText: "DONG TAM",
    brandSubText: "Vì Cuộc Sống Tươi Đẹp",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.9,
    reviews: 215,
    location: "Đồng Nai",
    address: "Số 1, Đường 2B, KCN Biên Hòa 1, Đồng Nai",
    phone: "0251 3836 101",
    email: "care@dongtam.com.vn",
    status: "active",
    established: 1969,
    description: "Hơn 55 năm kiến tạo không gian sống, Đồng Tâm tự hào mang lại các bộ sưu tập gạch granite kháng khuẩn, gạch bông nghệ thuật, và ngói màu chất lượng vượt trội.",
    badge: "Thành Viên Kim Cương",
    productsScale: "Nhà Sản Xuất Tiêu Biểu",
    scaleDetails: "Tổng diện tích nhà máy lên tới hàng trăm hecta chuyên sản xuất granite & ceramic cao cấp",
    isVerified: true,
    websiteUrl: "www.dongtam.com.vn",
    zaloUrl: "https://zalo.me/02513836101",
    representative: "Võ Quốc Thắng",
    departmentPhone: "0908 123 456",
    productShowcase: [
      { name: "Gạch đồng chất Granite kháng khuẩn", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch bông nghệ thuật handmade", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 13,
    name: "Công Ty Liên Doanh Sơn KOVA - Tập Đoàn Sơn KOVA",
    logo: "KV",
    brandLogoText: "KOVA PAINT",
    brandSubText: "Công Nghệ Nano Từ Mỹ",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.8,
    reviews: 167,
    location: "Hà Nội",
    address: "KCN Từ Liêm, Quận Bắc Từ Liêm, Hà Nội",
    phone: "1900 6364 51",
    email: "kovapaint@kova.vn",
    status: "active",
    established: 1993,
    description: "Phát minh bởi nhà khoa học PGS.TS Nguyễn Thị Hòe, KOVA nổi bật toàn châu Á với các sản phẩm sơn chống thấm dột CT-11A, sơn tự làm sạch và sơn chống đạn độc quyền sản xuất.",
    badge: "Công Nghệ Tiên Phong",
    productsScale: "Doanh Nghiệp Khoa Học Công Nghệ",
    scaleDetails: "Phòng thí nghiệm quốc tế & nhà máy đạt chuẩn châu Âu tại TPHCM và Hà Nội",
    isVerified: true,
    websiteUrl: "www.kovapaint.com",
    zaloUrl: "https://zalo.me/1900636451",
    representative: "Nguyễn Thị Hòe",
    departmentPhone: "0903 999 888",
    productShowcase: [
      { name: "Chống thấm CT-11A đặc chủng", image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn bóng ngoại thất K-5500", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 14,
    name: "Công Ty TNHH Inax Việt Nam - Thương Hiệu Thiết Bị Vệ Sinh LIXIL",
    logo: "IX",
    brandLogoText: "INAX",
    brandSubText: "Công Nghệ Aqua Ceramic",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 310,
    location: "Hà Nội",
    address: "KCN Dương Xá, Gia Lâm, Hà Nội",
    phone: "1800 6633",
    email: "inax@lixil.com.vn",
    status: "active",
    established: 1996,
    description: "Thương hiệu từ Nhật Bản dẫn đầu với công nghệ Aqua Ceramic tự làm sạch suốt 100 năm, thiết bị vệ sinh Inax đem lại trải nghiệm thư giãn đẳng cấp quốc tế.",
    badge: "Thành Viên Vàng",
    productsScale: "Tập Đoàn Đa Quốc Gia LIXIL",
    scaleDetails: "Nhiều nhà máy tại Hà Nội, Bình Dương, Hưng Yên đạt chuẩn châu Á",
    isVerified: true,
    websiteUrl: "www.inax.com.vn",
    zaloUrl: "https://zalo.me/18006633",
    representative: "Masahiko Hiramoto",
    departmentPhone: "0988 555 444",
    productShowcase: [
      { name: "Bàn cầu điện tử thông minh INAX", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sen vòi mạ vàng kim Inax cao cấp", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 15,
    name: "Tập Đoàn Viglacera - Nhà Sản Xuất Kính & Gạch Lớn Nhất Việt Nam",
    logo: "VG",
    brandLogoText: "VIGLACERA",
    brandSubText: "Tiên Phong Công Nghệ Bê Tông Khí",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát", "Thiết Bị Vệ Sinh"],
    rating: 4.7,
    reviews: 182,
    location: "Hà Nội",
    address: "Tòa nhà Viglacera, Đại lộ Thăng Long, Mễ Trì, Nam Từ Liêm, Hà Nội",
    phone: "024 3553 6660",
    email: "info@viglacera.com.vn",
    status: "active",
    established: 1974,
    description: "Nhà sản xuất gạch ốp lát ceramic, granite, ngói, gạch block bê tông khí chưng áp (ALC) hàng đầu Việt Nam. Đi đầu trong mảng kính tiết kiệm năng lượng, kính siêu trắng.",
    badge: "Thương Hiệu Quốc Gia",
    productsScale: "Tổng Công Ty Công Nghiệp Hạng I",
    scaleDetails: "Hệ thống nhà máy trải rộng từ Bắc vào Nam với dây chuyền Sacmi Ý",
    isVerified: true,
    websiteUrl: "www.viglacera.com.vn",
    zaloUrl: "https://zalo.me/02435536660",
    representative: "Nguyễn Anh Tuấn",
    departmentPhone: "0915 222 333",
    productShowcase: [
      { name: "Tấm panel bê tông nhẹ ALC chống nóng", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch ốp lát Signature Granite Viglacera", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 16,
    name: "Công Ty TNHH Jotun Paint Việt Nam",
    logo: "JT",
    brandLogoText: "JOTUN VN",
    brandSubText: "Bảo Vệ Mọi Công Trình",
    image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.8,
    reviews: 134,
    location: "Bình Dương",
    address: "Số 1, đường số 10, KCN Sóng Thần 1, Dĩ An, Bình Dương",
    phone: "0274 374 2206",
    email: "info.vietnam@jotun.com",
    status: "active",
    established: 1993,
    description: "Đến từ Na Uy, Jotun là thương hiệu sơn phủ công nghiệp, sơn hàng hải và sơn trang trí ngoại thất Jotashield hàng đầu thế giới, bảo vệ vĩnh cửu trước thời tiết khắc nghiệt.",
    badge: "Thành Viên Vàng",
    productsScale: "Tập Đoàn Toàn Cầu Na Uy",
    scaleDetails: "Nhà máy tự động hóa hoàn toàn mới tại KCN Hiệp Phước và Sóng Thần",
    isVerified: true,
    websiteUrl: "www.jotun.com/vn",
    zaloUrl: "https://zalo.me/02743742206",
    representative: "Jon Bigum",
    departmentPhone: "0902 444 666",
    productShowcase: [
      { name: "Sơn ngoại thất cao cấp Jotashield", image: "https://images.unsplash.com/photo-1595841696660-ab9611abf1d3?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn nội thất Majestic đẹp mượt mà", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 17,
    name: "Tập Đoàn Tôn Hoa Sen - Công Ty Cổ Phần Tập Đoàn Hoa Sen",
    logo: "HS",
    brandLogoText: "HOA SEN",
    brandSubText: "Mái Ấm Gia Đình Việt",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 298,
    location: "Bình Dương",
    address: "Số 9 Đại lộ Thống Nhất, KCN Sóng Thần II, Dĩ An, Bình Dương",
    phone: "1800 1515",
    email: "truyenthong@hoasengroup.vn",
    status: "active",
    established: 2001,
    description: "Chiếm gần 40% thị phần tôn mạ màu, tôn kẽm và ống nhựa xây dựng tại Việt Nam. Sản phẩm xuất khẩu đi hơn 80 quốc gia vượt qua các rào cản chất lượng ASTM khắt khe nhất.",
    badge: "Biểu Tượng Chất Lượng",
    productsScale: "Nhà Sản Xuất Đứng Đầu Khu Vực",
    scaleDetails: "Hệ thống hàng chục nhà máy tôn cán nguội liên tục trên toàn quốc",
    isVerified: true,
    websiteUrl: "www.hoasengroup.vn",
    zaloUrl: "https://zalo.me/18001515",
    representative: "Lê Phước Vũ",
    departmentPhone: "0914 888 999",
    productShowcase: [
      { name: "Tôn Hoa Sen mạ màu giảm nhiệt 3 lớp", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Ống nhựa uPVC chịu lực cao cách âm", image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 18,
    name: "Công Ty Cổ Phần Thạch Bàn - Gạch Men Thạch Bàn Group",
    logo: "TB",
    brandLogoText: "THACH BAN",
    brandSubText: "Đẳng Cấp Ý Cho Ngôi Nhà Việt",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.6,
    reviews: 94,
    location: "Hà Nội",
    address: "Tổ 15, Phường Thạch Bàn, Long Biên, Hà Nội",
    phone: "024 3875 0122",
    email: "contact@thachban.com.vn",
    status: "active",
    established: 1959,
    description: "Thạch Bàn là cánh chim đầu đàn cổ xưa nhất của ngành ceramic Việt Nam, sở hữu dây chuyền nung nén siêu mài mòn cao cấp đạt tiêu chuẩn châu Âu.",
    badge: "Sáng Lập Ngành Gạch",
    productsScale: "Nhà Sản Xuất & Liên Doanh Thiết Kế Ý",
    scaleDetails: "Khu liên hợp nhà máy Granite Thạch Bàn Yên Dũng diện tích lớn",
    isVerified: true,
    websiteUrl: "www.thachban.com.vn",
    zaloUrl: "https://zalo.me/02438750122",
    representative: "Nguyễn Thế Cường",
    departmentPhone: "0905 777 666",
    productShowcase: [
      { name: "Gạch bông cổ điển hoa văn tinh xảo", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch vân đá Marble khổ cực đại 80x160cm", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 19,
    name: "Công Ty TNHH Nippon Paint Việt Nam",
    logo: "NP",
    brandLogoText: "NIPPON VN",
    brandSubText: "Sơn Đâu Cũng Đẹp",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.7,
    reviews: 146,
    location: "Đồng Nai",
    address: "Số 14, Đường 3A, KCN Biên Hòa 2, Đồng Nai",
    phone: "0251 383 6511",
    email: "sales-npv@nipponpaint.com.vn",
    status: "active",
    established: 1994,
    description: "Thương hiệu lâu đời nhất Nhật Bản nổi tiếng với dòng sơn không mùi Nippon Odour-less an toàn tuyệt đối cho sức khỏe bà mẹ trẻ em, bám dính siêu hạng màng bóng dẻo.",
    badge: "Bảo Vệ Sức Khỏe",
    productsScale: "Tập Đoàn Toàn Cầu Nippon Paint",
    scaleDetails: "Nhiều nhà máy tại Đồng Nai và Vĩnh Phúc sở hữu robot pha chế chính xác",
    isVerified: true,
    websiteUrl: "www.nipponpaint.com.vn",
    zaloUrl: "https://zalo.me/02513836511",
    representative: "Ee Soon Hean",
    departmentPhone: "0903 111 222",
    productShowcase: [
      { name: "Sơn không mùi thân thiện Odour-less", image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn ngoại thất WeatherGard siêu chống nóng", image: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 20,
    name: "Công Ty TNHH Thiết Bị Vệ Sinh Caesar Việt Nam",
    logo: "CS",
    brandLogoText: "CAESAR VN",
    brandSubText: "Thiết Kế Đột Phá Cho Phòng Tắm",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.7,
    reviews: 125,
    location: "Đồng Nai",
    address: "KCN Nhơn Trạch 1, Huyện Nhơn Trạch, Đồng Nai",
    phone: "0251 356 0234",
    email: "caesar-care@caesar.com.vn",
    status: "active",
    established: 1996,
    description: "Sản phẩm bàn cầu xả xoáy siphon chống bám bẩn tinh tế, chậu rửa tích hợp mặt tủ sang trọng hàng đầu Đài Loan, đem đến sự thanh lịch hiện đại giá thành vô cùng hợp lý.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà Máy Vốn Đầu Tư Đài Loan",
    scaleDetails: "Khuôn viên sản xuất sứ hơn 120.000m2 đạt giải thưởng thiết kế quốc tế",
    isVerified: true,
    websiteUrl: "www.caesar.com.vn",
    zaloUrl: "https://zalo.me/02513560234",
    representative: "Chen Tang Feng",
    departmentPhone: "0909 333 444",
    productShowcase: [
      { name: "Chậu rửa cabinet tủ nhựa chịu nước", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bàn cầu treo tường tiết kiệm diện tích", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 21,
    name: "Công Ty Cổ Phần Thép Miền Nam - VNSTEEL",
    logo: "MN",
    brandLogoText: "V-STEEL",
    brandSubText: "Thương Hiệu Thép Chữ V",
    image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.7,
    reviews: 138,
    location: "Bà Rịa-Vũng Tàu",
    address: "KCN Phú Mỹ I, Quận Tân Thành, Bà Rịa-Vũng Tàu",
    phone: "0254 387 6171",
    email: "sales@thepmiennam.com.vn",
    status: "active",
    established: 1975,
    description: "Nhà sản xuất các mác thép cây và thép cuộn tròn trơn nổi danh với logo chữ V dập nổi. Thép chịu uốn đàn hồi tốt chuyên dùng cho nhà siêu cao tầng và cầu vượt biển lớn.",
    badge: "Thành Viên Vàng",
    productsScale: "Thương hiệu trực thuộc Tổng công ty Thép Việt Nam",
    scaleDetails: "Dây chuyền luyện thép Danieli hiện đại số 1 Italy với độ chính xác cao",
    isVerified: true,
    websiteUrl: "www.thepmiennam.com.vn",
    zaloUrl: "https://zalo.me/02543876171",
    representative: "Nguyễn Minh Xuân",
    departmentPhone: "0903 222 111",
    productShowcase: [
      { name: "Thép cây tròn trơn dẻo chịu nhiệt", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Thép thanh vằn cường độ cao CB400-CB500", image: "https://images.unsplash.com/photo-1504307651254-35680f35aa9e?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 22,
    name: "Tổng Công Ty Xi Măng FiCO Tây Ninh - Vicem FiCO",
    logo: "FC",
    brandLogoText: "FICO",
    brandSubText: "Gắn Kết Mọi Công Trình",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.6,
    reviews: 91,
    location: "TP. Hồ Chí Minh",
    address: "Tầng 12, Rosana Tower, 60 Nguyễn Đình Chiểu, Q.1, TPHCM",
    phone: "028 3910 4825",
    email: "contact@ficocement.com.vn",
    status: "active",
    established: 2006,
    description: "Liên doanh cùng tập đoàn danh tiếng SCG Thái Lan, xi măng FiCO thâm nhập dồi dào thị trường miền Nam tự hào xây nên các hầm vượt sông Sài Gòn, cầu Thủ Thiêm kiên cố.",
    badge: "Liên Doanh Thái Lan",
    productsScale: "Hội viên hợp tác quốc tế lớn",
    scaleDetails: "Nhà máy chính tại Tây Ninh và các trạm nghiền vệ tinh đặt quanh vùng sông nước",
    isVerified: true,
    websiteUrl: "www.ficocement.com.vn",
    zaloUrl: "https://zalo.me/02839104825",
    representative: "Prarinya Panawong",
    departmentPhone: "0908 999 555",
    productShowcase: [
      { name: "Xi măng FiCO mác PCB40 đa dụng", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Clinker sấy lò quay chuẩn quốc tế", image: "https://images.unsplash.com/photo-1518174526364-7098e9fc7e60?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 23,
    name: "Đá Ốp Lát Granite & Marble Phú Tài",
    logo: "PT",
    brandLogoText: "PHU TAI MD",
    brandSubText: "Đá Tự Nhiên Hoàn Mỹ",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 87,
    location: "Đà Nẵng",
    address: "Đường số 9, KCN Hòa Khánh, Liên Chiểu, Đà Nẵng",
    phone: "0236 373 9999",
    email: "stone@phutai.com.vn",
    status: "active",
    established: 1994,
    description: "Nhà khai thác chế tác đá hoa cương granite, đá cẩm thạch marble xuất khẩu hàng đầu Việt Nam. Từng lát đá mang đường vân thiên tạo lấp lánh nâng tầm nét uy nghi quý tộc.",
    badge: "Thành Viên Vàng",
    productsScale: "Nhà khai thác và chế tác đá quy mô lớn",
    scaleDetails: "Sở hữu các mỏ đá trắng, đá vàng độc quyền tại Bình Định, Thanh Hóa",
    isVerified: true,
    websiteUrl: "www.phutai.com.vn",
    zaloUrl: "https://zalo.me/02363739999",
    representative: "Lê Vỹ",
    departmentPhone: "0905 111 888",
    productShowcase: [
      { name: "Đá Marble trắng Carrara quý phái", image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Đá Granite đen Kim Sa ánh kim cương", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 24,
    name: "Tập Đoàn Gạch Men Ceramic Prime Việt Nam",
    logo: "PR",
    brandLogoText: "PRIME GROUP",
    brandSubText: "Thịnh Vượng Là Prime",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.8,
    reviews: 320,
    location: "Hà Nội",
    address: "Tòa nhà Prime, KĐT mới Trung Hòa, Cầu Giấy, Hà Nội",
    phone: "1900 636 515",
    email: "customer-service@prime.vn",
    status: "active",
    established: 1999,
    description: "Công ty thành viên của SCG, chuyên gạch phủ men bóng kỹ thuật cao 3D chống trơn, ngói lợp tráng men cao cấp nung ở 1150 độ C không thấm cong vênh.",
    badge: "Xuất Khẩu Quốc Tế",
    productsScale: "Dẫn đầu công suất gạch men Đông Nam Á",
    scaleDetails: "6 nhà máy thành viên sở hữu quy trình Italian Sacmi khép kín đại diện quốc tế",
    isVerified: true,
    websiteUrl: "www.prime.vn",
    zaloUrl: "https://zalo.me/1900636515",
    representative: "Cherdsak Niyomsilpa",
    departmentPhone: "0989 333 999",
    productShowcase: [
      { name: "Gạch men bóng phủ carat chống trầy", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Ngói lợp tráng men Prime cao cấp", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 25,
    name: "Công Ty Cổ Phần Sơn Kova Miền Nam - Kova Group",
    logo: "KS",
    brandLogoText: "KOVA OUTLET",
    brandSubText: "Sơn Chống Thấm Elastomer số 1",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.8,
    reviews: 140,
    location: "TP. Hồ Chí Minh",
    address: "92G Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, TPHCM",
    phone: "028 3840 7111",
    email: "kovahcm@kova.vn",
    status: "active",
    established: 1998,
    description: "Nhà phân phối mảng chống thấm, sơn phủ ngoại thất dẻo dai bám chặt bê tông lấp đầy vết nứt chân chim, đạt độ bền uốn dẻo co giãn bám cao tuyệt mỹ.",
    badge: "Thành Viên Vàng",
    productsScale: "Tổng kho đại diện khu vực phía Nam",
    scaleDetails: "Kho vận chuyển tốc hành phân bổ 12 tỉnh thành miền Tây Nam Bộ",
    isVerified: true,
    websiteUrl: "www.kovapaint.com.vn",
    zaloUrl: "https://zalo.me/02838407111",
    representative: "Nguyễn Duy",
    departmentPhone: "0902 888 666",
    productShowcase: [
      { name: "Sơn thạch cao chống nấm mốc ẩm", image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn thể thao cao cấp cho sân tennis", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 26,
    name: "Sơn Dự Án Jotun Professional Việt Nam",
    logo: "JP",
    brandLogoText: "JOTUN PRO",
    brandSubText: "Giải Pháp Bảo Vệ Công Nghiệp",
    image: "https://images.unsplash.com/photo-1541123437800-1c9102c219da?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sơn & Chống Thấm"],
    rating: 4.9,
    reviews: 104,
    location: "TP. Hồ Chí Minh",
    address: "Tầng 10, tòa nhà Metropolitan, 235 Đồng Khởi, Quận 1, TPHCM",
    phone: "028 3825 3988",
    email: "project@jotun.com",
    status: "active",
    established: 1995,
    description: "Chuyên thầu cung cấp sơn bảo ôn epoxy, sơn bồn chứa hóa chất chống rỉ sét siêu hạng cho giàn khoan dầu mỏ, nhà máy nhiệt điện trên cả nước.",
    badge: "Chứng Nhận LEED",
    productsScale: "Nhà thầu sơn dự án quốc tế chuyên nghiệp",
    scaleDetails: "Bao phủ 80% kiến trúc siêu cao ốc tại Saigon & Hanoi",
    isVerified: true,
    websiteUrl: "www.jotunpro.com",
    zaloUrl: "https://zalo.me/02838253988",
    representative: "Morten Fon",
    departmentPhone: "0918 333 111",
    productShowcase: [
      { name: "Sơn Epoxy tự phẳng rải sàn nhà xưởng", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Sơn lót kẽm hai thành phần chống rỉ", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 27,
    name: "Gạch Việt-Ý Taicera - Nhà Máy Đồng Nai",
    logo: "TC",
    brandLogoText: "TAICERA",
    brandSubText: "Định Hình Không Gian Sống",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Gạch Ốp Lát"],
    rating: 4.7,
    reviews: 140,
    location: "Đồng Nai",
    address: "KCN Gò Dầu, Nhơn Trạch, Đồng Nai",
    phone: "0251 3841 555",
    email: "taicera@cement.com",
    status: "active",
    established: 1994,
    description: "Thương hiệu Đài Loan tiên phong sản xuất gạch granite thạch anh mài mượt chống trầy, dẫn đầu thị hiếu thiết kế tối giản xám xi măng tao nhã cho các kiến trúc vĩ đại.",
    badge: "Chiết Khấu Cao",
    productsScale: "Sản xuất liên doanh Italy",
    scaleDetails: "Nhà máy áp dụng tự động hoá nung bồn bột tuần hoàn sinh thái",
    isVerified: true,
    websiteUrl: "www.taicera.com",
    zaloUrl: "https://zalo.me/02513841555",
    representative: "Hsu Chih Hsiung",
    departmentPhone: "0903 000 999",
    productShowcase: [
      { name: "Gạch thạch anh mài bóng xi măng mộc", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Gạch giả đá mộc sân vườn sần chống lún", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 28,
    name: "Thiết bị vệ sinh TOTO chính hãng TOTO Việt Nam",
    logo: "TT",
    brandLogoText: "TOTO",
    brandSubText: "Định nghĩa sự tiện nghi",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.9,
    reviews: 412,
    location: "TP. Hồ Chí Minh",
    address: "Tòa nhà 1A, đường Phạm Ngọc Thạch, Quận 1, TPHCM",
    phone: "1800 5588 30",
    email: "totovietnam@toto.com",
    status: "active",
    established: 2002,
    description: "TOTO đem công nghệ sứ vệ sinh chống bám siêu nhẵn Cefiontect và nắp điện tử Washlet lừng danh Nhật Bản đến từng tổ ấm nhỏ, định vị sang trọng đỉnh cao.",
    badge: "Thành Viên Kim Cương",
    productsScale: "Tập Đoàn Toàn Cầu Nhật Bản",
    scaleDetails: "Phòng trưng bày đẳng cấp 5 sao tại trung tâm Sài Gòn và Hà Nội",
    isVerified: true,
    websiteUrl: "www.vn.toto.com",
    zaloUrl: "https://zalo.me/1800558830",
    representative: "Noriaki Hayakawa",
    departmentPhone: "0903 555 111",
    productShowcase: [
      { name: "Bàn cầu điện tử TOTO NEOREST thông minh", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Nắp rửa thông minh TOTO Washlet tiện ích", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 29,
    name: "Thiết bị vệ sinh American Standard - LIXIL Bình Dương",
    logo: "AS",
    brandLogoText: "AMER-STAND",
    brandSubText: "Tinh tế phong cách Mỹ",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Thiết Bị Vệ Sinh"],
    rating: 4.8,
    reviews: 110,
    location: "Bình Dương",
    address: "Đại lộ Bình Dương, Thuận An, Bình Dương",
    phone: "1900 5454 60",
    email: "care.as@lixil.com",
    status: "active",
    established: 2013,
    description: "Nhãn hiệu Mỹ với nét phóng khoáng đầy chất hiện đại, dẫn đầu về bồn tắm mát-xa vòi sen ổn định nhiệt tự động điều hòa nước tiện nghi sạch bóng.",
    badge: "Dẫn Đầu Phong Cách",
    productsScale: "Tổng hành dinh LIXIL Southern Plant",
    scaleDetails: "Năng lực lò nung áp lực tự động 1 triệu bồn cầu xuất khẩu Mỹ/năm",
    isVerified: true,
    websiteUrl: "www.americanstandard.com.vn",
    zaloUrl: "https://zalo.me/1900545460",
    representative: "David Alcorn",
    departmentPhone: "0908 666 888",
    productShowcase: [
      { name: "Sen tắm âm tường đa chế độ xả massage", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bàn cầu cơ một khối xả kép lốc xoáy", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  },
  {
    id: 30,
    name: "Công Ty Cổ Phần Xi Măng Nghi Sơn",
    logo: "NS",
    brandLogoText: "NGHI SON",
    brandSubText: "Liên Doanh Nhật Bản Bền Bỉ",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=100&w=1200&h=800",
    categories: ["Sắt Thép & Xi Măng"],
    rating: 4.8,
    reviews: 145,
    location: "Quảng Ninh",
    address: "Cảng Cái Lân, TP. Hạ Long, Quảng Ninh",
    phone: "033 3841 835",
    email: "info@nghison.com.vn",
    status: "active",
    established: 1995,
    description: "Được đầu tư bởi Taiheiyo Cement Nhật Bản, xi măng Nghi Sơn có mác PCB40 chịu mặn, chống xâm thực sulfate mặn biển cực tốt cho nền móng vạn năm vững vàng.",
    badge: "Bảo Chứng Nhật Bản",
    productsScale: "Nhà máy liên minh quốc tế siêu công suất",
    scaleDetails: "Trạm nghiền hiện đại cảng Cái Lân phục vụ miền Bắc và Khánh Hòa",
    isVerified: true,
    websiteUrl: "www.nghison.com.vn",
    zaloUrl: "https://zalo.me/0333841835",
    representative: "Hiroshi Sato",
    departmentPhone: "0904 999 222",
    productShowcase: [
      { name: "Xi măng Nghi Sơn dân dụng mác cao", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=260" },
      { name: "Bê tông móng bền mặn sulfate Nghi Sơn", image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&h=260" }
    ]
  }
];

export const LIST_SUPPLIERS: Supplier[] = [
  ...BASE_LIST_SUPPLIERS,
  ...EXTRA_SUPPLIERS
];
