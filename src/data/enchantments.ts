interface Enchantment {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

export const enchantments = [
  {
    name: "Sét Đánh",
    description: "Cơ hội giáng sét vào đối thủ.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ", "Kiếm"],
    rarity: "SIMPLE"
  },
  {
    name: "Thủy Sinh",
    description: "Thở dưới nước.",
    appliesTo: ["Mũ"],
    rarity: "SIMPLE"
  },
  {
    name: "Nung Chảy",
    description: "Cơ hội nung chảy các khối đã đào.",
    appliesTo: ["Cuốc chim", "Xẻng"],
    rarity: "SIMPLE"
  },
  {
    name: "Kinh Nghiệm",
    description: "Có cơ hội nhận thêm kinh nghiệm từ quặng.",
    appliesTo: ["Cuốc chim", "Xẻng", "Rìu"],
    rarity: "SIMPLE"
  },
  {
    name: "Thúc Đẩy",
    description: "Cơ hội nhận được hiệu ứng Haste (Nhanh Nhẹn) sau khi phá vỡ các khối.",
    appliesTo: ["Cuốc chim", "Xẻng", "Rìu"],
    rarity: "SIMPLE"
  },
  {
    name: "Bình Dưỡng Khí",
    description: "Cơ hội lấy lại không khí khi đào dưới nước.",
    appliesTo: ["Cuốc chim"],
    rarity: "SIMPLE"
  },
  {
    name: "Phát Sáng",
    description: "Cung cấp tầm nhìn ban đêm vĩnh viễn.",
    appliesTo: ["Mũ"],
    rarity: "SIMPLE"
  },
  {
    name: "Chặt Đầu",
    description: "Cơ hội làm rơi đầu đối thủ khi họ chết.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "SIMPLE"
  },
  {
    name: "Trường Lực",
    description: "Cơ hội đẩy lùi đối thủ của bạn.",
    appliesTo: ["Kiếm"],
    rarity: "SIMPLE"
  },
  {
    name: "Sử Thi",
    description: "Tạo ra hiệu ứng hạt và âm thanh hoành tráng.",
    appliesTo: ["Kiếm"],
    rarity: "SIMPLE"
  },
  {
    name: "Cú Đấm Tử Thần",
    description: "Tăng sát thương gây ra cho Zombie.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "SIMPLE"
  },
  {
    name: "Kẻ Nghiền Xương",
    description: "Tăng sát thương gây ra cho Skeleton.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "SIMPLE"
  },
  {
    name: "Tự Động Trồng Lại",
    description: "Tự động trồng lại cây trồng khi bạn thu hoạch chúng.",
    appliesTo: ["Cuốc"],
    rarity: "UNIQUE"
  },
  {
    name: "Nạn Đói",
    description: "Có cơ hội gây hiệu ứng đói lên đối thủ của bạn.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Cuồng Nộ",
    description: "Có cơ hội nhận được sức mạnh và mệt mỏi khi đào.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Phản Chiếu",
    description: "Hấp thụ sát thương của kẻ địch và phản lại.",
    appliesTo: ["Bộ Giáp"],
    rarity: "UNIQUE"
  },
  {
    name: "Hộ Vệ",
    description: "Có cơ hội hấp thụ sát thương của kẻ địch",
    appliesTo: ["Bộ Giáp"],
    rarity: "UNIQUE"
  },
  {
    name: "Bùng Nổ",
    description: "Có cơ hội làm mũi tên nổ tung.",
    appliesTo: ["Cung"],
    rarity: "UNIQUE"
  },
  {
    name: "Điên Cuồng",
    description: "Có cơ hội làm mũi tên nổ tung.",
    appliesTo: ["Nỏ"],
    rarity: "UNIQUE"
  },
  {
    name: "Nhẹ Tựa Lông Hồng",
    description: "Cơ hội nhận được một luồng Nhanh Nhẹn (Haste).",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Nóng Chảy",
    description: "Cơ hội đốt cháy kẻ tấn công bạn.",
    appliesTo: ["Bộ Giáp"],
    rarity: "UNIQUE"
  },
  {
    name: "Tham Ăn",
    description: "Cơ hội phục hồi cơn đói khi chiến đấu.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Thần Giao Cách Cảm",
    description: "Tự động đặt các khối bị phá vỡ bởi công cụ vào kho đồ của bạn.",
    appliesTo: ["Công cụ"],
    rarity: "UNIQUE"
  },
  {
    name: "Cái Chết Bùng Nổ",
    description: "Triệu hồi creeper làm vệ sĩ khi gần chết.",
    appliesTo: ["Quần"],
    rarity: "UNIQUE"
  },
  {
    name: "Sát Thủ",
    description: "Tăng sát thương gây ra cho Mob Bị Động.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Thợ Săn",
    description: "Tăng sát thương gây ra cho Mob Bị Động.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ"],
    rarity: "UNIQUE"
  },
  {
    name: "Vô Hồn",
    description: "Tăng sát thương gây ra cho Mob Thù Địch.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ"],
    rarity: "UNIQUE"
  },
  {
    name: "Virus",
    description: "Có cơ hội gây hiệu ứng độc.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ"],
    rarity: "UNIQUE"
  },
  {
    name: "Diệt Vong",
    description: "Có cơ hội gây hiệu ứng khô héo.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ"],
    rarity: "UNIQUE"
  },
  {
    name: "Nuốt Chửng",
    description: "Cơ hội phục hồi thức ăn khi giết mob.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "UNIQUE"
  },
  {
    name: "Tác Động",
    description: "Cơ hội nhân đôi sát thương gây ra.",
    appliesTo: ["Đinh ba"],
    rarity: "ELITE"
  },
  {
    name: "Móc Câu Tẩm Độc",
    description: "Đầu độc móc câu.",
    appliesTo: ["Cần câu"],
    rarity: "ELITE"
  },
  {
    name: "Móc Câu Lửa",
    description: "Móc câu đang cháy.",
    appliesTo: ["Cần câu"],
    rarity: "ELITE"
  },
  {
    name: "Đào Theo Mạch",
    description: "Đào toàn bộ mạch quặng",
    appliesTo: ["Cuốc chim"],
    rarity: "ELITE"
  },
  {
    name: "Sát Thủ Ender",
    description: "Tăng sát thương gây ra cho Enderman và Ender Dragon.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Thieu Đốt",
    description: "Tăng sát thương gây ra cho Nhện.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Móc Câu",
    description: "Nhận thêm kinh nghiệm từ câu cá.",
    appliesTo: ["Cần câu"],
    rarity: "ELITE"
  },
  {
    name: "Kéo Giật",
    description: "Kéo thực thể bị móc câu về phía bạn.",
    appliesTo: ["Cần câu"],
    rarity: "ELITE"
  },
  {
    name: "Tử Thần",
    description: "Có cơ hội gây hiệu ứng Khô Héo (Wither) và Mù Lòa (Blindness) cho đối thủ khi gây sát thương.",
    appliesTo: ["Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Sát Thủ Nether",
    description: "Tăng sát thương gây ra cho mob ở Nether.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Mù Lòa",
    description: "Có cơ hội gây ra hiệu ứng mù lòa khi tấn công.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Quyến Rũ",
    description: "Đòn tấn công của bạn kéo mob về phía bạn.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Đóng Băng",
    description: "Có thể gây hiệu ứng làm chậm lên kẻ tấn công khi phòng thủ.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Tê Liệt",
    description: "Gây hiệu ứng sét & có cơ hội làm chậm và vung chậm.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Độc Dược",
    description: "Có cơ hội gây hiệu ứng độc.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Nhiễm Độc",
    description: "Cơ hội gây độc cho kẻ tấn công bạn.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Rèn Lại",
    description: "Bảo vệ độ bền của vũ khí và công cụ, vật phẩm sẽ mất nhiều thời gian hơn để hỏng.",
    appliesTo: ["Rìu", "Kiếm", "Cuốc chim", "Xẻng"],
    rarity: "ELITE"
  },
  {
    name: "Cạm Bẫy",
    description: "Có cơ hội làm chậm và mệt mỏi kẻ địch bằng đạn.",
    appliesTo: ["Cung", "Nỏ"],
    rarity: "ELITE"
  },
  {
    name: "Lò Xo",
    description: "Cung cấp hiệu ứng nhảy cao.",
    appliesTo: ["Ủng"],
    rarity: "ELITE"
  },
  {
    name: "Mưu Kế Xác Sống",
    description: "Khi bị đánh, bạn có cơ hội triệu hồi đám zombie để làm sao lãng và mất phương hướng đối thủ của bạn.",
    appliesTo: ["Ủng"],
    rarity: "ELITE"
  },
  {
    name: "Tà Thuật",
    description: "Có cơ hội gây hiệu ứng yếu đuối.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Khô Héo",
    description: "Có cơ hội gây hiệu ứng khô héo.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Bom Khói",
    description: "Khi bạn gần chết, bạn sẽ tạo ra một quả bom khói để làm sao lãng kẻ địch.",
    appliesTo: ["Mũ"],
    rarity: "ELITE"
  },
  {
    name: "Hỏa Ngục",
    description: "Hiệu ứng lửa bùng nổ.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Dập Lửa",
    description: "Có cơ hội tự dập lửa cho bản thân khi đang cháy.",
    appliesTo: ["Quần"],
    rarity: "ELITE"
  },
  {
    name: "Sóng Xung Kích",
    description: "Cơ hội đẩy lùi kẻ tấn công khi máu của bạn thấp.",
    appliesTo: ["Áo"],
    rarity: "ELITE"
  },
  {
    name: "Ma Cà Rồng",
    description: "Có cơ hội hồi máu cho bạn lên đến 3 máu vài giây sau khi bạn tấn công.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Đại Kiếm",
    description: "Nhân sát thương lên người chơi đang cầm một cây Cung tại thời điểm họ bị đánh trúng.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Bậc Thầy Cung Thủ",
    description: "Nhân sát thương lên người chơi đang cầm một cây Kiếm tại thời điểm họ bị bắn trúng.",
    appliesTo: ["Đinh ba", "Cung", "Nỏ"],
    rarity: "ELITE"
  },
  {
    name: "Thoát Thân Bằng Tên Lửa",
    description: "Có cơ hội phóng lên không trung khi máu thấp.",
    appliesTo: ["Ủng"],
    rarity: "ELITE"
  },
  {
    name: "Kẻ Lừa Gạt",
    description: "Khi bị đánh, bạn có cơ hội dịch chuyển ra ngay sau lưng đối thủ của bạn.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Lời Nguyền",
    description: "Có cơ hội gây cho kẻ địch hiệu ứng Mệt Mỏi khi đào.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ELITE"
  },
  {
    name: "Động Lượng",
    description: "Có cơ hội nhận được tăng tốc với pháo hoa.",
    appliesTo: ["Elytra"],
    rarity: "ELITE"
  },
  {
    name: "Xạ Thủ",
    description: "Tăng sát thương gây ra bằng Nỏ (Crossbow).",
    appliesTo: ["Nỏ"],
    rarity: "ELITE"
  },
  {
    name: "Poseidon",
    description: "Tăng sát thương gây ra bằng Đinh Ba (Trident).",
    appliesTo: ["Đinh ba"],
    rarity: "ELITE"
  },
  {
    name: "Bổ Sung",
    description: "Cơ hội phục hồi thức ăn khi khai thác.",
    appliesTo: ["Cuốc chim"],
    rarity: "ELITE"
  },
  {
    name: "Tên Lửa",
    description: "Mũi tên biến thành quả cầu lửa.",
    appliesTo: ["Nỏ"],
    rarity: "ELITE"
  },
  {
    name: "Chí Mạng",
    description: "Tăng sát thương gây ra với đòn đánh chí mạng.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Tia Lửa",
    description: "Đốt cháy đối thủ.",
    appliesTo: ["Đinh ba"],
    rarity: "ELITE"
  },
  {
    name: "Lực Cùn",
    description: "Có cơ hội tấn công với lực cực mạnh.",
    appliesTo: ["Rìu"],
    rarity: "ELITE"
  },
  {
    name: "Đình Chỉ",
    description: "Có cơ hội không gây đẩy lùi cho mob.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Kẻ Du Hành Đêm",
    description: "Đóng băng mob vào ban đêm.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Nam Châm",
    description: "Đòn tấn công của bạn kéo người chơi về phía bạn.",
    appliesTo: ["Kiếm"],
    rarity: "ELITE"
  },
  {
    name: "Thu Hoạch",
    description: "Cơ hội thu hoạch trong khu vực 3x3.",
    appliesTo: ["Cuốc"],
    rarity: "ULTIMATE"
  },
  {
    name: "Tự Động Kéo",
    description: "Tự động thu cần câu khi cá cắn câu.",
    appliesTo: ["Cần câu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Người Trồng Trọt",
    description: "Trồng hạt giống trong khu vực 3x3 bằng cách nhấn shift+chuột phải.",
    appliesTo: ["Cuốc"],
    rarity: "ULTIMATE"
  },
  {
    name: "Người Trồng Khoai Tây",
    description: "Trồng khoai tây trong khu vực 3x3 bằng cách nhấn shift+chuột phải.",
    appliesTo: ["Cuốc"],
    rarity: "ULTIMATE"
  },
  {
    name: "Người Trồng Cà Rốt",
    description: "Trồng cà rốt trong khu vực 3x3 bằng cách nhấn shift+chuột phải.",
    appliesTo: ["Cuốc"],
    rarity: "ULTIMATE"
  },
  {
    name: "Chân Sứa",
    description: "Có cơ hội vô hiệu hóa sát thương rơi ngã.",
    appliesTo: ["Ủng"],
    rarity: "ULTIMATE"
  },
  {
    name: "Móc Câu Sắc Bén",
    description: "Gây sát thương bằng móc câu.",
    appliesTo: ["Cần câu"],
    rarity: "ULTIMATE"
  },
  {
    name: "May Mắn",
    description: "Cơ hội tăng may mắn khi câu cá.",
    appliesTo: ["Cần câu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Băng Vĩnh Cửu",
    description: "Có cơ hội làm chậm và khiến đối thủ chảy máu.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Đốn Gỗ",
    description: "Có cơ hội chặt đổ cả cây chỉ bằng một nhát",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Khoảng Cách",
    description: "Có cơ hội tạo khoảng cách với kẻ địch và nhận hiệu ứng hồi máu.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Chém Lan",
    description: "Gây sát thương cho người chơi trong một bán kính tăng dần theo cấp độ của phù phép",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Phạm Vi",
    description: "Gây sát thương cho mob trong một bán kính tăng dần theo cấp độ của phù phép.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Thiên Thần",
    description: "Hồi máu khi bị sát thương.",
    appliesTo: ["Áo"],
    rarity: "ULTIMATE"
  },
  {
    name: "Làm Lệch Mũi Tên",
    description: "Cơ hội ngăn chặn mũi tên của kẻ địch gây sát thương.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Phá Vỡ Mũi Tên",
    description: "Có cơ hội làm mũi tên nảy ra khỏi bạn khi đang cầm vật phẩm có phù phép này.",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Suy Giảm",
    description: "Có cơ hội gây cho kẻ địch hiệu ứng Mệt Mỏi khi đào.",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Gián Đoạn",
    description: "Có cơ hội gây cho kẻ địch hiệu ứng Mệt Mỏi khi đào.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Cao Quý",
    description: "Cơ hội loại bỏ các hiệu ứng thuốc xấu.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Hình Nộm",
    description: "Cơ hội bị đẩy lùi khi bị đánh trúng.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Chặn Đòn",
    description: "Cơ hội vô hiệu hóa một đòn tấn công và gây lại tới 4 sát thương.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Đào Hào",
    description: "Có cơ hội phá vỡ trong khu vực 3x3.",
    appliesTo: ["Cuốc chim", "Xẻng"],
    rarity: "ULTIMATE"
  },
  {
    name: "Né Tránh",
    description: "Có cơ hội né tránh các đòn tấn công vật lý của kẻ địch, cơ hội tăng lên khi đang cúi người.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Vệ Thần",
    description: "Cơ hội triệu hồi Iron Golem để hỗ trợ bạn & trông chừng bạn.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Khía Cạnh Băng Giá",
    description: "Có cơ hội gây ra hiệu ứng làm chậm lên kẻ địch của bạn.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Gia Cố",
    description: "Có cơ hội giảm sát thương gây ra cho bạn.",
    appliesTo: ["Elytra"],
    rarity: "ULTIMATE"
  },
  {
    name: "Cấy Ghép",
    description: "Cơ hội phục hồi thức ăn mỗi vài giây.",
    appliesTo: ["Mũ"],
    rarity: "ULTIMATE"
  },
  {
    name: "Khiên Obsidian",
    description: "Cung cấp cho bạn hiệu ứng kháng lửa vĩnh viễn.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Xuyên Thấu",
    description: "Gây thêm sát thương.",
    appliesTo: ["Cung", "Nỏ"],
    rarity: "ULTIMATE"
  },
  {
    name: "Cung Thủ",
    description: "Tăng sát thương gây ra bằng cung.",
    appliesTo: ["Cung"],
    rarity: "ULTIMATE"
  },
  {
    name: "Bảo Vệ",
    description: "Cơ hội nhận Kháng Sát Thương khi phòng thủ.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Biến Mất",
    description: "Cơ hội trở nên vô hình khi máu thấp.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Gây Rối",
    description: "Có cơ hội gây hiệu ứng buồn nôn.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Tan Rã",
    description: "Có cơ hội gây thêm sát thương độ bền cho tất cả áo giáp của kẻ địch với mỗi đòn tấn công.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Phá Vỡ",
    description: "Có cơ hội gây thêm sát thương độ bền cho tất cả áo giáp của kẻ địch với mỗi đòn tấn công.",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Nặng Nề",
    description: "Giảm sát thương từ cung của kẻ địch đi 2% mỗi cấp.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Lửa Địa Ngục",
    description: "Có cơ hội biến mũi tên thành quả cầu lửa.",
    appliesTo: ["Cung"],
    rarity: "ULTIMATE"
  },
  {
    name: "Cung Dài",
    description: "Tăng đáng kể sát thương gây ra cho kẻ địch đang có một cây cung trong tay.",
    appliesTo: ["Cung", "Nỏ"],
    rarity: "ULTIMATE"
  },
  {
    name: "Xe Tăng",
    description: "Có cơ hội giảm sát thương từ rìu của kẻ địch đi 2% mỗi cấp.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Kiếm Sĩ",
    description: "Có cơ hội giảm sát thương nhận vào khi đang cầm kiếm lên đến 22% ở cấp độ tối đa.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Người Nether",
    description: "Có cơ hội gây sát thương gấp đôi cho mob trong Nether.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Bậc Thầy End",
    description: "Có cơ hội gây sát thương gấp đôi cho mob trong The End.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Giáp Creeper",
    description: "Có cơ hội miễn nhiễm với sát thương nổ, ở cấp độ cao hơn, bạn có một cơ hội hồi máu.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Linh Hồn",
    description: "Có cơ hội triệu hồi Blaze hộ vệ.",
    appliesTo: ["Bộ Giáp"],
    rarity: "ULTIMATE"
  },
  {
    name: "Chảy Máu",
    description: "Làm đối thủ của bạn chảy máu.",
    appliesTo: ["Rìu"],
    rarity: "ULTIMATE"
  },
  {
    name: "Thieu Rụi",
    description: "Đốt cháy tất cả mob trong bán kính.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Kẻ Tấn Công",
    description: "Mưa tên lên đối thủ.",
    appliesTo: ["Cung"],
    rarity: "ULTIMATE"
  },
  {
    name: "Bắn Tỉa",
    description: "Bắn trúng đầu bằng cung gây sát thương gấp đôi.",
    appliesTo: ["Cung"],
    rarity: "ULTIMATE"
  },
  {
    name: "Khiên Thần Aegis",
    description: "Cơ hội nhận tốc độ khi nhận sát thương rơi ngã.",
    appliesTo: ["Ủng"],
    rarity: "ULTIMATE"
  },
  {
    name: "Rơi Thẳng",
    description: "Gây sát thương cho mob gần đó khi nhận sát thương rơi ngã.",
    appliesTo: ["Ủng"],
    rarity: "ULTIMATE"
  },
  {
    name: "Cú Đêm",
    description: "Có cơ hội gây thêm sát thương cho mob vào ban đêm.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Làm Rối",
    description: "Có một cơ hội nhỏ để làm xáo trộn các vật phẩm trên thanh hotbar của đối thủ.",
    appliesTo: ["Kiếm"],
    rarity: "ULTIMATE"
  },
  {
    name: "Nhói Đau",
    description: "Làm kẻ địch chảy máu, nếu đánh trúng bằng tấn công cận chiến.",
    appliesTo: ["Đinh ba"],
    rarity: "LEGENDARY"
  },
  {
    name: "Đôi Cánh",
    description: "Cho phép bay khi mặc.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Sát Thủ Quái Vật",
    description: "Tăng sát thương gây ra cho Mob Thù Địch.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "LEGENDARY"
  },
  {
    name: "Mồi Câu",
    description: "Cơ hội nhận được gấp đôi vật phẩm câu được.",
    appliesTo: ["Cần câu"],
    rarity: "LEGENDARY"
  },
  {
    name: "Tôi Luyện",
    description: "Có cơ hội phục hồi độ bền khi bị người chơi gây sát thương.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Miếng Vá",
    description: "Có cơ hội phục hồi độ bền khi bị mob gây sát thương.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Vụng Về",
    description: "Có cơ hội làm nổ tung kẻ địch khi bị bắn trúng bởi mũi tên của họ.",
    appliesTo: ["Áo"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hỗn Loạn",
    description: "Có cơ hội ngăn chặn vệ sĩ của đối thủ khỏi việc xuất hiện.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hồi Phục",
    description: "Có cơ hội lấy lại một ít máu sau khi tiêu diệt.",
    appliesTo: ["Rìu", "Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Lôi Thần",
    description: "Giáng sét xuống những người chơi gần đó.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Đi Trên Dung Nham",
    description: "Đi trên Dung nham.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Đi Trên Nước",
    description: "Đi trên Nước.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Thủy Lực",
    description: "Có một cơ hội nhỏ để gây sát thương gấp đôi khi bạn đang ở dưới nước.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Phán Xét",
    description: "Có cơ hội gây độc cho đối thủ và nhận được hiệu ứng hồi máu.",
    appliesTo: ["Elytra"],
    rarity: "LEGENDARY"
  },
  {
    name: "Chuyển Hướng",
    description: "Có cơ hội gây độc cho đối thủ và nhận được hiệu ứng hồi máu.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Báng Bổ",
    description: "Phòng thủ với hiệu ứng Yếu đuối & Khô héo.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hỗn Mang",
    description: "Có một cơ hội nhỏ để gây hiệu ứng Yếu đuối & Khô héo.",
    appliesTo: ["Đinh ba"],
    rarity: "LEGENDARY"
  },
  {
    name: "Co Giật",
    description: "Cơ hội ném kẻ tấn công của bạn lên không trung.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Chắc Nịch",
    description: "Có một cơ hội nhỏ để nhận ít sát thương hơn.",
    appliesTo: ["Áo"],
    rarity: "LEGENDARY"
  },
  {
    name: "Dã Man",
    description: "Có cơ hội gây thêm sát thương bằng rìu.",
    appliesTo: ["Rìu"],
    rarity: "LEGENDARY"
  },
  {
    name: "Minh Mẫn",
    description: "Có cơ hội chữa khỏi mù lòa và nhận hiệu ứng nhìn trong đêm.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Song Đả",
    description: "Có cơ hội tấn công hai lần.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Bánh Răng",
    description: "Tăng tốc độ khi trang bị.",
    appliesTo: ["Ủng"],
    rarity: "LEGENDARY"
  },
  {
    name: "Bốc Cháy",
    description: "Thieu đốt tất cả người chơi trong bán kính trong một thời gian ngắn.",
    appliesTo: ["Rìu"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hào Quang Sát Thủ",
    description: "Cơ hội tiêu diệt nhiều quái vật trong bán kính.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Tò Mò",
    description: "Có cơ hội tăng EXP rơi ra từ mob.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hút Máu",
    description: "Có cơ hội đánh cắp máu khi tấn công.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Quá Tải",
    description: "Mở khóa thêm trái tim.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Bọc Giáp",
    description: "Cơ hội giảm sát thương từ kiếm của kẻ địch đi 2% mỗi cấp.",
    appliesTo: ["Bộ Giáp"],
    rarity: "LEGENDARY"
  },
  {
    name: "Thợ Rèn",
    description: "Sửa chữa vũ khí của bạn đổi lại việc gây ít sát thương hơn.",
    appliesTo: ["Rìu"],
    rarity: "LEGENDARY"
  },
  {
    name: "Bền Bỉ",
    description: "Vũ khí với phù phép này trở nên không thể phá vỡ",
    appliesTo: ["Kiếm", "Cung"],
    rarity: "LEGENDARY"
  },
  {
    name: "Tước Giáp",
    description: "Cơ hội gỡ bỏ một mảnh giáp ngẫu nhiên từ đối thủ của bạn.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Bách Phát Bách Trúng",
    description: "Bắn trúng đầu bằng đinh ba gây sát thương gấp đôi.",
    appliesTo: ["Đinh ba"],
    rarity: "LEGENDARY"
  },
  {
    name: "Xung Đột",
    description: "Tăng sát thương cận chiến của Đinh Ba.",
    appliesTo: ["Đinh ba"],
    rarity: "LEGENDARY"
  },
  {
    name: "Phóng",
    description: "Có cơ hội phóng bản thân bằng cách nhấp chuột phải.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Ná Cao Su",
    description: "Phóng bản thân vào không trung bằng cách nhấp chuột phải.",
    appliesTo: ["Elytra"],
    rarity: "LEGENDARY"
  },
  {
    name: "Loạn Trí",
    description: "Có cơ hội giáng sét xuống những người chơi gần đó.",
    appliesTo: ["Kiếm"],
    rarity: "LEGENDARY"
  },
  {
    name: "Hóa Ngọc",
    description: "Có cơ hội để khối quặng biến thành khối ngọc của nó.",
    appliesTo: ["Cuốc chim"],
    rarity: "FABLED"
  },
  {
    name: "Nhanh Nhẹn",
    description: "Cho phép bạn vung công cụ nhanh hơn.",
    appliesTo: ["Cuốc chim", "Xẻng", "Rìu"],
    rarity: "FABLED"
  },
  {
    name: "Phục Hồi",
    description: "Khi bị hỏng, vật phẩm có một cơ hội mất phù phép này và sửa chữa lại một nửa độ bền của nó.",
    appliesTo: ["Cuốc chim", "Xẻng", "Rìu"],
    rarity: "FABLED"
  },
  {
    name: "Bất Tử",
    description: "Cơ hội ngăn chặn áo giáp của bạn khỏi việc nhận sát thương độ bền.",
    appliesTo: ["Bộ Giáp"],
    rarity: "FABLED"
  },
  {
    name: "Không Thể Phá Vỡ",
    description: "Công cụ với phù phép này trở nên không thể phá vỡ",
    appliesTo: ["Công cụ"],
    rarity: "FABLED"
  },
  {
    name: "Linh Hồn Ràng Buộc",
    description: "Có một cơ hội nhỏ để giữ lại vật phẩm khi chết.",
    appliesTo: ["Công cụ", "Kiếm", "Cung", "Nỏ"],
    rarity: "FABLED"
  },
  {
    name: "Vô Hiệu Hóa",
    description: "Cơ hội tước vũ khí đối thủ.",
    appliesTo: ["Cung", "Nỏ"],
    rarity: "FABLED"
  },
  {
    name: "Tước Vũ Khí",
    description: "Cơ hội tước vũ khí đối thủ.",
    appliesTo: ["Kiếm"],
    rarity: "FABLED"
  },
  {
    name: "Phượng Hoàng",
    description: "Có một cơ hội nhỏ để hồi sinh bản thân khi bị giết.",
    appliesTo: ["Áo"],
    rarity: "FABLED"
  },
  {
    name: "Hù Dọa",
    description: "Có một cơ hội thay thế mũ bảo hiểm của đối thủ bằng một quả bí ngô trong thời gian ngắn.",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "FABLED"
  },
  {
    name: "Vô Hiệu",
    description: "Có một cơ hội nhỏ để gây sát thương gấp đôi trong khi khiến kẻ địch bị mù. Tốn 40 souls/kích hoạt",
    appliesTo: ["Kiếm", "Rìu"],
    rarity: "FABLED"
  },
  {
    name: "Lao Tới",
    description: "Có cơ hội tăng tốc độ khi cất cánh với elytra. Tốn 10 souls / kích hoạt.",
    appliesTo: ["Elytra"],
    rarity: "FABLED"
  },
  {
    name: "Lưỡng Bội",
    description: "Có cơ hội nhân lên vật phẩm rơi ra từ mob. Tốn 5 souls / kích hoạt.",
    appliesTo: ["Kiếm"],
    rarity: "FABLED"
  },
  {
    name: "Nhân Lên",
    description: "Có cơ hội nhân lên vật phẩm rơi ra từ quặng. Tốn 5 souls / kích hoạt.",
    appliesTo: ["Cuốc chim"],
    rarity: "FABLED"
  },
  {
    name: "Bậc Thầy Linh Hồn",
    description: "Có cơ hội nhận thêm souls từ việc giết người chơi.",
    appliesTo: ["Kiếm"],
    rarity: "FABLED"
  },
  {
    name: "Rìu Linh Hồn",
    description: "Có cơ hội nhận thêm souls từ việc giết người chơi.",
    appliesTo: ["Rìu"],
    rarity: "FABLED"
  },
  {
    name: "Thợ Mỏ Linh Hồn",
    description: "Có cơ hội nhận souls bằng cách khai thác.",
    appliesTo: ["Cuốc chim"],
    rarity: "FABLED"
  },
  {
    name: "Cày Linh Hồn",
    description: "Có cơ hội nhận souls bằng cách giết mob.",
    appliesTo: ["Kiếm"],
    rarity: "FABLED"
  }
].map(enchant => ({
  ...enchant,
  appliesTo: enchant.appliesTo.map(item => {
    if (item === "Bộ Giáp") {
      return ["Áo", "Quần", "Mũ", "Ủng"];
    } else if (item === "Công cụ") {
      return ["Cuốc", "Xẻng", "Cuốc chim", "Rìu"];
    } else {
      return [item];
    }
  }).flat()
}));

interface SupportItem {
  name: string;
  description: string;
  image?: string;
}

export const supportItems: SupportItem[] = [
  {
    name: "Rune of Souls",
    description: "Tích lũy linh hồn trên vật phẩm làm nhiên liệu, sau đó dùng cho phù phép.",
    image: "/lovable-uploads/c7a2fe1a-bedc-46e2-970a-f695b011ef44.png"
  },
  {
    name: "Rune of Revelation",
    description: "Sắp xếp các phù phép trên vật phẩm theo thứ tự.",
    image: "/lovable-uploads/e5dd443b-c80f-40eb-b464-f24902d5a7ea.png"
  },
  {
    name: "Rune of Soulbound",
    description: "Giữ vật phẩm sau khi chết.",
    image: "/lovable-uploads/3de28979-c303-42bc-939c-9ee36dc78ebd.png"
  },
  {
    name: "Random Enchantment",
    description: "Tạo ra sách phù phép ngẫu nhiên.",
    image: "/lovable-uploads/cosmo.png"
  },
  {
    name: "Rune of Extraction",
    description: "Gỡ bỏ ngẫu nhiên một phù phép tùy chỉnh khỏi vật phẩm và tạo ra một sách phù phép tương ứng.",
    image: "/lovable-uploads/ae0292fd-ae21-4a33-9f77-96b068d0f20c.png"
  },
  {
    name: "Rune of Protection",
    description: "Bảo vệ vật phẩm khỏi bị phá hủy khi cường hóa thất bại.",
    image: "/lovable-uploads/fb5919f8-7572-43f2-84c8-f7c13f7cb85e.png"
  },
  {
    name: "Soul Gem",
    description: "khả năng liên quan đến linh hồn, có thể dùng cho Soul Tracker.",
    image: "/lovable-uploads/a5fb01f9-75f1-469c-b504-d308ea205dc6.png"
  },
  {
    name: "Rename Quill",
    description: "Cho phép đổi tên vật phẩm.",
    image: "/lovable-uploads/1cf72a1f-5c68-4966-9820-3c6703683bcc.png"
  },
  {
    name: "Arcane Bundle",
    description: "Tăng tỉ lệ thành công của sách phù phép, đồng thời giảm tỉ lệ thất bại.",
    image: "/lovable-uploads/5ecca8e7-6336-48a8-ab77-ce2e3f3c9703.png"
  },
  {
    name: "Abandon Stone",
    description: "Tăng tỉ lệ thành công của sách phù phép, đồng thời giảm tỉ lệ thất bại.",
    image: "/lovable-uploads/ebf9649e-1f66-4191-a565-57b2e899fbca.png"
  },
  {
    name: "Lucky Gem",
    description: "Tăng tỉ lệ thành công của sách phù phép, đồng thời giảm tỉ lệ thất bại.",
    image: "/lovable-uploads/fb5919f8-7572-43f2-84c8-f7c13f7cb85e.png"
  },
  {
    name: "Miner Scroll",
    description: "Theo dõi số lượng khối đã khai thác bằng công cụ.",
    image: "/lovable-uploads/f41b9feb-5239-4895-b536-b60721214198.png"
  },
  {
    name: "Fisherman Scroll",
    description: "Theo dõi số cá bắt được.",
    image: "/lovable-uploads/8f85dc25-8227-4c3e-9b4c-da8bd97d4041.png"
  },
  {
    name: "Warrior Scroll",
    description: "Theo dõi số lượt hạ gục bằng vũ khí.",
    image: "/lovable-uploads/04b93934-d42a-4b9f-870f-5fd6852573ed.png"
  },
  {
    name: "Slayer Scroll",
    description: "Theo dõi số lượng quái vật đã tiêu diệt bằng vật phẩm.",
    image: "/lovable-uploads/7b57f4ec-e11d-4b5a-afdf-5737b33c8ca5.png"
  },
  {
    name: "Tome of Weapon",
    description: "Tăng số lượng phù phép có thể áp dụng lên vũ khí.",
    image: "/lovable-uploads/c818feb4-f9a4-4214-958f-4c86bc572fb6.png"
  },
  {
    name: "Tome of Armor",
    description: "Tăng số lượng phù phép có thể áp dụng lên giáp.",
    image: "/lovable-uploads/4ee45b77-5d72-425b-9e98-59acdd719edd.png"
  },
  {
    name: "Tome of Tool",
    description: "Tăng số lượng phù phép có thể áp dụng lên công cụ.",
    image: "/lovable-uploads/d875f39c-0efa-4bcc-9131-3248e268c569.png"
  },
  {
    name: "Tome of Renewal",
    description: "Ngẫu nhiên hóa tỉ lệ thành công và phá hủy của sách phù phép tùy chỉnh.",
    image: "/lovable-uploads/8a36d262-0cf4-4991-9dc3-eeeef44a5b82.png"
  },
  {
    name: "Universal Tome",
    description: "Tăng số lượng ô trống có sẵn trên vật phẩm.",
    image: "/lovable-uploads/519c818e-354c-4caa-b1bb-daa6189cefff.png"
  }
];
