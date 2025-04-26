import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const MaterialTiers = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Cấp độ vật liệu</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Tìm hiểu về các cấp độ vật liệu trong game và chỉ số vũ khí tùy chỉnh.
        </p>
      </div>

      <Separator className="my-6" />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Cấp độ vật liệu</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#252525] border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Vật liệu</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Cấp độ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Gỗ/Vàng</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">0</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Đá</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Sắt</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">2</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Kim cương</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">3</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Netherite</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Chỉ số vũ khí tùy chỉnh</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#252525] border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Vũ khí</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Khả năng</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Sát thương tấn công cơ bản</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Sát thương đập cơ bản</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Tốc độ tấn công</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Rìu lớn</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">-20% Cơ hội chí mạng</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">9.0 (+1.5/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600"></td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">0.5</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Búa chiến</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">+50% Lực đẩy lùi, +20% Cơ hội choáng</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1.0*</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">6.0 (+1/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1.0</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Giáo</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">+1.0 Tầm đánh, +30% Sát thương vận tốc</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">5.0 (+1/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600"></td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">0.8</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Chùy sao</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">+20% Cơ hội choáng</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1.0*</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">2.5 (+1/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1.6</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Kiếm rapier</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">-30% Xuyên giáp, +50% Giảm khả năng miễn dịch, -200% Lực đẩy lùi</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">2.0 (+0.5/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600"></td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">4.0</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">Dao găm</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">+20% Cơ hội chí mạng, -1.0 Tầm đánh</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">4.0 (+1/cấp)</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600"></td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">1.8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Sát thương vũ khí tuỳ chỉnh</h2>
          <p className="mb-4">
            Sát thương vận tốc của Giáo tăng thêm sát thương dựa trên tốc độ di chuyển của người chơi khi tấn công.
          </p>
          <div className="flex justify-center mb-6">
            
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Xếp hạng chất lượng vật phẩm</h2>
          <p className="mb-4">Hệ thống gồm 9 bậc xếp hạng chất lượng:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-[#252525] border border-gray-300 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Cấp độ</th>
                  <th className="py-2 px-4 border-b dark:border-gray-600 text-left">Xếp hạng</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">1</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Tệ hại</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">2</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Kém</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">3</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Tạm được</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">4</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Tốt</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">5</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Tuyệt vời</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">6</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Hoàn hảo</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">7</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Bậc thầy</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">8</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Huyền thoại</td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="py-2 px-4 border-b dark:border-gray-600">9</td>
                  <td className="py-2 px-4 border-b dark:border-gray-600">Vô song</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>;
};
export default MaterialTiers;