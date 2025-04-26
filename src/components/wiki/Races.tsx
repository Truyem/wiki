
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { races } from "@/data/races";
import RaceCategory from "./races/RaceCategory";

const Races = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Tộc</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Chọn tộc của bạn để nhận các khả năng đặc biệt và các hạn chế tương ứng.
        </p>
      </div>
      
      <Tabs defaultValue="monster" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="monster">Monster</TabsTrigger>
          <TabsTrigger value="nonhuman">Nonhuman</TabsTrigger>
          <TabsTrigger value="human">Human</TabsTrigger>
        </TabsList>

        {races.map((category, idx) => (
          <RaceCategory key={idx} category={category} />
        ))}
      </Tabs>
    </div>
  );
};

export default Races;
