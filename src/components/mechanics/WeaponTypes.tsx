
import { Card, CardContent } from "@/components/ui/card";

interface WeaponDetail {
  pros: string[];
  cons?: string[];
  neutral?: string[];
}

interface WeaponType {
  name: string;
  details: WeaponDetail;
}

const WeaponTypes = () => {
  const weapons = [
    {
      name: "Kiếm rapier (nhẹ)",
      details: {
        pros: [
          "Tốc độ tấn công rất cao",
          "Xuyên giáp cao",
          "Giảm miễn nhiễm cao"
        ],
        cons: [
          "Không có hiệu ứng đẩy lùi",
          "Sát thương rất thấp"
        ]
      }
    },
    {
      name: "Dao Găm (nhẹ)",
      details: {
        pros: [
          "Tốc độ tấn công cao",
          "Tỷ lệ chí mạng cao"
        ],
        cons: [
          "Tầm đánh ngắn"
        ]
      }
    },
    {
      name: "Chùy sao (nhẹ)",
      details: {
        pros: [
          "Tỷ lệ choáng"
        ],
        neutral: [
          "Gây sát thương va đập (hơi thấp hơn) (tốt chống lại mục tiêu có giáp)"
        ]
      }
    },
    {
      name: "Rìu Lớn (nặng)",
      details: {
        pros: [
          "Sát thương rất cao",
          "Tỷ lệ chí mạng cao"
        ],
        cons: [
          "Tốc độ tấn công rất thấp"
        ]
      }
    },
    {
      name: "Búa Chiến (nặng)",
      details: {
        pros: [
          "Tỷ lệ choáng"
        ],
        neutral: [
          "Gây sát thương va đập cao",
          "Hiệu ứng đẩy lùi cao"
        ]
      }
    },
    {
      name: "Giáo (nặng)",
      details: {
        pros: [
          "Tầm đánh xa",
          "Gây sát thương tăng lên khi bạn tiếp cận mục tiêu càng nhanh trong lúc tấn công"
        ],
        cons: [
          "Sát thương thấp đối với vũ khí nặng"
        ]
      }
    }
  ];

  return (
    <div className="grid gap-4">
      {weapons.map((weapon) => (
        <Card key={weapon.name} className="bg-white dark:bg-gray-800">
          <CardContent className="pt-4">
            <h3 className="font-bold text-lg mb-2 text-[#259e63] dark:text-[#55FFFF]">
              {weapon.name}
            </h3>
            <div className="space-y-2">
              {weapon.details.pros.map((pro) => (
                <div key={pro} className="flex items-center gap-2">
                  <span className="text-green-500">🟢</span>
                  <span>{pro}</span>
                </div>
              ))}
              {weapon.details.neutral?.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="text-orange-500">🟠</span>
                  <span>{item}</span>
                </div>
              ))}
              {weapon.details.cons?.map((con) => (
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
