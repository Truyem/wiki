
import { Race } from "@/data/races";
import { Card, CardContent } from "@/components/ui/card";

interface RaceCardProps {
  race: Race;
}

const RaceCard = ({ race }: RaceCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2 text-[#259e63] dark:text-[#55FFFF]">
          {race.name}
        </h3>
        
        {race.advantages && race.advantages.length > 0 && (
          <>
            <h4 className="font-semibold mb-1 text-[#825432] dark:text-[#FFAA00]">Có lợi:</h4>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700 dark:text-gray-300">
              {race.advantages.map((advantage, i) => (
                <li key={i}>{advantage}</li>
              ))}
            </ul>
          </>
        )}
        
        {race.disadvantages && race.disadvantages.length > 0 && (
          <>
            <h4 className="font-semibold mb-1 text-[#825432] dark:text-[#FFAA00]">Bất lợi:</h4>
            <ul className="list-disc pl-6 space-y-1 mb-3 text-gray-700 dark:text-gray-300">
              {race.disadvantages.map((disadvantage, i) => (
                <li key={i}>{disadvantage}</li>
              ))}
            </ul>
          </>
        )}
        
        {race.abilities && race.abilities.length > 0 && !race.advantages && !race.disadvantages && (
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            {race.abilities.map((ability, i) => (
              <li key={i}>{ability}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default RaceCard;
