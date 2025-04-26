
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CommonUpgrades from "@/components/wiki/upgradeCategories/CommonUpgrades";
import ToolUpgrades from "@/components/wiki/upgradeCategories/ToolUpgrades";
import WeaponUpgrades from "@/components/wiki/upgradeCategories/WeaponUpgrades";
import ArmorUpgrades from "@/components/wiki/upgradeCategories/ArmorUpgrades";

const Upgrades = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Chất lượng và nâng cấp</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Trang bị được chế tạo trong game có các thuộc tính bổ sung:
        </p>
      </div>

      <Separator className="my-6" />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Ô nâng cấp</h2>
          <p className="mb-4">
            Mỗi trang bị ban đầu có 3 ô nâng cấp, bạn có thể tùy chỉnh bằng nhiều loại nâng cấp khác nhau. Bạn cũng có thể thêm tối đa 6 lỗ nâng cấp cho mỗi vật phẩm bằng các công thức chế tạo dưới đây.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Nâng cấp: 4</h3>
              <div className="flex justify-center">
                <img src="/placeholder.svg" alt="Nâng cấp 4 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Nâng cấp: 5</h3>
              <div className="flex justify-center">
                <img src="/placeholder.svg" alt="Nâng cấp 5 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Nâng cấp: 6</h3>
              <div className="flex justify-center">
                <img src="/placeholder.svg" alt="Nâng cấp 6 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="common" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="common">Chung</TabsTrigger>
          <TabsTrigger value="tools">Công cụ</TabsTrigger>
          <TabsTrigger value="weapons">Vũ khí</TabsTrigger>
          <TabsTrigger value="armor">Áo giáp</TabsTrigger>
        </TabsList>
        <TabsContent value="common">
          <CommonUpgrades />
        </TabsContent>
        <TabsContent value="tools">
          <ToolUpgrades />
        </TabsContent>
        <TabsContent value="weapons">
          <WeaponUpgrades />
        </TabsContent>
        <TabsContent value="armor">
          <ArmorUpgrades />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Upgrades;
