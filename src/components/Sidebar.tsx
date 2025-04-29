
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);
  const startPositionRef = useRef(0);
  const isMobile = useIsMobile();

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
      className={cn(
        "transition-all duration-300 ease-in-out w-full md:w-56 md:min-w-56 bg-[#f0f0f0] dark:bg-[#1a1a1a] md:h-auto overflow-y-auto fixed rounded-lg shadow-lg",
        isMobile ? "mx-2" : "translate-x-[-100%] md:translate-x-0 md:fixed md:left-1/2 md:transform md:-translate-x-1/2",
        isHovered && !isMobile && "translate-x-0 md:translate-x-[-50%] shadow-xl"
      )}
      style={{ top: `${position}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={cn(
          "p-3 cursor-move border-b border-gray-200 dark:border-gray-800 flex items-center justify-between rounded-t-lg transition-colors duration-200",
          isDragging && "select-none bg-gray-200 dark:bg-gray-800"
        )}
        onMouseDown={handleMouseDown}
      >
        <h2 className="text-lg font-bold text-[#259e63] dark:text-[#55FFFF] transition-transform duration-200 hover:scale-105">Mục lục</h2>
        <MoveVertical className="h-4 w-4 text-gray-500 transition-transform duration-200 hover:text-[#259e63] dark:hover:text-[#55FFFF]" />
      </div>
      <div className="space-y-1.5 p-3">
        {sections.map((section) => (
          <Button
            key={section.id}
            variant="ghost"
            className={cn(
              "w-full justify-start text-left text-sm transition-all duration-200 transform hover:translate-x-1",
              activeSection === section.id
                ? "bg-[#1e3a2d] text-white dark:bg-[#259e63] scale-105 shadow-md"
                : "text-gray-700 dark:text-gray-300 hover:bg-[#e0e0e0] dark:hover:bg-[#252525]"
            )}
            onClick={() => setActiveSection(section.id)}
          >
            <span className="transition-all duration-300">{section.name}</span>
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
