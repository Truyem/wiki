
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ShieldOff, Droplets, ChevronsRight, ShoppingBag, Zap, Star, Heart, Zap as ZapIcon, ArrowsRightLeft, Percent } from "lucide-react";

const WeaponUpgrades = () => {
  const upgrades = [
    { title: "Chảy máu", description: "Tăng +5% cơ hội gây chảy máu.", icon: Droplets },
    { title: "Xuyên thấu", description: "Tăng +5% xuyên giáp.", icon: Shield },
    { title: "Dễ bị tổn thương", description: "Tăng +10% giảm khả năng miễn dịch, giúp giảm thời gian kẻ địch miễn nhiễm sát thương sau khi bị tấn công.", icon: ShieldOff },
    { title: "Đẩy ra", description: "Tăng +100% cơ hội hất ngã kẻ địch đang cưỡi (như ngựa hoặc nhện).", icon: ChevronsRight },
    { title: "Săn trộm", description: "Tăng +20% vật phẩm rơi ra từ mob.", icon: ShoppingBag },
    { title: "Sắc bén hơn", description: "Tăng +5% sát thương.", icon: Zap },
    { title: "Chí mạng", description: "Tăng +5% cơ hội tấn công chí mạng.", icon: Star },
    { title: "Hút máu", description: "Tăng +3% hút máu, chuyển đổi sát thương gây ra thành hồi máu cho bản thân.", icon: Heart },
    { title: "Tước vũ khí", description: "Tăng +1 giây tước khiên.", icon: ShieldOff },
    { title: "Chấn động", description: "Tăng +5% cơ hội choáng. Lưu ý rằng kẻ địch bị choáng sẽ miễn nhiễm với choáng trong vài giây.", icon: ZapIcon },
    { title: "Kéo dài", description: "Tăng +0.25 khối tầm đánh (chỉ vũ khí cận chiến).", icon: ArrowsRightLeft },
    { title: "Tiết kiệm", description: "Giảm -10% tiêu hao đạn (chỉ cung và nỏ).", icon: Percent }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp vũ khí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upgrades.map((upgrade, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">{upgrade.title}</h3>
                <upgrade.icon className="w-16 h-16 mb-4 text-[#259e63] dark:text-[#55FFFF]" />
                <p className="text-center">
                  {upgrade.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WeaponUpgrades;
