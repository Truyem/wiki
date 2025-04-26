
import { Card, CardContent } from "@/components/ui/card";

const WeaponUpgrades = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp vũ khí</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Chảy máu</h3>
              <img src="/placeholder.svg" alt="Nâng cấp chảy máu" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +5% cơ hội gây chảy máu.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Xuyên thấu</h3>
              <img src="/placeholder.svg" alt="Nâng cấp xuyên thấu" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +5% xuyên giáp.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Dễ bị tổn thương</h3>
              <img src="/placeholder.svg" alt="Nâng cấp dễ bị tổn thương" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +10% giảm khả năng miễn dịch, giúp giảm thời gian kẻ địch miễn nhiễm sát thương sau khi bị tấn công.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Đẩy ra</h3>
              <img src="/placeholder.svg" alt="Nâng cấp đẩy ra" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +100% cơ hội hất ngã kẻ địch đang cưỡi (như ngựa hoặc nhện).
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Săn trộm</h3>
              <img src="/placeholder.svg" alt="Nâng cấp săn trộm" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +20% vật phẩm rơi ra từ mob.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Sắc bén hơn</h3>
              <img src="/placeholder.svg" alt="Nâng cấp sắc bén hơn" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +5% sát thương.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Chí mạng</h3>
              <img src="/placeholder.svg" alt="Nâng cấp chí mạng" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +5% cơ hội tấn công chí mạng.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Hút máu</h3>
              <img src="/placeholder.svg" alt="Nâng cấp hút máu" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +3% hút máu, chuyển đổi sát thương gây ra thành hồi máu cho bản thân.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">Tước vũ khí</h3>
              <img src="/placeholder.svg" alt="Nâng cấp tước vũ khí" className="rounded-lg shadow-md max-w-full h-auto mb-4" />
              <p className="text-center">
                Tăng +1 giây tước khiên.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <p className="text-gray-700 dark:text-gray-300 italic text-sm">
          Hầu hết các nâng cấp có thể được áp dụng tối đa 5 lần, chúng có thể cộng dồn!
        </p>
      </div>
    </div>
  );
};

export default WeaponUpgrades;
