interface Ability {
  name: string;
  usage: string;
  description: string;
}

interface Skill {
  name: string;
  icon: string;
  description: string;
  howToGainExp?: string;
  specialNotes?: string;
  perks?: string;
  abilities?: Ability[];
}

export const skillsData: Skill[] = [
  {
    name: "Sức Mạnh",
    icon: "💥",
    description: "Sức Mạnh đại diện cho tổng thể tiến trình của người chơi trong Server.",
    howToGainExp: "Tăng cấp bất kỳ kỹ năng nào khác ngoài Sức Mạnh sẽ cho bạn một lượng kinh nghiệm Sức Mạnh.",
    specialNotes: "Tăng cấp Sức Mạnh là cách duy nhất để nhận Điểm Kỹ Năng, cần thiết để mở khóa các đặc quyền.",
    perks: "Kỹ năng Sức Mạnh chủ yếu cung cấp các cải thiện chỉ số chung như May Mắn, Sát Thương, Hồi Máu, v.v."
  },
  {
    name: "Rèn",
    icon: "🛠",
    description: "Rèn là sự thành thạo của bạn trong việc chế tạo công cụ/giáp. Trang bị bạn chế tạo có chất lượng càng cao, thuộc tính của chúng càng tốt.",
    howToGainExp: "Chế tạo bất kỳ công cụ hoặc trang bị nào. Vật liệu càng đắt và sử dụng càng nhiều, bạn càng nhận được nhiều EXP.",
    specialNotes: "Chế tạo công cụ bằng vật liệu cao cấp hơn trình độ của bạn rất nhiều sẽ giảm kinh nghiệm nhận được.",
    perks: "Tăng cấp Rèn cho phép bạn chế tạo Giáo Ba Chấu và Cánh Elytra của riêng mình."
  },
  {
    name: "Phù Phép",
    icon: "🎇",
    description: "Phù Phép là sự thành thạo trong việc phù phép trang bị. Càng cao cấp, phù phép càng mạnh.",
    howToGainExp: "Nhận EXP thông qua việc phù phép các vật phẩm và sử dụng quả cầu kinh nghiệm.",
    specialNotes: "Kinh nghiệm bị giảm khi farm các mob như Enderman, Guardian, Zombified Piglin quá nhiều.",
    perks: "Cung cấp các cải thiện về phù phép và tiện ích",
    abilities: [
      {
        name: "Hexblade",
        usage: "Đổi tay khi cầm vũ khí để bật/tắt",
        description: "Chuyển đổi một phần sát thương thành sát thương nguyên tố cao hơn"
      }
    ]
  },
  {
    name: "Giả Kim",
    icon: "⚗",
    description: "Giả Kim là sự thành thạo trong việc pha chế thuốc. Càng cao cấp, thuốc càng mạnh.",
    howToGainExp: "Bạn nhận kinh nghiệm thông qua việc pha chế thuốc. Bạn nhận kinh nghiệm cho mỗi loại thuốc bạn pha chế, dựa trên độ hiếm của nguyên liệu.",
    specialNotes: "Nếu bạn cam kết tăng cấp Giả Kim, bạn chắc chắn sẽ pha chế rất nhiều thuốc không cần thiết. Bạn có thể nhanh chóng làm rỗng chai bằng cách nhấp chuột phải với chúng trên một cái vạc (cauldron).",
    perks: "Giả Kim cung cấp tăng chất lượng thuốc, tốc độ pha chế, giảm tiêu thụ nguyên liệu, buff cho thuốc ném (splash potion) và thuốc kéo dài (lingering potion), tốc độ ném, v.v.",
    abilities: [
      {
        name: "Hợp Nhất Thuốc (Potion Merging)",
        usage: "Trong kho đồ của bạn, kéo và thả một lọ thuốc vào lọ thuốc khác bằng chuột phải.",
        description: "Hợp nhất thuốc cho phép bạn, như tên gọi, kết hợp hiệu ứng của hai loại thuốc thành một. Lọ thuốc sẽ bị giảm nhẹ thời gian tác dụng khi làm như vậy."
      }
    ]
  },
  {
    name: "Khai Thác",
    icon: "⛏",
    description: "Khai Thác là sự thành thạo của bạn trong việc thu thập tài nguyên từ đá và quặng. Kỹ năng Khai Thác của bạn càng cao, bạn càng có thể khai thác nhiều tài nguyên hơn từ chúng.",
    howToGainExp: "Bạn nhận kinh nghiệm thông qua việc khai thác, cụ thể là số lượng vật phẩm rơi ra từ một khối. Vật phẩm rơi ra càng hiếm hoặc khó khai thác, nó càng cho nhiều EXP.",
    perks: "Khai Thác cung cấp hệ số nhân vật phẩm rơi ra, tốc độ khai thác, tốc độ nấu chảy bằng lò nung, sức mạnh nổ của TNT, khai thác mạch (vein mining), khoan (drilling), v.v.",
    abilities: [
      {
        name: "Khai Thác Mạch (Vein Mining)",
        usage: "Nhón (Sneak) trong khi khai thác một khối quặng.",
        description: "Khai thác tức thời một cụm khối đơn lẻ. Các khối phải chạm mặt, cạnh hoặc góc nhau mới được coi là kết nối."
      },
      {
        name: "Khoan (Drilling)",
        usage: "Nhón (Sneak) và chuột phải trong khi cầm cuốc.",
        description: "Trong thời gian ngắn tăng đáng kể tốc độ khai thác của bạn. Có thời gian hồi chiêu."
      }
    ]
  },
  {
    name: "Chặt Gỗ",
    icon: "🪓",
    description: "Kỹ năng Chặt Gỗ của bạn càng cao, bạn càng có thể khai thác nhiều tài nguyên hơn từ rừng. Chặt Gỗ cũng cho phép bạn xây dựng rẻ hơn và thưởng cho bạn táo vàng (golden apples) và táo pha lê (crystal apples).",
    howToGainExp: "Bạn nhận kinh nghiệm thông qua việc chặt gỗ và lột vỏ gỗ (stripping logs).",
    perks: "Chặt Gỗ cung cấp hệ số nhân vật phẩm rơi ra, tốc độ chặt gỗ, công thức khối gỗ nhiều hơn/tốt hơn, chặt cây (tree capitator), vật phẩm hiếm rơi ra từ lá, v.v.",
    abilities: [
      {
        name: "Chặt Cây (Tree Capitator)",
        usage: "Nhón (Sneak) trong khi chặt gốc cây.",
        description: "Chặt tức thời một cái cây và làm lá của nó phân rã nhanh chóng sau đó."
      }
    ]
  },
  {
    name: "Đào Đất",
    icon: "🌍",
    description: "Kỹ năng Đào Đất của bạn càng cao, bạn càng có thể khai thác nhiều tài nguyên hơn từ đất và cát. Đào Đất cũng cho phép một phương pháp thay thế để nhận được một số tài nguyên không tái tạo, và khảo cổ học (archaeology) dễ tiếp cận hơn nhiều.",
    howToGainExp: "Bạn nhận kinh nghiệm thông qua việc đào đất và khảo cổ học.",
    perks: "Đào Đất cung cấp hệ số nhân vật phẩm rơi ra, tốc độ đào, vật phẩm hiếm ngẫu nhiên rơi ra từ đất, tìm thấy khảo cổ học ngẫu nhiên, v.v.",
    abilities: []
  },
  {
    name: "Làm Ruộng",
    icon: "🌾",
    description: "Làm Ruộng là sự thành thạo của bạn trong việc trồng trọt và chăn nuôi gia súc. Kỹ năng Làm Ruộng của bạn càng cao, bạn càng có thể khai thác nhiều thực phẩm hơn từ cây trồng và động vật.",
    howToGainExp: "Bạn nhận kinh nghiệm thông qua việc trồng trọt và nhân giống động vật. Giống như Khai Thác, EXP dựa trên vật phẩm rơi ra từ cây trồng/động vật của bạn chứ không phải việc phá hủy/giết chúng, vì vậy phù phép Looting và Fortune sẽ giúp bạn nhận được nhiều EXP hơn.",
    perks: "Làm Ruộng cung cấp hệ số nhân vật phẩm rơi ra, vật phẩm quả cầu kinh nghiệm rơi ra, sát thương đối với động vật, buff nuôi ong, thu hoạch tức thời, v.v.",
    abilities: [
      {
        name: "Thu Hoạch Tức Thời (Instant Harvest)",
        usage: "Chuột phải vào một cây trồng.",
        description: "Một đặc quyền tiện lợi cho phép bạn thu hoạch và trồng lại cây trồng mà không cần phá vỡ nó."
      },
      {
        name: "Thu Hoạch Cánh Đồng (Field Harvest)",
        usage: "Nhón (Sneak) và chuột phải vào một cây trồng.",
        description: "Thu hoạch một cánh đồng cây trồng lớn gần như tức thời."
      }
    ]
  },
  {
    name: "Câu Cá",
    icon: "🐟",
    description: "Câu Cá là sự thành thạo của bạn trong vi- tôi có thực sự cần giải thích thêm không? Kỹ năng càng cao thì câu cá càng nhanh, bắt được càng nhiều, câu phải rác càng ít, v.v.",
    howToGainExp: "Bạn nhận kinh nghiệm bằng cách câu cá. EXP dựa trên độ hiếm của vật phẩm câu được.",
    perks: "Câu Cá cung cấp may mắn, tốc độ, hệ số nhân quả cầu kinh nghiệm, câu và tái chế (salvaging) trang bị. Trang bị câu được thường không có chất lượng cao, nhưng có thể được tái chế như một phương tiện thay thế cho tài nguyên tái tạo."
  },
  {
    name: "Vũ Khí Nhẹ",
    icon: "⚔",
    description: "Vũ Khí Nhẹ là sự thành thạo của bạn trong việc chiến đấu bằng vũ khí nhẹ. Kỹ năng Vũ Khí Nhẹ của bạn càng cao, bạn càng gây nhiều sát thương hơn với chúng. Vũ khí nhẹ là lớp vũ khí phòng thủ nhất trong số vũ khí nhẹ và nặng, hưởng lợi từ tốc độ tấn công cao nhưng sát thương thấp hơn.",
    howToGainExp: "Bạn nhận kinh nghiệm bằng cách gây sát thương cho kẻ thù. Kinh nghiệm dựa trên sát thương bạn gây ra, không phải số lần bạn đánh chúng hoặc số lượng bạn giết.",
    specialNotes: "Liên tục nhận kinh nghiệm trong cùng một khu vực (chunk) làm giảm đáng kể kinh nghiệm nhận được sau một số lần nhất định. Điều này nhằm mục đích làm giảm hiệu quả của các farm mob.",
    perks: "Vũ Khí Nhẹ cung cấp đỡ đòn (parrying), sát thương, đòn chí mạng, giảm miễn nhiễm, bọc vũ khí (weapon coating), v.v.",
    abilities: [
      {
        name: "Đỡ Đòn (Parry)",
        usage: "Chuột phải trong khi cầm vũ khí nhẹ.",
        description: "Sau khi kích hoạt, nếu bạn bị tấn công bởi một đòn đánh cận chiến hoặc đường đạn trong một khoảng thời gian ngắn sau khi kích hoạt, bạn giảm (hoặc vô hiệu hóa) sát thương nhận được và làm cho kẻ tấn công choáng (nếu đỡ đòn cận chiến)."
      },
      {
        name: "Bọc Vũ Khí (Weapon Coating)",
        usage: "Kéo và thả một lọ thuốc vào vũ khí nhẹ trong kho đồ của bạn bằng chuột phải.",
        description: "Áp dụng hiệu ứng thuốc đã cho lên vũ khí, cho phép nó gây hiệu ứng thuốc đó lên các thực thể bị sát thương trong một vài cú đánh. Hiệu ứng bị giảm đáng kể thời gian tác dụng."
      }
    ]
  },
  {
    name: "Vũ Khí Nặng",
    icon: "⚒",
    description: "Vũ Khí Nặng là sự thành thạo của bạn trong việc chiến đấu bằng vũ khí nặng. Kỹ năng Vũ Khí Nặng của bạn càng cao, bạn càng gây nhiều sát thương hơn với chúng. Vũ khí nặng là lớp vũ khí tấn công mạnh nhất trong số vũ khí nhẹ và nặng, hưởng lợi từ sát thương và lực đẩy (knockback) cao, nhưng bị ảnh hưởng về tốc độ tấn công.",
    howToGainExp: "Bạn nhận kinh nghiệm bằng cách gây sát thương cho kẻ thù. Kinh nghiệm dựa trên sát thương bạn gây ra, không phải số lần bạn đánh chúng hoặc số lượng bạn giết.",
    specialNotes: "Liên tục nhận kinh nghiệm trong cùng một khu vực (chunk) làm giảm đáng kể kinh nghiệm nhận được sau một số lần nhất định. Điều này nhằm mục đích làm giảm hiệu quả của các farm mob.",
    perks: "Vũ khí nặng cung cấp các đòn sức mạnh nâng cao, sát thương, đòn chí mạng, xuyên giáp (armor penetration), bọc vũ khí (weapon coating), v.v.",
    abilities: [
      {
        name: "Bọc Vũ Khí (Weapon Coating)",
        usage: "Kéo và thả một lọ thuốc vào vũ khí nặng trong kho đồ của bạn bằng chuột phải.",
        description: "Áp dụng hiệu ứng thuốc đã cho lên vũ khí, cho phép nó gây hiệu ứng thuốc đó lên các thực thể bị sát thương trong một vài cú đánh. Hiệu ứng bị giảm đáng kể thời gian tác dụng."
      }
    ]
  },
  {
    name: "Bắn Cung",
    icon: "🏹",
    description: "Bắn Cung là sự thành thạo của bạn trong chiến đấu tầm xa. Kỹ năng Bắn Cung của bạn càng cao, bạn càng gây nhiều sát thương hơn với cung và nỏ và bạn có thể bắn chính xác hơn.",
    howToGainExp: "Bạn nhận kinh nghiệm cho mỗi cú bắn trúng, lượng này tăng thêm dựa trên sát thương bạn gây ra với cú bắn đó VÀ khoảng cách giữa bạn và mục tiêu.",
    specialNotes: "Liên tục nhận kinh nghiệm trong cùng một khu vực (chunk) làm giảm đáng kể kinh nghiệm nhận được sau một số lần nhất định. Điều này nhằm mục đích làm giảm hiệu quả của các farm mob.",
    perks: "Bắn Cung cho phép truy cập vào sát thương, độ chính xác, đòn chí mạng, công thức mũi tên tùy chỉnh, giảm đạn, bắn tích lực (charged shots), v.v.",
    abilities: [
      {
        name: "Bắn Tích Lực (Charged Shot)",
        usage: "Shift-Chuột trái với cung (hoặc nỏ).",
        description: "Cấp cho bạn một số lượng điểm tích lũy. Bắn một mũi tên tiêu tốn một điểm tích lũy và cấp cho cú bắn đó sát thương, vận tốc, xuyên giáp (piercing), lực đẩy (knockback) bổ sung hoặc các buff khác."
      }
    ]
  },
  {
    name: "Giáp Nhẹ",
    icon: "🔹",
    description: "Giáp Nhẹ thể hiện khả năng tự bảo vệ của bạn khi sử dụng giáp ít bảo vệ hơn nhưng nhẹ hơn. Giáp Nhẹ không làm bạn chậm lại nhiều như Giáp Nặng và tốt hơn cho người chơi thích di chuyển linh hoạt và có thể thoát khỏi các tình huống dễ dàng hơn, nhưng kém hiệu quả hơn trong việc bảo vệ khỏi sát thương.",
    howToGainExp: "Bạn nhận EXP cho mỗi điểm sát thương bạn nhận.",
    specialNotes: "Theo mặc định, giáp nhẹ làm bạn chậm lại 3.75% mỗi miếng, hoặc 15% với bộ đầy đủ.",
    perks: "Giáp Nhẹ cung cấp tiền thưởng giáp, tỷ lệ né tránh (dodge chance), giảm tiêu thụ đói (hunger consumption reduction), tiền thưởng bộ (set bonuses), Adrenaline, v.v.",
    abilities: [
      {
        name: "Adrenaline",
        usage: "Bị động (Passive).",
        description: "Khi máu của bạn đạt đến một ngưỡng phần trăm nhất định, Adrenaline được kích hoạt, cấp cho bạn các buff khác nhau giúp bạn thoát hiểm và hồi phục."
      }
    ]
  },
  {
    name: "Giáp Nặng",
    icon: "🔶",
    description: "Giáp Nặng thể hiện khả năng tự bảo vệ của bạn khi sử dụng giáp có độ bảo vệ cao nhưng nặng hơn. Giáp Nặng làm bạn chậm lại đáng kể nhưng tốt hơn nhiều cho người chơi thích ở lại trong trận chiến và gây sát thương nhiều nhất có thể, nhưng sẽ đặt bạn vào thế bất lợi nếu bạn cần rút lui.",
    howToGainExp: "Bạn nhận EXP cho mỗi điểm sát thương bạn nhận.",
    specialNotes: "Theo mặc định, giáp nặng làm bạn chậm lại 7.5% mỗi miếng, hoặc 30% với bộ đầy đủ.",
    perks: "Giáp Nặng cung cấp tiền thưởng giáp, phản sát thương (damage reflection), hồi máu (health regeneration), tiền thưởng bộ (set bonuses), Rage, v.v.",
    abilities: [
      {
        name: "Rage",
        usage: "Bị động (Passive).",
        description: "Khi máu của bạn đạt đến một ngưỡng phần trăm nhất định, Rage được kích hoạt, cấp cho bạn các buff khác nhau giúp bạn chiến đấu hiệu quả hơn nữa và ở lại trong trận chiến lâu hơn."
      }
    ]
  }
];

export const skillCategories = {
  gathering: ["Khai Thác", "Chặt Gỗ", "Đào Đất", "Câu Cá"],
  crafting: ["Rèn", "Phù Phép", "Giả Kim"],
  combat: ["Vũ Khí Nhẹ", "Vũ Khí Nặng", "Bắn Cung"],
  armor: ["Giáp Nhẹ", "Giáp Nặng"],
  farming: ["Làm Ruộng"],
  power: ["Sức Mạnh"]
};
