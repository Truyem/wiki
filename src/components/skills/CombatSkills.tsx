
import { Card, CardContent } from "@/components/ui/card";

const CombatSkills = () => {
  const combatSkills = [
    {
      name: "Vũ Khí Nhẹ",
      icon: "⚔",
      description: "Vũ Khí Nhẹ là sự thành thạo của bạn trong việc chiến đấu bằng vũ khí nhẹ. Kỹ năng càng cao, gây nhiều sát thương hơn với vũ khí nhẹ.",
      abilities: [
        {
          name: "Đỡ Đòn (Parry)",
          usage: "Chuột phải trong khi cầm vũ khí nhẹ",
          description: "Khi kích hoạt, nếu bạn bị tấn công trong thời gian ngắn sau đó, bạn giảm sát thương nhận được và làm kẻ tấn công choáng."
        },
        {
          name: "Bọc Vũ Khí (Weapon Coating)",
          usage: "Kéo và thả thuốc vào vũ khí trong kho đồ",
          description: "Áp dụng hiệu ứng thuốc lên vũ khí, gây hiệu ứng đó lên kẻ thù trong vài cú đánh."
        }
      ]
    },
    {
      name: "Vũ Khí Nặng",
      icon: "⚒",
      description: "Vũ Khí Nặng là sự thành thạo trong chiến đấu với vũ khí nặng, mang lại sát thương và lực đẩy cao, nhưng chậm hơn.",
      abilities: [
        {
          name: "Bọc Vũ Khí (Weapon Coating)",
          usage: "Kéo và thả thuốc vào vũ khí trong kho đồ",
          description: "Áp dụng hiệu ứng thuốc lên vũ khí, gây hiệu ứng đó lên kẻ thù trong vài cú đánh."
        }
      ]
    },
    {
      name: "Bắn Cung",
      icon: "🏹",
      description: "Bắn Cung là sự thành thạo trong chiến đấu tầm xa. Càng cao cấp, gây nhiều sát thương hơn và bắn chính xác hơn.",
      abilities: [
        {
          name: "Bắn Tích Lực (Charged Shot)",
          usage: "Shift-Chuột trái với cung/nỏ",
          description: "Tích lũy điểm. Bắn mũi tên tiêu điểm và tăng sát thương, vận tốc, xuyên giáp và các buff khác."
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {combatSkills.map((skill) => (
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

export default CombatSkills;
