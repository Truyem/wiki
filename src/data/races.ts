
export interface Race {
  name: string;
  abilities: string[];
}

export interface RaceCategory {
  category: string;
  items: Race[];
}

export const races: RaceCategory[] = [
  {
    category: "Monster Races",
    items: [
      {
        name: "Bee",
        abilities: [
          "Cứ sau 5 giây, bạn có thể đánh trúng thứ gì đó để làm nó trúng độc",
          "Nếu bạn ở gần hoa, bạn nhận được hồi máu",
          "Ong không tức giận với bạn khi lấy mật ong",
          "Bạn có ít hơn 2 trái tim so với con người",
          "Bạn không thể ăn thịt (không cung cấp độ no và gây độc cho bạn)"
        ]
      }
    ]
  },
  {
    category: "Humanoid Races",
    items: [
      {
        name: "Human",
        abilities: ["Trải nghiệm thông thường, không có ưu điểm hay nhược điểm"]
      }
    ]
  },
  {
    category: "Magical Races",
    items: [
      {
        name: "Alchemist",
        abilities: [
          "Độc dược bạn uống và ném mạnh hơn một cấp và kéo dài gấp đôi thời gian",
          "Click phải vào đồng với tay không để biến nó thành vàng, và ngược lại",
          "Bạn chỉ gây ra 0.75x sát thương",
          "Bạn chỉ có 3 trái tim khi chạm vào nước"
        ]
      }
    ]
  }
];
