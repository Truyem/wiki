
import { Card, CardContent } from "@/components/ui/card";

const GatheringSkills = () => {
  const gatheringSkills = [
    {
      name: "Khai Thác",
      icon: "⛏",
      description: "Khai Thác là sự thành thạo trong việc thu thập tài nguyên từ đá và quặng, giúp khai thác nhiều tài nguyên hơn.",
      abilities: [
        {
          name: "Khai Thác Mạch (Vein Mining)",
          usage: "Nhón (Sneak) khi khai thác quặng",
          description: "Khai thác tức thời một cụm khối quặng đang kết nối với nhau."
        },
        {
          name: "Khoan (Drilling)",
          usage: "Nhón (Sneak) và chuột phải khi cầm cuốc",
          description: "Tăng đáng kể tốc độ khai thác trong thời gian ngắn. Có thời gian hồi."
        }
      ]
    },
    {
      name: "Chặt Gỗ",
      icon: "🪓",
      description: "Chặt Gỗ giúp khai thác nhiều tài nguyên hơn từ rừng, xây dựng rẻ hơn và thưởng táo vàng, táo pha lê.",
      abilities: [
        {
          name: "Chặt Cây (Tree Capitator)",
          usage: "Nhón (Sneak) khi chặt gốc cây",
          description: "Chặt tức thời cả cây và làm lá phân rã nhanh chóng."
        }
      ]
    },
    {
      name: "Đào Đất",
      icon: "🌍",
      description: "Đào Đất giúp khai thác nhiều tài nguyên hơn từ đất và cát, cùng phương pháp thay thế nhận tài nguyên không tái tạo.",
      abilities: []
    },
    {
      name: "Câu Cá",
      icon: "🐟",
      description: "Câu Cá giúp câu nhanh hơn, bắt được nhiều hơn, câu phải rác ít hơn và có khả năng tái chế trang bị.",
      abilities: []
    }
  ];

  return (
    <div className="space-y-6">
      {gatheringSkills.map((skill) => (
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

export default GatheringSkills;
