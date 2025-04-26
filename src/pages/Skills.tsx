
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PowerSkill from "@/components/skills/PowerSkill";
import CombatSkills from "@/components/skills/CombatSkills";
import GatheringSkills from "@/components/skills/GatheringSkills";
import CraftingSkills from "@/components/skills/CraftingSkills";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212] p-6">
      <Card className="max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF]">
            Kỹ năng & Cách thăng cấp
          </CardTitle>
          <CardDescription className="text-lg">
            Server có 14 kỹ năng gốc bạn có thể tăng cấp. Mỗi kỹ năng đều có một "cây kỹ năng" (skill tree), 
            chứa đầy các "đặc quyền" (perks) bạn có thể mở khóa để nhận các phần thưởng cụ thể.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="power" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4">
              <TabsTrigger value="power">Sức Mạnh</TabsTrigger>
              <TabsTrigger value="combat">Chiến Đấu</TabsTrigger>
              <TabsTrigger value="gathering">Thu Thập</TabsTrigger>
              <TabsTrigger value="crafting">Chế Tạo</TabsTrigger>
            </TabsList>

            <TabsContent value="power" className="space-y-4">
              <PowerSkill />
            </TabsContent>

            <TabsContent value="combat" className="space-y-4">
              <CombatSkills />
            </TabsContent>

            <TabsContent value="gathering" className="space-y-4">
              <GatheringSkills />
            </TabsContent>

            <TabsContent value="crafting" className="space-y-4">
              <CraftingSkills />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Skills;
