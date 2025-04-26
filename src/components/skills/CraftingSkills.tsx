
import { Card, CardContent } from "@/components/ui/card";

const CraftingSkills = () => {
  const craftingSkills = [
    {
      name: "Rèn",
      icon: "🛠",
      description: "Rèn là sự thành thạo trong việc chế tạo công cụ/giáp. Càng cao cấp, chất lượng trang bị càng tốt.",
      abilities: []
    },
    {
      name: "Phù Phép",
      icon: "🎇",
      description: "Phù Phép là sự thành thạo trong việc phù phép trang bị. Càng cao cấp, phù phép càng mạnh.",
      abilities: [
        {
          name: "Hexblade",
          usage: "Đổi tay khi cầm vũ khí để bật/tắt",
          description: "Chuyển đổi một phần sát thương thành sát thương nguyên tố cao hơn, tiêu tốn một lượng nhỏ EXP."
        }
      ]
    },
    {
      name: "Giả Kim",
      icon: "⚗",
      description: "Giả Kim là sự thành thạo trong việc pha chế thuốc. Càng cao cấp, thuốc càng mạnh.",
      abilities: [
        {
          name: "Hợp Nhất Thuốc (Potion Merging)",
          usage: "Kéo và thả thuốc vào thuốc khác bằng chuột phải",
          description: "Kết hợp hiệu ứng của hai loại thuốc thành một, giảm nhẹ thời gian tác dụng."
        }
      ]
    },
    {
      name: "Làm Ruộng",
      icon: "🌾",
      description: "Làm Ruộng là sự thành thạo trong trồng trọt và chăn nuôi. Càng cao cấp, khai thác nhiều thực phẩm hơn.",
      abilities: [
        {
          name: "Thu Hoạch Tức Thời (Instant Harvest)",
          usage: "Chuột phải vào cây trồng",
          description: "Thu hoạch và trồng lại cây trồng mà không cần phá vỡ nó."
        },
        {
          name: "Thu Hoạch Cánh Đồng (Field Harvest)",
          usage: "Nhón (Sneak) và chuột phải vào cây trồng",
          description: "Thu hoạch một cánh đồng cây trồng lớn gần như tức thời."
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {craftingSkills.map((skill) => (
        <Card key={skill.name} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{skill.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00]">{skill.name}</h3>
                <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                
                {skill.abilities && skill.abilities.length > 0 && (
                  <div className="mt-4 space-y-3">
                    <h4 className="text-md font-medium text-[#259e63] dark:text-[#55FFFF]">Khả năng:</h4>
                    <div className="space-y-3">
                      {skill.abilities.map((ability) => (
                        <div key={ability.name} className="pl-4 border-l-2 border-[#259e63] dark:border-[#55FFFF]">
                          <h5 className="font-medium">{ability.name}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-semibold">Cách sử dụng:</span> {ability.usage}
                          </p>
                          <p className="text-sm text-gray-700 dark:text-gray-300">{ability.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CraftingSkills;
