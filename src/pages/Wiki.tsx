
import React from 'react';
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

const Wiki = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Wiki</h1>
      
      <Tabs defaultValue="races" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 mb-8">
          <TabsTrigger value="races">Chủng tộc</TabsTrigger>
          <TabsTrigger value="materials">Vật liệu</TabsTrigger>
          <TabsTrigger value="crafting">Chế tạo cơ bản</TabsTrigger>
          <TabsTrigger value="enchantments">Phù phép</TabsTrigger>
          <TabsTrigger value="upgrades">Nâng cấp</TabsTrigger>
          <TabsTrigger value="quality">Nâng cấp chất lượng</TabsTrigger>
          <TabsTrigger value="special">Vật phẩm đặc biệt</TabsTrigger>
          <TabsTrigger value="trinkets">Trang sức</TabsTrigger>
          <TabsTrigger value="commands">Lệnh máy chủ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="races">
          <Races />
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
      </Tabs>
    </div>
  );
};

export default Wiki;
