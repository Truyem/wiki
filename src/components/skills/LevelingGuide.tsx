
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const LevelingGuide = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-4">
            Hướng dẫn cơ bản
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00]">
              Cách thức hoạt động
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Mỗi kỹ năng có một "cây kỹ năng" (skill tree), chứa đầy các "đặc quyền" (perks) bạn có thể mở khóa để nhận các phần thưởng cụ thể.
            </p>

            <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00]">
              Điều hướng cây kỹ năng
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Sử dụng các mũi tên để di chuyển trong cây kỹ năng</li>
              <li>Nhấp vào biểu tượng kỹ năng để đặt nó vào trung tâm</li>
              <li>Xem thêm các kỹ năng liên quan khi một kỹ năng được chọn</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-4">
            Mẹo tăng cấp nhanh
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                Sức Mạnh
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tập trung vào việc tăng cấp các kỹ năng khác, vì mỗi lần lên cấp kỹ năng khác sẽ cho bạn EXP Sức Mạnh.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                Kỹ năng chiến đấu
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tìm các khu vực an toàn để luyện tập và không nên farm quá nhiều ở một khu vực để tránh debuff kinh nghiệm.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                Kỹ năng thu thập
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Sử dụng công cụ có enchant Fortune/Looting để tăng số lượng vật phẩm thu được, từ đó tăng EXP nhận được.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LevelingGuide;
