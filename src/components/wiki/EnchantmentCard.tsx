
import { Card, CardContent } from "@/components/ui/card";

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

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
          <div className="flex flex-wrap gap-1">
            {appliesTo.map((item, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
              >
                {item}
              </span>
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
