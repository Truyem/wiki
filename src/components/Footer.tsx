import { Github } from "lucide-react";
const Footer = () => {
  return <footer className="bg-[#259e63] dark:bg-[#1e3a2d] text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Truyem Server Wiki</h2>
            <p className="text-sm opacity-90">
              "Nhân loại trốn tránh khỏi sự hoàn hảo vì họ không thể hiểu được nó. Vậy thì hãy để ta làm việc đó"
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200 transition-colors" aria-label="Github">
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm opacity-75">
          <p>© 2025 Vũ Đình Trung. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;