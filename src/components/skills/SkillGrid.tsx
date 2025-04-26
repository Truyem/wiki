
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { skillsData } from '@/data/skillsData';

interface SkillGridProps {
  searchQuery: string;
}

const SkillGrid = ({ searchQuery }: SkillGridProps) => {
  const filteredSkills = skillsData.filter((skill) =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    skill.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill) => (
        <Dialog key={skill.name}>
          <DialogTrigger asChild>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#259e63] dark:text-[#55FFFF]">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description.substring(0, 60)}...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#259e63] dark:text-[#55FFFF] flex items-center gap-2">
                <span>{skill.icon}</span>
                {skill.name}
              </DialogTitle>
              <DialogDescription className="text-base text-gray-700 dark:text-gray-300">
                {skill.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                  Cách tăng EXP
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{skill.howToGainExp || "Không có thông tin."}</p>
              </div>

              {skill.specialNotes && (
                <div>
                  <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                    Lưu ý đặc biệt
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">{skill.specialNotes}</p>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                  Đặc quyền
                </h4>
                <p className="text-gray-700 dark:text-gray-300">{skill.perks || "Không có thông tin."}</p>
              </div>

              {skill.abilities && (
                <div>
                  <h4 className="font-semibold text-[#825432] dark:text-[#FFAA00] mb-2">
                    Khả năng
                  </h4>
                  {skill.abilities.map((ability, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="font-medium text-[#259e63] dark:text-[#55FFFF]">
                        {ability.name}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Cách sử dụng: {ability.usage}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {ability.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default SkillGrid;
