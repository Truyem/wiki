
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const NewToolUpgrades = () => {
  const toolUpgrades = [
    {
      name: "Hiệu quả",
      description: "Tăng tốc độ đào và phá vỡ khối.",
      materials: "3x Kim Cương, 5x Khối Đá Đỏ",
      image: "/lovable-uploads/012a6d61-a6fb-4694-bc37-39f2b9d4c805.png"
    },
    {
      name: "May mắn",
      description: "Tăng cơ hội rơi đồ hiếm khi đào.",
      materials: "4x Lapis Lazuli, 2x Bốn Lá May Mắn",
      image: "/lovable-uploads/12d4fca8-ceed-4ec5-b693-53fa374368f4.png"
    },
    {
      name: "Sửa chữa tự động",
      description: "Tự động sửa chữa công cụ theo thời gian.",
      materials: "2x Khối Sắt, 4x Mảnh Pha Lê",
      image: "/lovable-uploads/36756bb4-e29d-427b-8d7a-9a21a217d4d5.png"
    },
    {
      name: "Thu hoạch",
      description: "Tự động trồng lại cây trồng khi thu hoạch.",
      materials: "3x Hạt Giống, 2x Phân Bón",
      image: "/lovable-uploads/0250737d-8420-4f40-8241-ba2adf433179.png"
    },
    {
      name: "Đào rộng",
      description: "Đào nhiều khối cùng một lúc.",
      materials: "5x Thuốc Nổ TNT, 3x Obsidian",
      image: "/lovable-uploads/3b1544d8-caf7-47de-a5ff-13a99c64ae6e.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {toolUpgrades.map((upgrade, index) => (
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

export default NewToolUpgrades;
