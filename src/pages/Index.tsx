
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BasicCrafting from "@/components/wiki/BasicCrafting";
import QualityUpgrades from "@/components/wiki/QualityUpgrades";
import MaterialTiers from "@/components/wiki/MaterialTiers";
import SpecialItems from "@/components/wiki/SpecialItems";
import Enchantments from "@/components/wiki/Enchantments";
import Trinkets from "@/components/wiki/Trinkets";
import ServerCommands from "@/components/wiki/ServerCommands";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("basic-crafting");

  const renderContent = () => {
    switch (activeSection) {
      case "basic-crafting":
        return <BasicCrafting />;
      case "quality-upgrades":
        return <QualityUpgrades />;
      case "material-tiers":
        return <MaterialTiers />;
      case "special-items":
        return <SpecialItems />;
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
      <Navbar />
      <div className="flex flex-col md:flex-row flex-grow">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-grow px-4 py-6 md:px-8 md:py-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#1e1e1e] rounded-lg shadow-md p-6 mb-10">
            {renderContent()}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
