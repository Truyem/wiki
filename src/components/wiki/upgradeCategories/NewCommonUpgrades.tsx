
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const NewCommonUpgrades = () => {
  const commonUpgrades = [
    {
      name: "Bền bỉ",
      description: "Tăng độ bền của vật phẩm.",
      materials: "4x Khối Sắt, 2x Obsidian",
      image: "/lovable-uploads/012a6d61-a6fb-4694-bc37-39f2b9d4c805.png"
    },
    {
      name: "Sửa chữa",
      description: "Cho phép sửa chữa vật phẩm bằng nguyên liệu cơ bản.",
      materials: "3x Khối Vàng, 2x Đá Cuội",
      image: "/lovable-uploads/144f974d-2e49-4ed1-85d5-110586d46428.png"
    },
    {
      name: "Không thể phá hủy",
      description: "Vật phẩm không bao giờ bị phá hủy.",
      materials: "5x Netherite, 3x Ngọc End",
      image: "/lovable-uploads/36756bb4-e29d-427b-8d7a-9a21a217d4d5.png"
    },
    {
      name: "Trang sức",
      description: "Làm đẹp vật phẩm với hiệu ứng ánh sáng.",
      materials: "2x Pha Lê, 4x Bột Phát Sáng",
      image: "/lovable-uploads/02348b6b-365e-4888-9511-b82048e6b025.png"
    },
    {
      name: "Binding",
      description: "Liên kết vật phẩm với người chơi, không thể đánh rơi.",
      materials: "1x Ngọc Ender, 3x Dây Xích",
      image: "/lovable-uploads/12d4fca8-ceed-4ec5-b693-53fa374368f4.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {commonUpgrades.map((upgrade, index) => (
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

export default NewCommonUpgrades;
