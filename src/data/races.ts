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
          "Bạn có thể nhìn rõ hơn dưới nước",
          "Guardians không tấn công bạn",
          "Bạn gây thêm sát thương trong nước",
          "Bạn có thể thở dưới nước",
          "Bạn bơi nhanh hơn",
          "Bạn có thể zombify dân làng bằng cách giết họ",
          "Bạn có thể biến đổi trở lại thành Zombie bằng cách ở trong quần xã sinh vật ấm áp như sa mạc trong một thời gian dài"
        ],
        disadvantages: [
          "Nguồn gốc này không thể chọn ban đầu, bạn nhận được nó bằng cách ở trong nước trong một thời gian dài khi là Zombie",
          "Nguồn gốc này ghi đè phiên bản Drowned từ Origins-Mobs nếu có",
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn bốc cháy dưới ánh sáng ban ngày",
          "Bạn mất đói nhanh hơn",
          "Bạn chậm hơn con người",
          "Bạn còn chậm hơn trên cạn",
          "Bạn chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và làm bạn bị độc)",
          "Dân làng sợ hãi bạn và sẽ chạy trốn và từ chối giao dịch"
        ],
        abilities: []
      },
      {
        name: "Evoker",
        advantages: [
          "Bạn có thể nhấp chuột trái khi không cầm gì để triệu hồi răng nanh evoker",
          "Bạn có 10% cơ hội totem of undying không vỡ khi sử dụng",
          "Pillagers và Illagers thích bạn"
        ],
        disadvantages: [
          "Dân làng không thích bạn"
        ],
        abilities: []
      },
      {
        name: "Guardian",
        advantages: [
          "Bạn có gai tự nhiên",
          "Guardians không tấn công bạn",
          "Bạn có giáp tự nhiên",
          "Bạn có thể thở dưới nước nhưng không thở được trên cạn",
          "Bạn có thể nhìn rõ hơn dưới nước",
          "Bạn có thể phá khối nhanh hơn dưới nước",
          "Bạn có thể bơi nhanh hơn dưới nước",
          "Bạn nhận khí từ thuốc",
          "Bạn có thể trở thành Elder Guardian bằng cách giết một con"
        ],
        disadvantages: [
          "Bạn yếu hơn trên cạn",
          "Bạn nhận thêm sát thương từ Impaling"
        ],
        abilities: []
      },
      {
        name: "Elder Guardian",
        advantages: [
          "Tất cả khả năng của guardian",
          "Gai tự nhiên của bạn mạnh hơn",
          "Giáp tự nhiên của bạn mạnh hơn",
          "Bạn miễn nhiễm với mining fatigue",
          "Bạn có thể nhấp chuột trái khi không cầm gì để gây mining fatigue cho người chơi gần đó"
        ],
        disadvantages: [
          "Nguồn gốc này không thể chọn ban đầu, bạn biến đổi thành nó bằng cách giết một Elder Guardian tự nhiên khi bạn có nguồn gốc Guardian"
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
          "Bạn có night vision khi ở trên cạn",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn có thể zombify dân làng bằng cách giết chúng",
          "Bạn có thể biến đổi thành Husk hoặc Drowned"
        ],
        disadvantages: [
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn bốc cháy dưới ánh sáng ban ngày",
          "Bạn chậm hơn con người",
          "Bạn mất đói nhanh hơn con người",
          "Bạn chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và làm bạn bị độc)",
          "Dân làng sợ hãi bạn và sẽ chạy trốn và từ chối giao dịch"
        ],
        abilities: []
      },
      {
        name: "Husk",
        advantages: [
          "Bạn có night vision khi ở trên cạn",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn có thể zombify dân làng bằng cách giết chúng",
          "Bạn có thể biến đổi trở lại thành Zombie bằng cách ở trong nước một thời gian dài"
        ],
        disadvantages: [
          "Nguồn gốc này không thể chọn ban đầu, bạn nhận được nó bằng cách ở trong một quần xã sinh vật ấm áp như sa mạc trong một thời gian dài khi là Zombie",
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn chậm hơn con người",
          "Bạn còn chậm hơn nếu ở trong một quần xã sinh vật lạnh hơn",
          "Bạn mất đói nhanh hơn con người",
          "Bạn chỉ có thể ăn thịt (thực phẩm khác không cung cấp độ bão hòa và làm bạn bị độc)",
          "Dân làng sợ hãi bạn và sẽ chạy trốn và từ chối giao dịch"
        ],
        abilities: []
      },
      {
        name: "Skeleton",
        advantages: [
          "Bạn có night vision khi ở trên cạn",
          "Bạn có vô hạn mũi tên",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn có mục tiêu hoàn hảo với cung",
          "Bạn có thể biến đổi thành Stray"
        ],
        disadvantages: [
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn bốc cháy dưới ánh sáng ban ngày",
          "Bạn có ít hơn con người 2 trái tim",
          "Saturation tối đa của bạn bị giảm một nửa"
        ],
        abilities: []
      },
      {
        name: "Stray",
        advantages: [
          "Bạn có vô hạn mũi tên",
          "Bạn không nhận sát thương từ bột tuyết",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn có mục tiêu hoàn hảo với cung",
          "Tất cả mũi tên bạn bắn gây hiệu ứng Slowness",
          "Bạn có thể biến đổi trở lại thành skeleton bằng cách ở trong một quần xã sinh vật ấm áp như sa mạc trong một thời gian dài"
        ],
        disadvantages: [
          "Nguồn gốc này không thể chọn ban đầu, bạn nhận được nó bằng cách ở trong bột tuyết hoặc trong một quần xã sinh vật lạnh trong một thời gian dài khi là Skeleton",
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn bốc cháy dưới ánh sáng ban ngày",
          "Bạn có ít hơn con người 2 trái tim",
          "Bạn di chuyển chậm hơn ở các quần xã sinh vật ấm hơn",
          "Bạn nhận gấp đôi sát thương từ tất cả các nguồn lửa"
        ],
        abilities: []
      },
      {
        name: "Warden",
        advantages: [
          "Bạn có thể cảm nhận các sinh vật gần đó với một đường viền phát sáng",
          "Bạn gây gấp đôi sát thương",
          "Bạn có thể phóng sonic boom bằng cách nhấp chuột trái mà không cầm gì",
          "Bạn có gấp đôi máu con người",
          "Bạn có phòng thủ tự nhiên mà không cần giáp"
        ],
        disadvantages: [
          "Bạn chỉ có thể nhìn thấy vài khối, nhưng có thể nhìn xa hơn một chút với night vision",
          "Bạn không thể sử dụng khiên"
        ],
        abilities: []
      },
      {
        name: "Wither Skeleton",
        advantages: [
          "Những thứ bạn đánh trúng nhận hiệu ứng Wither",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn miễn nhiễm với hiệu ứng Wither",
          "Bạn miễn nhiễm với lửa"
        ],
        disadvantages: [
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn có ít hơn con người 2 trái tim",
          "Saturation tối đa của bạn bị giảm một nửa",
          "Xuất hiện mặc định ở Nether"
        ],
        abilities: []
      },
      {
        name: "Piglin",
        advantages: [
          "Giáp vàng tốt như kim cương và không thể vỡ",
          "Bạn nhận được giữa 2 và 5 lần số lượng tài nguyên từ bartering",
          "Piglins sẽ không tấn công bạn trừ khi bạn tấn công chúng trước, ngay cả khi bạn phá khối vàng hoặc mở rương",
          "Bạn có mục tiêu hoàn hảo với cung",
          "Bạn có thể biến đổi thành Zombified Piglin"
        ],
        disadvantages: [
          "Xuất hiện mặc định ở Nether"
        ],
        abilities: []
      },
      {
        name: "Zombified Piglin",
        advantages: [
          "Vũ khí vàng mạnh gấp đôi và không thể vỡ",
          "Zombified Piglins gần đó sẽ chiến đấu cho bạn nếu bạn tấn công một thứ gì đó hoặc bị tấn công",
          "Bạn có thể biến đổi trở lại thành piglin bằng cách ăn một quả táo vàng khi bạn có hiệu ứng weakness",
          "Undead mobs sẽ không tấn công bạn trừ khi bạn tấn công chúng trước",
          "Bạn không nhận bất kỳ dạng sát thương lửa nào"
        ],
        disadvantages: [
          "Nguồn gốc này không thể chọn ban đầu, bạn nhận được nó bằng cách ở ở thế giới Overworld trong 15 giây khi là Piglin",
          "Bạn nhận thêm sát thương từ Smite",
          "Bạn chậm hơn con người",
          "Bạn mất đói nhanh hơn",
          "Xuất hiện mặc định ở Nether"
        ],
        abilities: []
      }
    ]
  },
  {
    category: "Nonhuman",
    items: [
      {
        name: "Slime",
        advantages: [
          "Bạn nảy trên tất cả các khối như slime",
          "Bạn có thể nhấp chuột trái khi không cầm gì để tách và triệu hồi một slime chiến đấu cho bạn (tốn điểm đói)",
          "Bạn gây knockback mạnh hơn nhưng sát thương ít hơn khi còn ít máu",
          "Bạn không nhận sát thương khi rơi"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Snow Golem",
        advantages: [
          "Cầu tuyết bạn ném gây sát thương",
          "Bạn gây thêm sát thương ở những khu vực lạnh"
        ],
        disadvantages: [
          "Bạn nhận sát thương trong nước",
          "Bạn mất tốc độ và máu nếu ở quá lâu trong các quần xã sinh vật ấm áp",
          "Bạn để lại vệt tuyết phía sau"
        ],
        abilities: []
      },
      {
        name: "Strider",
        advantages: [
          "Bạn không nhận sát thương lửa",
          "Bạn có thể đi trên dung nham",
          "Người chơi khác có thể cưỡi bạn",
          "Bạn có thể ăn warped fungus để tăng tốc độ"
        ],
        disadvantages: [
          "Bạn xuất hiện mặc định ở Nether",
          "Bạn nhận sát thương từ nước",
          "Bạn di chuyển chậm hơn trên cạn"
        ],
        abilities: []
      },
      {
        name: "Witch",
        advantages: [
          "Thuốc bạn uống có tác dụng gấp đôi",
          "Bạn có thể nhấp chuột trái với tay không để uống một loại thuốc hữu ích cho tình huống hiện tại",
          "Pillagers và Illagers thích bạn"
        ],
        disadvantages: [
          "Bạn có các hạt witch",
          "Dân làng không thích bạn"
        ],
        abilities: []
      },
      {
        name: "Arachnid",
        advantages: [
          "Có thể leo lên tất cả các bề mặt rắn, không chỉ thang",
          "Có thể leo quanh bên trong mạng nhện, chế tạo mạng nhện với 2 sợi dây, tạm thời nhốt mục tiêu trong mạng nhện khi bạn đánh trúng chúng và có thể nhìn thấy hiệu ứng phát sáng xung quanh bất kỳ mob nào bên trong mạng nhện"
        ],
        disadvantages: [
          "Chỉ có thể ăn thịt (bất kỳ thực phẩm nào khác không cung cấp độ bão hòa và làm bạn bị độc)",
          "Chỉ có 7 trái tim",
          "Nhận nhiều sát thương hơn và bị làm chậm bởi Bane of Arthropods"
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
          "Không thể ăn thịt (cung cấp không độ bão hòa và làm bạn bị độc)"
        ],
        abilities: []
      },
      {
        name: "Blazeborn",
        advantages: [
          "Miễn nhiễm với tất cả các dạng sát thương lửa",
          "Gây thêm sát thương khi đang bốc cháy",
          "Miễn nhiễm độc và ngộ độc thực phẩm"
        ],
        disadvantages: [
          "Xuất hiện mặc định ở Nether",
          "Nhận sát thương trong nước",
          "Có các hạt lửa",
          "Nhận sát thương từ cầu tuyết và thuốc"
        ],
        abilities: []
      },
      {
        name: "Elytrian",
        advantages: [
          "Có thể lướt mà không cần elytra bằng cách nhấp đúp nhảy",
          "Có thể phóng lên không trung bằng cách nhấn shift khi đang lướt",
          "Gây sát thương gấp đôi khi đang lướt"
        ],
        disadvantages: [
          "Không thể mặc giáp tốt hơn giáp xích",
          "Bị làm chậm và suy yếu khi có khối ngay phía trên",
          "Nhận gấp đôi sát thương động năng"
        ],
        abilities: []
      },
      {
        name: "Enderian",
        advantages: [
          "Có thể ném ender pearl mỗi 30 giây bằng cách nhấp chuột trái vào không khí khi không cầm gì"
        ],
        disadvantages: [
          "Nhận sát thương trong nước",
          "Không thể nhìn thấy người chơi đội bí ngô và nhận độc và buồn nôn từ bánh bí ngô",
          "Có các hạt ender",
          "Nhận sát thương từ thuốc"
        ],
        abilities: []
      },
      {
        name: "Merling",
        advantages: [
          "Có thể thở trong nước nhưng không thở được ngoài nước",
          "Có thể nhìn rõ hơn dưới nước",
          "Có thể phá khối nhanh hơn dưới nước",
          "Bơi nhanh hơn dưới nước",
          "Chỉ chìm trong nước nếu bạn muốn",
          "Nhận khí từ thuốc"
        ],
        disadvantages: [
          "Nhận thêm sát thương từ Impaling"
        ],
        abilities: []
      },
      {
        name: "Phantom",
        advantages: [
          "Có thể vào/ra Dạng Phantom để xuyên vật thể và tàng hình",
          "Tàng hình trong Dạng Phantom"
        ],
        disadvantages: [
          "Bốc cháy dưới ánh sáng ban ngày khi không ở Dạng Phantom",
          "Mất đói nhanh hơn trong Dạng Phantom",
          "Chỉ có 7 trái tim",
          "Có lớp phủ màu đỏ trong Dạng Phantom"
        ],
        abilities: []
      },
      {
        name: "Shulk",
        advantages: [
          "Có 9 ô đồ không bị mất khi chết",
          "Có phòng thủ tự nhiên mà không cần mặc giáp",
          "Có thể phá vỡ các khối đá tự nhiên mà không cần cuốc"
        ],
        disadvantages: [
          "Không thể sử dụng khiên",
          "Mất đói nhanh hơn"
        ],
        abilities: []
      },
      {
        name: "Bard",
        advantages: [
          "Bạn gây thêm sát thương khi còn ít máu",
          "Bạn nhận được hiệu ứng tái tạo khi có một note block gần đó được chơi",
          "Bạn có thể nhân đôi allays mà không cần jukebox phát nhạc",
          "Bạn nhận được hiệu ứng tái tạo bằng cách nhấp chuột phải với một mảnh thạch anh tím",
          "Creepers bạn giết có 25% cơ hội rơi đĩa nhạc ngay cả khi không bị skeleton giết"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Centaur",
        advantages: [
          "Bạn luôn ở trên lưng ngựa",
          "Bạn nhảy cao hơn ngựa thông thường",
          "Bạn nhanh hơn ngựa thông thường",
          "Bạn mạnh hơn vào những đêm trăng tròn",
          "Bạn bắn cung chính xác"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Dragonborn",
        advantages: [
          "Bạn có thể nhấp chuột phải với một chai thủy tinh để lưu trữ hơi thở rồng của mình",
          "Bạn có nhiều máu hơn và mạnh hơn ở The End",
          "Bạn được hồi máu bởi end crystal",
          "Bạn có thể bắn một cầu lửa rồng bằng cách nhấp chuột phải với kiếm",
          "Bạn nhận ít sát thương hơn từ mũi tên"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Dwarf",
        advantages: [
          "Bạn có hiệu ứng haste vô hạn",
          "Bạn có hiệu ứng night vision vô hạn",
          "Quặng bạn phá vỡ rơi ra nhiều khoáng sản hơn",
          "Bạn miễn nhiễm với hiệu ứng độc và hiệu ứng gây hại từ thuốc"
        ],
        disadvantages: [
          "Bạn chỉ cao một khối"
        ],
        abilities: []
      },
      {
        name: "Elf",
        advantages: [
          "Bạn bắn cung chính xác",
          "Mũi tên bạn bắn gây thêm sát thương và bay nhanh hơn mũi tên của con người",
          "Hiệu ứng thuốc trên mũi tên của bạn mạnh hơn",
          "Bằng cách nhấp chuột trái với cung, bạn bắn 3 mũi tên với chi phí của 1, mặc dù điều này vô hiệu hóa cung của bạn trong 7 giây"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Giant",
        advantages: [
          "Bạn có gấp đôi máu con người",
          "Bạn gây thêm sát thương cận chiến",
          "Bạn có giáp tự nhiên"
        ],
        disadvantages: [
          "Bạn có thời gian hồi chiêu cho các cuộc tấn công lâu hơn",
          "Bạn bắn cung kém",
          "Bạn cao 3 khối"
        ],
        abilities: []
      },
      {
        name: "Gargoyle",
        advantages: [
          "Bạn miễn nhiễm với knockback",
          "Bạn miễn nhiễm với lửa",
          "Bạn miễn nhiễm với các hiệu ứng trạng thái",
          "Bạn gây thêm sát thương cận chiến",
          "Bạn có giáp tự nhiên"
        ],
        disadvantages: [
          "Da của bạn làm bằng đá xám xỉn (yêu cầu cài đặt SkinsRestorer)",
          "Bạn đi chậm hơn những người khác",
          "Bạn có thời gian hồi chiêu cho các cuộc tấn công lâu hơn"
        ],
        abilities: []
      },
      {
        name: "Naiad",
        advantages: [
          "Bạn có thêm máu và gây thêm sát thương trong nước hoặc mưa",
          "Bạn có thể thở dưới nước nhưng không trên cạn",
          "Bạn có thể nhìn rõ ràng dưới nước",
          "Bạn có thể phá khối dưới nước với tốc độ như trên cạn",
          "Bạn bơi nhanh hơn trong nước so với con người",
          "Bạn chỉ chìm trong nước khi bạn muốn"
        ],
        disadvantages: [
          "Bạn yếu hơn và chậm hơn khi không ở trong nước"
        ],
        abilities: []
      },
      {
        name: "Vampire",
        advantages: [
          "Bạn có thể biến người chơi khác thành vampire bằng cách giết họ",
          "Bạn hồi một lượng nhỏ máu khi tiêu diệt một thứ gì đó",
          "Bạn gây thêm sát thương so với con người",
          "Undead không tấn công bạn trừ khi bị khiêu khích"
        ],
        disadvantages: [
          "Bạn bốc cháy dưới ánh sáng ban ngày",
          "Bạn nhận sát thương trong nước"
        ],
        abilities: []
      },
      {
        name: "Abomination Coven",
        advantages: [
          "Bạn có thể triệu hồi một Abomination, cũng như cung cấp vũ khí cho nó chiến đấu"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Bard Coven",
        advantages: [
          "Shrill Whistle sẽ làm choáng bất cứ thứ gì gần đó trong 10 giây",
          "Echolocation sẽ tạo hiệu ứng 'glowing' cho những thứ gần đó, nhưng chỉ từ góc nhìn của bạn"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Beast Keeping Coven",
        advantages: [
          "Beast Feeder cho phép bạn cho động vật ăn mà không tốn thức ăn",
          "Beast Sense cho phép bạn theo dõi nơi người chơi đã đến trong 5 phút gần nhất"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Construction Coven",
        advantages: [
          "Bạn có thể sử dụng Strength Glyphs để tăng sức mạnh và tốc độ trong 30 giây",
          "Phá khối bằng tay nhanh hơn, như thể đang sử dụng Cuốc kim cương"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Healing Coven",
        advantages: [
          "Bạn có thể tạo ra một vòng tròn hồi máu cho bất cứ thứ gì bên trong nó",
          "Sử dụng phép Magical Defence, bạn có thể làm cho bản thân bất tử trước sát thương trong 15 giây"
        ],
        disadvantages: [
          
        ],
        abilities: []
      },
      {
        name: "Illusion Coven",
        advantages: [
          "Blinding Illusion sẽ tạo ra một vòng ma thuật làm mù bất kỳ ai khác bên trong nó",
          "Phép Invisibility biến bạn tàng hình cho đến khi bạn nhận sát thương"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Oracle Coven",
        advantages: [
          "Good Fortune mang lại cho bạn cơ hội nhận được gấp đôi loot trong rương",
          "Spirit Sense cho phép bạn nhìn thấy những vệt dẫn bạn trực tiếp đến những người chơi gần đó"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Plant Coven",
        advantages: [
          "Green Fingers cho phép bạn tăng tốc độ phát triển của cây mà không cần bone meal",
          "Tree Feller cho phép bạn chặt cả cây chỉ bằng cách phá một khối"
        ],
        disadvantages: [
        ],
        abilities: []
      },
      {
        name: "Potions Coven",
        advantages: [
          "Bạn có thể đặt các bàn bào chế có vô hạn lần sử dụng và thuốc của bạn bắt đầu được pha chế một nửa",
          "Potion Breath của bạn có nghĩa là bất kỳ thuốc nào bạn uống có tác dụng vĩnh viễn cho đến khi bạn uống một loại khác"
        ],
        disadvantages: [
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
