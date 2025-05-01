
import { Card, CardContent } from "@/components/ui/card";
import { Sword, Axe, Ranger, FlaskRound, Hammer, Mining, Farmer, Terraformer } from "lucide-react";

interface ProfessionProps {
  name: string;
  englishName: string;
  description: string;
  abilities: string[];
  icon: React.ReactNode;
}

const ProfessionCard = ({ profession }: { profession: ProfessionProps }) => {
  return (
    <Card className="mb-6 bg-white dark:bg-gray-800 border-[#259e63] dark:border-[#55FFFF]/20">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#e6f7ef] dark:bg-[#259e63]/30 rounded-lg">
            {profession.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2 text-[#259e63] dark:text-[#55FFFF]">
              {profession.name} 
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                ({profession.englishName})
              </span>
            </h3>
            <p className="mt-2 mb-4 text-sm dark:text-gray-300">{profession.description}</p>
            
            <div>
              <h4 className="text-sm font-semibold mb-2 text-[#259e63] dark:text-[#55FFFF]">Khả năng:</h4>
              <ul className="list-none pl-0 space-y-1">
                {profession.abilities.map((ability, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">✦</span>
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
      icon: <Sword size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Sơn Tặc",
      englishName: "Barbarian",
      description: "Sơn Tặc là những chiến binh không ngừng nghỉ, những người thích tiêu diệt kẻ thù của mình bằng sức mạnh tuyệt đối và vũ lực.",
      abilities: [
        "+20% Kháng Hiệu Ứng Đẩy Lùi",
        "+10% Sát Thương Cận Chiến"
      ],
      icon: <Axe size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Lính Gác Rừng",
      englishName: "Ranger",
      description: "Lính Gác Rừng là những sát thủ lén lút, những người thích không chiến đấu tầm gần chút nào và thay vào đó hạ gục kẻ thù của họ từ một khoảng cách an toàn.",
      abilities: [
        "+2 Độ Chính Xác",
        "+10% Sát Thương Tầm Xa"
      ],
      icon: <Ranger size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Nhà Giả Kim",
      englishName: "Alchemist",
      description: "Nhà Giả Kim là những nhà hóa học tài ba, có khả năng biến đổi vật liệu thành cái khác, làm tan chảy kẻ thù bằng thuốc độc, và hỗ trợ đồng đội bằng khả năng hồi máu và buff.",
      abilities: [
        "+25 Chất Lượng Thuốc",
        "+50% Tốc Độ Pha Chế"
      ],
      icon: <FlaskRound size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Phù Thuỷ",
      englishName: "Enchanter",
      description: "Phù Thuỷ là những học giả về phép thuật, có khả năng truyền phép vào vật phẩm để tăng cường sức mạnh của chúng.",
      abilities: [
        "+25 Chất Lượng Phù Phép",
        "+20% Kinh Nghiệm Phù Phép"
      ],
      icon: <FlaskRound size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Thợ Rèn",
      englishName: "Blacksmith",
      description: "Thợ Rèn là những chuyên gia về kim loại, tạo ra các công cụ và giáp bền hơn và những lưỡi kiếm sắc bén, cân bằng tốt.",
      abilities: [
        "+25 Chất Lượng Rèn Đúc",
        "-20% Độ Bền Bị Giảm Ít Hơn"
      ],
      icon: <Hammer size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Thợ Mỏ",
      englishName: "Miner",
      description: "Thợ Mỏ lặn sâu vào lòng đất, tìm kiếm của cải, và đóng vai trò là xương sống của ngành công nghiệp.",
      abilities: [
        "+30% Tốc Độ Đào Mỏ",
        "+10% Phần Thưởng Đào Mỏ"
      ],
      icon: <Mining size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
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
      icon: <Farmer size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    },
    {
      name: "Người Kiến Tạo Địa Hình",
      englishName: "Terraformer",
      description: "Người Kiến Tạo Địa Hình xây dựng, định hình, và duy trì thế giới xung quanh họ. Phù hợp nhất cho những người sáng tạo.",
      abilities: [
        "+50% Phần Thưởng Đốn Gỗ",
        "+30% Tốc Độ Đốn Gỗ và Đào Đất"
      ],
      icon: <Terraformer size={24} className="text-[#259e63] dark:text-[#55FFFF]" />
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[#259e63] dark:text-[#55FFFF]">Nghề Nghiệp</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Chọn một nghề nghiệp phù hợp với phong cách chơi của bạn. Mỗi nghề nghiệp cung cấp những khả năng độc đáo để giúp bạn trong hành trình của mình.
      </p>
      
      <div className="space-y-6">
        {professions.map((profession) => (
          <ProfessionCard key={profession.name} profession={profession} />
        ))}
      </div>
    </div>
  );
};

export default Professions;
