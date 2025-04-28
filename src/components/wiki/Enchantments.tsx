
import { useState } from "react";
import { Input } from "@/components/ui/input";
import EnchantmentCard from "./EnchantmentCard";
import { Card, CardContent } from "@/components/ui/card";
import { enchantments } from "@/data/enchantments";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const equipmentTypes = [
  "Kiếm", "Rìu", "Cung", "Nỏ", "Đinh ba", "Cuốc chim", "Xẻng", "Cuốc",
  "Mũ", "Áo", "Quần", "Ủng", "Elytra", "Cần câu"
];

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

  // Group enchantments by rarity for display
  const enchantmentsByRarity = {
    SIMPLE: filteredEnchantments.filter((e) => e.rarity === "SIMPLE"),
    UNIQUE: filteredEnchantments.filter((e) => e.rarity === "UNIQUE"),
    ELITE: filteredEnchantments.filter((e) => e.rarity === "ELITE"),
    ULTIMATE: filteredEnchantments.filter((e) => e.rarity === "ULTIMATE"),
    LEGENDARY: filteredEnchantments.filter((e) => e.rarity === "LEGENDARY"),
    FABLED: filteredEnchantments.filter((e) => e.rarity === "FABLED")
  };

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
                {equipmentTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {Object.entries(enchantmentsByRarity).map(([rarity, enchants]) => 
        enchants.length > 0 && (
          <div key={rarity}>
            <h2 className="text-2xl font-bold mb-4">{rarity}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {enchants.map((enchant, index) => (
                <EnchantmentCard 
                  key={index} 
                  name={enchant.name} 
                  description={enchant.description} 
                  appliesTo={enchant.appliesTo} 
                  rarity={enchant.rarity as "SIMPLE" | "UNIQUE" | "ELITE" | "ULTIMATE" | "LEGENDARY" | "FABLED"}
                />
              ))}
            </div>
          </div>
        )
      )}

      {Object.values(enchantmentsByRarity).every(group => group.length === 0) && (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500 dark:text-gray-400">Không tìm thấy enchantment nào.</p>
        </div>
      )}
    </div>
  );
};

export default Enchantments;
