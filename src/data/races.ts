export interface Race {
  name: string;
  abilities: string[];
  advantages?: string[];
  disadvantages?: string[];
}

export interface RaceCategory {
  category: string;
  items: Race[];
}

export const races: RaceCategory[] = [
  {
    category: "Animal",
    items: [
      {
        name: "Bee",
        advantages: [
          "Mỗi 5 giây, có thể đánh trúng mục tiêu để làm nó bị độc",
          "Nếu ở gần hoa, bạn nhận được hiệu ứng tái tạo máu",
          "Ong không nổi giận với bạn khi bạn lấy mật ong"
        ],
        disadvantages: [
          "Bạn có ít hơn con người 2 trái tim",
          "Bạn không thể ăn thịt (nó không cung cấp độ bão hòa và làm bạn bị độc)"
        ],
        abilities: []
      },
      {
        name: "Fox",
        advantages: [
          "Bạn di chuyển nhanh hơn khi có 3 hoặc nhiều người chơi khác ở gần bạn",
          "Quả mọng cung cấp nhiều độ bão hòa và điểm đói hơn",
          "Bụi cây dâu ngọt không gây sát thương cho bạn",
          "Bạn có thể nhặt vật phẩm từ xa hơn",
          "Bạn di chuyển nhanh hơn con người"
        ],
        disadvantages: [
          "Bạn có ít hơn con người 2 trái tim"
        ],
        abilities: []
      },
      {
        name: "Wolf",
        advantages: [
          "Bạn trở nên nhanh hơn, mạnh hơn và có nhiều máu hơn trong đêm trăng tròn",
          "Chó sói bạn thuần hóa và nhân giống mạnh hơn và có nhiều máu hơn",
          "Bạn có thể hú để tăng tốc độ và sức mạnh cho bản thân và chó sói gần đó",
          "Nếu có 4 hoặc nhiều chó sói ở gần, bạn gây thêm sát thương và nhanh hơn"
        ],
        disadvantages: [
          "Bạn có ít hơn con người 2 trái tim",
          "Bạn chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và làm bạn bị độc)"
        ],
        abilities: []
      },
      {
        name: "Feline",
        advantages: [
          "Không nhận sát thương khi rơi",
          "Nhảy cao hơn khi chạy nước rút",
          "Bước đi không bị sculk sensors hoặc wardens nghe thấy",
          "Xua đuổi creeper trừ khi bạn đánh chúng trước",
          "Có tầm nhìn ban đêm khi không ở trong nước"
        ],
        disadvantages: [
          "Chỉ có 9 trái tim",
          "Không thể phá vỡ đá tự nhiên nếu có nhiều hơn 2 khối đá tự nhiên chạm vào nó"
        ],
        abilities: []
      }
    ]
  },
  {
    category: "Monster",
    items: [
      {
        name: "Drowned",
        advantages: [
          "Kích hoạt khả năng sử dụng channeling không cần sét và riptide không cần mưa (có thời gian hồi chiêu 60 giây và kéo dài 20 giây)",
          "Nhìn rõ hơn dưới nước",
          "Guardians không tấn công bạn",
          "Gây thêm sát thương trong nước",
          "Có thể thở dưới nước"
        ],
        disadvantages: [
          "Bốc cháy dưới ánh sáng ban ngày",
          "Nhận thêm sát thương từ Smite",
          "Mất đói nhanh hơn",
          "Chậm hơn trên cạn",
          "Chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và làm bạn bị độc)"
        ],
        abilities: []
      },
      {
        name: "Creeper",
        advantages: [
          "Creeper khác không tấn công bạn",
          "Có thể phát nổ bằng cách nhấn đúp sneak nhanh (hy sinh một phần máu)"
        ],
        disadvantages: [
          "Nhận hiệu ứng buồn nôn và yếu khi ở gần mèo",
          "Không thể sử dụng khiên"
        ],
        abilities: []
      },
      {
        name: "Zombie",
        advantages: [
          "Night vision khi ở trên cạn",
          "Undead mobs không tấn công bạn trừ khi bị tấn công trước",
          "Có thể zombify dân làng bằng cách giết họ",
          "Có thể biến đổi thành Husk hoặc Drowned"
        ],
        disadvantages: [
          "Nhận thêm sát thương từ Smite",
          "Bốc cháy dưới ánh sáng ban ngày",
          "Chậm hơn con người",
          "Mất đói nhanh hơn",
          "Chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và gây độc)",
          "Dân làng sợ hãi và từ chối giao dịch"
        ],
        abilities: []
      },
      {
        name: "Skeleton",
        advantages: [
          "Night vision khi ở trên cạn",
          "Vô hạn mũi tên",
          "Undead mobs không tấn công bạn trừ khi bị tấn công trước",
          "Mục tiêu hoàn hảo với cung",
          "Có thể biến đổi thành Stray"
        ],
        disadvantages: [
          "Nhận thêm sát thương từ Smite",
          "Bốc cháy dưới ánh sáng ban ngày",
          "Ít hơn 2 trái tim so với con người",
          "Saturation tối đa bị giảm một nửa"
        ],
        abilities: []
      },
      {
        name: "Warden",
        advantages: [
          "Cảm nhận các sinh vật gần đó với đường viền phát sáng",
          "Gây gấp đôi sát thương",
          "Phóng sonic boom bằng cách nhấp chuột trái không cầm gì",
          "Gấp đôi máu con người",
          "Phòng thủ tự nhiên không cần giáp"
        ],
        disadvantages: [
          "Chỉ nhìn được vài khối (xa hơn một chút với night vision)",
          "Không thể sử dụng khiên"
        ],
        abilities: []
      }
    ]
  },
  {
    category: "Nonhuman",
    items: [
      {
        name: "Bee",
        advantages: [
          "Cứ sau 5 giây, đánh trúng mục tiêu làm nó trúng độc",
          "Hồi máu khi ở gần hoa",
          "Ong không tức giận với bạn khi lấy mật ong"
        ],
        disadvantages: [
          "Ít hơn 2 trái tim so với con người",
          "Không thể ăn thịt (không cung cấp độ no và gây độc)"
        ],
        abilities: []
      },
      {
        name: "Fox",
        advantages: [
          "Di chuyển nhanh hơn khi có 3+ người chơi khác ở gần",
          "Quả mọng cung cấp nhiều độ bão hòa và điểm đói hơn",
          "Bụi cây dâu ngọt không gây sát thương",
          "Nhặt vật phẩm từ xa hơn",
          "Di chuyển nhanh hơn con người"
        ],
        disadvantages: [
          "Ít hơn 2 trái tim so với con người"
        ],
        abilities: []
      },
      {
        name: "Merling",
        advantages: [
          "Thở được trong nước, không thở được ngoài nước",
          "Nhìn rõ hơn dưới nước",
          "Phá khối nhanh hơn dưới nước",
          "Bơi nhanh hơn dưới nước",
          "Chỉ chìm trong nước nếu muốn",
          "Nhận khí từ thuốc"
        ],
        disadvantages: [
          "Nhận thêm sát thương từ Impaling"
        ],
        abilities: []
      },
      {
        name: "Avian",
        advantages: [
          "Giảm tốc độ rơi trừ khi lén lút",
          "Di chuyển nhanh hơn người chơi bình thường",
          "Đẻ trứng khi ngủ qua đêm"
        ],
        disadvantages: [
          "Chỉ có thể ngủ trên độ cao Y 86",
          "Không thể ăn thịt (không cung cấp độ bão hòa và gây độc)"
        ],
        abilities: []
      },
      {
        name: "Elytrian",
        advantages: [
          "Lướt mà không cần elytra bằng cách nhấp đúp nhảy",
          "Phóng lên không trung bằng cách nhấn shift khi lướt",
          "Gây sát thương gấp đôi khi đang lướt"
        ],
        disadvantages: [
          "Không thể mặc giáp tốt hơn giáp xích",
          "Bị làm chậm và suy yếu khi có khối phía trên",
          "Nhận gấp đôi sát thương động năng"
        ],
        abilities: []
      }
    ]
  },
  {
    category: "Human",
    items: [
      {
        name: "Human",
        advantages: [
          "Không có ưu điểm đặc biệt"
        ],
        disadvantages: [
          "Không có bất lợi đặc biệt"
        ],
        abilities: [
          "Trải nghiệm thông thường, không có ưu điểm hay nhược điểm"
        ]
      },
      {
        name: "Alchemist",
        advantages: [
          "Thuốc bạn uống và ném mạnh hơn một cấp và có thời gian tác dụng gấp đôi",
          "Nhấp chuột phải vào đồng khi không cầm gì sẽ biến nó thành vàng và ngược lại"
        ],
        disadvantages: [
          "Chỉ gây 0.75x sát thương",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Telekinetic",
        advantages: [
          "Tương tác với khối, thực thể và vật phẩm ở xa hơn bình thường",
          "Vật phẩm rơi từ thực thể và khối đi thẳng vào túi đồ"
        ],
        disadvantages: [
          "Chỉ gây 0.75x sát thương",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Healer",
        advantages: [
          "Sống sót sau khi chết một lần mỗi 10 phút",
          "Nhấp chuột phải vào một thứ cho hiệu ứng Regeneration 2 trong 10 giây",
          "Khi đứng yên, có hiệu ứng Regeneration 2 vô hạn"
        ],
        disadvantages: [
          "Chỉ gây 0.75x sát thương",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Hypnotist",
        advantages: [
          "Nhấp chuột phải vào quái vật khiến nó tấn công thứ khác bạn đã đánh",
          "Nhấp chuột phải vào người chơi gây hiệu ứng Nausea trong 30 giây"
        ],
        disadvantages: [
          "Chỉ gây 0.75x sát thương",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Necromancer",
        advantages: [
          "Quái vật undead gần bạn nhắm mục tiêu vào bất cứ thứ gì bạn đánh",
          "Vung nắm đấm để hồi sinh người chơi đã chết gần đó",
          "Nhiều máu hơn và gây nhiều sát thương hơn ở Nether",
          "Quái vật undead không tấn công bạn trừ khi bị khiêu khích"
        ],
        disadvantages: [
          "Ít máu hơn và gây ít sát thương hơn bên ngoài Nether",
          "Dân làng từ chối giao dịch",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Spirit",
        advantages: [
          "Bước chân không bị Sculk Sensors phát hiện",
          "Tàng hình khi đứng yên, như đang sử dụng thuốc tàng hình",
          "Nhiều máu hơn và gây nhiều sát thương hơn ở Nether"
        ],
        disadvantages: [
          "Ít máu hơn và gây ít sát thương hơn bên ngoài Nether",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Warlock",
        advantages: [
          "Khi giết một thứ, hấp thụ phần máu để có thêm tối đa 30 trái tim",
          "Khi đánh trúng, gây hiệu ứng tiêu cực trong 15 giây",
          "Quái vật undead không tấn công bạn trừ khi bị khiêu khích"
        ],
        disadvantages: [
          "Không thể sử dụng phù phép hoặc thuốc",
          "Dân làng từ chối giao dịch",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      },
      {
        name: "Shadowmancer",
        advantages: [
          "Hoàn toàn tàng hình và không thể tương tác ở những khu vực tối",
          "Gây sát thương tăng trong bóng tối"
        ],
        disadvantages: [
          "Gây sát thương giảm trong ánh sáng",
          "Bị đốt cháy trong ánh sáng, ngay cả từ đuốc",
          "Nhận gấp đôi sát thương lửa",
          "Không bị ảnh hưởng bởi Fire Resistance",
          "Chỉ có 3 trái tim khi chạm vào nước"
        ],
        abilities: []
      }
    ]
  }
];
