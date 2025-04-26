
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewArmorUpgrades from './upgradeCategories/NewArmorUpgrades';
import NewWeaponUpgrades from './upgradeCategories/NewWeaponUpgrades';
import NewToolUpgrades from './upgradeCategories/NewToolUpgrades';
import NewCommonUpgrades from './upgradeCategories/NewCommonUpgrades';

const NewUpgrades = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nâng cấp</h1>
      
      <div className="mb-6">
        <p className="mb-4">
          Hệ thống nâng cấp cho phép người chơi cải thiện vũ khí, áo giáp và công cụ của họ với các hiệu ứng đặc biệt.
        </p>
        <p>
          Mỗi loại nâng cấp cần các nguyên liệu khác nhau và có thể được áp dụng cho các loại vật phẩm cụ thể.
        </p>
      </div>

      <Tabs defaultValue="weapon">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="weapon">Vũ khí</TabsTrigger>
          <TabsTrigger value="armor">Áo giáp</TabsTrigger>
          <TabsTrigger value="tool">Công cụ</TabsTrigger>
          <TabsTrigger value="common">Chung</TabsTrigger>
        </TabsList>
        
        <TabsContent value="weapon">
          <NewWeaponUpgrades />
        </TabsContent>
        
        <TabsContent value="armor">
          <NewArmorUpgrades />
        </TabsContent>
        
        <TabsContent value="tool">
          <NewToolUpgrades />
        </TabsContent>
        
        <TabsContent value="common">
          <NewCommonUpgrades />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewUpgrades;
