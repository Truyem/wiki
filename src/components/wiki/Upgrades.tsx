
import CommonUpgrades from "./upgradeCategories/CommonUpgrades";
import ToolUpgrades from "./upgradeCategories/ToolUpgrades";
import WeaponUpgrades from "./upgradeCategories/WeaponUpgrades";
import ArmorUpgrades from "./upgradeCategories/ArmorUpgrades";

const Upgrades = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#825432] dark:text-[#FFAA00]">Nâng cấp</h1>
      <div className="space-y-8">
        <CommonUpgrades />
        <ToolUpgrades />
        <WeaponUpgrades />
        <ArmorUpgrades />
      </div>
    </div>
  );
};

export default Upgrades;
