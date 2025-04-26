
import { Card, CardContent } from "@/components/ui/card";

const NewGamePlus = () => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-[#259e63] dark:text-[#55FFFF]">
          New Game+ (NG)
        </h2>
        
        <p className="text-gray-700 dark:text-gray-300">
          Mỗi kỹ năng (ngoại trừ Sức Mạnh) đều có một đặc quyền bổ sung cho phép bạn "đặt lại" (reset) kỹ năng đó.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00]">
            Lợi ích
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Nhận số chỉ số vĩnh viễn cho kỹ năng đó</li>
            <li>Hoàn lại điểm kỹ năng đã dùng</li>
            <li>Cho phép đạt được cấp độ Sức Mạnh cao hơn</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00]">
            Bất lợi
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>EXP nhận được cho kỹ năng đó sẽ giảm đi một chút</li>
            <li>Lần chơi tiếp theo sẽ khó khăn hơn một chút</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewGamePlus;
