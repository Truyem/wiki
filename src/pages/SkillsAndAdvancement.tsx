
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { skillsData, skillCategories } from '@/data/skillsData';
import NewGamePlus from '@/components/skills/NewGamePlus';
import LevelingGuide from '@/components/skills/LevelingGuide';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SkillsAndAdvancement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredSkills = skillsData.filter(skill => 
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group skills by category for display
  const renderSkillsByCategory = () => {
    return Object.entries(skillCategories).map(([category, skillNames]) => {
      const categorySkills = filteredSkills.filter(skill => skillNames.includes(skill.name));
      
      if (categorySkills.length === 0) return null;

      return (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold text-[#825432] dark:text-[#FFAA00] capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorySkills.map(skill => (
              <Dialog key={skill.name}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{skill.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#259e63] dark:text-[#55FFFF]">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-[#259e63] dark:text-[#55FFFF]">
                      <span className="text-2xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {skill.description}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    {skill.howToGainExp && (
                      <div>
                        <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                          Cách tăng EXP
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{skill.howToGainExp}</p>
                      </div>
                    )}

                    {skill.specialNotes && (
                      <div>
                        <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                          Lưu ý đặc biệt
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{skill.specialNotes}</p>
                      </div>
                    )}

                    {skill.perks && (
                      <div>
                        <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                          Đặc quyền
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">{skill.perks}</p>
                      </div>
                    )}

                    {skill.abilities && skill.abilities.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                          Khả năng
                        </h4>
                        <div className="space-y-4">
                          {skill.abilities.map((ability, idx) => (
                            <div key={idx} className="pl-4 border-l-2 border-[#259e63] dark:border-[#55FFFF]">
                              <h5 className="font-medium">{ability.name}</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                <span className="font-semibold">Cách sử dụng:</span> {ability.usage}
                              </p>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                {ability.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      );
    });
  };

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

          <TabsContent value="skills" className="space-y-8">
            {renderSkillsByCategory()}
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
