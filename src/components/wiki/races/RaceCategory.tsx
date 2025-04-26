
import { RaceCategory as RaceCategoryType } from "@/data/races";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TabsContent } from "@/components/ui/tabs";
import RaceCard from "./RaceCard";

interface RaceCategoryProps {
  category: RaceCategoryType;
}

const RaceCategory = ({ category }: RaceCategoryProps) => {
  return (
    <TabsContent value={category.category.toLowerCase().split(" ")[0]}>
      <ScrollArea className="h-[600px] rounded-md border p-4">
        <div className="grid grid-cols-1 gap-4">
          {category.items.map((race, index) => (
            <RaceCard key={index} race={race} />
          ))}
        </div>
      </ScrollArea>
    </TabsContent>
  );
};

export default RaceCategory;
