
import { Card, CardContent } from "@/components/ui/card";

const BleedingSystem = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-4">
        <p>
          Chảy máu là một hiệu ứng trạng thái có thể gây ra. Nó có Tỷ lệ gây ra, Thời gian duy trì và Sát thương theo Tick.
        </p>
        
        <div className="space-y-2">
          <p>
            Khi chảy máu được gây ra, nó gây lượng sát thương theo Tick sau mỗi 40 tick. Sát thương chảy máu bỏ qua giáp.
          </p>
          <p>
            Khi chảy máu được gây ra trong khi mục tiêu đã đang chảy máu, thời gian duy trì được làm mới và tốc độ tick tăng lên 5 tick, tối đa 4 lần.
          </p>
          <p>
            Vì vậy, nếu chảy máu được gây ra 5 lần trong một thời gian đủ ngắn, nạn nhân sẽ chảy máu nhanh gấp đôi.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BleedingSystem;
