
import { Card, CardContent } from "@/components/ui/card";

const MobStats = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-4 pt-4">
          <h3 className="font-bold text-lg">Sát Thương Rạng Đông (Radiant Damage)</h3>
          <p>
            Có thể xem là sát thương "Smite", mặc dù bùa lợi Smite không gây sát thương rạng đông.
          </p>
          <p>
            Gây sát thương gấp 2 lần đối với quái vật undead và gấp 1.5 lần đối với quái vật nether, nhưng không gây sát thương đối với mọi thứ khác.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <h3 className="font-bold text-lg">Sát Thương Hoại Tử (Necrotic Damage)</h3>
          <p>
            Hiệu ứng bất lợi "Wither" giờ đây gây sát thương hoại tử.
          </p>
          <p>
            Gây sát thương gấp 1 lần đối với mọi thứ, trừ 0.5 lần đối với quái vật nether và không gây sát thương đối với quái vật undead.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4 pt-4">
          <h3 className="font-bold text-lg">Tăng Cấp (Scaling)</h3>
          <p>
            Quái vật sinh ra sẽ tăng cấp theo cấp độ trung bình của tất cả người chơi xung quanh. Chúng được tăng cấp lên đến 5 cấp so với cấp độ trung bình cục bộ.
          </p>
          <p>
            Quái vật nhận được chỉ số tăng lên dựa trên cấp độ được gán của chúng.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 text-left border-b">Chỉ Số Tăng Cấp</th>
                  <th className="p-2 text-left border-b">Công Thức</th>
                  <th className="p-2 text-left border-b">Mô Tả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">Giáp</td>
                  <td className="p-2 border-b">0.2 * cấp độ</td>
                  <td className="p-2 border-b">10 giáp sau mỗi 50 cấp độ</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Sát thương</td>
                  <td className="p-2 border-b">-0.2 + (0.023 * cấp độ)</td>
                  <td className="p-2 border-b">-30% sát thương ban đầu, tăng lên đến +200% ở cấp 100</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Máu</td>
                  <td className="p-2 border-b">-0.3 + (0.033 * cấp độ)</td>
                  <td className="p-2 border-b">-30% máu ban đầu, tăng lên đến +300% ở cấp 100</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Xuyên Giáp</td>
                  <td className="p-2 border-b">0.005 * cấp độ</td>
                  <td className="p-2 border-b">lên đến 50% xuyên giáp ở cấp 100</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Tỷ Lệ Chí Mạng</td>
                  <td className="p-2 border-b">0.005 * cấp độ</td>
                  <td className="p-2 border-b">lên đến 50% tỷ lệ chí mạng ở cấp 100</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">Sát Thương Chí Mạng</td>
                  <td className="p-2 border-b">0.5</td>
                  <td className="p-2 border-b">đòn chí mạng của quái vật gây thêm 50% sát thương</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <p className="font-medium">Boss nhận được tăng cấp độ và chỉ số tăng cấp.</p>
      <p className="italic">(Vâng, tôi biết một số quái vật này không chính thức là boss)</p>
    </div>
  );
};

export default MobStats;
