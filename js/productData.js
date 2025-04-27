/**
 * Product Data for Functional Medicine E-commerce Store
 * This file contains the data for all products in the store.
 */

// Initialize product data array
const products = [
  {
    id: 1,
    name: "Vitamin D3 + K2 Phức Hợp",
    category: "vitamins",
    price: 29.99,
    regularPrice: 34.99,
    rating: 4.8,
    reviewCount: 156,
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00022576_lineabon_k2d3_ergopharm_10ml_tre_em_5723_63a9_large_9b6383b4b6.jpg",
    description:
      "Vitamin D3 liều cao (5000 IU) với K2 (MK-7) giúp hấp thu canxi tối ưu và sức khỏe xương. Hỗ trợ chức năng miễn dịch và sức khỏe tim mạch.",
    features: [
      "Hỗ trợ sức khỏe xương và hấp thu canxi",
      "Tăng cường chức năng hệ miễn dịch",
      "Cải thiện sức khỏe tim mạch và quá trình đông máu",
      "60 viên nang mềm dễ nuốt",
      "Công thức không biến đổi gen, không chứa gluten",
    ],
    dosage:
      "Uống 1 viên mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Vitamin D3 (dạng Cholecalciferol) 5000 IU, Vitamin K2 (dạng MK-7) 100mcg, Dầu Ô liu Hữu cơ, Vỏ nang mềm (Gelatin, Glycerin, Nước tinh khiết), Dầu MCT.",
    stock: 45,
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    discount: 14,
  },
  {
    id: 2,
    name: "Men Vi Sinh Cao Cấp 50 Tỷ CFU",
    category: "probiotics",
    price: 39.99,
    regularPrice: 45.99,
    rating: 4.9,
    reviewCount: 203,
    image:
      "https://wowmart.vn/wp-content/uploads/2020/11/men-vi-sinh-now-probiotic-10-50-billion-50-capsules-k.jpg",
    description:
      "Men vi sinh liều cao với 50 tỷ CFU và 15 chủng đa dạng để hỗ trợ sức khỏe đường ruột, chức năng miễn dịch và hấp thu dưỡng chất. Viên nang phóng thích chậm để phân phối tối ưu.",
    features: [
      "50 tỷ CFU mỗi viên nang",
      "15 chủng men vi sinh được nghiên cứu lâm sàng",
      "Hỗ trợ sức khỏe tiêu hóa và miễn dịch",
      "Công nghệ phóng thích chậm",
      "30 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên mỗi ngày, tốt nhất là khi đói hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Hỗn hợp Men Vi Sinh Độc quyền (50 Tỷ CFU): Lactobacillus acidophilus, Bifidobacterium lactis, Lactobacillus plantarum, Lactobacillus paracasei, Lactobacillus casei, Lactobacillus rhamnosus, Bifidobacterium breve, Bifidobacterium longum, Lactobacillus bulgaricus, Streptococcus thermophilus, và 5 chủng có lợi khác. Vỏ nang thực vật, Microcrystalline cellulose, Inulin (FOS).",
    stock: 32,
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    discount: 13,
  },
  {
    id: 3,
    name: "Nghệ Curcumin với BioPerine",
    category: "herbs",
    price: 24.99,
    regularPrice: 29.99,
    rating: 4.7,
    reviewCount: 189,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/13-c8928612-2a33-48eb-8dc4-9aedf088200a.jpg?v=1657851619643",
    description:
      "Chiết xuất nghệ liều cao với 95% curcuminoid và BioPerine (chiết xuất hạt tiêu đen) giúp tăng cường hấp thu. Hỗ trợ sức khỏe khớp, đáp ứng viêm và bảo vệ chống oxy hóa.",
    features: [
      "1500mg Nghệ Curcumin với 95% Curcuminoid",
      "Tăng cường với BioPerine giúp hấp thu tốt hơn",
      "Hỗ trợ đáp ứng viêm khỏe mạnh",
      "Cải thiện sức khỏe khớp và khả năng vận động",
      "90 viên nang thực vật",
    ],
    dosage:
      "Uống 2 viên mỗi ngày cùng thức ăn và nước hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Chiết xuất Rễ Nghệ (Curcuma longa) (chuẩn hóa đến 95% Curcuminoid), Chiết xuất Hạt Tiêu Đen BioPerine® (Piper nigrum) (chuẩn hóa đến 95% Piperine), Cellulose thực vật (vỏ nang), Bột gạo, Magnesium Stearate thực vật.",
    stock: 60,
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    discount: 17,
  },
  {
    id: 4,
    name: "Dầu Cá Omega-3 Siêu Mạnh",
    category: "oils",
    price: 32.99,
    regularPrice: 39.99,
    rating: 4.8,
    reviewCount: 167,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/sports-research-omega-3-90-softgels-gymstore-jpeg.jpg?v=1708513072703",
    description:
      "Dầu cá siêu mạnh cung cấp 2400mg axit béo omega-3 EPA và DHA mỗi liều. Tinh chế phân tử để đảm bảo độ tinh khiết và độ tươi. Hỗ trợ sức khỏe tim, não và khớp.",
    features: [
      "2400mg EPA và DHA Omega-3 mỗi liều",
      "Tinh chế phân tử để đạt độ tinh khiết tối đa",
      "Bao phim ruột để tránh hậu vị tanh",
      "Hỗ trợ sức khỏe tim mạch và nhận thức",
      "120 viên nang mềm hương chanh",
    ],
    dosage:
      "Uống 2 viên nang mềm mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Dầu Cá Cô đặc (từ cá trích, cá mòi, cá thu), Gelatin, Glycerin, Nước tinh khiết, Hương Chanh tự nhiên, Mixed Tocopherols (chất bảo quản), Bao phim ruột.",
    stock: 40,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    discount: 18,
  },
  {
    id: 5,
    name: "Dầu MCT Hữu Cơ",
    category: "oils",
    price: 27.99,
    regularPrice: 32.99,
    rating: 4.6,
    reviewCount: 124,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/now-mct-oil-softgel-600x600.jpg?v=1665720645280",
    description:
      "Dầu MCT hữu cơ 100% tinh khiết chiết xuất từ dừa. Chứa MCT C8 và C10 giúp cung cấp năng lượng nhanh chóng, tăng cường độ minh mẫn và hỗ trợ chuyển hóa. Hoàn hảo cho chế độ ăn keto và paleo.",
    features: [
      "MCT C8 và C10 tinh khiết 100%",
      "Chứng nhận Hữu cơ USDA",
      "Hỗ trợ sản xuất ketone và năng lượng",
      "Không biến đổi gen và không sử dụng hexane trong quá trình chiết xuất",
      "Chai 16 oz không chứa BPA",
    ],
    dosage:
      "Bắt đầu với 1 thìa cà phê (5ml) mỗi ngày và tăng dần lên 1-3 thìa canh mỗi ngày theo khả năng dung nạp. Có thể thêm vào cà phê, sinh tố, hoặc nước sốt salad.",
    ingredients:
      "Dầu Triglyceride Chuỗi Trung bình 100% Hữu cơ chiết xuất từ Dầu Dừa.",
    stock: 25,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    discount: 15,
  },
  {
    id: 6,
    name: "Phức Hợp Magnesium Glycinate",
    category: "vitamins",
    price: 19.99,
    regularPrice: 24.99,
    rating: 4.7,
    reviewCount: 145,
    image: "https://m.media-amazon.com/images/I/612z7zG4axL._AC_SL1500_.jpg",
    description:
      "Magnesium glycinate chelate có khả năng hấp thu cao với thêm magnesium malate để tăng cường sinh khả dụng. Hỗ trợ chức năng cơ, chất lượng giấc ngủ và quản lý căng thẳng.",
    features: [
      "400mg magnesium nguyên tố mỗi liều",
      "Tăng cường sinh khả dụng với dạng glycinate",
      "Nhẹ nhàng với hệ tiêu hóa",
      "Hỗ trợ thư giãn cơ và giấc ngủ",
      "120 viên nang thực vật",
    ],
    dosage:
      "Uống 2 viên hai lần mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Magnesium (dạng Dimagnesium Malate và TRAACS® Magnesium Bisglycinate Chelate), Cellulose thực vật (vỏ nang), Microcrystalline Cellulose, Stearate thực vật.",
    stock: 55,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    discount: 20,
  },
  {
    id: 7,
    name: "Protein Thực Vật Phức Hợp",
    category: "proteins",
    price: 39.99,
    regularPrice: 49.99,
    rating: 4.5,
    reviewCount: 178,
    image: "https://m.media-amazon.com/images/I/71o4FRHFH9L._AC_SL1500_.jpg",
    description:
      "Bột protein thực vật hoàn chỉnh với đầy đủ các axit amin thiết yếu từ protein đậu Hà Lan hữu cơ, gạo lứt và hạt gai dầu. Bổ sung enzyme tiêu hóa để hấp thu tối ưu. Hương vị socola.",
    features: [
      "25g protein hoàn chỉnh mỗi khẩu phần",
      "Kết hợp protein từ đậu Hà Lan, gạo lứt và hạt gai dầu",
      "Bổ sung enzyme tiêu hóa giúp dễ tiêu hóa",
      "Không chứa chất tạo ngọt nhân tạo hoặc hương vị nhân tạo",
      "30 khẩu phần mỗi hộp",
    ],
    dosage:
      "Trộn 1 muỗng (32g) với 240-300ml nước, sữa hạnh nhân, hoặc đồ uống yêu thích. Lắc đều và thưởng thức.",
    ingredients:
      "Hỗn hợp Protein Hữu cơ (Protein Đậu Hà Lan, Protein Gạo Lứt, Protein Hạt Gai Dầu), Bột Cacao Hữu cơ, Đường Dừa Hữu cơ, Hương liệu Tự nhiên, Gum Xanthan, Chiết xuất Lá Stevia, Muối Biển, Hỗn hợp Enzyme Tiêu hóa (Protease, Amylase, Lipase, Lactase, Cellulase).",
    stock: 20,
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    discount: 20,
  },
  {
    id: 8,
    name: "Chiết Xuất Ashwagandha KSM-66",
    category: "herbs",
    price: 21.99,
    regularPrice: 26.99,
    rating: 4.8,
    reviewCount: 212,
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/011/344/products/nutricost-ksm-66-capsules.jpg?v=1732300661700",
    description:
      "Chiết xuất rễ Ashwagandha KSM-66 liều cao được chuẩn hóa với 5% withanolide. Thảo dược thích nghi đã được nghiên cứu lâm sàng giúp giảm căng thẳng, hỗ trợ chức năng tuyến thượng thận và cải thiện độ minh mẫn tinh thần.",
    features: [
      "600mg KSM-66 Ashwagandha mỗi liều",
      "Được nghiên cứu lâm sàng về giảm căng thẳng",
      "Hỗ trợ sức khỏe tuyến thượng thận và cân bằng hormone",
      "Tăng cường sự minh mẫn tinh thần và chức năng nhận thức",
      "90 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên hai lần mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Chiết xuất KSM-66® Ashwagandha (rễ) (Withania somnifera) (chuẩn hóa đến 5% withanolide), Bột Gạo Hữu cơ, Vỏ nang thực vật (Hydroxypropyl Methylcellulose), Bột vỏ gạo Hữu cơ.",
    stock: 38,
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    discount: 19,
  },
  {
    id: 9,
    name: "Vitamin C Liposomal",
    category: "vitamins",
    price: 29.99,
    regularPrice: 36.99,
    rating: 4.9,
    reviewCount: 147,
    image:
      "https://codeage.vn/wp-content/uploads/2023/08/codeage-liposomal-vitamin-c.webp",
    description:
      "Hệ thống phân phối liposome tiên tiến giúp hấp thu và sinh khả dụng vitamin C tối đa. Hỗ trợ chức năng miễn dịch, sản xuất collagen và bảo vệ chống oxy hóa.",
    features: [
      "1200mg vitamin C mỗi liều",
      "Công nghệ liposome giúp tăng cường hấp thu",
      "Liposome từ lecithin hướng dương không biến đổi gen",
      "Hương vị cam dễ chịu",
      "30 liều mỗi chai",
    ],
    dosage:
      "Uống 1 thìa canh (15ml) mỗi ngày, trực tiếp hoặc trộn với nước hoặc nước ép.",
    ingredients:
      "Vitamin C (dạng Sodium Ascorbate), Phức hợp Phospholipid (từ Lecithin Hướng dương Không biến đổi gen), Nước tinh khiết, Hương liệu Tự nhiên, Potassium Sorbate (chất bảo quản), Axit Citric.",
    stock: 15,
    isNew: true,
    isBestseller: false,
    isFeatured: true,
    discount: 19,
  },
  {
    id: 10,
    name: "Berberine HCl",
    category: "herbs",
    price: 34.99,
    regularPrice: 39.99,
    rating: 4.7,
    reviewCount: 132,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/now-berberine-gymstore.jpg?v=1719345985277",
    description:
      "Chiết xuất berberine HCl mạnh mẽ để hỗ trợ chuyển hóa glucose lành mạnh, sức khỏe tim mạch và chức năng tiêu hóa. Chuẩn hóa để đạt hiệu quả tối đa.",
    features: [
      "500mg berberine HCl mỗi viên nang",
      "Hỗ trợ chuyển hóa glucose",
      "Tăng cường sức khỏe tim mạch",
      "Hỗ trợ chức năng tiêu hóa",
      "60 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên ba lần mỗi ngày cùng bữa ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Berberine HCl (từ chiết xuất rễ Berberis aristata), Cellulose thực vật (vỏ nang), Bột gạo, Magnesium Stearate thực vật.",
    stock: 22,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    discount: 13,
  },
  {
    id: 11,
    name: "Phức Hợp Vitamin B Dạng Methyl",
    category: "vitamins",
    price: 25.99,
    regularPrice: 29.99,
    rating: 4.8,
    reviewCount: 178,
    image:
      "https://m.media-amazon.com/images/I/716tyFyJNZL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Phức hợp vitamin B đầy đủ với các dạng hoạt tính, dạng methyl để hấp thu và sử dụng tối ưu. Bao gồm methylfolate (5-MTHF) và methylcobalamin (B12) dành cho những người có biến thể gen MTHFR.",
    features: [
      "Chứa tất cả 8 vitamin B ở dạng hoạt tính",
      "Bao gồm L-5-MTHF (folate) và methylcobalamin (B12)",
      "Hỗ trợ sản xuất năng lượng và chức năng não",
      "Lý tưởng cho những người có biến thể MTHFR",
      "60 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Vitamin B1 (dạng Thiamine HCl), Vitamin B2 (dạng Riboflavin-5-Phosphate), Vitamin B3 (dạng Niacinamide), Vitamin B5 (dạng d-Calcium Pantothenate), Vitamin B6 (dạng Pyridoxal-5-Phosphate), Folate (dạng L-5-Methyltetrahydrofolate Calcium), Vitamin B12 (dạng Methylcobalamin), Biotin, Cellulose thực vật (vỏ nang), Microcrystalline Cellulose, Stearate thực vật.",
    stock: 42,
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    discount: 13,
  },
  {
    id: 12,
    name: "Phức Hợp Nấm Hữu Cơ",
    category: "herbs",
    price: 37.99,
    regularPrice: 44.99,
    rating: 4.6,
    reviewCount: 96,
    image:
      "https://m.media-amazon.com/images/I/618seLSTZ+L._AC_SY300_SX300_.jpg",
    description:
      "Kết hợp mạnh mẽ từ 7 loại nấm dược liệu hữu cơ bao gồm Linh Chi, Hồng Sâm Núi, Đông Trùng Hạ Thảo và Chaga. Hỗ trợ chức năng miễn dịch, sức khỏe nhận thức và khả năng vận động.",
    features: [
      "7 loại nấm dược liệu mạnh mẽ trong một công thức",
      "Chứng nhận Hữu cơ USDA",
      "Chiết xuất toàn phổ để đạt lợi ích tối đa",
      "Hỗ trợ sức khỏe miễn dịch và nhận thức",
      "90 viên nang thực vật",
    ],
    dosage:
      "Uống 3 viên mỗi ngày có hoặc không có thức ăn, hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Hỗn hợp Nấm Hữu cơ: Linh Chi (Ganoderma lucidum), Hồng Sâm Núi (Hericium erinaceus), Đông Trùng Hạ Thảo (Cordyceps militaris), Chaga (Inonotus obliquus), Nấm Hương (Lentinula edodes), Maitake (Grifola frondosa), Vân Chi (Trametes versicolor). Thành phần khác: Vỏ nang thực vật (Hydroxypropyl Methylcellulose), Gạo Lứt Hữu cơ.",
    stock: 18,
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    discount: 16,
  },
  {
    id: 13,
    name: "Kẽm Dạng Lỏng Phức Hợp",
    category: "vitamins",
    price: 17.99,
    regularPrice: 21.99,
    rating: 4.5,
    reviewCount: 85,
    image:
      "https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_03594_d9d39b4d3f.jpg",
    description:
      "Phức hợp kẽm dạng lỏng hấp thu cao với kẽm glycinate, citrate và acetate. Hỗ trợ chức năng miễn dịch, sức khỏe da và sản xuất testosterone ở nam giới.",
    features: [
      "15mg kẽm ionic mỗi liều",
      "Hương vị cam tự nhiên thơm ngon",
      "Nhiều dạng kẽm để hấp thu tối ưu",
      "Dạng lỏng tiện lợi",
      "48 liều mỗi chai",
    ],
    dosage:
      "Uống 1 thìa cà phê (5ml) mỗi ngày cùng bữa ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Nước tinh khiết, Kẽm (dạng Zinc Glycinate, Zinc Citrate, và Zinc Acetate), Hương Cam tự nhiên, Chiết xuất Lá Stevia, Potassium Sorbate (chất bảo quản), Axit Citric.",
    stock: 30,
    isNew: false,
    isBestseller: false,
    isFeatured: false,
    discount: 18,
  },
  {
    id: 14,
    name: "NAC (N-Acetyl Cysteine)",
    category: "vitamins",
    price: 22.99,
    regularPrice: 27.99,
    rating: 4.7,
    reviewCount: 114,
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/517/390/products/now-nac-600mg-250-vien.webp?v=1743474110173",
    description:
      "Chất chống oxy hóa mạnh mẽ, tiền chất của glutathione - chất chống oxy hóa chủ đạo của cơ thể. Hỗ trợ sức khỏe hô hấp, giải độc và chức năng miễn dịch.",
    features: [
      "600mg NAC mỗi viên nang",
      "Thúc đẩy sản xuất glutathione",
      "Hỗ trợ sức khỏe hô hấp và gan",
      "Hỗ trợ quá trình giải độc tự nhiên",
      "120 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên hai lần mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "N-Acetyl-L-Cysteine (NAC), Cellulose thực vật (vỏ nang), Bột gạo, Magnesium Stearate thực vật.",
    stock: 25,
    isNew: false,
    isBestseller: false,
    isFeatured: false,
    discount: 18,
  },
  {
    id: 15,
    name: "Tinh Dầu Bạc Hà",
    category: "oils",
    price: 14.99,
    regularPrice: 17.99,
    rating: 4.9,
    reviewCount: 167,
    image:
      "https://product.hstatic.net/1000199023/product/tinh-dau-ba-ha-hoa-thom-co-la_dff82ec839e1458ba14a2dbc8c2b706e_large.jpg",
    description:
      "Tinh dầu bạc hà 100% tinh khiết, cấp độ trị liệu. Nổi tiếng với đặc tính làm mát và sảng khoái. Hỗ trợ tiêu hóa khỏe mạnh, độ minh mẫn tinh thần và chức năng hô hấp.",
    features: [
      "Dầu bạc hà 100% tinh khiết, chưng cất hơi nước",
      "Không chứa chất độn, phụ gia hoặc thành phần tổng hợp",
      "Cấp độ trị liệu dùng cho liệu pháp hương thơm",
      "Cải thiện tiêu hóa và sự tỉnh táo tinh thần",
      "Chai thủy tinh màu hổ phách 15ml với ống nhỏ giọt",
    ],
    dosage:
      "Cho liệu pháp hương thơm, thêm 3-5 giọt vào máy khuếch tán. Khi dùng ngoài da, pha loãng với dầu nền. Khi dùng cho ăn uống, thêm 1-2 giọt vào nước hoặc trà.",
    ingredients: "Tinh dầu Bạc hà 100% tinh khiết (Mentha piperita).",
    stock: 60,
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    discount: 17,
  },
  {
    id: 16,
    name: "Bột Collagen Peptides",
    category: "proteins",
    price: 34.99,
    regularPrice: 39.99,
    rating: 4.8,
    reviewCount: 203,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/orgain-collagen-peptides-unflavored-454g-collagen-gymstore-jpeg.jpg?v=1691143128623",
    description:
      "Collagen peptides thủy phân type I và III từ nguồn bò ăn cỏ, nuôi thả tự nhiên. Hỗ trợ độ đàn hồi của da, sức khỏe khớp và chức năng đường ruột. Không mùi vị và dễ hòa tan.",
    features: [
      "10g collagen mỗi khẩu phần",
      "Collagen loại I & III từ nguồn bò ăn cỏ",
      "Không mùi vị và dễ hòa tan trong đồ uống",
      "Hỗ trợ da, tóc, móng, khớp và đường ruột",
      "30 khẩu phần mỗi hộp",
    ],
    dosage:
      "Trộn 1 muỗng (11g) với 240ml nước, cà phê, sinh tố hoặc đồ uống khác mỗi ngày.",
    ingredients:
      "Collagen Peptides Thủy phân từ Bò (từ nguồn bò ăn cỏ, nuôi thả tự nhiên).",
    stock: 32,
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    discount: 13,
  },
  {
    id: 17,
    name: "Quercetin với Bromelain",
    category: "vitamins",
    price: 24.99,
    regularPrice: 29.99,
    rating: 4.7,
    reviewCount: 92,
    image:
      "https://m.media-amazon.com/images/I/71Dtgtwc6dL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Kết hợp hiệp đồng của flavonoid quercetin và enzyme bromelain để hỗ trợ sức khỏe hô hấp, chức năng miễn dịch theo mùa và đáp ứng histamine tự nhiên.",
    features: [
      "500mg quercetin và 100mg bromelain mỗi liều",
      "Hỗ trợ đáp ứng histamine khỏe mạnh",
      "Tăng cường sức khỏe hô hấp và tim mạch",
      "Công thức tăng cường hấp thu",
      "60 viên nang thực vật",
    ],
    dosage:
      "Uống 1 viên hai lần mỗi ngày giữa các bữa ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Quercetin Dihydrate, Bromelain (từ thân dứa), Cellulose thực vật (vỏ nang), Bột gạo, Magnesium Stearate thực vật.",
    stock: 23,
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    discount: 17,
  },
  {
    id: 18,
    name: "Than Hoạt Tính",
    category: "herbs",
    price: 16.99,
    regularPrice: 19.99,
    rating: 4.5,
    reviewCount: 76,
    image: "https://images-na.ssl-images-amazon.com/images/I/71Wa7kmkrYL.jpg",
    description:
      "Bột than hoạt tính siêu mịn từ dừa với diện tích bề mặt tối đa giúp khả năng hấp phụ tối ưu. Hỗ trợ giải độc, sức khỏe tiêu hóa và làm sạch tự nhiên.",
    features: [
      "600mg than hoạt tính mỗi viên nang",
      "Chiết xuất từ nguồn dừa bền vững",
      "Hỗ trợ giải độc tự nhiên",
      "Cải thiện thoải mái tiêu hóa",
      "90 viên nang thực vật",
    ],
    dosage:
      "Uống 2 viên với một ly nước đầy, cách 2-3 giờ so với thức ăn, thuốc hoặc thực phẩm bổ sung.",
    ingredients: "Than Hoạt Tính từ Dừa, Cellulose thực vật (vỏ nang).",
    stock: 48,
    isNew: false,
    isBestseller: false,
    isFeatured: false,
    discount: 15,
  },
  {
    id: 19,
    name: "CoQ10 với BioPerine",
    category: "vitamins",
    price: 29.99,
    regularPrice: 34.99,
    rating: 4.8,
    reviewCount: 118,
    image:
      "https://bizweb.dktcdn.net/100/011/344/products/doctor-s-best-high-absorption-coq10-100-mg-60-veggie-capules.jpg?v=1742553163640",
    description:
      "Coenzyme Q10 (ubiquinol) sinh khả dụng cao với BioPerine giúp tăng cường hấp thu. Hỗ trợ sản xuất năng lượng tế bào, sức khỏe tim mạch và bảo vệ chống oxy hóa.",
    features: [
      "200mg CoQ10 (ubiquinol) mỗi viên nang mềm",
      "Tăng cường với chiết xuất hạt tiêu đen BioPerine",
      "Hỗ trợ sức khỏe tim và sản xuất năng lượng",
      "Hấp thu và sinh khả dụng ưu việt",
      "60 viên nang mềm",
    ],
    dosage:
      "Uống 1 viên nang mềm mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Coenzyme Q10 (dạng Ubiquinol), BioPerine® (Chiết xuất Hạt Tiêu Đen), Dầu Ô liu Nguyên Chất, Viên nang mềm (Gelatin, Glycerin, Nước tinh khiết), Sáp ong, Lecithin Hướng dương.",
    stock: 20,
    isNew: false,
    isBestseller: false,
    isFeatured: true,
    discount: 14,
  },
  {
    id: 20,
    name: "Phức Hợp Tăng Cường Miễn Dịch",
    category: "vitamins",
    price: 38.99,
    regularPrice: 45.99,
    rating: 4.9,
    reviewCount: 187,
    image:
      "https://www.pharmart.vn/images/product/origin/centrum-immune-defense-recovery-tang-cuong-mien-dich-645383e779649.jpg",
    description:
      "Công thức hỗ trợ miễn dịch toàn diện với vitamin C, D3, kẽm, cây elderberry và nấm dược liệu. Hỗ trợ chức năng miễn dịch quanh năm và sức khỏe hô hấp.",
    features: [
      "Công thức hỗ trợ miễn dịch toàn diện",
      "Chứa vitamin, khoáng chất, thảo dược và nấm",
      "Hỗ trợ đáp ứng miễn dịch tự nhiên",
      "Duy trì miễn dịch quanh năm",
      "60 viên nang thực vật",
    ],
    dosage:
      "Uống 2 viên mỗi ngày cùng thức ăn hoặc theo chỉ dẫn của chuyên gia y tế.",
    ingredients:
      "Vitamin C (dạng Ascorbic Acid), Vitamin D3 (dạng Cholecalciferol), Kẽm (dạng Zinc Glycinate Chelate), Chiết xuất Elderberry, Hỗn hợp Nấm Hữu cơ (Linh Chi, Vân Chi, Maitake), Chiết xuất Tỏi, Quercetin, N-Acetyl-L-Cysteine, Cellulose thực vật (vỏ nang), Bột gạo, Magnesium Stearate thực vật.",
    stock: 35,
    isNew: true,
    isBestseller: true,
    isFeatured: true,
    discount: 15,
  },
];

/**
 * Updates product images with custom colors or local images
 * @param {string} backgroundColor - The background color in hex format
 * @param {string} textColor - The text color in hex format
 * @param {boolean} useLocalImages - Whether to use local placeholder images instead of remote service
 */
function updateProductImages(
  backgroundColor = "00b6aa",
  textColor = "white",
  useLocalImages = false
) {
  // Remove the # if it's included
  backgroundColor = backgroundColor.replace("#", "");
  textColor = textColor.replace("#", "");

  // Update each product image
  products.forEach((product) => {
    // Skip products with real images (URLs that don't contain 'placeholder' or 'placehold.co')
    if (
      !product.image.includes("placeholder") &&
      !product.image.includes("placehold.co")
    ) {
      return;
    }

    // Extract the text from the current image URL
    let currentText = "";
    if (product.image.includes("?text=")) {
      currentText = product.image.split("?text=")[1];
    } else {
      // If no text parameter, use the product name
      currentText = product.name.replace(/ /g, "+");
    }

    if (useLocalImages) {
      // Create local placeholder image path - this will use local images if they exist
      product.image = `images/products/product-${product.id}.jpg`;
    } else {
      // Create the new image URL using remote placeholder service
      product.image = `https://placehold.co/300x300/${backgroundColor}/${textColor}?text=${currentText}`;
    }
  });

  // Save the updated products to localStorage
  saveProductsToLocalStorage();

  return products;
}

/**
 * Set a specific product image
 * @param {number} productId - The ID of the product to update
 * @param {string} imageUrl - The new image URL (can be local path or remote URL)
 */
function setProductImage(productId, imageUrl) {
  // Find the product by ID
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Update the image
    product.image = imageUrl;

    // Save changes to localStorage
    saveProductsToLocalStorage();

    return true;
  }

  return false;
}

/**
 * Saves product data to localStorage
 */
function saveProductsToLocalStorage() {
  localStorage.setItem("funcMedProducts", JSON.stringify(products));
}

/**
 * Gets product data from localStorage or initializes it if not present
 */
function getProductsFromLocalStorage() {
  const storedProducts = localStorage.getItem("funcMedProducts");
  if (!storedProducts) {
    saveProductsToLocalStorage();
    return products;
  }
  return JSON.parse(storedProducts);
}

/**
 * Updates specific products with real product images
 */
function updateWithRealProductImages() {
  // Find products by ID and update their images
  const imageUpdates = {
    2: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop&q=80", // Probiotic
    4: "https://images.unsplash.com/photo-1584472376859-7f6d81575ed2?w=300&h=300&fit=crop&q=80", // Omega-3
    9: "https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=300&h=300&fit=crop&q=80", // Vitamin C
    15: "https://images.unsplash.com/photo-1545341518-8e0756995935?w=300&h=300&fit=crop&q=80", // Peppermint Oil
  };

  // Update each product
  products.forEach((product) => {
    if (imageUpdates[product.id]) {
      product.image = imageUpdates[product.id];
    }
  });

  // Save the updated products
  saveProductsToLocalStorage();
  return products;
}

/**
 * Initialize products when the page loads
 */
document.addEventListener("DOMContentLoaded", function () {
  // Only initialize if products aren't already in localStorage
  if (!localStorage.getItem("funcMedProducts")) {
    saveProductsToLocalStorage();
  }

  // Update with real product images (optional)
  // updateWithRealProductImages();
});
