import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TrinketsList from "./TrinketsList";
const Trinkets = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Trinkets</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thông tin về Trinkets và cách nâng cấp chúng.
        </p>
      </div>

      <Separator className="my-6" />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Danh sách Trinkets</h2>
          <TrinketsList />
        </CardContent>
      </Card>

      <Tabs defaultValue="basic-trinkets" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic-trinkets">Trinket chưa nâng cấp</TabsTrigger>
          <TabsTrigger value="upgraded-trinkets">Trinket đã nâng cấp</TabsTrigger>
        </TabsList>
        <TabsContent value="basic-trinkets" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Danh sách Trinket chưa nâng cấp</h2>
              <p className="mb-4">
                Trinket chưa nâng cấp được hiển thị bằng chữ màu vàng trong kho trang sức.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex justify-center">
                  <img alt="Danh sách Trinket chưa nâng cấp" className="rounded-lg shadow-md max-w-full h-auto object-contain" src="/lovable-uploads/4199821b-1f80-4539-ba75-26cafe9ce469.png" />
                </div>
                <div className="flex justify-center">
                  <img alt="Chữ màu vàng" src="/lovable-uploads/d6b5e36f-e76a-4557-bb69-817dd04f7f7f.png" className="rounded-lg shadow-md max-w-full h-auto object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upgraded-trinkets" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Danh sách Trinket đã nâng cấp</h2>
              <p className="mb-4">
                Trinket đã nâng cấp được hiển thị bằng chữ màu hồng trong kho trang sức.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex justify-center">
                  <img alt="Danh sách Trinket đã nâng cấp" className="rounded-lg shadow-md max-w-full h-auto object-contain" src="/lovable-uploads/f3e8425f-8dd6-4dff-9d2e-5d6ea508d500.png" />
                </div>
                <div className="flex justify-center">
                  <img alt="Chữ màu hồng" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/92de5b6e-e0d3-4a48-a16d-4be6f5ff8727.png" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Cách nâng cấp</h2>
          <p className="mb-4">
            Sử dụng Nether star để nâng cấp Trinket.
          </p>
          <div className="flex justify-center mb-6">
            <img alt="Cách nâng cấp trinket" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/6c98906a-1c55-4726-90d3-1e3735039a19.png" />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Mở kho trang sức</h2>
          <p className="mb-4">
            Sử dụng lệnh <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">/trinkets</span> để mở kho trang sức của bạn.
          </p>
        </CardContent>
      </Card>
    </div>;
};
export default Trinkets;