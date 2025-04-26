
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const NewArmorUpgrades = () => {
  const armorUpgrades = [
    {
      name: "Phòng thủ",
      description: "Tăng khả năng phòng thủ của áo giáp.",
      materials: "4x Hợp Kim Netherite, 6x Vàng",
      image: "/lovable-uploads/36756bb4-e29d-427b-8d7a-9a21a217d4d5.png"
    },
    {
      name: "Chống lửa",
      description: "Giảm sát thương từ lửa và dung nham.",
      materials: "3x Magma Cream, 4x Thuốc Kháng Lửa",
      image: "/lovable-uploads/3b1544d8-caf7-47de-a5ff-13a99c64ae6e.png"
    },
    {
      name: "Phản xạ",
      description: "Phản lại mũi tên và đạn bắn vào bạn.",
      materials: "5x Mảnh Blaze, 3x Ngọc Ender",
      image: "/lovable-uploads/144f974d-2e49-4ed1-85d5-110586d46428.png"
    },
    {
      name: "Tốc độ",
      description: "Tăng tốc độ di chuyển của người chơi.",
      materials: "2x Ngọc Ender, 4x Đường",
      image: "/lovable-uploads/0250737d-8420-4f40-8241-ba2adf433179.png"
    },
    {
      name: "Nhẹ nhàng",
      description: "Giảm sát thương khi rơi.",
      materials: "5x Lông Vũ, 3x Lông Thỏ",
      image: "/lovable-uploads/02348b6b-365e-4888-9511-b82048e6b025.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {armorUpgrades.map((upgrade, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img
              src={upgrade.image}
              alt={upgrade.name}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2">{upgrade.name}</h3>
            <p className="mb-2">{upgrade.description}</p>
            <p className="text-sm font-medium">
              <span className="font-bold">Nguyên liệu:</span> {upgrade.materials}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NewArmorUpgrades;
