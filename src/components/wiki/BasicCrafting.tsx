import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const BasicCrafting = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Chế tạo cơ bản</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Không giống như Minecraft gốc, bạn không thể chế tạo trang bị sắt, vàng và kim cương chỉ với nguyên liệu thô. Bạn cần phải xử lý thêm nguyên liệu trước khi sử dụng chúng để chế tạo, và bạn cũng sẽ cần một cái đe!
        </p>
      </div>

      <Separator className="my-6" />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Sắt và Vàng</h2>
          <p className="mb-4">
            Đầu tiên, bạn cần nung nóng thỏi sắt hoặc vàng trong lò nung, lò luyện kim hoặc lửa trại.
          </p>
          <div className="flex justify-center mb-6">
            <img alt="Nung nóng thỏi sắt hoặc vàng" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/890d3524-8ec2-462e-bca5-b60023d06416.png" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Kim cương</h2>
          <p className="mb-4">
            Bạn cần làm cho kim cương trở nên không ổn định bằng cách sử dụng ngọc ender.
          </p>
          <div className="flex justify-center mb-6">
            <img alt="Kim cương không ổn định" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/cd0a0d9a-6584-4928-a35a-bea35acb1276.png" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Sử dụng đe</h2>
          <p className="mb-4">
            Sau khi xử lý nguyên liệu, bạn sẽ thấy một thông báo cho biết bạn cần một cái đe để chế tạo trang bị.
          </p>
          <div className="flex justify-center mb-4">
            <img alt="Thông báo cần đe" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/36756bb4-e29d-427b-8d7a-9a21a217d4d5.png" />
          </div>
          <p className="mb-4">
            Đặt một cái đe (công thức chế tạo không thay đổi) trong vòng 5 khối xung quanh bàn chế tạo để tiếp tục.
          </p>
          <div className="flex justify-center mb-6">
            <img alt="Đặt đe gần bàn chế tạo" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/9c3a232a-c55e-4e3c-bbaa-aad6b5da0859.png" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Trang bị Đồng</h2>
          <p className="mb-4">
            Bạn cũng có thể chế tạo trang bị đồng, đóng vai trò trung gian giữa đá và sắt. Trang bị đồng cho phép bạn khai thác những thứ tương tự như trang bị sắt, giúp bạn dễ dàng tiếp cận các công cụ tốt hơn trong giai đoạn đầu trò chơi.
          </p>
          <div className="flex justify-center mb-6">
            <img alt="Trang bị đồng" className="rounded-lg shadow-md max-w-full h-auto" src="/lovable-uploads/3b1544d8-caf7-47de-a5ff-13a99c64ae6e.png" />
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default BasicCrafting;