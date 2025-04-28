
import { Card, CardContent } from "@/components/ui/card";
import { Axe, Pickaxe, Shovel, Sword } from "lucide-react";

// Custom icon components for items that don't exist in lucide-react
const Boots = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 14c0-4 3-4 3-4h12s1 0 1 1v5h-4l-1 4h-6l-1-4H3v-2z"/>
    <path d="M7 10V4h10v6"/>
  </svg>
);

const Bow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 2c-1.5 1-3 3.5-3 6s1.5 5 3 6"/>
    <path d="M17 2c1.5 1 3 3.5 3 6s-1.5 5-3 6"/>
    <path d="M11.5 3h1"/>
    <path d="M11.5 21h1"/>
    <line x1="17" y1="8" x2="7" y2="16"/>
  </svg>
);

const Crossbow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h9l3-7"/>
    <path d="M7 15h9l3-7"/>
    <path d="M19 5l-3 7h-6"/>
    <path d="m18 10-2 7-6 2"/>
  </svg>
);

const Shirt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4l-8 2v6l3 1v7h10v-7l3-1V6l-8-2z"/>
    <path d="m8 6 4 5 4-5"/>
  </svg>
);

const Elytra = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-5.5 0-9.3 2.8-10 8.5 2 3.5 5 6.2 10 7.5 5-1.3 8-4 10-7.5-.7-5.7-4.5-8.5-10-8.5z"/>
    <path d="M12 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
);

const FishingRod = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2v9c0 1.1-.9 2-2 2H4"/>
    <path d="m4 13 5 9"/>
    <circle cx="4" cy="13" r="2"/>
  </svg>
);

const Hat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 15v2c0 3 4.5 4 9 4s9-1 9-4v-2"/>
    <path d="M12 4c-4.5 0-9 1-9 4s4.5 4 9 4 9-1 9-4-4.5-4-9-4z"/>
  </svg>
);

const Pants = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h12l-2 16h-8L6 4z"/>
    <path d="M12 4v16"/>
  </svg>
);

const Pickaxe2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m14 18 7-7"/>
    <path d="M10 6 3.35 12.65a2 2 0 0 0 0 2.83L6.17 18.3a2 2 0 0 0 2.83 0L16 12"/>
  </svg>
);

const Trident = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v10l-2 4"/>
    <path d="M12 2v10l2 4"/>
    <path d="M12 16v6"/>
    <path d="M8 12h8"/>
  </svg>
);

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

const iconMap = {
  "Rìu": Axe,
  "Ủng": Boots,
  "Cung": Bow,
  "Nỏ": Crossbow,
  "Áo": Shirt,
  "Elytra": Elytra,
  "Cần câu": FishingRod,
  "Mũ": Hat,
  "Cuốc": Pickaxe,
  "Quần": Pants,
  "Cuốc chim": Pickaxe2,
  "Xẻng": Shovel,
  "Kiếm": Sword,
  "Đinh ba": Trident,
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
            {appliesTo.map((item, index) => {
              const IconComponent = iconMap[item];
              return (
                <div 
                  key={index}
                  className="text-gray-600 dark:text-gray-400"
                  title={item}
                >
                  {IconComponent && <IconComponent className="h-5 w-5" />}
                </div>
              );
            })}
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
