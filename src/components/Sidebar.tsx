
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const startPositionRef = useRef(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startYRef.current = e.clientY;
    startPositionRef.current = position;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = e.clientY - startYRef.current;
      const newPosition = Math.max(0, startPositionRef.current + deltaY);
      
      // Limit the maximum drag distance to prevent sidebar from going too far down
      const maxDrag = window.innerHeight - (dragRef.current?.clientHeight || 0);
      setPosition(Math.min(newPosition, maxDrag));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <aside 
      ref={dragRef}
      className="w-full md:w-64 md:min-w-64 bg-[#f0f0f0] dark:bg-[#1a1a1a] md:h-auto overflow-y-auto fixed"
      style={{ top: `${position}px` }}
    >
      <div 
        className={cn(
          "p-4 cursor-move border-b border-gray-200 dark:border-gray-800 flex items-center justify-between",
          isDragging && "select-none"
        )}
        onMouseDown={handleMouseDown}
      >
        <h2 className="text-xl font-bold text-[#259e63] dark:text-[#55FFFF]">Mục lục</h2>
        <MoveVertical className="h-5 w-5 text-gray-500" />
      </div>
      <div className="space-y-2 p-4">
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
    </aside>
  );
};

export default Sidebar;
