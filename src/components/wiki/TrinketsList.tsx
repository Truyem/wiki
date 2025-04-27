
import React from 'react';
import TrinketsFlipper from './TrinketsFlipper';

const TrinketsList: React.FC = () => {
  const regularTrinkets = [
    {
      name: "Băng dính",
      effects: ["25,0% Kháng chảy máu"]
    },
    {
      name: "Bezoar",
      effects: ["30,0% Kháng độc"]
    },
    {
      name: "Dải tái tạo",
      effects: ["25,0% Hồi máu"]
    },
    {
      name: "Dải chính xác",
      effects: ["7,0% Tỷ lệ chí mạng", "15,0% Sát thương chí mạng"]
    },
    {
      name: "Dải lực",
      effects: ["35,0% Đẩy lùi"]
    },
    {
      name: "Bao tay giáp",
      effects: ["5,0 Giáp", "10,0% Kháng đẩy lùi"]
    },
    {
      name: "Ống tên ma thuật",
      effects: ["-10,0% Tiêu hao đạn", "2,0 Độ chính xác", "10,0% Vận tốc mũi tên"]
    },
    {
      name: "Bùa sinh lực",
      effects: ["4,0 Máu tối đa"]
    },
    {
      name: "Bùa adrenaline",
      effects: ["35,0% Độ cao nhảy", "1 Nhảy nhiều lần", "10,0% Tốc độ di chuyển"]
    },
    {
      name: "Dây chuyền thánh giá",
      effects: ["4 Miễn dịch"]
    },
    {
      name: "Bùa cuồng nộ",
      effects: ["20,0% Sát thương", "35,0% Sát thương nhận vào"]
    },
    {
      name: "Bùa của Kẻ báo thù",
      effects: ["10,0% Sát thương cận chiến"]
    },
    {
      name: "Nhẫn phản xạ",
      effects: ["15,0% Kháng đạn"]
    },
    {
      name: "Nhẫn obsidian",
      effects: ["25,0% Kháng lửa"]
    },
    {
      name: "Nhẫn bảo vệ",
      effects: ["7,0% Kháng sát thương"]
    },
    {
      name: "Nhẫn phòng hộ",
      effects: ["25,0% Kháng phép"]
    },
    {
      name: "Nhẫn vỡ vụn",
      effects: ["10,0% Xuyên giáp"]
    },
    {
      name: "Nhẫn tầm với",
      effects: ["0.5 Tầm tấn công cận chiến"]
    },
  ];

  const upgradedTrinkets = [
    {
      name: "Truyền máu",
      effects: ["75,0% Kháng chảy máu"]
    },
    {
      name: "Tinh khiết",
      effects: ["90,0% Kháng độc"]
    },
    {
      name: "Tái sinh",
      effects: ["75,0% Hồi máu"]
    },
    {
      name: "Mang tử thần",
      effects: ["15,0% Tỷ lệ chí mạng", "40,0% Sát thương chí mạng"]
    },
    {
      name: "Găng tay Titan",
      effects: ["100,0% Đẩy lùi"]
    },
    {
      name: "Juggernaut",
      effects: ["15,0 Giáp", "40,0% Kháng đẩy lùi"]
    },
    {
      name: "Artemis",
      effects: ["-30,0% Tiêu hao đạn", "5,0 Độ chính xác", "30,0% Vận tốc mũi tên"]
    },
    {
      name: "Phước lành của Erinle",
      effects: ["12,0 Máu tối đa"]
    },
    {
      name: "Hermes",
      effects: ["100,0% Độ cao nhảy", "3 Nhảy nhiều lần", "30,0% Tốc độ di chuyển"]
    },
    {
      name: "Dây chuyền thần thánh",
      effects: ["12 Miễn dịch"]
    },
    {
      name: "Mặt dây chuyền Rèn bởi Cuồng nộ",
      effects: ["60,0% Sát thương", "100,0% Sát thương nhận vào"]
    },
    {
      name: "Kratos",
      effects: ["30,0% Sát thương cận chiến"]
    },
    {
      name: "Athena",
      effects: ["50,0% Kháng đạn"]
    },
    {
      name: "Narya",
      effects: ["75,0% Kháng lửa"]
    },
    {
      name: "Nhẫn nguyên thủy",
      effects: ["25,0% Kháng sát thương"]
    },
    {
      name: "Nhẫn Magnus",
      effects: ["75,0% Kháng phép"]
    },
    {
      name: "Thánh kỵ sĩ bại trận",
      effects: ["30,0% Xuyên giáp"]
    },
    {
      name: "Sức mạnh của Gungnir",
      effects: ["1.5 Tầm tấn công cận chiến"]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <TrinketsFlipper 
        regularTrinkets={regularTrinkets} 
        upgradedTrinkets={upgradedTrinkets} 
      />
    </div>
  );
};

export default TrinketsList;
