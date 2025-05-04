
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Races from "@/components/wiki/Races";
import MaterialTiers from "@/components/wiki/MaterialTiers";
import BasicCrafting from "@/components/wiki/BasicCrafting";
import Enchantments from "@/components/wiki/Enchantments";
import QualityUpgrades from "@/components/wiki/QualityUpgrades";
import SpecialItems from "@/components/wiki/SpecialItems";
import Trinkets from "@/components/wiki/Trinkets";
import ServerCommands from "@/components/wiki/ServerCommands";
import NewUpgrades from "@/components/wiki/NewUpgrades";
import Professions from "@/components/wiki/Professions";
import CraftingSkillsDetail from "@/components/wiki/CraftingSkillsDetail";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MechanicsContent } from "@/components/wiki/MechanicsContent";
import { SkillsContent } from "@/components/wiki/SkillsContent";

const Wiki = () => {
  const [activeSection, setActiveSection] = useState("basic-crafting");

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212] flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#259e63] dark:text-[#55FFFF]">Wiki</h1>
        
        <Tabs defaultValue="races" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-13 mb-8 overflow-x-auto flex-wrap">
            <TabsTrigger value="races">Chủng tộc</TabsTrigger>
            <TabsTrigger value="professions">Nghề Nghiệp</TabsTrigger>
            <TabsTrigger value="crafting-skills">Kỹ Năng Chế Tạo</TabsTrigger>
            <TabsTrigger value="materials">Vật liệu</TabsTrigger>
            <TabsTrigger value="crafting">Chế tạo cơ bản</TabsTrigger>
            <TabsTrigger value="enchantments">Phù phép</TabsTrigger>
            <TabsTrigger value="upgrades">Nâng cấp</TabsTrigger>
            <TabsTrigger value="quality">Nâng cấp chất lượng</TabsTrigger>
            <TabsTrigger value="special">Vật phẩm đặc biệt</TabsTrigger>
            <TabsTrigger value="trinkets">Trang sức</TabsTrigger>
            <TabsTrigger value="commands">Lệnh máy chủ</TabsTrigger>
            <TabsTrigger value="mechanics">Cơ Chế</TabsTrigger>
            <TabsTrigger value="skills">Kỹ Năng</TabsTrigger>
          </TabsList>
          
          <TabsContent value="races">
            <Races />
          </TabsContent>
          <TabsContent value="professions">
            <Professions />
          </TabsContent>
          <TabsContent value="crafting-skills">
            <CraftingSkillsDetail />
          </TabsContent>
          <TabsContent value="materials">
            <MaterialTiers />
          </TabsContent>
          <TabsContent value="crafting">
            <BasicCrafting />
          </TabsContent>
          <TabsContent value="enchantments">
            <Enchantments />
          </TabsContent>
          <TabsContent value="upgrades">
            <NewUpgrades />
          </TabsContent>
          <TabsContent value="quality">
            <QualityUpgrades />
          </TabsContent>
          <TabsContent value="special">
            <SpecialItems />
          </TabsContent>
          <TabsContent value="trinkets">
            <Trinkets />
          </TabsContent>
          <TabsContent value="commands">
            <ServerCommands />
          </TabsContent>
          <TabsContent value="mechanics">
            <MechanicsContent />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsContent />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Wiki;
