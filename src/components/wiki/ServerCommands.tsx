import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const ServerCommands = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Lệnh Server</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Tổng hợp các lệnh hữu ích trong server.
        </p>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh teleport</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
              /tpa &lt;player_name&gt;
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh nâng cấp kỹ năng</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
              /skills
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh mở kho trang sức</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
              /trinkets
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh cửa hàng phù phép</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">/enchanter</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh mở bảng xếp hạng</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
              /valtop &lt;skill&gt;
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Lệnh sửa đồ</h2>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono mb-3">
              /suachua
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Sửa đồ đang cầm trên tay. Mỗi lần tốn 1000 exp. Lưu ý: nếu cầm nhầm đồ, XP không được hoàn trả.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardContent className="pt-6">
          <div className="text-center">
            <blockquote className="italic text-lg text-gray-700 dark:text-gray-300 mb-2">
              "Nhân loại trốn tránh khỏi sự hoàn hảo vì họ không thể hiểu được nó. Vậy thì hãy để ta làm việc đó"
            </blockquote>
            <h2 className="text-2xl font-bold mt-4 text-[#825432] dark:text-[#FFAA00]">Tiến Hóa Huy Hoàng</h2>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default ServerCommands;