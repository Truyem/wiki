
import { Card, CardContent } from "@/components/ui/card";

const ArmorUpgrades = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp áo giáp</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Miễn dịch</h3>
              <img src="/placeholder.svg" alt="Nâng cấp miễn dịch" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +1 khả năng miễn dịch, tương đương với 0.05 giây miễn nhiễm sát thương sau khi nhận sát thương.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Add all armor upgrades similarly - for brevity not showing all entries */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Hồi máu</h3>
              <img src="/placeholder.svg" alt="Nâng cấp hồi máu" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +5% khả năng hồi máu.
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Add remaining armor upgrades */}
      </div>
    </div>
  );
};

export default ArmorUpgrades;
