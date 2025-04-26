import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const SpecialItems = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Vật phẩm đặc biệt</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Công thức chế tạo các vật phẩm đặc biệt và lọ Shimmer.
        </p>
      </div>

      <Separator className="my-6" />

      <Tabs defaultValue="special-recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="special-recipes">Vật phẩm đặc biệt</TabsTrigger>
          <TabsTrigger value="shimmer-potions">Lọ Shimmer</TabsTrigger>
        </TabsList>
        <TabsContent value="special-recipes" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Đinh ba</h2>
              <p className="mb-4">
                Yêu cầu mở khóa kỹ năng Rèn biển (rèn).
              </p>
              <div className="flex justify-center mb-6">
                <img alt="Công thức chế tạo đinh ba" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/69d6e0e1-63b4-422e-92e0-2271b6152cb0.png" />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Cánh Elytra</h2>
              <p className="mb-4">
                Yêu cầu mở khóa kỹ năng Rèn ngoại giới (rèn).
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                <img alt="Công thức chế tạo cánh elytra 1" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/06c2109f-dc51-4aeb-a2d0-f918677ca1d3.png" />
                <img alt="Công thức chế tạo cánh elytra 2" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/694b3310-8b1b-4091-af92-f530b5238f20.png" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shimmer-potions" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lọ rỗng</h2>
              <p className="mb-4">
                Thành phần cơ bản trong các công thức lọ khác.
              </p>
              <div className="flex justify-center mb-6">
                <img alt="Công thức chế tạo lọ rỗng" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/3abc87c1-8d2a-4e1a-9f7c-35bee945e83e.png" />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lọ Thối rữa</h2>
                <p className="mb-4">
                  Áp dụng 50% giảm hồi máu.
                </p>
                <div className="flex justify-center mb-6">
                  <img alt="Công thức chế tạo lọ thối rữa" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/d52659ab-21b8-4e71-b484-fea5c17cf0c6.png" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lọ Độc Dược</h2>
                <p className="mb-4">
                  Áp dụng hiệu ứng Nhiễm độc I (0:30).
                </p>
                <div className="flex justify-center mb-6">
                  <img alt="Công thức chế tạo lọ độc dược" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/81b68ccc-caf5-4013-93ab-d6650f8f57e3.png" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lọ thánh thiện</h2>
                <p className="mb-4">
                  Gây 6.0 sát thương Bức xạ tức thì.
                </p>
                <div className="flex justify-center mb-6">
                  <img alt="Công thức chế tạo lọ thánh thiện" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/41975f3b-f12c-4923-a97d-909bb37db6e4.png" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lọ gây hại</h2>
                <p className="mb-4">
                  Gây 4.0 sát thương Ma thuật tức thì.
                </p>
                <div className="flex justify-center mb-6">
                  <img alt="Công thức chế tạo lọ gây hại" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/9d5ad659-cb4d-4a98-9fd2-1922d6d74656.png" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default SpecialItems;