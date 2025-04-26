
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Trinkets = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Trinkets</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thông tin về Trinkets và cách nâng cấp chúng.
        </p>
      </div>

      <Separator className="my-6" />

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
                  <img src="/placeholder.svg" alt="Danh sách Trinket chưa nâng cấp" className="rounded-lg shadow-md max-w-full h-auto" />
                </div>
                <div className="flex justify-center">
                  <img src="/placeholder.svg" alt="Chữ màu vàng" className="rounded-lg shadow-md max-w-full h-auto" />
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
                  <img src="/placeholder.svg" alt="Danh sách Trinket đã nâng cấp" className="rounded-lg shadow-md max-w-full h-auto" />
                </div>
                <div className="flex justify-center">
                  <img src="/placeholder.svg" alt="Chữ màu hồng" className="rounded-lg shadow-md max-w-full h-auto" />
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
            <img src="/placeholder.svg" alt="Cách nâng cấp trinket" className="rounded-lg shadow-md max-w-full h-auto" />
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
    </div>
  );
};

export default Trinkets;
