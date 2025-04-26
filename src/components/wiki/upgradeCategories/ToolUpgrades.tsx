
import { Card, CardContent } from "@/components/ui/card";

const ToolUpgrades = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp công cụ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Năng lượng</h3>
              <img src="/placeholder.svg" alt="Nâng cấp năng lượng" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +1 Sức mạnh Khai thác, giúp khai thác khối nhanh hơn.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Khai thác</h3>
              <img src="/placeholder.svg" alt="Nâng cấp khai thác" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +10% vật phẩm rơi ra từ khối.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Thăm dò</h3>
              <img src="/placeholder.svg" alt="Nâng cấp thăm dò" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +1 May mắn Khai thác.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Ái lực độ sâu</h3>
              <img src="/placeholder.svg" alt="Nâng cấp ái lực độ sâu" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Cho phép cuốc khai thác đá sâu với tốc độ tương tự như đá.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToolUpgrades;
