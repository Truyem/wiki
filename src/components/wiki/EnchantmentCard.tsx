
import { Card, CardContent } from "@/components/ui/card";

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

const EnchantmentCard = ({ name, description, appliesTo, rarity }: EnchantmentProps) => {
  const rarityColors = {
    SIMPLE: "text-[#e0e0e0] dark:text-[#e0e0e0]",
    UNIQUE: "text-[#6cbc64] dark:text-[#6cbc64]",
    ELITE: "text-[#bcdcee] dark:text-[#bcdcee]",
    ULTIMATE: "text-[#d7ace0] dark:text-[#d7ace0]",
    LEGENDARY: "text-[#fccc5c] dark:text-[#fccc5c]",
    FABLED: "text-[#fc8484] dark:text-[#fc8484]"
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
