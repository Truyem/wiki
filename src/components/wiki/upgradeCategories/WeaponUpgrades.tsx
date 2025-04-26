
import { Card, CardContent } from "@/components/ui/card";

const WeaponUpgrades = () => {
  const upgrades = [
    { title: "Chảy máu", description: "Tăng +5% cơ hội gây chảy máu.", imagePath: "/lovable-uploads/36_1_1_352647774-6a2c1185-7e8f-41d6-92b5-86fef0cf1bf2.png.a48ee067-a34b-4df9-9127-1275ca59bf11.png" },
    { title: "Xuyên thấu", description: "Tăng +5% xuyên giáp.", imagePath: "/lovable-uploads/36_1_1_352647774-6a2c1185-7e8f-41d6-92b5-86fef0cf1bf2.png.a48ee067-a34b-4df9-9127-1275ca59bf11.png" },
    { title: "Dễ bị tổn thương", description: "Tăng +10% giảm khả năng miễn dịch, giúp giảm thời gian kẻ địch miễn nhiễm sát thương sau khi bị tấn công.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Đẩy ra", description: "Tăng +100% cơ hội hất ngã kẻ địch đang cưỡi (như ngựa hoặc nhện).", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Săn trộm", description: "Tăng +20% vật phẩm rơi ra từ mob.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Sắc bén hơn", description: "Tăng +5% sát thương.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Chí mạng", description: "Tăng +5% cơ hội tấn công chí mạng.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Hút máu", description: "Tăng +3% hút máu, chuyển đổi sát thương gây ra thành hồi máu cho bản thân.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Tước vũ khí", description: "Tăng +1 giây tước khiên.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Chấn động", description: "Tăng +5% cơ hội choáng. Lưu ý rằng kẻ địch bị choáng sẽ miễn nhiễm với choáng trong vài giây.", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Kéo dài", description: "Tăng +0.25 khối tầm đánh (chỉ vũ khí cận chiến).", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" },
    { title: "Tiết kiệm", description: "Giảm -10% tiêu hao đạn (chỉ cung và nỏ).", imagePath: "/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp vũ khí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upgrades.map((upgrade, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">
                  {upgrade.title}
                </h3>
                <img 
                  alt={`Nâng cấp ${upgrade.title}`}
                  className="rounded-lg shadow-md max-w-full h-auto mb-4"
                  src={upgrade.imagePath}
                />
                <p className="text-center mt-4">
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
