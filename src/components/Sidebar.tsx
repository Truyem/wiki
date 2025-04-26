
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const sections = [
    { id: "basic-crafting", name: "Chế tạo cơ bản" },
    { id: "upgrades", name: "Nâng cấp" },
    { id: "quality-upgrades", name: "Cải thiện trang bị" },
    { id: "material-tiers", name: "Cấp độ vật liệu" },
    { id: "special-items", name: "Vật phẩm đặc biệt" },
    { id: "races", name: "Tộc" },
    { id: "enchantments", name: "Enchantments" },
    { id: "trinkets", name: "Trinkets" },
    { id: "server-commands", name: "Lệnh Server" },
  ];

  return (
    <aside className="w-full md:w-64 md:min-w-64 bg-[#f0f0f0] dark:bg-[#1a1a1a] md:h-auto overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 text-[#259e63] dark:text-[#55FFFF]">Mục lục</h2>
        <div className="space-y-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              className={cn(
                "w-full justify-start text-left",
                activeSection === section.id
                  ? "bg-[#1e3a2d] text-white dark:bg-[#259e63]"
                  : "text-gray-700 dark:text-gray-300 hover:bg-[#e0e0e0] dark:hover:bg-[#252525]"
              )}
              onClick={() => setActiveSection(section.id)}
            >
              {section.name}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
