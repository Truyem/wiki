import { Card, CardContent } from "@/components/ui/card";
const ToolUpgrades = () => {
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp công cụ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Năng lượng</h3>
              <img alt="Nâng cấp năng lượng" className="rounded-lg shadow-md max-w-full h-auto mb-4" src="/lovable-uploads/12d4fca8-ceed-4ec5-b693-53fa374368f4.png" />
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
              <img alt="Nâng cấp khai thác" className="rounded-lg shadow-md max-w-full h-auto mb-4" src="/lovable-uploads/606409ad-f931-4cc4-bd4b-0ef1ad67819b.png" />
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
              <img alt="Nâng cấp thăm dò" className="rounded-lg shadow-md max-w-full h-auto mb-4" src="/lovable-uploads/0250737d-8420-4f40-8241-ba2adf433179.png" />
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
              <img alt="Nâng cấp ái lực độ sâu" className="rounded-lg shadow-md max-w-full h-auto mb-4" src="/lovable-uploads/144f974d-2e49-4ed1-85d5-110586d46428.png" />
              <p className="text-center">
                Cho phép cuốc khai thác đá sâu với tốc độ tương tự như đá.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default ToolUpgrades;