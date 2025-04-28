
import { Card, CardContent } from "@/components/ui/card";

const LuckSystem = () => {
  const luckTable = [
    ["-2 Luck", "-1 Luck", "Base Chance", "1 Luck", "2 Luck"],
    ["0.0125%", "0.25%", "5%", "9.7%", "14.2%"],
    ["0.1%", "1%", "10%", "19%", "27.1%"],
    ["0.33%", "2.25%", "15%", "27.7%", "38.5%"],
    ["0.8%", "4%", "20%", "36%", "48.8%"],
    ["2.7%", "9%", "30%", "51%", "65.7%"],
    ["6.4%", "16%", "40%", "64%", "74.4%"],
    ["12.5%", "25%", "50%", "75%", "87.5%"],
    ["21.6%", "36%", "60%", "84%", "93.6%"],
    ["34.4%", "49%", "70%", "91%", "97.3%"],
    ["51.2%", "64%", "80%", "96%", "99.2%"],
    ["72.9%", "81%", "90%", "99%", "99.9%"]
  ];

  return (
    <div className="space-y-4">
      <p>
        May mắn đã được làm lại với plugin! Mỗi điểm may mắn bạn có sẽ cho bạn 1 lần tung lại xúc xắc với hầu hết mọi thứ liên quan đến RNG để có kết quả thuận lợi hơn.
      </p>
      
      <Card>
        <CardContent className="pt-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {luckTable[0].map((header) => (
                    <th key={header} className="p-2 text-left border-b dark:border-gray-700">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {luckTable.slice(1).map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-2 border-b dark:border-gray-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <p>Các chỉ số bị ảnh hưởng bởi may mắn, bao gồm Cơ hội Chảy máu, Cơ hội Phản đòn</p>
        <p>Cơ hội Buộc xuống ngựa, Cơ hội Gây choáng, Giảm tiêu thụ Cơn đói, Giảm tiêu thụ Đạn dược</p>
        <p>Giảm tiêu thụ Nguyên liệu, Giảm tiêu thụ Thuốc, Giảm tiêu thụ Lapis</p>
        <p className="font-semibold">Do ảnh hưởng lớn đến nhiều phần khác nhau của trò chơi, May mắn là một trong những chỉ số mạnh nhất cần có.</p>
      </div>
    </div>
  );
};

export default LuckSystem;
