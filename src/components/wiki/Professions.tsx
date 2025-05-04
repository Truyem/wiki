import React, { isValidElement } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sword, Axe, Target,
  FlaskRound, Wand, Hammer,
  Pickaxe, Wheat, TreePine,
  ShieldCheck, Crosshair, Sparkles,
  Coins, ScrollText, PawPrint,
  Swords, ShieldEllipsis, Zap,
  HeartPulse, Footprints, Mountain,
  Skull, Flame, Droplet,
  Users, Gem, Music
} from "lucide-react";

interface ProfessionColors {
  bg: string;
  border: string;
  text: string;
  icon: string;
  branchText: string;
  branchBorder: string;
}

interface ProfessionProps {
  name: string;
  englishName: string;
  branchName: string;
  description: string;
  abilities: string[];
  icon?: React.ReactNode;
  colors?: ProfessionColors;
}

const colorSchemes: Record<string, ProfessionColors> = {
  red: {
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-500",
    text: "text-red-600 dark:text-red-400",
    icon: "text-red-600 dark:text-red-400",
    branchText: "text-red-700 dark:text-red-500",
    branchBorder: "border-red-500",
  },
  lightPurple: {
    bg: "bg-purple-50 dark:bg-purple-900/30",
    border: "border-purple-400",
    text: "text-purple-600 dark:text-purple-400",
    icon: "text-purple-600 dark:text-purple-400",
    branchText: "text-purple-700 dark:text-purple-500",
    branchBorder: "border-purple-500",
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-900/30",
    border: "border-teal-400",
    text: "text-teal-600 dark:text-teal-400",
    icon: "text-teal-600 dark:text-teal-400",
    branchText: "text-teal-700 dark:text-teal-500",
    branchBorder: "border-teal-500",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/30",
    border: "border-green-500",
    text: "text-green-600 dark:text-green-400",
    icon: "text-green-600 dark:text-green-400",
    branchText: "text-green-700 dark:text-green-500",
    branchBorder: "border-green-500",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/30",
    border: "border-amber-500",
    text: "text-amber-600 dark:text-amber-400",
    icon: "text-amber-600 dark:text-amber-400",
    branchText: "text-amber-700 dark:text-amber-500",
    branchBorder: "border-amber-500",
  },
  darkGray: {
    bg: "bg-gray-200 dark:bg-gray-700/50",
    border: "border-gray-500 dark:border-gray-600",
    text: "text-gray-700 dark:text-gray-300",
    icon: "text-gray-700 dark:text-gray-300",
    branchText: "text-gray-800 dark:text-gray-400",
    branchBorder: "border-gray-500",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-500",
    text: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-600 dark:text-blue-400",
    branchText: "text-blue-700 dark:text-blue-500",
    branchBorder: "border-blue-500",
  },
  gold: {
    bg: "bg-yellow-50 dark:bg-yellow-900/30",
    border: "border-yellow-500",
    text: "text-yellow-600 dark:text-yellow-400",
    icon: "text-yellow-600 dark:text-yellow-400",
    branchText: "text-yellow-700 dark:text-yellow-500",
    branchBorder: "border-yellow-500",
  },
  white: {
    bg: "bg-gray-50 dark:bg-gray-800",
    border: "border-gray-300 dark:border-gray-600",
    text: "text-gray-800 dark:text-gray-200",
    icon: "text-gray-600 dark:text-gray-400",
    branchText: "text-gray-700 dark:text-gray-300",
    branchBorder: "border-gray-400",
  },
  gray: {
    bg: "bg-gray-100 dark:bg-gray-700",
    border: "border-gray-400 dark:border-gray-500",
    text: "text-gray-600 dark:text-gray-300",
    icon: "text-gray-600 dark:text-gray-400",
    branchText: "text-gray-700 dark:text-gray-500",
    branchBorder: "border-gray-500",
  },
  darkGreen: {
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    border: "border-emerald-600",
    text: "text-emerald-700 dark:text-emerald-400",
    icon: "text-emerald-700 dark:text-emerald-400",
    branchText: "text-emerald-800 dark:text-emerald-500",
    branchBorder: "border-emerald-600",
  },
  darkPurple: {
    bg: "bg-violet-100 dark:bg-violet-900/30",
    border: "border-violet-600",
    text: "text-violet-700 dark:text-violet-400",
    icon: "text-violet-700 dark:text-violet-400",
    branchText: "text-violet-800 dark:text-violet-500",
    branchBorder: "border-violet-600",
  },
  darkRed: {
    bg: "bg-rose-100 dark:bg-rose-900/30",
    border: "border-rose-600",
    text: "text-rose-700 dark:text-rose-400",
    icon: "text-rose-700 dark:text-rose-400",
    branchText: "text-rose-800 dark:text-rose-500",
    branchBorder: "border-rose-600",
  },
  darkBlue: {
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    border: "border-indigo-600",
    text: "text-indigo-700 dark:text-indigo-400",
    icon: "text-indigo-700 dark:text-indigo-400",
    branchText: "text-indigo-800 dark:text-indigo-500",
    branchBorder: "border-indigo-600",
  },
  default: {
    bg: "bg-gray-100 dark:bg-gray-800",
    border: "border-gray-300 dark:border-gray-600",
    text: "text-gray-700 dark:text-gray-300",
    icon: "text-gray-500 dark:text-gray-400",
    branchText: "text-gray-800 dark:text-gray-200",
    branchBorder: "border-gray-400",
  }
};

