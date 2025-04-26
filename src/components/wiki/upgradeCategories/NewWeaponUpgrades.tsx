
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const NewWeaponUpgrades = () => {
  const weaponUpgrades = [
    {
      name: "Sắc bén",
      description: "Tăng sát thương vũ khí của bạn.",
      materials: "2x Kim Cương, 5x Nguyên Tố Lửa",
      image: "/lovable-uploads/012a6d61-a6fb-4694-bc37-39f2b9d4c805.png"
    },
    {
      name: "Độc tính",
      description: "Thêm hiệu ứng độc cho đòn đánh.",
      materials: "3x Mắt Nhện, 5x Nấm Đỏ Độc",
      image: "/lovable-uploads/02348b6b-365e-4888-9511-b82048e6b025.png"
    },
    {
      name: "Lửa",
      description: "Đốt cháy kẻ địch khi tấn công.",
      materials: "3x Magma Cream, 2x Khối Than",
      image: "/lovable-uploads/0250737d-8420-4f40-8241-ba2adf433179.png"
    },
    {
      name: "Băng giá",
      description: "Làm chậm kẻ địch khi tấn công.",
      materials: "5x Băng Nén, 3x Bông Tuyết",
      image: "/lovable-uploads/12d4fca8-ceed-4ec5-b693-53fa374368f4.png"
    },
    {
      name: "Phản đòn",
      description: "Phản lại một phần sát thương khi bị tấn công.",
      materials: "3x Obsidian, 5x Mảnh Blaze",
      image: "/lovable-uploads/144f974d-2e49-4ed1-85d5-110586d46428.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {weaponUpgrades.map((upgrade, index) => (
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

export default NewWeaponUpgrades;
