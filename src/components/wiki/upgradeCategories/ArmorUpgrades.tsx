
import { Card, CardContent } from "@/components/ui/card";

const ArmorUpgrades = () => {
  const upgrades = [
    { title: "Miễn dịch", description: "Tăng +1 khả năng miễn dịch, tương đương với 0.05 giây miễn nhiễm sát thương sau khi nhận sát thương.", imagePath: "/lovable-uploads/51_1_1_352756077-ab1586ef-ea28-41f8-a2b1-238282544a30.png.92756c9f-855e-4774-8649-767c70b75ac5.png" },
    { title: "Hồi máu", description: "Tăng +5% khả năng hồi máu.", imagePath: "/lovable-uploads/52_1_1_352756838-e6ff5d18-bd85-478d-afad-fb1bbe1b7d69.png.1addc0f0-6216-47bd-b2e5-086569d9c195.png" },
    { title: "Tham vọng", description: "Tăng +5% giảm thời gian hồi chiêu của các kỹ năng như Đỡ đòn, Cuồng nộ, Khoan, Đốn cây nhanh, v.v.", imagePath: "/lovable-uploads/53_1_1_352757165-97f3587a-a679-4d57-9bd1-3e2ddb9d77f0.png.4d9bf9a1-42fc-459b-b787-23a5702bf097.png" },
    { title: "Né tránh", description: "Tăng +2% cơ hội né tránh, vô hiệu hóa hoàn toàn sát thương từ một đòn tấn công.", imagePath: "/lovable-uploads/54_1_1_352757661-ddcc4323-c16e-4287-a71a-8e52c8a1b036.png.4ca44354-2887-414d-9377-648cc0189947.png" },
    { title: "Tập sự", description: "Tăng +5% kinh nghiệm kỹ năng, nhưng cũng tăng 10% sát thương nhận vào.", imagePath: "/lovable-uploads/55_1_1_352758288-ffce8d22-829a-4a78-9ad3-0c58a4e64cf4.png.f300f445-be0a-4ac5-99a6-764877df6272.png" },
    { title: "Nghiện", description: "Tăng +5% nhận quả cầu kinh nghiệm, nhưng cũng tăng 5% sát thương nhận vào.", imagePath: "/lovable-uploads/56_1_1_352758884-130fc367-b0d5-4c29-9513-30d3904f23aa.png.36bba70d-2232-44fb-81e9-4330b424f2ee.png" },
    { title: "Lén lút", description: "Tăng +10% tốc độ lén lút (chỉ quần).", imagePath: "/lovable-uploads/61_1_1_352760551-eca0038f-fe4c-41f5-8e3f-a01064bc5649.png.c71f39d9-b569-4edd-ab29-f041922d111e.png" },
    { title: "Thể thao", description: "Tăng +10% tốc độ chạy nước rút (chỉ quần).", imagePath: "/lovable-uploads/62_1_1_352759703-31c02428-5801-48f9-9e46-4d11ff85f3a8.png.879ad411-7199-4d29-996a-8256967de230.png" },
    { title: "Nhảy nhiều lần", description: "Tăng +1 lần nhảy trên không. Có thể áp dụng tối đa 3 lần (chỉ giày).", imagePath: "/lovable-uploads/63_1_1_352759758-8ee195c3-b59e-4efc-9acc-d6acb8f00a51.png.db04869a-659f-4d28-a8d8-21771b440f12.png" },
    { title: "Nhảy vọt", description: "Tăng +50% độ cao nhảy (chỉ giày).", imagePath: "/lovable-uploads/64_1_1_352759808-a00246ad-0035-4ebd-b5ce-b79b6ded9ac7.png.bd76a5c9-4567-40d2-8a99-cd57064db036.png" },
    { title: "Hỏa ngục", description: "Tăng +20% sát thương lửa (chỉ giáp ngực).", imagePath: "/lovable-uploads/65_1_1_352760371-c7308e09-e47e-49d7-a343-b7143898a6fe.png.c67b618b-befd-4f7c-b1d6-70a974851373.png" },
    { title: "Ma thuật", description: "Tăng +10% sát thương phép thuật (chỉ giáp ngực).", imagePath: "/lovable-uploads/66_1_1_352760410-fa7cda09-aee2-4b00-a3c1-2c4777d0c8bd.png.307d15e9-4e53-41dd-b897-442119628afc.png" },
    { title: "Độc hại", description: "Tăng +20% sát thương độc (chỉ giáp ngực).", imagePath: "/lovable-uploads/67_1_1_352760491-d17feb98-1757-4922-b11c-b95086692649.png.60b2256d-af4f-445c-b200-db78933b46d6.png" },
    { title: "Thần thánh", description: "Tăng +20% sát thương bức xạ (chỉ giáp ngực).", imagePath: "/lovable-uploads/68_1_1_352760435-0e1b6f80-b5d2-4277-8bcc-a60c453c971b.png.ed555e99-8012-4c5d-bed7-f859c3832b75.png" },
    { title: "Chết chóc", description: "Tăng +20% sát thương hoại tử (chỉ giáp ngực).", imagePath: "/lovable-uploads/69_1_1_352760467-98f57ab0-a8a1-4ffc-abbe-b231f474d3d9.png.c02f0712-a62b-4651-82da-0fec10e1386e.png" },
    { title: "Cuồng nộ", description: "Tăng +5% sát thương (chỉ giáp ngực).", imagePath: "/lovable-uploads/70_1_1_352760587-2e87a4a7-52f7-4232-a903-c139c39f4575.png.f0f41c0f-6f09-4e8e-9387-25ed4fd2c4b2.png" },
    { title: "Thợ rèn", description: "Tăng +10 kỹ năng rèn (chỉ mũ bảo hiểm).", imagePath: "/lovable-uploads/71_1_1_352760644-6c7e50ec-bccb-4984-b6d5-184fc683a99c.png.a7067de7-5c07-42c4-ae44-ea550eb0085f.png" },
    { title: "Phù phép", description: "Tăng +10 kỹ năng phù phép (chỉ mũ bảo hiểm).", imagePath: "/lovable-uploads/72_1_1_352760676-a8d82e7e-f88e-4f24-b1bc-e6f81681a6bb.png.c6a3691c-46f3-49a2-9beb-8c576eea21b7.png" },
    { title: "Nhà giả kim", description: "Tăng +10 kỹ năng giả kim (chỉ mũ bảo hiểm).", imagePath: "/lovable-uploads/73_1_1_352760722-ecf80636-1cfc-489c-91db-626595dc6b05.png.2ff145e4-7367-4054-8dc9-2b95a0a0b994.png" }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-[#825432] dark:text-[#FFAA00]">Nâng cấp áo giáp</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upgrades.map((upgrade, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-2 text-center text-[#259e63] dark:text-[#55FFFF]">
                  {upgrade.title}
                </h3>
                <img 
                  alt={`Nâng cấp ${upgrade.title}`}
                  className="rounded-lg shadow-md max-w-full h-auto mb-4"
                  src={upgrade.imagePath}
                />
                <p className="text-center mt-4">
                  {upgrade.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArmorUpgrades;
