
import { Card, CardContent } from "@/components/ui/card";

const WeaponUpgrades = () => {
  const upgrades = [
    { title: "Chảy máu", description: "Tăng +5% cơ hội gây chảy máu.", imagePath: "/lovable-uploads/36_1_1_352647774-6a2c1185-7e8f-41d6-92b5-86fef0cf1bf2.png.a48ee067-a34b-4df9-9127-1275ca59bf11.png" },
    { title: "Xuyên thấu", description: "Tăng +5% xuyên giáp.", imagePath: "/lovable-uploads/37_1_1_352648081-2fdad2fa-36fd-4500-ab4a-8280f8b7fd08.png.32ffad20-a443-4fcf-b8d3-acf8342ca51d.png" },
    { title: "Dễ bị tổn thương", description: "Tăng +10% giảm khả năng miễn dịch, giúp giảm thời gian kẻ địch miễn nhiễm sát thương sau khi bị tấn công.", imagePath: "/lovable-uploads/38_1_1_352648363-31447724-f744-4b58-9fd1-6a7f66ad8ad1.png.09a36a67-07e7-416d-bba7-50f63430d171.png" },
    { title: "Đẩy ra", description: "Tăng +100% cơ hội hất ngã kẻ địch đang cưỡi (như ngựa hoặc nhện).", imagePath: "/lovable-uploads/39_1_1_352760997-26d22b3f-4674-4330-a18d-5adb6d854ff1.png.ab96dae3-d70f-43eb-965d-37e23da2a9f8.png" },
    { title: "Săn trộm", description: "Tăng +20% vật phẩm rơi ra từ mob.", imagePath: "/lovable-uploads/40_1_1_352650721-a50eb4be-3293-4f82-88ec-7d21009866f9.png.f22f4c52-feb1-46a7-9b92-7243724cd677.png" },
    { title: "Sắc bén hơn", description: "Tăng +5% sát thương.", imagePath: "/lovable-uploads/41_1_1_352645897-5ea047bf-72d4-49ff-8409-21139a84ae7a.png.a7edee19-fda7-4c33-8da4-4dd8b45bec0e.png" },
    { title: "Chí mạng", description: "Tăng +5% cơ hội tấn công chí mạng.", imagePath: "/lovable-uploads/42_1_1_352646697-96233a45-e4b4-4b91-85d0-488d4a5781b0.png.36e44fe4-99e0-4a56-adf4-c37b00df92d3.png" },
    { title: "Hút máu", description: "Tăng +3% hút máu, chuyển đổi sát thương gây ra thành hồi máu cho bản thân.", imagePath: "/lovable-uploads/43_1_1_352650975-efbb49a1-d8f7-4775-8d70-f19a56e0cf0e.png.07ac4dbe-6c67-4fe6-ab6d-f6a6d92b4cfe.png" },
    { title: "Tước vũ khí", description: "Tăng +1 giây tước khiên.", imagePath: "/lovable-uploads/44_1_1_352651223-a51cfc68-e9e1-4555-8b4b-03a2f34ec694.png.a3f2cdfc-acca-44a0-b599-0b72521c44de.png" },
    { title: "Chấn động", description: "Tăng +5% cơ hội choáng. Lưu ý rằng kẻ địch bị choáng sẽ miễn nhiễm với choáng trong vài giây.", imagePath: "/lovable-uploads/46_1_1_352651632-13a1d043-e9d6-4f81-ba2e-81fcb3fe6b3c.png.66e6f68f-e258-4f33-8dc4-d9d04eae8b69.png" },
    { title: "Kéo dài", description: "Tăng +0.25 khối tầm đánh (chỉ vũ khí cận chiến).", imagePath: "/lovable-uploads/48_1_1_352647119-7a0b7e96-74a7-45be-92c7-4bfd1530c831.png.dc61da0f-2070-4e35-92f3-9cee0fac079f.png" },
    { title: "Tiết kiệm", description: "Giảm -10% tiêu hao đạn (chỉ cung và nỏ).", imagePath: "/lovable-uploads/49_1_1_352651434-7192cbd5-cf15-4fad-bc11-9746384db07c.png.1804faba-5d80-47ad-b560-e882f4fb9f80.png" }
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
