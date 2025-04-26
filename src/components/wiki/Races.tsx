
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const races = [
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
      },
      // ... add all other monster races with their abilities
    ]
  },
  {
    category: "Humanoid Races",
    items: [
      {
        name: "Human",
        abilities: ["Trải nghiệm thông thường, không có ưu điểm hay nhược điểm"]
      },
      // ... add all other humanoid races
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
      },
      // ... add other magical races
    ]
  }
];

const Races = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Tộc</h2>
      
      <Tabs defaultValue="monster" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monster">Quái vật</TabsTrigger>
          <TabsTrigger value="humanoid">Nhân loại</TabsTrigger>
          <TabsTrigger value="magical">Ma thuật</TabsTrigger>
        </TabsList>

        {races.map((category, idx) => (
          <TabsContent key={idx} value={category.category.toLowerCase().split(" ")[0]}>
            <ScrollArea className="h-[600px] rounded-md border p-4">
              <div className="grid grid-cols-1 gap-4">
                {category.items.map((race, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-bold mb-2 text-[#259e63] dark:text-[#55FFFF]">
                        {race.name}
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        {race.abilities.map((ability, i) => (
                          <li key={i} className="text-gray-700 dark:text-gray-300">
                            {ability}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Races;
