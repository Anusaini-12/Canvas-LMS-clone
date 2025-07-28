import { useState, useEffect } from "react";
import { FiMenu, FiHome, FiBook, FiCalendar, FiInbox, FiHelpCircle } from "react-icons/fi";

const navItems = [
  { name: "Dashboard", icon: <FiHome />, path: "/dashboard" },
  { name: "Courses", icon: <FiBook />, path: "/courses" },
  { name: "Calendar", icon: <FiCalendar />, path: "/calendar" },
  { name: "Inbox", icon: <FiInbox />, path: "/inbox" },
  { name: "Help", icon: <FiHelpCircle />, path: "/help" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsOpen(width >= 1024); 
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <>
      {/* Hamburger (mobile only) */}
      {isMobile && !isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 text-white"
        >
          <FiMenu className="text-2xl" />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-700 text-white transition-all duration-300 ease-in-out z-40
        ${isOpen ? "w-64" : isTablet ? "w-16" : "w-0"}
        ${!isMobile ? "block" : isOpen ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-between p-4 text-xl font-bold">
          <span>
            {isMobile
              ? isOpen
                ? "Canvas LMS"
                : ""
              : isTablet
              ? "C"
              : "Canvas LMS"}
          </span>

          {isMobile && isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl"
            >
              <FiMenu />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 px-4 py-3 hover:bg-gray-800 transition cursor-pointer"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && !isTablet && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
