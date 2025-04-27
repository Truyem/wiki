
import { Card, CardContent } from "@/components/ui/card";

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

const EnchantmentCard = ({ name, description, appliesTo, rarity }: EnchantmentProps) => {
  const rarityColors = {
    SIMPLE: "text-[#a0a0a0] dark:text-[#c0c0c0]", // Darker gray
    UNIQUE: "text-[#4a8c44] dark:text-[#5ec657]", // Darker green
    ELITE: "text-[#8ab4d0] dark:text-[#a0c8e6]", // Deeper blue
    ULTIMATE: "text-[#a576b0] dark:text-[#c490d1]", // Deeper purple
    LEGENDARY: "text-[#cb9f30] dark:text-[#ffd740]", // Deeper gold
    FABLED: "text-[#c64646] dark:text-[#ff6b6b]"  // Deeper red
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
            <span className={`text-xs font-medium ${rarityColors[rarity]}`}>
              {rarity}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnchantmentCard;
