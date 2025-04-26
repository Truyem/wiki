
import { Card, CardContent } from "@/components/ui/card";

const WeaponUpgrades = () => {
  const upgrades = [
    { title: "Chảy máu", description: "Tăng +5% cơ hội gây chảy máu.", imagePath: "/placeholder.svg" },
    { title: "Xuyên thấu", description: "Tăng +5% xuyên giáp.", imagePath: "/placeholder.svg" },
    { title: "Dễ bị tổn thương", description: "Tăng +10% giảm khả năng miễn dịch, giúp giảm thời gian kẻ địch miễn nhiễm sát thương sau khi bị tấn công.", imagePath: "/placeholder.svg" },
    { title: "Đẩy ra", description: "Tăng +100% cơ hội hất ngã kẻ địch đang cưỡi (như ngựa hoặc nhện).", imagePath: "/placeholder.svg" },
    { title: "Săn trộm", description: "Tăng +20% vật phẩm rơi ra từ mob.", imagePath: "/placeholder.svg" },
    { title: "Sắc bén hơn", description: "Tăng +5% sát thương.", imagePath: "/placeholder.svg" },
    { title: "Chí mạng", description: "Tăng +5% cơ hội tấn công chí mạng.", imagePath: "/placeholder.svg" },
    { title: "Hút máu", description: "Tăng +3% hút máu, chuyển đổi sát thương gây ra thành hồi máu cho bản thân.", imagePath: "/placeholder.svg" },
    { title: "Tước vũ khí", description: "Tăng +1 giây tước khiên.", imagePath: "/placeholder.svg" },
    { title: "Chấn động", description: "Tăng +5% cơ hội choáng. Lưu ý rằng kẻ địch bị choáng sẽ miễn nhiễm với choáng trong vài giây.", imagePath: "/placeholder.svg" },
    { title: "Kéo dài", description: "Tăng +0.25 khối tầm đánh (chỉ vũ khí cận chiến).", imagePath: "/placeholder.svg" },
    { title: "Tiết kiệm", description: "Giảm -10% tiêu hao đạn (chỉ cung và nỏ).", imagePath: "/placeholder.svg" }
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
                <img 
                  src={upgrade.imagePath} 
                  alt={`Nâng cấp ${upgrade.title}`} 
                  className="w-16 h-16 mb-4 rounded-lg shadow-md"
                />
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
