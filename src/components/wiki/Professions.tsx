
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sword, 
  Axe, 
  Target, 
  FlaskRound, 
  Hammer, 
  Pickaxe, 
  Wheat, 
  TreePine 
} from "lucide-react";

interface ProfessionProps {
  name: string;
  englishName: string;
  description: string;
  abilities: string[];
  icon: React.ReactNode;
  category: "combat" | "specialist" | "harvester";
}

const ProfessionCard = ({ profession }: { profession: ProfessionProps }) => {
  // Define category-specific colors
  const categoryColors = {
    combat: {
      bg: "bg-[#fff1f2] dark:bg-[#ea384c]/20",
      border: "border-[#ea384c]",
      text: "text-[#ea384c]",
      icon: "text-[#ea384c]"
    },
    specialist: {
      bg: "bg-[#E5DEFF] dark:bg-[#9b87f5]/20",
      border: "border-[#9b87f5]",
      text: "text-[#7E69AB] dark:text-[#9b87f5]",
      icon: "text-[#7E69AB] dark:text-[#9b87f5]"
    },
    harvester: {
      bg: "bg-[#FEF7CD] dark:bg-[#eab308]/20",
      border: "border-[#eab308]",
      text: "text-amber-600 dark:text-amber-400",
      icon: "text-amber-600 dark:text-amber-400"
    }
  };

  const colors = categoryColors[profession.category];
  
  return (
    <Card className={`mb-6 bg-white dark:bg-gray-800 ${colors.border} dark:border-opacity-20`}>
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className={`p-2 ${colors.bg} rounded-lg`}>
            {React.cloneElement(profession.icon as React.ReactElement, {
              className: colors.icon
            })}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-bold flex items-center gap-2 ${colors.text}`}>
                {profession.name} 
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  ({profession.englishName})
                </span>
              </h3>
              <Badge className={`${
                profession.category === "combat" ? "bg-[#ea384c]/80 hover:bg-[#ea384c]" :
                profession.category === "specialist" ? "bg-[#9b87f5]/80 hover:bg-[#9b87f5]" :
                "bg-amber-500/80 hover:bg-amber-500"
              }`}>
                {profession.category === "combat" ? "Chiến Đấu" :
                 profession.category === "specialist" ? "Chuyên Gia" :
                 "Thu Hoạch"}
              </Badge>
            </div>
            <p className="mt-2 mb-4 text-sm dark:text-gray-300">{profession.description}</p>
            
            <div>
              <h4 className={`text-sm font-semibold mb-2 ${colors.text}`}>Khả năng:</h4>
              <ul className="list-none pl-0 space-y-1">
                {profession.abilities.map((ability, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className={colors.text}>✦</span>
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Professions = () => {
  const professions: ProfessionProps[] = [
    {
      name: "Lính Đánh Thuê",
      englishName: "Warrior",
      description: "Lính Đánh Thuê là những chiến binh cơ hội, những người ưa thích sự an toàn của lưỡi kiếm nhẹ và lớp phòng thủ nặng.",
      abilities: [
        "+10% Giáp",
        "+5% Sát Thương Cận Chiến"
      ],
      icon: <Sword size={24} />,
      category: "combat"
    },
    {
      name: "Sơn Tặc",
      englishName: "Barbarian",
      description: "Sơn Tặc là những chiến binh không ngừng nghỉ, những người thích tiêu diệt kẻ thù của mình bằng sức mạnh tuyệt đối và vũ lực.",
      abilities: [
        "+20% Kháng Hiệu Ứng Đẩy Lùi",
        "+10% Sát Thương Cận Chiến"
      ],
      icon: <Axe size={24} />,
      category: "combat"
    },
    {
      name: "Lính Gác Rừng",
      englishName: "Ranger",
      description: "Lính Gác Rừng là những sát thủ lén lút, những người thích không chiến đấu tầm gần chút nào và thay vào đó hạ gục kẻ thù của họ từ một khoảng cách an toàn.",
      abilities: [
        "+2 Độ Chính Xác",
        "+10% Sát Thương Tầm Xa"
      ],
      icon: <Target size={24} />,
      category: "combat"
    },
    {
      name: "Nhà Giả Kim",
      englishName: "Alchemist",
      description: "Nhà Giả Kim là những nhà hóa học tài ba, có khả năng biến đổi vật liệu thành cái khác, làm tan chảy kẻ thù bằng thuốc độc, và hỗ trợ đồng đội bằng khả năng hồi máu và buff.",
      abilities: [
        "+25 Chất Lượng Thuốc",
        "+50% Tốc Độ Pha Chế"
      ],
      icon: <FlaskRound size={24} />,
      category: "specialist"
    },
    {
      name: "Phù Thuỷ",
      englishName: "Enchanter",
      description: "Phù Thuỷ là những học giả về phép thuật, có khả năng truyền phép vào vật phẩm để tăng cường sức mạnh của chúng.",
      abilities: [
        "+25 Chất Lượng Phù Phép",
        "+20% Kinh Nghiệm Phù Phép"
      ],
      icon: <Wand size={24} />,
      category: "specialist"
    },
    {
      name: "Thợ Rèn",
      englishName: "Blacksmith",
      description: "Thợ Rèn là những chuyên gia về kim loại, tạo ra các công cụ và giáp bền hơn và những lưỡi kiếm sắc bén, cân bằng tốt.",
      abilities: [
        "+25 Chất Lượng Rèn Đúc",
        "-20% Độ Bền Bị Giảm Ít Hơn"
      ],
      icon: <Hammer size={24} />,
      category: "specialist"
    },
    {
      name: "Thợ Mỏ",
      englishName: "Miner",
      description: "Thợ Mỏ lặn sâu vào lòng đất, tìm kiếm của cải, và đóng vai trò là xương sống của ngành công nghiệp.",
      abilities: [
        "+30% Tốc Độ Đào Mỏ",
        "+10% Phần Thưởng Đào Mỏ"
      ],
      icon: <Pickaxe size={24} />,
      category: "harvester"
    },
    {
      name: "Nông Dân-Ngư Phủ",
      englishName: "Farmer-Fisherman",
      description: "Nông Dân sống một cuộc sống yên bình, giản dị cung cấp lương thực cho thành phố của họ và những báu vật từ đại dương.",
      abilities: [
        "+3 May Mắn Khi Câu Cá",
        "+30% Phần Thưởng Trồng Trọt",
        "+20% Tốc Độ Câu Cá"
      ],
      icon: <Wheat size={24} />,
      category: "harvester"
    },
    {
      name: "Người Kiến Tạo Địa Hình",
      englishName: "Terraformer",
      description: "Người Kiến Tạo Địa Hình xây dựng, định hình, và duy trì thế giới xung quanh họ. Phù hợp nhất cho những người sáng tạo.",
      abilities: [
        "+50% Phần Thưởng Đốn Gỗ",
        "+30% Tốc Độ Đốn Gỗ và Đào Đất"
      ],
      icon: <TreePine size={24} />,
      category: "harvester"
    }
  ];

  // Group professions by category
  const combatProfessions = professions.filter(p => p.category === "combat");
  const specialistProfessions = professions.filter(p => p.category === "specialist");
  const harvesterProfessions = professions.filter(p => p.category === "harvester");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[#259e63] dark:text-[#55FFFF]">Nghề Nghiệp</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Chọn một nghề nghiệp phù hợp với phong cách chơi của bạn. Mỗi nghề nghiệp cung cấp những khả năng độc đáo để giúp bạn trong hành trình của mình.
      </p>
      
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-6 dark:bg-amber-900/20 dark:border-amber-800">
        <p className="text-amber-800 dark:text-amber-300 font-medium">
          <strong>Lưu ý:</strong> Bạn được phép chọn 3 nghề nghiệp, mỗi lớp từ một nhánh lối chơi khác nhau: Chiến Đấu (Combat), Chuyên Gia (Specialist), và Thu Hoạch (Harvester).
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#ea384c] border-b border-[#ea384c]/30 pb-2">
            Nghề Nghiệp Chiến Đấu (Combat)
          </h3>
          <div className="space-y-6">
            {combatProfessions.map((profession) => (
              <ProfessionCard key={profession.name} profession={profession} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#7E69AB] dark:text-[#9b87f5] border-b border-[#9b87f5]/30 pb-2">
            Nghề Nghiệp Chuyên Gia (Specialist)
          </h3>
          <div className="space-y-6">
            {specialistProfessions.map((profession) => (
              <ProfessionCard key={profession.name} profession={profession} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-600 dark:text-amber-400 border-b border-amber-200 pb-2">
            Nghề Nghiệp Thu Hoạch (Harvester)
          </h3>
          <div className="space-y-6">
            {harvesterProfessions.map((profession) => (
              <ProfessionCard key={profession.name} profession={profession} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professions;
