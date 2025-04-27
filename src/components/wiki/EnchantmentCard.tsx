
import { Card, CardContent } from "@/components/ui/card";

interface EnchantmentProps {
  name: string;
  description: string;
  appliesTo: string[];
  rarity: "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED";
}

const EnchantmentCard = ({ name, description, appliesTo, rarity }: EnchantmentProps) => {
  const rarityColors = {
    SIMPLE: "text-gray-600 dark:text-gray-400",
    UNIQUE: "text-blue-600 dark:text-blue-400",
    ELITE: "text-purple-600 dark:text-purple-400",
    ULTIMATE: "text-yellow-600 dark:text-yellow-400",
    LEGENDARY: "text-red-600 dark:text-red-400",
    FABLED: "text-green-600 dark:text-green-400"
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
        </div>
      </CardContent>
    </Card>
  );
};

export default EnchantmentCard;
