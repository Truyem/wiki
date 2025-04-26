
import { Card, CardContent } from "@/components/ui/card";

const AntiFarm = () => {
  return (
    <Card>
      <CardContent className="space-y-4 pt-4">
        <p className="font-medium">
          Xin lỗi, nhưng farm đã bị giảm hiệu quả! Một số kỹ năng có thể bị lạm dụng quá nhiều với một số farm dễ xây dựng, vì vậy các biện pháp đối phó sau được đưa ra để giảm hoặc loại bỏ hiệu quả của chúng.
        </p>
        
        <div>
          <h3 className="font-bold text-lg">Phù Phép 🎇</h3>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Giết một trong số (Enderman, Guardian, Zombified Piglin) sẽ tăng bộ đếm cho bạn.</li>
            <li>Nếu bộ đếm này trên 10, lần phù phép tiếp theo của bạn sẽ nhận được ít kinh nghiệm hơn 80%.</li>
            <li>Mỗi lần phù phép sẽ giảm bộ đếm đi 10.</li>
            <li>Bạn vẫn có thể nhận cấp độ kinh nghiệm từ các farm này và nhận được các bùa lợi mạnh mẽ, nhưng việc cày kỹ năng phù phép theo cách này kém hiệu quả hơn nhiều.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-lg">Kỹ Năng Chiến Đấu ⚔</h3>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Bao gồm Vũ Khí Nhẹ/Nặng, Giáp Nhẹ/Nặng và Bắn Cung.</li>
            <li>Giết bất kỳ thực thể nào trong một chunk sẽ tăng bộ đếm cho chunk đó.</li>
            <li>Nếu bộ đếm này đạt 20, bất kỳ kinh nghiệm nào nhận được trong chunk đó sẽ bị giảm 95% cho các kỹ năng này.</li>
            <li>Điều này có nghĩa là bất kỳ farm cố định nào cũng sẽ không tốt để cày cấp độ chiến đấu. Hãy di chuyển!</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default AntiFarm;
