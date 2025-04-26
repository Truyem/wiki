
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { races } from "@/data/races";
import RaceCategory from "./races/RaceCategory";

const Races = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Tộc</h2>
      
      <Tabs defaultValue="monster" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monster">Quái vật</TabsTrigger>
          <TabsTrigger value="humanoid">Nhân loại</TabsTrigger>
          <TabsTrigger value="magical">Ma thuật</TabsTrigger>
        </TabsList>

        {races.map((category, idx) => (
          <RaceCategory key={idx} category={category} />
        ))}
      </Tabs>
    </div>
  );
};

export default Races;
