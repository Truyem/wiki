
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import SkillGrid from '@/components/skills/SkillGrid';
import NewGamePlus from '@/components/skills/NewGamePlus';
import LevelingGuide from '@/components/skills/LevelingGuide';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SkillsAndAdvancement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#259e63] dark:text-[#55FFFF] mb-6">
          Kỹ năng & Cách thăng cấp
        </h1>
        
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Tìm kiếm kỹ năng..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>

        <Tabs defaultValue="skills" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Tổng quan kỹ năng</TabsTrigger>
            <TabsTrigger value="new-game-plus">New Game+</TabsTrigger>
            <TabsTrigger value="leveling">Hướng dẫn thăng cấp</TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <SkillGrid searchQuery={searchQuery} />
          </TabsContent>

          <TabsContent value="new-game-plus">
            <NewGamePlus />
          </TabsContent>

          <TabsContent value="leveling">
            <LevelingGuide />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsAndAdvancement;
