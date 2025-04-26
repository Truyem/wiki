
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
        <ul className="list-disc pl-6 space-y-2">
          {race.abilities.map((ability, i) => (
            <li key={i} className="text-gray-700 dark:text-gray-300">
              {ability}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RaceCard;
