import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const QualityUpgrades = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Cải thiện trang bị</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Cách nâng cấp và cải thiện trang bị của bạn để đạt hiệu quả tối đa.
        </p>
      </div>

      <Separator className="my-6" />

      <Tabs defaultValue="fitting" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fitting">Làm vừa vặn áo giáp</TabsTrigger>
          <TabsTrigger value="tempering">Tôi luyện</TabsTrigger>
          <TabsTrigger value="sharpening">Mài</TabsTrigger>
        </TabsList>
        <TabsContent value="fitting" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Làm vừa vặn áo giáp</h2>
              <p className="mb-4">
                Áo giáp mới chế tạo sẽ có thuộc tính "Không phù hợp", có nghĩa là nó chưa thực sự phù hợp với cơ thể bạn. Bạn có thể làm cho nó vừa vặn hơn bằng cách thêm nguyên liệu vào vật phẩm, giúp tăng gấp đôi độ bền áo giáp và mang lại nhiều kinh nghiệm Rèn hơn.
              </p>
              <div className="flex justify-center mb-6">
                <img alt="Làm vừa vặn áo giáp" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/dd80e3e9-2e96-4dfe-bbd3-008fd6057610.png" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tempering" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Tôi luyện</h2>
              <p className="mb-4">
                Trang bị kim loại (sắt, vàng, kim cương và đồng) mới chế tạo sẽ khá mềm và yếu. Bạn cần tôi luyện chúng bằng cách nung nóng.
              </p>
              <div className="flex justify-center mb-4">
                <img alt="Nung nóng trang bị" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/9879bc63-6f7f-46a5-b1c2-593a12a04d20.png" />
              </div>
              <p className="mb-4">
                Rồi làm nguội trong vạc nước. Quá trình này tăng gấp đôi độ bền, mang lại nhiều kinh nghiệm Rèn hơn và tăng tốc độ khai thác của công cụ.
              </p>
              <div className="flex justify-center mb-6">
                <img alt="Làm nguội trang bị" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/3fbe3740-0da3-438d-b6b0-1f5e7fa9f389.png" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sharpening" className="mt-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Mài</h2>
              <p className="mb-4">
                Vũ khí và công cụ (trừ đá và gỗ) sẽ có thuộc tính "Cùn", có nghĩa là chúng cần được mài để đạt được sát thương tối đa. Mài vũ khí trên đá mài sẽ giúp tăng đáng kể sát thương và mang lại kinh nghiệm Rèn.
              </p>
              <div className="flex justify-center mb-6">
                <img alt="Mài vũ khí" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/58306a2f-d281-4c30-a887-dff24384b989.png" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Chất lượng và nâng cấp</h2>
          <p className="mb-4">
            Trang bị được chế tạo trong game có các thuộc tính bổ sung:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Chất lượng:</strong> Ví dụ, "Bậc thầy" cho biết vật phẩm được chế tạo một cách xuất sắc, vượt xa mong đợi của Minecraft gốc.</li>
            <li><strong>Nâng cấp:</strong> Mỗi trang bị có một số lượng "ô nâng cấp" nhất định, cho phép bạn cải thiện thêm các thuộc tính của nó.</li>
          </ul>
        </CardContent>
      </Card>

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
                <img src="/lovable-uploads/n4.png" alt="Nâng cấp 4 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Nâng cấp: 5</h3>
              <div className="flex justify-center">
                <img src="/lovable-uploads/n5.png" alt="Nâng cấp 5 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-center">Nâng cấp: 6</h3>
              <div className="flex justify-center">
                <img src="/lovable-uploads/n6.png" alt="Nâng cấp 6 ô" className="rounded-lg shadow-md max-w-full h-auto" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default QualityUpgrades;