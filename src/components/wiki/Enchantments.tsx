
import { useState } from "react";
import { Input } from "@/components/ui/input";
import EnchantmentCard from "./EnchantmentCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { enchantments } from "@/data/enchantments";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Enchantments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rarityFilter, setRarityFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filteredEnchantments = enchantments.filter((enchant) => {
    const matchesSearch = enchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enchant.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRarity = rarityFilter === "all" || enchant.rarity === rarityFilter;
    const matchesType = typeFilter === "all" || enchant.appliesTo.includes(typeFilter);
    
    return matchesSearch && matchesRarity && matchesType;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-2">
          Enchantments
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Danh sách các enchant có thể áp dụng cho trang bị của bạn.
        </p>
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Tìm kiếm enchantment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <Select value={rarityFilter} onValueChange={setRarityFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Chọn độ hiếm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả độ hiếm</SelectItem>
                <SelectItem value="SIMPLE">Simple</SelectItem>
                <SelectItem value="UNIQUE">Unique</SelectItem>
                <SelectItem value="ELITE">Elite</SelectItem>
                <SelectItem value="ULTIMATE">Ultimate</SelectItem>
                <SelectItem value="LEGENDARY">Legendary</SelectItem>
                <SelectItem value="FABLED">Fabled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Chọn loại trang bị" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tất cả trang bị</SelectItem>
                <SelectItem value="Kiếm">Kiếm</SelectItem>
                <SelectItem value="Rìu">Rìu</SelectItem>
                <SelectItem value="Cung">Cung</SelectItem>
                <SelectItem value="Nỏ">Nỏ</SelectItem>
                <SelectItem value="Đinh ba">Đinh ba</SelectItem>
                <SelectItem value="Cuốc chim">Cuốc chim</SelectItem>
                <SelectItem value="Xẻng">Xẻng</SelectItem>
                <SelectItem value="Mũ">Mũ</SelectItem>
                <SelectItem value="Áo">Áo</SelectItem>
                <SelectItem value="Quần">Quần</SelectItem>
                <SelectItem value="Ủng">Ủng</SelectItem>
                <SelectItem value="Bộ Giáp">Bộ Giáp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEnchantments.map((enchant, index) => (
          <EnchantmentCard key={index} {...enchant} />
        ))}
      </div>
    </div>
  );
};

export default Enchantments;
