
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Axe, Ear, Droplets, Shield } from "lucide-react";
import WeaponTypes from "@/components/mechanics/WeaponTypes";
import LuckSystem from "@/components/mechanics/LuckSystem";
import BleedingSystem from "@/components/mechanics/BleedingSystem";
import BlockingSystem from "@/components/mechanics/BlockingSystem";
import MobStats from "@/components/mechanics/MobStats";
import DamageSystem from "@/components/mechanics/DamageSystem";
import AntiFarm from "@/components/mechanics/AntiFarm";

export const MechanicsContent = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#259e63] dark:text-[#55FFFF] flex items-center gap-2">
            <Ear className="w-8 h-8" />
            Các Cơ Chế
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Tất cả (hoặc hầu hết) các cơ chế của Server ở đây.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="weapons" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Axe className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Vũ Khí Tùy Chỉnh 🗡</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <WeaponTypes />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="luck" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Ear className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">May Mắn 🍀</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <LuckSystem />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bleeding" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Chảy Máu 🩸</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <BleedingSystem />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blocking" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Đỡ Đòn 🤺</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <BlockingSystem />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobstats" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Ear className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Chỉ Số Của Quái Vật 🧟‍♂️</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <MobStats />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="damage" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Axe className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Sát Thương 💥</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <DamageSystem />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="antifarm" className="border rounded-lg p-2">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#825432] dark:text-[#FFAA00]" />
                <span className="font-semibold">Chống "Farm" 🧀</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <AntiFarm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
