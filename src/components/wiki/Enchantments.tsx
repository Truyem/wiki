import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Enchantments = () => {
  return <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">Enchantments</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Danh sách các enchant tùy chỉnh trong game.
        </p>
      </div>

      <Separator className="my-6" />

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">SuperEnchants</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Các enchant này có thể cộng dồn và cung cấp nhiều khả năng đặc biệt. Sử dụng lệnh <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">/eenchants list</span> trong game để xem chi tiết.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {superEnchants.map((enchant, index) => <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                <h3 className="font-semibold mb-1 text-[#259e63] dark:text-[#55FFFF]">{enchant.name}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{enchant.description}</p>
              </div>)}
          </div>
        </CardContent>
      </Card>

      
    </div>;
};
const superEnchants = [{
  name: "Blindness",
  description: "Làm mù mục tiêu của bạn"
}, {
  name: "Healthsteal",
  description: "Đánh cắp một lượng máu cụ thể từ người chơi khi đánh trúng"
}, {
  name: "Bleed",
  description: "Khiến mục tiêu chảy máu từ từ"
}, {
  name: "Lightning",
  description: "Đánh sét khi bạn đánh trúng người chơi, hoặc nhấp chuột phải để triệu hồi sét"
}, {
  name: "Teleport",
  description: "Nhấp chuột phải với kiếm để dịch chuyển đến đâu đó"
}, {
  name: "Jetpack",
  description: "Giữ nút lén lút và di chuyển xung quanh với jetpack của riêng bạn"
}, {
  name: "Explosive",
  description: "Nhấn lén lút và cho phép một vụ nổ xảy ra dưới chân bạn"
}, {
  name: "Excavator",
  description: "Đào nhiều khối cùng một lúc"
}, {
  name: "Autosmelt",
  description: "Tự động nung chảy quặng khi khai thác"
}, {
  name: "Freeze",
  description: "Tạm thời đóng băng người chơi khi bạn đánh trúng họ"
}, {
  name: "Confusion",
  description: "Khiến mục tiêu của bạn bị nhầm lẫn/buồn nôn"
}, {
  name: "Multishoot",
  description: "Bắn 3 mũi tên thay vì chỉ một"
}, {
  name: "Dash",
  description: "Nhanh chóng lao đi khỏi đối thủ của bạn"
}, {
  name: "Bloodlust",
  description: "Nhận sức mạnh, tái tạo và tốc độ khi giết một người chơi"
}, {
  name: "Shockwave",
  description: "Gửi một đợt sóng xung kích đến người chơi xung quanh bạn, đẩy họ lùi"
}, {
  name: "Veinminer",
  description: "Khai thác toàn bộ mạch quặng cùng một lúc"
}, {
  name: "XPBoost",
  description: "Nhận thêm XP khi giết quái vật và người chơi"
}, {
  name: "Enlightened",
  description: "Nhận thêm XP khi phá vỡ quặng"
}, {
  name: "EnderAura",
  description: "Tăng số ngọc enderman rơi ra khi giết enderman"
}, {
  name: "Frostbite",
  description: "Làm chậm người chơi khi bị đánh trúng"
}, {
  name: "Magnet",
  description: "Thu hút các vật phẩm xung quanh người chơi"
}, {
  name: "Speed",
  description: "Tăng tốc độ người chơi"
}, {
  name: "Leap",
  description: "Tăng độ cao nhảy của người chơi"
}, {
  name: "Growth",
  description: "Cho người chơi thêm máu"
}, {
  name: "Detonate",
  description: "Khiến mũi tên của bạn phát nổ khi va chạm"
}, {
  name: "Backstabber",
  description: "Gây thêm sát thương trong đòn đánh đầu tiên khi ngoài chiến đấu"
}, {
  name: "Piercing",
  description: "Mũi tên bắn xuyên qua nhiều thực thể"
}, {
  name: "Deflecting",
  description: "Cơ hội mũi tên bật ra khỏi giáp và đánh trúng người bắn"
}, {
  name: "Bait",
  description: "Cơ hội nhận nhiều vật phẩm hơn khi câu cá"
}, {
  name: "Angler",
  description: "Nhận thêm XP khi câu cá"
}, {
  name: "Abiding",
  description: "Làm cho công cụ/giáp của bạn không bị hỏng"
}, {
  name: "Disarm",
  description: "Có cơ hội giải giáp đối thủ của bạn"
}, {
  name: "Archer",
  description: "Gây thêm sát thương với mũi tên của bạn"
}, {
  name: "Farmer",
  description: "Tự động trồng lại hạt giống"
}, {
  name: "Decapitation",
  description: "Cơ hội nhỏ để người chơi rơi đầu khi chết"
}, {
  name: "Dismantle",
  description: "Cơ hội phá vỡ các mảnh giáp của đối thủ"
}, {
  name: "Famine",
  description: "Cho đối thủ của bạn bị đói"
}, {
  name: "Spotlight",
  description: "Cho phép bạn nhìn thấy trong bóng tối"
}, {
  name: "Feast",
  description: "Cơ hội lấy lại đói và lấy đi từ đối thủ của bạn"
}, {
  name: "Updraft",
  description: "Cơ hội đưa kẻ tấn công của bạn lên không trung"
}, {
  name: "Lavawalker",
  description: "Cho phép bạn đi trên dung nham, giống như frostwalker"
}, {
  name: "Doublestrike",
  description: "Có cơ hội gây sát thương gấp đôi"
}, {
  name: "Timber",
  description: "Ngay lập tức phá vỡ tất cả các khúc gỗ của một cây"
}, {
  name: "Missile",
  description: "Biến mũi tên của bạn thành đạn cầu lửa"
}, {
  name: "Critical",
  description: "Biến tất cả các đòn đánh của bạn thành đòn đánh chí mạng"
}, {
  name: "Inflame",
  description: "Đặt các mob và người chơi xung quanh bạn vào lửa"
}, {
  name: "NightOwl",
  description: "Gây thêm sát thương vào ban đêm"
}, {
  name: "Headshot",
  description: "Gây thêm sát thương khi bạn đánh trúng đầu với cung"
}, {
  name: "ArrowStorm",
  description: "Mưa mũi tên trên đối thủ của bạn"
}];
export default Enchantments;