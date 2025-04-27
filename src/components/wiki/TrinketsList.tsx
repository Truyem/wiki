
import { Shield, Bandage, Crosshair, HandMetal, Tube, Heart, Zap, Cross, Flame, Sword, CircleSlash, Reach } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TrinketInfo {
  name: string;
  effect: string;
  upgrade: string;
  icon: JSX.Element;
}

const trinkets: TrinketInfo[] = [
  {
    name: "Bezoar",
    effect: "Kháng độc",
    upgrade: "Tinh khiết",
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: "Dải tái tạo",
    effect: "Tăng khả năng hồi máu",
    upgrade: "Tái sinh",
    icon: <Bandage className="w-6 h-6" />
  },
  {
    name: "Dải chính xác",
    effect: "Tăng tỷ lệ chí mạng và sát thương chí mạng",
    upgrade: "Mang tử thần",
    icon: <Crosshair className="w-6 h-6" />
  },
  {
    name: "Dải lực",
    effect: "Tăng hiệu ứng đẩy lùi khi tấn công",
    upgrade: "Găng tay Titan",
    icon: <HandMetal className="w-6 h-6" />
  },
  {
    name: "Bao tay giáp",
    effect: "Tăng giáp và kháng hiệu ứng đẩy lùi (knockback)",
    upgrade: "Juggernaut",
    icon: <Shield className="w-6 h-6" />
  },
  {
    name: "Ống tên ma thuật",
    effect: "Tăng tốc độ bay, độ chính xác và hiệu quả sử dụng đạn của mũi tên",
    upgrade: "Artemis",
    icon: <Tube className="w-6 h-6" />
  },
  {
    name: "Bùa sinh lực",
    effect: "Tăng máu tối đa bổ sung",
    upgrade: "Phước lành của Erinle",
    icon: <Heart className="w-6 h-6" />
  },
  {
    name: "Bùa adrenaline",
    effect: "Tăng tốc độ di chuyển, nhảy đôi và chiều cao nhảy",
    upgrade: "Hermes",
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "Dây chuyền thánh giá",
    effect: "Tăng thời gian miễn nhiễm (immunity frames)",
    upgrade: "Dây chuyền thần thánh",
    icon: <Cross className="w-6 h-6" />
  },
  {
    name: "Bùa cuồng nộ",
    effect: "Tăng sát thương nghiêm trọng, nhưng nhận nhiều sát thương hơn",
    upgrade: "Mặt dây chuyền Rèn bởi Cuồng nộ",
    icon: <Flame className="w-6 h-6" />
  },
  {
    name: "Bùa của Kẻ báo thù",
    effect: "Tăng sát thương cận chiến",
    upgrade: "Kratos",
    icon: <Sword className="w-6 h-6" />
  },
  {
    name: "Nhẫn phản xạ",
    effect: "Giảm sát thương từ đạn (projectile)",
    upgrade: "Athena",
    icon: <CircleSlash className="w-6 h-6" />
  },
  {
    name: "Nhẫn obsidian",
    effect: "Giảm sát thương lửa",
    upgrade: "Narya",
    icon: <CircleSlash className="w-6 h-6" />
  },
  {
    name: "Nhẫn bảo vệ",
    effect: "Giảm tất cả sát thương nhận vào",
    upgrade: "Nhẫn nguyên thủy",
    icon: <CircleSlash className="w-6 h-6" />
  },
  {
    name: "Nhẫn phòng hộ",
    effect: "Giảm sát thương phép thuật",
    upgrade: "Nhẫn Magnus",
    icon: <CircleSlash className="w-6 h-6" />
  },
  {
    name: "Nhẫn vỡ vụn",
    effect: "Xuyên giáp",
    upgrade: "Thánh kỵ sĩ bại trận",
    icon: <CircleSlash className="w-6 h-6" />
  },
  {
    name: "Nhẫn tầm với",
    effect: "Tăng tầm tấn công cận chiến",
    upgrade: "Sức mạnh của Gungnir",
    icon: <Reach className="w-6 h-6" />
  },
];

const TrinketsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trinkets.map((trinket, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {trinket.icon}
              <h3 className="text-lg font-semibold">{trinket.name}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{trinket.effect}</p>
            <p className="text-sm text-[#259e63] dark:text-[#55FFFF]">
              Nâng cấp: {trinket.upgrade}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrinketsList;
