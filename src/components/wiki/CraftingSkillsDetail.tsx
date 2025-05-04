
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hammer,
  Sword,
  FlaskRound,
  Wand,
} from "lucide-react";

const CraftingSkillsDetail = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4 text-[#259e63] dark:text-[#55FFFF]">
          Kỹ Năng Chuyên Sâu: Chế Tạo
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Chi tiết chuyên sâu về ba kỹ năng chế tạo quan trọng: Rèn, Phù Phép và Giả Kim.
        </p>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md my-4 dark:bg-amber-900/20 dark:border-amber-800">
          <p className="text-amber-800 dark:text-amber-300 font-medium">
            <strong>Lưu ý:</strong> Mỗi kỹ năng tăng theo cấp độ, cung cấp lên đến 150 điểm chất lượng ở cấp 100. Kỹ năng càng cao, vật phẩm chế tạo càng mạnh.
          </p>
        </div>
      </div>

      <Tabs defaultValue="smithing">
        <TabsList className="w-full grid grid-cols-3">
          {/* Smithing Tab Trigger (Green/Brown) */}
          <TabsTrigger value="smithing" className="flex gap-2 items-center data-[state=active]:bg-[#FEF7CD] data-[state=active]:text-[#825432] dark:data-[state=active]:bg-[#eab308]/30 dark:data-[state=active]:text-[#FFAA00]">
            <Hammer size={16} className="text-[#825432] dark:text-[#FFAA00]" />
            Rèn
          </TabsTrigger>
          {/* Enchanting Tab Trigger (Blue) */}
          <TabsTrigger value="enchanting" className="flex gap-2 items-center data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400">
            <Wand size={16} className="text-blue-700 dark:text-blue-400" />
            Phù Phép
          </TabsTrigger>
          {/* Alchemy Tab Trigger (Purple) */}
          <TabsTrigger value="alchemy" className="flex gap-2 items-center data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-400">
            <FlaskRound size={16} className="text-purple-600 dark:text-purple-400" />
            Giả Kim
          </TabsTrigger>
        </TabsList>

        {/* Smithing Content (Green/Brown Theme) */}
        <TabsContent value="smithing" className="mt-4 space-y-4">
          <Card className="border-[#825432] dark:border-[#FFAA00] dark:border-opacity-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#FEF7CD] dark:bg-[#eab308]/20 rounded-lg">
                  <Hammer className="h-8 w-8 text-[#825432] dark:text-[#FFAA00]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#825432] dark:text-[#FFAA00]">
                    Kỹ Năng Chuyên Sâu: Rèn
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Chế tạo bất kỳ công cụ hoặc bộ giáp nào cũng sẽ mang lại cho nó một giá trị chất lượng. Giá trị chất lượng này bằng chỉ số chất lượng Rèn chung của bạn CỘNG VỚI chỉ số chất lượng Rèn của bạn cho vật liệu làm nên trang bị đó.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-[#825432] dark:text-[#FFAA00]">Chất lượng Cơ bản</h4>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Mỗi trang bị có một chất lượng "cơ bản". Nó định nghĩa chú giải chất lượng hiển thị trên trang bị và xác định khi nào chỉ số của trang bị bằng với chỉ số trong phiên bản gốc (vanilla).
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Loại vật liệu</th>
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right">Chất lượng Cơ bản</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Gỗ</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">50</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Da</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">50</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Đá</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Giáp Xích</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Cung</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Vàng</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">110</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Sắt</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">110</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Kim Cương</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">140</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Hải Thạch</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">155</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Netherite</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">170</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Enderic</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-gray-700 dark:text-gray-300">185</td></tr>
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#825432] dark:text-[#FFAA00]">Chú Giải Chất Lượng</h4>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Chú giải chất lượng được xác định dựa trên sự chênh lệch chất lượng của trang bị so với chất lượng cơ bản của nó.
              </p>
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Chênh lệch chất lượng</th>
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left">Chú giải</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">-50</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Tệ hại</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">-60</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Kém chất lượng</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">-30</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Khá</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">0</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Tốt</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">30</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Tuyệt vời</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">60</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Hoàn hảo</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">90</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Bậc thầy</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">120</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Huyền thoại</td></tr>
                  <tr><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">150</td><td className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">Vô song</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mb-3 text-[#825432] dark:text-[#FFAA00]">Cách tăng chất lượng Rèn</h4>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> Cây kỹ năng: +50 chất lượng cho mỗi loại vật liệu cụ thể</li>
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> Đặc quyền cuối: +50 cho tất cả vật liệu</li>
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-[#825432] dark:text-[#FFAA00]">✦</span> Nghề Thợ Rèn: +25 chất lượng Rèn</li>
            </ul>

            <div className="bg-[#FEF7CD]/30 dark:bg-[#FFAA00]/10 p-4 rounded-md border border-[#FFAA00]/30 mb-6"> 
              <h4 className="text-lg font-semibold mb-2 text-[#825432] dark:text-[#FFAA00]">Ảnh hưởng của chất lượng Rèn lên trang bị</h4>
              <div className="overflow-x-auto text-gray-700 dark:text-gray-300">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 text-left">Chỉ số</th>
                      <th className="py-2 px-4 text-left">Thang đo (từ cơ bản đến 300)</th>
                      <th className="py-2 px-4 text-left">Ngoại lệ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-2 px-4">Giáp</td>
                      <td className="py-2 px-4">1-1.5 lần giáp từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Độ bền giáp</td>
                      <td className="py-2 px-4">1-2 lần độ bền giáp từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Sát thương tấn công</td>
                      <td className="py-2 px-4">+0-4 sát thương từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4">Đối với kiếm lưỡi mỏng là +0-2 và đối với rìu lớn là +0-6. Xem Vũ khí tùy chỉnh</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Tốc độ tấn công</td>
                      <td className="py-2 px-4">+0-0.2 tốc độ tấn công từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4">Đối với rìu lớn là +0-0.1, và kiếm lưỡi mỏng không có thang đo tốc độ tấn công</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Tốc độ đào</td>
                      <td className="py-2 px-4">+0-50% tốc độ đào từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Sát thương vật cùn</td>
                      <td className="py-2 px-4">+0-3.5 sát thương từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4">Đối với búa chiến là +0-4</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Kháng bật lùi</td>
                      <td className="py-2 px-4">1-2 lần kháng từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-[#FEF7CD]/30 dark:bg-[#FFAA00]/10 p-4 rounded-md border border-[#FFAA00]/30 text-[#825432] dark:text-[#FFAA00] italic">
              <p>
                Với cấu hình mặc định, bạn có thể tích lũy tổng cộng 425 chất lượng Rèn. Plugin này được cân bằng dựa trên mức tối đa giả định là 300, vì vậy bạn có thể tạo ra một số trang bị khá bá đạo khi thực hiện điều này.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Enchanting Content (Blue Theme) */}
        <TabsContent value="enchanting" className="mt-4 space-y-4">
          <Card className="border-blue-500 dark:border-blue-900 dark:border-opacity-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Wand className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400">
                    Kỹ Năng Chuyên Sâu: Phù Phép
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Phù phép không thay đổi loại phù phép bạn nhận được, thay vào đó, nó chỉ thay đổi cấp độ bạn nhận được với các phù phép đó và các cấp độ này được tính toán dựa trên chỉ số chất lượng Phù phép của bạn.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
              <Sword className="text-blue-700 dark:text-blue-400" size={18} />
              <p className="font-medium">
                Ở 120 chất lượng, tất cả phù phép trở lại sức mạnh gốc (của Minecraft vanilla).
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              Mức điều chỉnh cấp độ phù phép theo chất lượng được tính theo công thức: 2/120 × chất lượng - 2.
            </p>

            <h4 className="text-lg font-semibold mt-4 text-blue-700 dark:text-blue-400">Điều chỉnh cấp độ phù phép theo chất lượng</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-left">Phù phép</th>
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-center">Mức giảm ở 0 chất lượng</th>
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-center">Chất lượng cần cho 1 cấp điều chỉnh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr><td className="py-1.5 px-3">Power</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Punch</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Sharpness</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Bane of Arthropods</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Smite</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Depth Strider</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Efficiency</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Unbreaking</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Fire Aspect</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Frost Walker</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Impaling</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Knockback</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Fortune</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Looting</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Loyalty</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Luck of the Sea</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Lure</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Respiration</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Piercing</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Protection</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Projectile Protection</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Blast Protection</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Fire Protection</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Feather Falling</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Quick Charge</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Riptide</td><td className="py-1.5 px-3 text-center">-2</td><td className="py-1.5 px-3 text-center">60</td></tr>
                  <tr><td className="py-1.5 px-3">Soul Speed</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Sweeping Edge</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Thorns</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                  <tr><td className="py-1.5 px-3">Swift Sneak</td><td className="py-1.5 px-3 text-center">-1</td><td className="py-1.5 px-3 text-center">120</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-3 text-blue-700 dark:text-blue-400">Cách tăng chất lượng Phù phép</h4>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li><span className="text-blue-700 dark:text-blue-400">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              <li><span className="text-blue-700 dark:text-blue-400">✦</span> Cây kỹ năng: Tổng cộng +150 chất lượng từ các đặc quyền</li>
              <li><span className="text-blue-700 dark:text-blue-400">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-blue-700 dark:text-blue-400">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-blue-700 dark:text-blue-400">✦</span> Nghề Phù Thuỷ: +25 chất lượng Phù phép</li>
            </ul>

            <div className="bg-blue-100/30 dark:bg-blue-900/10 p-4 rounded-md border border-blue-500/30 text-blue-700 dark:text-blue-400 italic">
              <p>
                Với cấu hình mặc định, bạn có thể tích lũy tối đa 425 chất lượng Phù phép. Hệ thống được cân bằng dựa trên mức 300, vì vậy vượt qua con số này sẽ giúp bạn tạo ra các phù phép cực kỳ mạnh.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* Alchemy Content (Purple Theme) */}
        <TabsContent value="alchemy" className="mt-4 space-y-4">
          <Card className="border-purple-500 dark:border-purple-900 dark:border-opacity-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <FlaskRound className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    Kỹ Năng Chuyên Sâu: Giả Kim
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Pha chế bất kỳ loại thuốc nào cũng sẽ mang lại cho nó một giá trị chất lượng. Giá trị chất lượng này bằng chỉ số chất lượng Giả Kim Thuật chung của bạn CỘNG VỚI chỉ số chất lượng Giả Kim Thuật của bạn cho loại thuốc có lợi hoặc thuốc độc.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Phạm vi thời gian hiệu lực và cường độ hiệu quả sẽ luôn từ 0-300 chất lượng.
            </p>

            <h4 className="text-lg font-semibold mt-4 text-purple-600 dark:text-purple-400">Hiệu quả Thuốc theo Chất lượng</h4>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left">Thuốc</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left">Cơ bản</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left">Kéo dài</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left">Cường hóa</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-1.5 px-2">Nhảy Cao 🥾</td>
                    <td className="py-1.5 px-2">Cấp I-II 2:00-6:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 6:00-18:00</td>
                    <td className="py-1.5 px-2">Cấp II-IV 1:00-3:00</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Tốc Độ 🏃‍♂️</td>
                    <td className="py-1.5 px-2">Cấp I-II 2:00-6:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 6:00-18:00</td>
                    <td className="py-1.5 px-2">Cấp II-IV 1:00-3:00</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Kháng Lửa 🔥</td>
                    <td className="py-1.5 px-2">2:00-6:00</td>
                    <td className="py-1.5 px-2">6:00-18:00</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Thở Dưới Nước 🤿</td>
                    <td className="py-1.5 px-2">2:00-6:00</td>
                    <td className="py-1.5 px-2">6:00-18:00</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Nhìn Đêm 👁</td>
                    <td className="py-1.5 px-2">2:00-6:00</td>
                    <td className="py-1.5 px-2">6:00-18:00</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Sức Mạnh ⚔</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:30-4:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 4:00-12:00</td>
                    <td className="py-1.5 px-2">Cấp II-IV 0:45-2:00</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Nhanh Nhẹn ⛏</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:30-4:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 4:00-12:00</td>
                    <td className="py-1.5 px-2">Cấp II-IV 0:45-2:00</td>
                    <td className="py-1.5 px-2">Pha chế với: <br/> - Thạch Anh Nether <br/> - Thuốc Trống</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Tăng Máu 💖</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:30-4:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 4:00-12:00</td>
                    <td className="py-1.5 px-2">Cấp II-IV 0:45-2:00</td>
                    <td className="py-1.5 px-2">Pha chế với: <br/> - Quả Mọng Ngọt <br/> - Thuốc Trống</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Tàng Hình 🕶</td>
                    <td className="py-1.5 px-2">1:30-4:00</td>
                    <td className="py-1.5 px-2">4:00-12:00</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Chậm Chạp ❄</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:00-3:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 3:00-8:00</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Yếu Ớt 🚬</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:00-2:00</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:30-4:30</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Rơi Chậm 🍂</td>
                    <td className="py-1.5 px-2">1:00-2:00</td>
                    <td className="py-1.5 px-2">1:30-4:30</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Hồi Máu 💓</td>
                    <td className="py-1.5 px-2">Cấp I-II 0:30-0:45</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:00-2:30</td>
                    <td className="py-1.5 px-2">Cấp II-IV 0:30-0:40</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Độc ☠</td>
                    <td className="py-1.5 px-2">Cấp I-II 0:30-0:45</td>
                    <td className="py-1.5 px-2">Cấp I-II 1:00-2:30</td>
                    <td className="py-1.5 px-2">Cấp II-IV 0:30-0:40</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Thạc Sĩ Rùa 🐢</td>
                    <td className="py-1.5 px-2">Chậm Chạp IV 0:30-0:40 <br /> Kháng Cự III 0:30-0:40</td>
                    <td className="py-1.5 px-2">Chậm Chạp IV 1:00-1:20 <br /> Kháng Cự III 1:00-1:20</td>
                    <td className="py-1.5 px-2">Chậm Chạp VI 0:20-0:30 <br /> Kháng Cự IV 0:20-0:30</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Hồi Phục ❤</td>
                    <td className="py-1.5 px-2">Cấp I-II</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2">Cấp II-III</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                  <tr>
                    <td className="py-1.5 px-2">Gây Sát Thương 💜</td>
                    <td className="py-1.5 px-2">Cấp I-II</td>
                    <td className="py-1.5 px-2">N/A</td>
                    <td className="py-1.5 px-2">Cấp II-III</td>
                    <td className="py-1.5 px-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Cách tăng chất lượng Giả Kim Thuật</h4>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li><span className="text-purple-600 dark:text-purple-400">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              <li><span className="text-purple-600 dark:text-purple-400">✦</span> Cây kỹ năng: +50 chất lượng chung và +100 cho thuốc có lợi/thuốc độc</li>
              <li><span className="text-purple-600 dark:text-purple-400">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-purple-600 dark:text-purple-400">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-purple-600 dark:text-purple-400">✦</span> Nghề Nhà Giả Kim: +25 chất lượng Giả Kim Thuật</li>
            </ul>

            <div className="bg-purple-100/30 dark:bg-purple-900/10 p-4 rounded-md border border-purple-500/30 mb-6"> 
              <p className="italic text-purple-700 dark:text-purple-400">
                Với cấu hình mặc định, bạn có thể tích lũy tổng cộng 425 chất lượng Giả Kim Thuật. Plugin này được cân bằng dựa trên mức tối đa giả định là 300, vì vậy bạn có thể tạo ra một số loại thuốc khá bá đạo khi thực hiện điều này.
              </p>
            </div>

            <div className="bg-purple-100/30 dark:bg-purple-900/10 p-4 rounded-md border border-purple-500/30">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-400 flex items-center">
                <FlaskRound className="mr-2 h-5 w-5 text-purple-600 dark:text-purple-400" /> Chuyển Đổi Vật Chất (Transmutation)
              </h4>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Chuyển Đổi Vật Chất được thực hiện bằng cách pha chế Thuốc Của Midas (Draught of Midas), loại thuốc này được pha chế bằng cách sử dụng Sao Nether (Nether Star) + Thuốc Trống (Awkward Potion).
              </p>
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Đây là một loại thuốc ném (splash potion) làm thay đổi vật liệu của khối khi ném ra. Nó chuyển đổi mọi thứ trong bán kính 2 khối và chỉ chuyển đổi các khối đang tiếp xúc với không khí.
              </p>
              <h5 className="font-medium mb-2 text-purple-600 dark:text-purple-400">Các Phản Ứng:</h5>
              <ul className="text-sm grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 dark:text-gray-300">
                <li>Oak Log &rarr; Birch Log &rarr; Spruce Log &rarr; Dark Oak Log &rarr; Jungle Log &rarr; Acacia Log &rarr; Oak Log</li>
                <li>Crimson Stem &rarr; Warped Stem &rarr; Crimson Stem</li>
                <li>Stone &rarr; Copper Ore &rarr; Iron Ore</li>
                <li>Redstone Block &rarr; Lapis Lazuli Block &rarr; Redstone Block</li>
                <li>Brown Mushroom &rarr; Red Mushroom &rarr; Brown Mushroom</li>
                <li>Crimson Fungus &rarr; Warped Fungus &rarr; Crimson Fungus</li>
                <li>Wheat &rarr; Potatoes &rarr; Carrots &rarr; Beetroots &rarr; Wheat</li>
                <li>Melon &rarr; Pumpkin &rarr; Melon</li>
                <li>Dirt &rarr; Sand &rarr; Red Sand &rarr; Gravel &rarr; Clay &rarr; Dirt</li>
                <li>Grass Block &rarr; Mycelium &rarr; Grass Block</li>
                <li>Grass &rarr; Warped Roots &rarr; Crimson roots &rarr; Grass</li>
                <li>Netherrack &rarr; Coarse Dirt &rarr; Netherrack</li>
                <li>Cobblestone &rarr; Mossy Cobblestone &rarr; Cobblestone</li>
                <li>Obsidian &rarr; Crying Obsidian &rarr; Obsidian</li>
                <li>Torch &rarr; Soul Torch &rarr; Torch</li>
                <li>Copper Block &rarr; Iron Block &rarr; Gold Block</li>
                <li>Emerald Block &rarr; Diamond Block &rarr; Emerald Block</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CraftingSkillsDetail;
