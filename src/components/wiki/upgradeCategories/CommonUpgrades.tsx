import { Card, CardContent } from "@/components/ui/card";
const CommonUpgrades = () => {
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp chung</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Bền bỉ</h3>
              <img alt="Nâng cấp bền bỉ" className="rounded-lg shadow-md max-w-full h-auto mb-4" src="/lovable-uploads/4956e593-f7ff-4d7e-ac73-d8db46e454f7.png" />
              <p className="text-center">
                Tăng +5% độ bền hiệu quả cho tất cả vật phẩm được trang bị.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default CommonUpgrades;