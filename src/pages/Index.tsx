
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import BasicCrafting from "@/components/wiki/BasicCrafting";
import QualityUpgrades from "@/components/wiki/QualityUpgrades";
import MaterialTiers from "@/components/wiki/MaterialTiers";
import SpecialItems from "@/components/wiki/SpecialItems";
import Enchantments from "@/components/wiki/Enchantments";
import Trinkets from "@/components/wiki/Trinkets";
import ServerCommands from "@/components/wiki/ServerCommands";
import Footer from "@/components/Footer";
import Upgrades from "@/components/wiki/Upgrades";
import Races from "@/components/wiki/Races";
import CraftingSkillsDetail from "@/components/wiki/CraftingSkillsDetail";
import Professions from "@/components/wiki/Professions";
import { cn } from "@/lib/utils";

const Index = () => {
  const [activeSection, setActiveSection] = useState("basic-crafting");
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  useEffect(() => {
    // Add animation when section changes
    setIsContentVisible(false);
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "basic-crafting":
        return <BasicCrafting />;
      case "upgrades":
        return <Upgrades />;
      case "quality-upgrades":
        return <QualityUpgrades />;
      case "material-tiers":
        return <MaterialTiers />;
      case "special-items":
        return <SpecialItems />;
      case "races":
        return <Races />;
      case "professions":
        return <Professions />;
      case "crafting-skills":
        return <CraftingSkillsDetail />;
      case "enchantments":
        return <Enchantments />;
      case "trinkets":
        return <Trinkets />;
      case "server-commands":
        return <ServerCommands />;
      default:
        return <BasicCrafting />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#121212] flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow px-4 py-6 md:px-8 md:py-8 overflow-y-auto">
        <div 
          className={cn(
            "max-w-4xl mx-auto bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md p-6 mb-10 transition-all duration-500 ease-in-out",
            isContentVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-4"
          )}
        >
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
