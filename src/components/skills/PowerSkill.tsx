import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Power } from "lucide-react";
const PowerSkill = () => {
  return <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Power className="w-8 h-8 text-[#259e63] dark:text-[#55FFFF]" />
        <div>
          <CardTitle>Sức Mạnh (Power)</CardTitle>
          <CardDescription>Tiến trình tổng thể của người chơi</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Mô tả</h3>
          <p>Sức Mạnh đại diện cho tổng thể tiến trình của người chơi trong Server.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Cách tăng EXP</h3>
          <p>Tăng cấp bất kỳ kỹ năng nào khác ngoài Sức Mạnh sẽ cho bạn một lượng kinh nghiệm Sức Mạnh.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Lưu ý đặc biệt</h3>
          <p>Tăng cấp Sức Mạnh là cách duy nhất để nhận Điểm Kỹ Năng, cần thiết để mở khóa các đặc quyền ((trừ khi server của bạn đã triển khai các phương pháp khác để nhận Điểm Kỹ Năng)).</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Đặc quyền</h3>
          <p>Kỹ năng Sức Mạnh chủ yếu cung cấp các cải thiện chỉ số chung như May Mắn, Sát Thương, Hồi Máu, v.v.</p>
        </div>
      </CardContent>
    </Card>;
};
export default PowerSkill;