const ProfessionCard = ({ profession }: { profession?: ProfessionProps }) => {
  const colors = profession?.colors || colorSchemes.default;

  if (!profession) {
    return (
      <Card className={`mb-6 ${colors.bg} ${colors.border} border dark:border-opacity-30 flex flex-col h-full`}>
        <CardContent className="pt-6 flex-grow">
          <p className={`${colors.text}`}>Error loading profession data.</p>
        </CardContent>
      </Card>
    );
  }

  const renderIcon = () => {
    if (profession.icon && isValidElement(profession.icon)) {
      return React.cloneElement(profession.icon,{
        className: `${colors.icon} w-6 h-6`
      });
    } 
    console.error("Invalid icon provided for profession:", profession.name, profession.icon);
    return null;
  };

  return (
    <Card className={`mb-6 ${colors.bg} ${colors.border} border dark:border-opacity-30 transition-shadow duration-300 hover:shadow-lg flex flex-col h-full`}>
      <CardContent className="pt-6 flex-grow">
        <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
          <div className={`p-2 ${colors.bg} rounded-lg flex-shrink-0 border ${colors.border} border-opacity-30`}>
            {renderIcon()}
          </div>
          <div className="flex-grow flex flex-col">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
              <h3 className={`text-lg font-bold ${colors.text}`}>
                {profession.name}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
                  ({profession.englishName})
                </span>
              </h3>
              <Badge
                variant="outline"
                className={`${colors.text} ${colors.border} border-opacity-70 ${colors.bg} py-0.5`}
              >
                {profession.branchName}
              </Badge>
            </div>
            <p className="mt-1 mb-4 text-sm text-gray-700 dark:text-gray-300 flex-grow">{profession.description}</p>
            <div className="mt-auto">
              <h4 className={`text-sm font-semibold mb-2 ${colors.text}`}>Khả năng:</h4>
              <ul className="list-none pl-0 space-y-1">
                {profession.abilities.map((ability, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className={`${colors.text} text-xs pt-1`}>✦</span>
                    <span>{ability}</span>
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
      name: "Lính Đánh Thuê", englishName: "Warrior", branchName: "Chiến Đấu Cơ Bản",
      description: "Lính Đánh Thuê là những chiến binh cơ hội, những người ưa thích sự an toàn của lưỡi kiếm nhẹ và lớp phòng thủ nặng.",
      abilities: ["+10% Giáp Hiệu Quả", "+5% Sát Thương Cận Chiến"],
      icon: <Sword className="text-red-600 dark:text-red-400"/>, colors: colorSchemes.red
    },
    {
      name: "Sơn Tặc", englishName: "Barbarian", branchName: "Chiến Đấu Cơ Bản",
      description: "Sơn Tặc là những chiến binh không ngừng nghỉ, những người thích tiêu diệt kẻ thù của mình bằng sức mạnh tuyệt đối và vũ lực.",
      abilities: ["+20% Kháng Hiệu Ứng Đẩy Lùi", "+10% Sát Thương Cận Chiến"],
      icon: <Axe />, colors: colorSchemes.red
    },
    {
      name: "Lính Gác Rừng", englishName: "Ranger", branchName: "Chiến Đấu Cơ Bản",
      description: "Lính Gác Rừng là những sát thủ lén lút, những người thích không chiến đấu tầm gần chút nào và thay vào đó hạ gục kẻ thù của họ từ một khoảng cách an toàn.",
      abilities: ["+2 Độ Chính Xác Tầm Xa", "+10% Sát Thương Tầm Xa"],
      icon: <Target />, colors: colorSchemes.red
    },
    {
      name: "Nhà Giả Kim", englishName: "Alchemist", branchName: "Chế Tạo & Ma Thuật",
      description: "Nhà Giả Kim là những nhà hóa học tài ba, có khả năng biến đổi vật liệu thành cái khác, làm tan chảy kẻ thù bằng thuốc độc, và hỗ trợ đồng đội bằng khả năng hồi máu và buff.",
      abilities: ["+25 Chất Lượng Thuốc", "+50% Tốc Độ Pha Chế"],
      icon: <FlaskRound className="text-purple-600 dark:text-purple-400" />, colors: colorSchemes.lightPurple
    },
    {
      name: "Phù Thuỷ", englishName: "Enchanter", branchName: "Chế Tạo & Ma Thuật",
      description: "Phù Thuỷ là những học giả về phép thuật, có khả năng truyền phép vào vật phẩm để tăng cường sức mạnh của chúng.",
      abilities: ["+25 Chất Lượng Phù Phép", "+20% Kinh Nghiệm Vanilla Nhận Được"],
      icon: <Wand />, colors: colorSchemes.teal
    },
    {
      name: "Thợ Rèn", englishName: "Blacksmith", branchName: "Chế Tạo & Ma Thuật",
      description: "Thợ Rèn là những chuyên gia về kim loại, tạo ra các công cụ và giáp bền hơn và những lưỡi kiếm sắc bén, cân bằng tốt.",
      abilities: ["+25 Chất Lượng Rèn Đúc", "+20% Cơ Hội Không Mất Độ Bền"],
      icon: <Hammer />, colors: colorSchemes.green
    },
    {
      name: "Thợ Mỏ", englishName: "Miner", branchName: "Thu Hoạch",
      description: "Thợ Mỏ lặn sâu vào lòng đất, tìm kiếm của cải, và đóng vai trò là xương sống của ngành công nghiệp.",
      abilities: ["+30% Tốc Độ Đào Mỏ", "+10% Phần Thưởng Đào Mỏ"],
      icon: <Pickaxe />, colors: colorSchemes.amber
    },
    {
      name: "Nông Dân-Ngư Phủ", englishName: "Farmer-Fisherman", branchName: "Thu Hoạch",
      description: "Nông Dân sống một cuộc sống yên bình, giản dị cung cấp lương thực cho thành phố của họ và những báu vật từ đại dương.",
      abilities: ["+3 May Mắn Khi Câu Cá", "+30% Phần Thưởng Trồng Trọt", "+20% Tốc Độ Câu Cá"],
      icon: <Wheat />, colors: colorSchemes.amber
    },
    {
      name: "Người Kiến Tạo Địa Hình", englishName: "Terraformer", branchName: "Thu Hoạch",
      description: "Người Kiến Tạo Địa Hình xây dựng, định hình, và duy trì thế giới xung quanh họ. Phù hợp nhất cho những người sáng tạo.",
      abilities: ["+50% Phần Thưởng Đốn Gỗ", "+30% Tốc Độ Đốn Gỗ và Đào Đất"],
      icon: <TreePine />, colors: colorSchemes.amber
    },
    {
      name: "Thánh Kỵ Sĩ", englishName: "Paladin", branchName: "Chiến Đấu Chuyên Sâu",
      description: "Thánh Kỵ Sĩ là những chiến binh công lý, bảo vệ kẻ yếu bằng sức mạnh thần thánh và khả năng chịu đựng phi thường.",
      abilities: ["+15% Kháng Sát Thương", "+10% Hồi Máu Hiệu Quả", "+5 Sát Thương Ánh Sáng"],
      icon: <ShieldCheck />, colors: colorSchemes.lightPurple
    },
    {
      name: "Sát Thủ", englishName: "Assassin", branchName: "Chiến Đấu Chuyên Sâu",
      description: "Sát Thủ là bóng ma trên chiến trường, ra đòn từ trong bóng tối với tốc độ và sự chính xác chết người.",
      abilities: ["+10% Tỷ Lệ Chí Mạng", "+25% Sát Thương Chí Mạng", "+10% Tốc Độ Di Chuyển Khi Lén Lút"],
      icon: <Crosshair />, colors: colorSchemes.darkGray
    },
    {
      name: "Pháp Sư Nguyên Tố", englishName: "Elementalist", branchName: "Chiến Đấu Chuyên Sâu",
      description: "Pháp Sư Nguyên Tố điều khiển sức mạnh tự nhiên, triệu hồi lửa, băng và sấm sét để thiêu rụi hoặc đóng băng kẻ thù.",
      abilities: ["+15% Sát Thương Phép Thuật", "+10% Kháng Phép Thuật", "-10% Thời Gian Hồi Chiêu"],
      icon: <Sparkles />, colors: colorSchemes.blue
    },
    {
      name: "Thương Nhân", englishName: "Merchant", branchName: "Tiện Ích & Kinh Tế",
      description: "Thương Nhân là bậc thầy của giao thương, luôn tìm kiếm những món hời và có con mắt tinh tường với những vật phẩm giá trị.",
      abilities: ["+2 May Mắn Chung", "+15% Vật Phẩm Rơi Từ Mob", "+10% Tốc Độ Di Chuyển"],
      icon: <Coins />, colors: colorSchemes.gold
    },
    {
      name: "Học Giả", englishName: "Scholar", branchName: "Tiện Ích & Kinh Tế",
      description: "Học Giả dành cả đời để nghiên cứu tri thức, khám phá những bí ẩn cổ xưa và nhanh chóng tiếp thu kinh nghiệm.",
      abilities: ["+15% Kinh Nghiệm Toàn Cục", "+10% Cơ Hội Tiết Kiệm Lapis", "+10% Cơ Hội Tiết Kiệm Nguyên Liệu Pha Thuốc"],
      icon: <ScrollText />, colors: colorSchemes.white
    },
    {
      name: "Người Thuần Hóa", englishName: "Tamer", branchName: "Tiện Ích & Kinh Tế",
      description: "Người Thuần Hóa có sự đồng cảm đặc biệt với động vật, có thể huấn luyện chúng trở thành bạn đồng hành trung thành và mạnh mẽ trên chiến trường.",
      abilities: ["+20% Sát Thương Khi Cưỡi", "+10% Tốc Độ Di Chuyển (Chung)", "+15% Vật Phẩm Rơi Từ Động Vật"],
      icon: <PawPrint />, colors: colorSchemes.green
    },
    {
      name: "Chiến Pháp Sư", englishName: "Spellblade", branchName: "Chiến Đấu Nâng Cao",
      description: "Chiến Pháp Sư kết hợp kiếm thuật điêu luyện với năng lượng bí thuật, cường hóa vũ khí và tung ra những đòn đánh ma thuật.",
      abilities: ["+8% Sát Thương Cận Chiến", "+5% Sát Thương Phép Thuật Gây Ra", "+5% Tốc Độ Tấn Công"],
      icon: <Swords />, colors: colorSchemes.darkBlue
    },
    {
      name: "Hộ Vệ", englishName: "Guardian", branchName: "Chiến Đấu Nâng Cao",
      description: "Hộ Vệ là bức tường thép không thể xuyên thủng, đứng vững trước mọi đòn tấn công để bảo vệ đồng đội và kiểm soát chiến trường.",
      abilities: ["+10% Giáp Nặng Hiệu Quả", "+10% Máu Tối Đa", "+2 Độ Dai Sức (Toughness)"],
      icon: <ShieldEllipsis />, colors: colorSchemes.gray
    },
    {
      name: "Kiếm Sĩ", englishName: "Duelist", branchName: "Chiến Đấu Nâng Cao",
      description: "Kiếm Sĩ là bậc thầy của sự khéo léo và phản xạ, né tránh đòn tấn công của đối thủ và phản công với những nhát kiếm chính xác, nhanh như chớp.",
      abilities: ["+8% Cơ Hội Né Tránh", "+10% Tốc Độ Tấn Công", "+0.5s Thời Gian Đỡ Đòn Hiệu Quả"],
      icon: <Zap />, colors: colorSchemes.amber
    },
    {
      name: "Tu Sĩ Rừng Xanh", englishName: "Druid", branchName: "Tương Tác Tự Nhiên",
      description: "Tu Sĩ Rừng Xanh mượn sức mạnh từ thiên nhiên, chữa lành vết thương cho đồng minh, kháng lại độc tố và hiểu biết sâu sắc về hệ sinh thái.",
      abilities: ["+15% Hồi Máu Hiệu Quả", "+15% Kháng Độc", "+10% Kinh Nghiệm Trồng Trọt"],
      icon: <HeartPulse />, colors: colorSchemes.darkGreen
    },
    {
      name: "Nhà Sinh Tồn", englishName: "Survivalist", branchName: "Tương Tác Tự Nhiên",
      description: "Nhà Sinh Tồn là bậc thầy của môi trường hoang dã, có khả năng chịu đựng phi thường, di chuyển nhanh nhẹn và tìm thấy tài nguyên ở những nơi khắc nghiệt nhất.",
      abilities: ["+10% Cơ Hội Tiết Kiệm Thức Ăn", "+5% Tốc Độ Di Chuyển", "+15% Kháng Sát Thương Rơi"],
      icon: <Footprints />, colors: colorSchemes.gold
    },
    {
      name: "Địa Thuật Sư", englishName: "Geomancer", branchName: "Tương Tác Tự Nhiên",
      description: "Địa Thuật Sư điều khiển sức mạnh của đất đá, khai thác tài nguyên hiệu quả hơn, tăng cường phòng thủ và chống chịu những đòn tấn công vật lý mạnh mẽ.",
      abilities: ["+2 May Mắn Khi Khai Mỏ", "+10% Kháng Sát Thương Dạng Đập", "+10% Tốc Độ Đào"],
      icon: <Mountain />, colors: colorSchemes.darkGray
    },
    {
      name: "Kẻ Gọi Hồn", englishName: "Necromancer", branchName: "Nghệ Thuật Hắc Ám",
      description: "Kẻ Gọi Hồn thao túng năng lượng tử vong, hút sinh lực từ kẻ thù, gây ra sự hoại tử và chống lại sức mạnh hắc ám.",
      abilities: ["+15% Sát Thương Hoại Tử Gây Ra", "+3% Hút Máu", "+10% Kháng Hoại Tử"],
      icon: <Skull />, colors: colorSchemes.darkPurple
    },
    {
      name: "Phù Thủy Hắc Ám", englishName: "Warlock", branchName: "Nghệ Thuật Hắc Ám",
      description: "Phù Thủy Hắc Ám sử dụng những lời nguyền độc địa, triệu hồi ngọn lửa địa ngục và chất độc chết người để làm suy yếu và hủy diệt kẻ thù.",
      abilities: ["+10% Sát Thương Lửa Gây Ra", "+3 Sát Thương Độc Thêm", "+5% Bỏ Qua Giáp (Tỷ Lệ)"],
      icon: <Flame />, colors: colorSchemes.darkRed
    },
    {
      name: "Pháp Sư Huyết Thuật", englishName: "Blood Mage", branchName: "Nghệ Thuật Hắc Ám",
      description: "Pháp Sư Huyết Thuật biến đổi sinh lực thành sức mạnh, gây chảy máu không ngừng cho kẻ địch và sở hữu nguồn sinh lực dồi dào để thực hiện ma pháp.",
      abilities: ["+10% Cơ Hội Gây Chảy Máu", "+2 Sát Thương Chảy Máu Mỗi Tick", "+10 Máu Tối Đa Cộng Thêm"],
      icon: <Droplet />, colors: colorSchemes.red
    },
    {
      name: "Chỉ Huy", englishName: "Commander", branchName: "Lãnh Đạo & Nghệ Nhân",
      description: "Chỉ Huy là người truyền cảm hứng trên chiến trường, nâng cao tinh thần đồng đội, tăng cường khả năng phối hợp và mở rộng tầm ảnh hưởng chiến thuật.",
      abilities: ["+0.2 Tầm Đánh Cộng Thêm", "+3% Sát Thương Gây Ra (Toàn Bộ)", "+3% Kháng Sát Thương (Toàn Bộ)"],
      icon: <Users />, colors: colorSchemes.teal
    },
    {
      name: "Nghệ Nhân Chế Tạo", englishName: "Artificer", branchName: "Lãnh Đạo & Nghệ Nhân",
      description: "Nghệ Nhân Chế Tạo là bậc thầy của sáng tạo và cải tiến, có khả năng nâng cao chất lượng trang bị vượt trội và tối ưu hóa quy trình chế tác.",
      abilities: ["+10% Hệ Số Chất Lượng Rèn", "+10% Hệ Số Chất Lượng Phù Phép", "-10% Thời Gian Chế Tạo (Công Thức Immersive)"],
      icon: <Gem />, colors: colorSchemes.green
    },
    {
      name: "Nhạc Công", englishName: "Bard", branchName: "Lãnh Đạo & Nghệ Nhân",
      description: "Nhạc Công dùng âm nhạc để lay động thế giới, truyền cảm hứng cho đồng minh bằng những giai điệu mạnh mẽ và hỗ trợ họ bằng sự may mắn, linh hoạt.",
      abilities: ["+8% Tốc Độ Di Chuyển", "+1.5 May Mắn Chung", "-5% Thời Gian Hồi Chiêu"],
      icon: <Music />, colors: colorSchemes.amber
    },
  ];

  const professionsByBranch = professions.reduce((acc, profession) => {
    const branch = profession.branchName;
    if (!acc[branch]) {
      acc[branch] = [];
    }
    acc[branch].push(profession);
    return acc;
  }, {} as Record<string, ProfessionProps[]>);

  const branchOrder = [
    "Chiến Đấu Cơ Bản", "Chế Tạo & Ma Thuật", "Thu Hoạch",
    "Chiến Đấu Chuyên Sâu", "Tiện Ích & Kinh Tế", "Chiến Đấu Nâng Cao",
    "Tương Tác Tự Nhiên", "Nghệ Thuật Hắc Ám", "Lãnh Đạo & Nghệ Nhân"
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Nghề Nghiệp
      </h2>
      <p className="mb-6 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Chọn một nghề nghiệp phù hợp với phong cách chơi của bạn. Mỗi nghề nghiệp cung cấp những khả năng độc đáo để giúp bạn trong hành trình của mình.
      </p>
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-8 dark:bg-yellow-900/30 dark:border-yellow-700/50 max-w-3xl mx-auto">
        <p className="text-yellow-800 dark:text-yellow-200 text-sm sm:text-base text-center">
          <strong className="font-semibold">Lưu ý:</strong> Bạn chỉ được phép chọn <strong className="font-bold">một</strong> nghề nghiệp duy nhất. Hãy suy nghĩ kỹ trước khi đưa ra lựa chọn cuối cùng!
        </p>
      </div>
      <div className="space-y-12">
        {branchOrder.map((branchName) => {
          const branchProfessions = professionsByBranch[branchName];
          const branchColors = branchProfessions && branchProfessions.length > 0 ? (branchProfessions[0].colors || colorSchemes.default) : colorSchemes.default;

          return (
            <div key={branchName}>
              <h3 className={`text-2xl font-semibold mb-6 ${branchColors.branchText} border-b-2 ${branchColors.branchBorder} pb-2`}>
                Nhánh: {branchName}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {branchProfessions ? branchProfessions.map((profession) => (
                  <ProfessionCard key={profession.englishName} profession={profession} />
                )) : <p>Không có nghề nghiệp nào trong nhánh này.</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Professions;