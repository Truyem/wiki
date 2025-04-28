import { Card, CardContent } from "@/components/ui/card";

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

const iconMap = {
  "Rìu": "/lovable-uploads/8f0cc210-2aa5-4b12-bd5a-71bd7a596d98.png",
  "Ủng": "/lovable-uploads/363a79f0-605b-4354-b4ea-f3e9c91d96eb.png",
  "Cung": "/lovable-uploads/d55d122b-7eea-4f16-8500-2fcd1a90499e.png",
  "Nỏ": "/lovable-uploads/ea833740-0719-44ed-a0ee-f7695036996e.png",
  "Áo": "/lovable-uploads/a4cb019e-60a3-491a-884f-cf1f0844c5e8.png",
  "Elytra": "/lovable-uploads/0a802040-1405-4d09-b831-c77a842add41.png",
  "Cần câu": "/lovable-uploads/843f2733-ac6f-4120-aa9f-08a74a27d314.png",
  "Mũ": "/lovable-uploads/8745ea33-7b9e-478b-aede-61cf4ef3fffa.png",
  "Cuốc": "/lovable-uploads/fab75e1d-b5c9-48c1-97f2-21b3e9c9383f.png",
  "Quần": "/lovable-uploads/c6cf1840-d256-4039-9f85-6d6cbb9e7221.png",
  "Cuốc chim": "/lovable-uploads/ffe34bda-7377-4bac-8ae8-1e4ba93c94b1.png",
  "Xẻng": "/lovable-uploads/b74dc019-6b1a-46f3-8fa4-22c279b95477.png",
  "Kiếm": "/lovable-uploads/09c9c3e9-bf1b-4a8c-bc82-9ddca3584d4b.png",
  "Đinh ba": "/lovable-uploads/4d699d19-b563-4b74-8d40-a7a835bf2337.png"
};

const EnchantmentCard = ({ name, description, appliesTo, rarity }: EnchantmentProps) => {
  const rarityColors = {
    SIMPLE: "text-[#a0a0a0] dark:text-[#c0c0c0]",
    UNIQUE: "text-[#4a8c44] dark:text-[#5ec657]",
    ELITE: "text-[#8ab4d0] dark:text-[#a0c8e6]",
    ULTIMATE: "text-[#a576b0] dark:text-[#c490d1]",
    LEGENDARY: "text-[#cb9f30] dark:text-[#ffd740]",
    FABLED: "text-[#c64646] dark:text-[#ff6b6b]"
  };

  const getRarityImage = (rarity: string) => {
    switch (rarity) {
      case "ELITE":
        return "/lovable-uploads/38c57c31-67e2-4c5d-94bf-d31d7e0b34d5.png";
      case "FABLED":
        return "/lovable-uploads/6b849495-e94b-4d26-bc8a-4611347df80e.png";
      case "LEGENDARY":
        return "/lovable-uploads/6d935083-d94d-451e-a311-89a9483dc742.png";
      case "SIMPLE":
        return "/lovable-uploads/bad11717-d112-4ec8-bd5a-d593df197552.png";
      case "ULTIMATE":
        return "/lovable-uploads/6c5087da-9754-4322-a2b6-b7b6d9edba8e.png";
      case "UNIQUE":
        return "/lovable-uploads/249f1684-f9aa-4bbc-96fd-1217fc75a470.png";
      default:
        return "";
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className={`text-lg font-semibold ${rarityColors[rarity]}`}>
            {name}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {appliesTo.map((item, index) => (
              <div 
                key={index}
                className="text-gray-600 dark:text-gray-400"
                title={item}
              >
                <img 
                  src={iconMap[item]} 
                  alt={item} 
                  className="h-5 w-5 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="mt-2">
            <img 
              src={getRarityImage(rarity)} 
              alt={rarity} 
              className="h-4 w-auto"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnchantmentCard;
