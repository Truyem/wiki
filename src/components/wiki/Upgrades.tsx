
import React from 'react';

const UpgradeCategory = ({ title, upgrades }: { title: string, upgrades: string[] }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
      <div className="space-y-2">
        {upgrades.map((upgrade, index) => (
          <div 
            key={index} 
            className="bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            {upgrade}
          </div>
        ))}
      </div>
    </div>
  );
};

const Upgrades = () => {
  const weaponUpgrades = [
    "Chấn động: Tăng +5% cơ hội choáng. Lưu ý rằng kẻ địch bị choáng sẽ miễn nhiễm với choáng trong vài giây.",
    "Kéo dài: Tăng +0.25 khối tầm đánh (chỉ vũ khí cận chiến).",
    "Tiết kiệm: Giảm -10% tiêu hao đạn (chỉ cung và nỏ)."
  ];

  const armorUpgrades = [
    "Miễn dịch: Tăng +1 khả năng miễn dịch, tương đương với 0.05 giây miễn nhiễm sát thương sau khi nhận sát thương.",
    "Hồi máu: Tăng +5% khả năng hồi máu.",
    "Tham vọng: Tăng +5% giảm thời gian hồi chiêu của các kỹ năng như Đỡ đòn, Cuồng nộ, Khoan, Đốn cây nhanh, v.v.",
    "Né tránh: Tăng +2% cơ hội né tránh, vô hiệu hóa hoàn toàn sát thương từ một đòn tấn công.",
    "Tập sự: Tăng +5% kinh nghiệm kỹ năng, nhưng cũng tăng 10% sát thương nhận vào.",
    "Nghiện: Tăng +5% nhận quả cầu kinh nghiệm, nhưng cũng tăng 5% sát thương nhận vào.",
    "Ổn định: Tăng +10% kháng đẩy lùi.",
    "Cứu rỗi: Tăng +10% kháng chảy máu.",
    "Nhận thức: Tăng +10% kháng sát thương chí mạng.",
    "Tiết độ: Tăng +10% kháng choáng, giảm thời gian choáng.",
    "Lén lút: Tăng +10% tốc độ lén lút (chỉ quần).",
    "Thể thao: Tăng +10% tốc độ chạy nước rút (chỉ quần).",
    "Nhảy nhiều lần: Tăng +1 lần nhảy trên không. Có thể áp dụng tối đa 3 lần (chỉ giày).",
    "Nhảy vọt: Tăng +50% độ cao nhảy (chỉ giày).",
    "Hỏa ngục: Tăng +20% sát thương lửa (chỉ giáp ngực).",
    "Ma thuật: Tăng +10% sát thương phép thuật (chỉ giáp ngực).",
    "Độc hại: Tăng +20% sát thương độc (chỉ giáp ngực).",
    "Thần thánh: Tăng +20% sát thương bức xạ (chỉ giáp ngực).",
    "Chết chóc: Tăng +20% sát thương hoại tử (chỉ giáp ngực).",
    "Cuồng nộ: Tăng +5% sát thương (chỉ giáp ngực).",
    "Thợ rèn: Tăng +10 kỹ năng rèn (chỉ mũ bảo hiểm).",
    "Phù phép: Tăng +10 kỹ năng phù phép (chỉ mũ bảo hiểm).",
    "Nhà giả kim: Tăng +10 kỹ năng giả kim (chỉ mũ bảo hiểm)."
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Nâng cấp</h1>
      <div className="grid grid-cols-2 gap-4">
        <UpgradeCategory title="Vũ Khí" upgrades={weaponUpgrades} />
        <UpgradeCategory title="Áo Giáp" upgrades={armorUpgrades} />
      </div>
    </div>
  );
};

export default Upgrades;
