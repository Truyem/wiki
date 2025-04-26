
import { Card, CardContent } from "@/components/ui/card";
import EditableImage from "@/components/shared/EditableImage";

const ArmorUpgrades = () => {
  const upgrades = [
    { title: "Miễn dịch", description: "Tăng +1 khả năng miễn dịch, tương đương với 0.05 giây miễn nhiễm sát thương sau khi nhận sát thương.", imagePath: "/placeholder.svg" },
    { title: "Hồi máu", description: "Tăng +5% khả năng hồi máu.", imagePath: "/placeholder.svg" },
    { title: "Tham vọng", description: "Tăng +5% giảm thời gian hồi chiêu của các kỹ năng như Đỡ đòn, Cuồng nộ, Khoan, Đốn cây nhanh, v.v.", imagePath: "/placeholder.svg" },
    { title: "Né tránh", description: "Tăng +2% cơ hội né tránh, vô hiệu hóa hoàn toàn sát thương từ một đòn tấn công.", imagePath: "/placeholder.svg" },
    { title: "Tập sự", description: "Tăng +5% kinh nghiệm kỹ năng, nhưng cũng tăng 10% sát thương nhận vào.", imagePath: "/placeholder.svg" },
    { title: "Nghiện", description: "Tăng +5% nhận quả cầu kinh nghiệm, nhưng cũng tăng 5% sát thương nhận vào.", imagePath: "/placeholder.svg" },
    { title: "Lén lút", description: "Tăng +10% tốc độ lén lút (chỉ quần).", imagePath: "/placeholder.svg" },
    { title: "Thể thao", description: "Tăng +10% tốc độ chạy nước rút (chỉ quần).", imagePath: "/placeholder.svg" },
    { title: "Nhảy nhiều lần", description: "Tăng +1 lần nhảy trên không. Có thể áp dụng tối đa 3 lần (chỉ giày).", imagePath: "/placeholder.svg" },
    { title: "Nhảy vọt", description: "Tăng +50% độ cao nhảy (chỉ giày).", imagePath: "/placeholder.svg" },
    { title: "Hỏa ngục", description: "Tăng +20% sát thương lửa (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Ma thuật", description: "Tăng +10% sát thương phép thuật (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Độc hại", description: "Tăng +20% sát thương độc (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Thần thánh", description: "Tăng +20% sát thương bức xạ (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Chết chóc", description: "Tăng +20% sát thương hoại tử (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Cuồng nộ", description: "Tăng +5% sát thương (chỉ giáp ngực).", imagePath: "/placeholder.svg" },
    { title: "Thợ rèn", description: "Tăng +10 kỹ năng rèn (chỉ mũ bảo hiểm).", imagePath: "/placeholder.svg" },
    { title: "Phù phép", description: "Tăng +10 kỹ năng phù phép (chỉ mũ bảo hiểm).", imagePath: "/placeholder.svg" },
    { title: "Nhà giả kim", description: "Tăng +10 kỹ năng giả kim (chỉ mũ bảo hiểm).", imagePath: "/placeholder.svg" }
  ];

  const handleImageChange = (upgradeIndex: number, newPath: string) => {
    console.log(`Updating image for upgrade ${upgradeIndex} to ${newPath}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp áo giáp</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upgrades.map((upgrade, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">
                  {upgrade.title}
                </h3>
                <EditableImage 
                  src={upgrade.imagePath}
                  alt={`Nâng cấp ${upgrade.title}`}
                  onImageChange={(newPath) => handleImageChange(index, newPath)}
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

export default ArmorUpgrades;
