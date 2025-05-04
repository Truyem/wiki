import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hammer,
  Sword,
  FlaskRound,
  Wand,
  // Removed Potion as it's not exported
} from "lucide-react";
// Import Potion separately if it exists under a different name or from a different library
// Example if it was named GlassBottle: import { GlassBottle } from "lucide-react";

// Main component to display detailed information about crafting skills
const CraftingSkillsDetail = () => {
  return (
    // Outer container with vertical spacing
    <div className="space-y-6 font-inter"> {/* Added font-inter for potential better font consistency */}
      {/* Section Title and Introduction */}
      <div className="mb-6">
        {/* Title using green colors */}
        <h2 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
          Kỹ Năng Chuyên Sâu: Chế Tạo
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Chi tiết chuyên sâu về ba kỹ năng chế tạo quan trọng: Rèn, Phù Phép và Giả Kim.
        </p>

        {/* Informational Note Box (Kept Amber for general note) */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-md my-4 dark:bg-amber-900/20 dark:border-amber-800">
          <p className="text-amber-800 dark:text-amber-300 font-medium">
            <strong>Lưu ý:</strong> Mỗi kỹ năng tăng theo cấp độ, cung cấp lên đến 150 điểm chất lượng ở cấp 100. Kỹ năng càng cao, vật phẩm chế tạo càng mạnh.
          </p>
        </div>
      </div>

      {/* Tabs Component for different crafting skills */}
      <Tabs defaultValue="smithing">
        {/* Tab List container */}
        <TabsList className="w-full grid grid-cols-3">
          {/* Smithing Tab Trigger (Green Theme) */}
          <TabsTrigger
            value="smithing"
            className="flex gap-2 items-center data-[state=active]:bg-green-100 data-[state=active]:text-green-800 dark:data-[state=active]:bg-green-900/40 dark:data-[state=active]:text-green-300 rounded-md text-gray-600 dark:text-gray-400" /* Green active/inactive colors */
          >
            <Hammer size={16} className="text-green-700 dark:text-green-400" /> {/* Green icon color */}
            Rèn
          </TabsTrigger>
          {/* Enchanting Tab Trigger (Blue Theme - Added inactive style) */}
          <TabsTrigger value="enchanting" className="flex gap-2 items-center data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 dark:data-[state=active]:bg-blue-900/30 dark:data-[state=active]:text-blue-400 rounded-md text-gray-600 dark:text-gray-400">
            <Wand size={16} className="text-blue-700 dark:text-blue-400" />
            Phù Phép
          </TabsTrigger>
          {/* Alchemy Tab Trigger (Purple Theme - Added inactive style) */}
          <TabsTrigger value="alchemy" className="flex gap-2 items-center data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700 dark:data-[state=active]:bg-purple-900/30 dark:data-[state=active]:text-purple-400 rounded-md text-gray-600 dark:text-gray-400">
            <FlaskRound size={16} className="text-purple-600 dark:text-purple-400" />
            Giả Kim
          </TabsTrigger>
        </TabsList>

        {/* --- Smithing Tab Content (Green Theme) --- */}
        <TabsContent value="smithing" className="mt-4 space-y-4">
          {/* Smithing Introduction Card */}
          <Card className="border-green-600 dark:border-green-500 dark:border-opacity-50 rounded-lg"> {/* Green border color */}
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg"> {/* Green icon bg color */}
                  <Hammer className="h-8 w-8 text-green-700 dark:text-green-400" /> {/* Green icon color */}
                </div>
                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400"> {/* Green title color */}
                    Kỹ Năng Chuyên Sâu: Rèn
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Chế tạo bất kỳ công cụ hoặc bộ giáp nào cũng sẽ mang lại cho nó một giá trị chất lượng. Giá trị chất lượng này bằng chỉ số chất lượng Rèn chung của bạn CỘNG VỚI chỉ số chất lượng Rèn của bạn cho vật liệu làm nên trang bị đó.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smithing Details Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Chất lượng Cơ bản</h4> {/* Green header color */}
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Mỗi trang bị có một chất lượng "cơ bản". Nó định nghĩa chú giải chất lượng hiển thị trên trang bị và xác định khi nào chỉ số của trang bị bằng với chỉ số trong phiên bản gốc (vanilla).
            </p>

            {/* Base Quality Table */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"> {/* Added rounded corners */}
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Loại vật liệu</th> {/* Styled header */}
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-right text-sm font-medium text-gray-600 dark:text-gray-300">Chất lượng Cơ bản</th> {/* Styled header */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700"> {/* Added divider */}
                  {/* Table data remains unchanged */}
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Gỗ</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">50</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Da</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">50</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Đá</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Giáp Xích</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Cung</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">80</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Vàng</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">110</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Sắt</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">110</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Kim Cương</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">140</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Hải Thạch</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">155</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Netherite</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">170</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Enderic</td><td className="py-2 px-4 text-right text-gray-700 dark:text-gray-300">185</td></tr>
                </tbody>
              </table>
            </div>

            {/* Quality Tooltip Table */}
            <div className="overflow-x-auto mb-6">
              <h4 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Chú Giải Chất Lượng</h4> {/* Green header color */}
              <p className="mb-3 text-gray-700 dark:text-gray-300">
                Chú giải chất lượng được xác định dựa trên sự chênh lệch chất lượng của trang bị so với chất lượng cơ bản của nó.
              </p>
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"> {/* Added rounded corners */}
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Chênh lệch chất lượng</th> {/* Styled header */}
                    <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-600 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Chú giải</th> {/* Styled header */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700"> {/* Added divider */}
                  {/* Table data remains unchanged */}
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">-50</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Tệ hại</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">-60</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Kém chất lượng</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">-30</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Khá</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">0</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Tốt</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">30</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Tuyệt vời</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">60</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Hoàn hảo</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">90</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Bậc thầy</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">120</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Huyền thoại</td></tr>
                  <tr><td className="py-2 px-4 text-gray-700 dark:text-gray-300">150</td><td className="py-2 px-4 text-gray-700 dark:text-gray-300">Vô song</td></tr>
                </tbody>
              </table>
            </div>

            {/* How to Increase Smithing Quality */}
            <h4 className="text-lg font-semibold mb-3 text-green-700 dark:text-green-400">Cách tăng chất lượng Rèn</h4> {/* Green header color */}
            {/* Updated list style and marker colors */}
            <ul className="list-none pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> Cây kỹ năng: +50 chất lượng cho mỗi loại vật liệu cụ thể</li>
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> Đặc quyền cuối: +50 cho tất cả vật liệu</li>
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-green-600 dark:text-green-400 mr-2">✦</span> Nghề Thợ Rèn: +25 chất lượng Rèn</li>
            </ul>

            {/* Smithing Quality Effects Table */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md border border-green-500/30 mb-6"> {/* Green bg/border color */}
              <h4 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">Ảnh hưởng của chất lượng Rèn lên trang bị</h4> {/* Green header color */}
              <div className="overflow-x-auto text-gray-700 dark:text-gray-300">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-green-500/50"> {/* Green border color */}
                      <th className="py-2 px-4 text-left text-sm font-medium">Chỉ số</th> {/* Styled header */}
                      <th className="py-2 px-4 text-left text-sm font-medium">Thang đo (từ cơ bản đến 300)</th> {/* Styled header */}
                      <th className="py-2 px-4 text-left text-sm font-medium">Ngoại lệ</th> {/* Styled header */}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700"> {/* Keep standard divider */}
                    {/* Table data remains unchanged */}
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
                      <td className="py-2 px-4 text-xs italic">Đối với kiếm lưỡi mỏng là +0-2 và đối với rìu lớn là +0-6. Xem Vũ khí tùy chỉnh</td> {/* Styled exception */}
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Tốc độ tấn công</td>
                      <td className="py-2 px-4">+0-0.2 tốc độ tấn công từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4 text-xs italic">Đối với rìu lớn là +0-0.1, và kiếm lưỡi mỏng không có thang đo tốc độ tấn công</td> {/* Styled exception */}
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Tốc độ đào</td>
                      <td className="py-2 px-4">+0-50% tốc độ đào từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4">Sát thương vật cùn</td>
                      <td className="py-2 px-4">+0-3.5 sát thương từ chất lượng cơ bản đến 300</td>
                      <td className="py-2 px-4 text-xs italic">Đối với búa chiến là +0-4</td> {/* Styled exception */}
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

            {/* Smithing Concluding Note */}
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md border border-green-500/30 text-green-700 dark:text-green-400 italic"> {/* Green bg/border/text color */}
              <p>
                Với cấu hình mặc định, bạn có thể tích lũy tổng cộng 425 chất lượng Rèn. Plugin này được cân bằng dựa trên mức tối đa giả định là 300, vì vậy bạn có thể tạo ra một số trang bị khá bá đạo khi thực hiện điều này.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* --- Enchanting Tab Content (Blue Theme - Unchanged) --- */}
        <TabsContent value="enchanting" className="mt-4 space-y-4">
          {/* ... (Nội dung tab Phù Phép không đổi) ... */}
          <Card className="border-blue-500 dark:border-blue-900 dark:border-opacity-50 rounded-lg">
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
            <div className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300 p-3 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-md"> {/* Styled note */}
              <Sword className="text-blue-700 dark:text-blue-400" size={18} />
              <p className="font-medium">
                Ở 120 chất lượng, tất cả phù phép trở lại sức mạnh gốc (của Minecraft vanilla).
              </p>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Mức điều chỉnh cấp độ phù phép theo chất lượng được tính theo công thức: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">2/120 × chất lượng - 2</code>.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-blue-700 dark:text-blue-400">Điều chỉnh cấp độ phù phép theo chất lượng</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Phù phép</th>
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-center font-medium text-gray-600 dark:text-gray-300">Mức giảm ở 0 chất lượng</th>
                    <th className="py-2 px-3 border-b border-gray-200 dark:border-gray-600 text-center font-medium text-gray-600 dark:text-gray-300">Chất lượng cần cho 1 cấp điều chỉnh</th>
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
             <ul className="list-none pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300"> {/* Changed list style */}
              <li><span className="text-blue-700 dark:text-blue-400 mr-2">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              <li><span className="text-blue-700 dark:text-blue-400 mr-2">✦</span> Cây kỹ năng: Tổng cộng +150 chất lượng từ các đặc quyền</li>
              <li><span className="text-blue-700 dark:text-blue-400 mr-2">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-blue-700 dark:text-blue-400 mr-2">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-blue-700 dark:text-blue-400 mr-2">✦</span> Nghề Phù Thuỷ: +25 chất lượng Phù phép</li>
            </ul>
             <div className="bg-blue-100/30 dark:bg-blue-900/10 p-4 rounded-md border border-blue-500/30 text-blue-700 dark:text-blue-400 italic">
              <p>
                Với cấu hình mặc định, bạn có thể tích lũy tối đa 425 chất lượng Phù phép. Hệ thống được cân bằng dựa trên mức 300, vì vậy vượt qua con số này sẽ giúp bạn tạo ra các phù phép cực kỳ mạnh.
              </p>
            </div>
          </div>
        </TabsContent>

        {/* --- Alchemy Tab Content (Purple Theme - Unchanged, but added closing elements from previous fix) --- */}
        <TabsContent value="alchemy" className="mt-4 space-y-4">
          {/* ... (Nội dung tab Giả Kim không đổi, bao gồm cả phần Transmutation đã thêm) ... */}
           <Card className="border-purple-500 dark:border-purple-900 dark:border-opacity-50 rounded-lg">
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
             <p className="text-gray-700 dark:text-gray-300 p-3 bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 rounded-r-md"> {/* Styled note */}
              Phạm vi thời gian hiệu lực và cường độ hiệu quả sẽ luôn từ 0-300 chất lượng.
            </p>
            <h4 className="text-lg font-semibold mt-4 text-purple-600 dark:text-purple-400">Hiệu quả Thuốc theo Chất lượng</h4>
             <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Thuốc</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Cơ bản</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Kéo dài</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Cường hóa</th>
                    <th className="py-2 px-2 border-b border-gray-200 dark:border-gray-600 text-left font-medium text-gray-600 dark:text-gray-300">Ghi chú</th>
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
                      <td className="py-1.5 px-2 text-xs italic">Pha chế với: Thạch Anh Nether, Thuốc Trống</td>
                    </tr>
                    <tr>
                      <td className="py-1.5 px-2">Tăng Máu 💖</td>
                      <td className="py-1.5 px-2">Cấp I-II 1:30-4:00</td>
                      <td className="py-1.5 px-2">Cấp I-II 4:00-12:00</td>
                      <td className="py-1.5 px-2">Cấp II-IV 0:45-2:00</td>
                      <td className="py-1.5 px-2 text-xs italic">Pha chế với: Quả Mọng Ngọt, Thuốc Trống</td>
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
                      {/* Assuming correct values for Poison based on context */}
                      <td className="py-1.5 px-2">Cấp I-II 0:30-1:00</td>
                      <td className="py-1.5 px-2">Cấp I-II 1:00-2:30</td>
                      <td className="py-1.5 px-2">Cấp II-IV 0:15-0:30</td>
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
             <h4 className="text-lg font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">Cách tăng chất lượng Giả Kim Thuật</h4> {/* Corrected skill name */}
             <ul className="list-none pl-5 space-y-2 mb-6 text-gray-700 dark:text-gray-300"> {/* Changed list style */}
              <li><span className="text-purple-600 dark:text-purple-400 mr-2">✦</span> Lên cấp: 1.5 chất lượng mỗi cấp, tối đa 150 ở cấp 100</li>
              {/* Adjusted skill tree description based on source */}
              <li><span className="text-purple-600 dark:text-purple-400 mr-2">✦</span> Cây kỹ năng: +50 chất lượng chung và +100 cho thuốc có lợi/thuốc độc</li>
              <li><span className="text-purple-600 dark:text-purple-400 mr-2">✦</span> NewGame+: +50 chất lượng mỗi vòng chơi lại (tối đa +100)</li>
              <li><span className="text-purple-600 dark:text-purple-400 mr-2">✦</span> Táo Pha Lê: +50 chất lượng trong 30 giây</li>
              <li><span className="text-purple-600 dark:text-purple-400 mr-2">✦</span> Nghề Nhà Giả Kim: +25 chất lượng Giả Kim Thuật</li> {/* Corrected profession name */}
            </ul>
             <div className="bg-purple-100/30 dark:bg-purple-900/10 p-4 rounded-md border border-purple-500/30 mb-6">
              <p className="italic text-purple-700 dark:text-purple-400">
                Với cấu hình mặc định, bạn có thể tích lũy tổng cộng 425 chất lượng Giả Kim Thuật. Plugin này được cân bằng dựa trên mức tối đa giả định là 300, vì vậy bạn có thể tạo ra một số loại thuốc khá bá đạo khi thực hiện điều này.
              </p>
            </div>
             {/* Transmutation Section */}
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
                <li>Oak Log &gt; Birch Log &gt; Spruce Log &gt; Dark Oak Log &gt; Jungle Log &gt; Acacia Log &gt; Oak Log</li>
                <li>Crimson Stem &gt; Warped Stem &gt; Crimson Stem</li>
                <li>Stone &gt; Copper Ore &gt; Iron Ore</li>
                <li>Redstone Block &gt; Lapis Lazuli Block &gt; Redstone Block</li>
                <li>Brown Mushroom &gt; Red Mushroom &gt; Brown Mushroom</li>
                <li>Crimson Fungus &gt; Warped Fungus &gt; Crimson Fungus</li>
                <li>Wheat &gt; Potatoes &gt; Carrots &gt; Beetroots &gt; Wheat</li>
                <li>Melon &gt; Pumpkin &gt; Melon</li>
                <li>Dirt &gt; Sand &gt; Red Sand &gt; Gravel &gt; Clay &gt; Dirt</li>
                <li>Grass Block &gt; Mycelium &gt; Grass Block</li>
                <li>Grass &gt; Warped Roots &gt; Crimson roots &gt; Grass</li>
                <li>Netherrack &gt; Coarse Dirt &gt; Netherrack</li>
                <li>Cobblestone &gt; Mossy Cobblestone &gt; Cobblestone</li>
                <li>Obsidian &gt; Crying Obsidian &gt; Obsidian</li>
                <li>Torch &gt; Soul Torch &gt; Torch</li>
                <li>Copper Block &gt; Iron Block &gt; Gold Block</li>
                <li>Emerald Block &gt; Diamond Block &gt; Emerald Block</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div> // Close outer container
  ); // Close return statement
}; // Close component definition

export default CraftingSkillsDetail; // Export the component