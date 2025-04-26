
import { Card, CardContent } from "@/components/ui/card";

const BlockingSystem = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-4">
        <p>
          Đỡ đòn là một kỹ năng chủ động được mở khóa như một trong những đặc quyền trong kỹ năng Vũ Khí Nhẹ. Nó được kích hoạt bằng cách nhấp chuột phải khi giữ vũ khí (nhẹ).
        </p>
        
        <div className="space-y-2">
          <p>
            Trong một thời gian ngắn sau khi kích hoạt, nếu bạn bị tấn công bởi một đòn tấn công cận chiến hoặc tầm xa, bạn sẽ làm lệch đòn tấn công này, nhận ít sát thương hơn và gây hiệu ứng bất lợi cho kẻ địch vì đã đỡ đòn tấn công của chúng thành công (trừ đòn tầm xa).
          </p>
          <p>
            Các hiệu ứng bất lợi này theo mặc định bao gồm làm chậm, yếu ớt và giảm giáp.
          </p>
          <p>
            Tuy nhiên, nếu bạn bị đánh ngay sau thời gian đó, bạn sẽ bị hiệu ứng bất lợi thay vào đó.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockingSystem;
