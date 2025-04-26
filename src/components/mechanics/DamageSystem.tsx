
import { Card, CardContent } from "@/components/ui/card";

const DamageSystem = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-4 pt-4">
          <p>
            Sát thương nhận vào được định nghĩa bởi công thức sau:
          </p>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
            <p className="font-mono">sát thương nhận vào * (1 - kháng loại) * (1 - kháng thật)</p>
          </div>
          <p>
            Trong đó kháng loại là tổng chỉ số kháng của bạn đối với loại sát thương cụ thể, và kháng thật là chỉ số kháng sát thương chung của bạn.
          </p>

          <p>
            Nếu sát thương này là vật lý, hệ số nhân sau được áp dụng lại:
          </p>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md">
            <p className="font-mono">sát thương đã kháng * max(0.1, (15/(15+giáp)) - (độ bền*0.15))</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <p>
            Sát thương vật lý đều bị giảm bởi giáp, nhưng một số nguồn có thể hiệu quả hơn đối với giáp so với những nguồn khác.
          </p>
          <p>
            Nếu một nguồn có, ví dụ, 50% hiệu quả giáp, điều đó có nghĩa là bạn sẽ nhận sát thương từ nguồn đó như thể bạn đang mặc nửa số giáp.
          </p>

          <p>Các nguồn sát thương vật lý là:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Đạn</li>
            <li>Khối rơi (đe)</li>
            <li>Va đập (với hiệu quả giáp 70%) ❗ Loại sát thương tùy chỉnh</li>
            <li>Tấn công Cận Chiến</li>
            <li>Tấn công Quét</li>
            <li>Vụ nổ (với hiệu quả giáp 70%)</li>
            <li>Tiếp xúc (xương rồng)</li>
            <li>Ngã</li>
            <li>Dung nham (với hiệu quả giáp 50%)</li>
          </ul>
          
          <p className="mt-4">
            Nói một cách đơn giản, cứ mỗi 15 giáp người chơi có sẽ tăng HP hiệu quả của họ lên 100%.
          </p>
          <p>
            HP hiệu quả là lượng sát thương thô bạn có thể chịu trước khi chết.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <ul className="space-y-2">
            <li>Nếu bạn có 10 trái tim sức khỏe và có 10 giáp, điều đó có nghĩa là bạn có thể chịu 20 trái tim sức khỏe sát thương trước khi chết. 20 giáp sẽ là 30 sức khỏe, 30 giáp là 40 sức khỏe, v.v. Mỗi 15 giáp là một thanh HP bổ sung lượng sát thương bạn có thể chịu.</li>
            <li>Sát thương còn được giảm thêm bởi độ bền, giảm sát thương cố định 0.15 cho mỗi điểm độ bền bạn có. Điều đó có nghĩa là với 10 độ bền giáp, 4 sát thương giảm xuống còn 2.5. Điều đó làm cho độ bền giáp đặc biệt hiệu quả chống lại các đòn đánh sát thương thấp, nhưng kém hiệu quả chống lại các đòn đánh sát thương cao.</li>
            <li>Giáp có thể bị giảm bởi khả năng xuyên giáp của kẻ địch. Đây có thể là xuyên giáp cố định hoặc xuyên giáp %, xuyên giáp cố định làm giảm giáp của bạn một lượng tĩnh và xuyên giáp % làm giảm giáp của bạn một phần của chính nó. 5 xuyên giáp cố định sẽ giảm 10 giáp của bạn xuống còn 5, và 10% xuyên giáp sẽ giảm 10 giáp xuống còn 9.</li>
            <li>Giáp không thể giảm sát thương nhận vào xuống dưới 10% sát thương gốc, do đó có giới hạn giáp là 150 giáp (bỏ qua độ bền)</li>
          </ul>
          <p>
            Sát thương bạn nhận sau tất cả các phép tính đó sẽ tiếp tục bị giảm bởi khả năng kháng đã nói ở trên của bạn.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DamageSystem;
