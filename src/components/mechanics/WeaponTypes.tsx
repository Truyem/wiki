
import { Card, CardContent } from "@/components/ui/card";

const WeaponTypes = () => {
  const weapons = [
    {
      name: "Kiếm Lưỡi Mỏng (nhẹ)",
      pros: [
        "Tốc độ tấn công rất cao",
        "Xuyên giáp cao",
        "Giảm miễn nhiễm cao"
      ],
      cons: [
        "Không có hiệu ứng đẩy lùi",
        "Sát thương rất thấp"
      ]
    },
    {
      name: "Dao Găm (nhẹ)",
      pros: [
        "Tốc độ tấn công cao",
        "Tỷ lệ chí mạng cao"
      ],
      cons: [
        "Tầm đánh ngắn"
      ]
    },
    {
      name: "Chùy (nhẹ)",
      pros: [
        "Tỷ lệ choáng"
      ],
      neutral: [
        "Gây sát thương va đập (hơi thấp hơn) (tốt chống lại mục tiêu có giáp)"
      ]
    },
    {
      name: "Rìu Lớn (nặng)",
      pros: [
        "Sát thương rất cao",
        "Tỷ lệ chí mạng cao"
      ],
      cons: [
        "Tốc độ tấn công rất thấp"
      ]
    },
    {
      name: "Búa Chiến (nặng)",
      pros: [
        "Tỷ lệ choáng"
      ],
      neutral: [
        "Gây sát thương va đập cao",
        "Hiệu ứng đẩy lùi cao"
      ]
    },
    {
      name: "Giáo (nặng)",
      pros: [
        "Tầm đánh xa",
        "Gây sát thương tăng lên khi bạn tiếp cận mục tiêu càng nhanh trong lúc tấn công"
      ],
      cons: [
        "Sát thương thấp đối với vũ khí nặng"
      ]
    }
  ];

  return (
    <div className="grid gap-4">
      {weapons.map((weapon) => (
        <Card key={weapon.name}>
          <CardContent className="pt-4">
            <h3 className="font-bold text-lg mb-2 text-[#259e63] dark:text-[#55FFFF]">
              {weapon.name}
            </h3>
            <div className="space-y-2">
              {weapon.pros.map((pro) => (
                <div key={pro} className="flex items-center gap-2">
                  <span className="text-green-500">🟢</span>
                  <span>{pro}</span>
                </div>
              ))}
              {weapon.neutral?.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-orange-500">🟠</span>
                  <span>{item}</span>
                </div>
              ))}
              {weapon.cons.map((con) => (
                <div key={con} className="flex items-center gap-2">
                  <span className="text-red-500">🔴</span>
                  <span>{con}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default WeaponTypes;
