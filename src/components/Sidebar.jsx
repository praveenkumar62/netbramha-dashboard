import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.svg";
import Home from "../assets/home.svg";
import File from "../assets/file.svg";
import Bell from "../assets/bell.svg";
import Cap from "../assets/cap.svg";
import Meter from "../assets/meter.svg";
import Upload from "../assets/upload.svg";
import Gift from "../assets/gift.svg";
import ExpandMoreWhite from "../assets/expand-more-white.svg";
import Close from "../assets/close.svg";

const MenuItems = [
  { 
    label: "Overview", 
    icon: Home, 
    hasSubmenu: true,
    submenuItems: [
      { label: "Score & Report" },
      { label: "Summary" },
      { label: "History" },
      { label: "Where You Stand" },
    ]
  },
  { label: "Your Report", icon: File, hasSubmenu: false },
  { label: "Alerts", icon: Bell, badge: 4, hasSubmenu: false },
  { label: "Simulator", icon: Meter, hasSubmenu: false },
  { label: "Education", icon: Cap, hasSubmenu: false },
  { label: "Upgrade My Plan", icon: Upload, hasSubmenu: false },
  { label: "Rewards Program", icon: Gift, hasSubmenu: false },
];

function Sidebar(props) {
  const { open, onClose } = props;
  const closeBtnRef = useRef(null);
  const [toggleSubMenu, setToggleSubMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubMenu, setActiveSubMenu] = useState('');

  useEffect(() => {
    function handleKeyChange(e) {
      if (e.key === "Escape" && open) onClose?.();
    }
    window.addEventListener("keydown", handleKeyChange);
    return () => window.removeEventListener("keydown", handleKeyChange);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      closeBtnRef.current?.focus();
    }
  }, [open]);

  const sidebarContent = (
    <aside
      className="flex h-full w-[260px] flex-col bg-[#008A00] text-white"
      aria-label="Primary"
    >
      <div className="flex h-[90px] pt-3 pl-7 items-center gap-2">
        <img src={Logo} width={186} height={17} alt="logo" />
      </div>

      <nav className="flex-1 overflow-y-auto py-2" role="navigation">
        <ul className="space-y-1">
          {MenuItems.map((item) => {
            return (
              <li key={item.label} className={(item.hasSubmenu && toggleSubMenu ? "bg-[#027500]" : "")}>
                <a
                  onClick={() => {
                    setActiveMenu(item.label);
                    setActiveSubMenu('');
                    if (item.hasSubmenu) {
                      setToggleSubMenu(!toggleSubMenu);
                    } else {
                      setToggleSubMenu(false);
                    }
                  }}
                  className={"w-full flex items-center gap-3 pl-9 py-4 text-sm outline-none transition-colors cursor-pointer" + (activeMenu === item.label ? " bg-[#027500]" : "")}
                  aria-expanded={toggleSubMenu}
                >
                  {item.icon && <img src={item.icon} className="h-5 w-5 text-white" />}
                  <span className={"text-[16px]" + (activeMenu === item.label ? " font-bold " : "")}>{item.label}</span>
                  {item.badge ? (
                    <span className={"flex items-center justify-center rounded-full bg-[#FDDC02] px-2 text-xs font-medium text-primary-black h-6 w-6"} aria-label={`${item?.badge} alerts`}>
                      {item?.badge}
                    </span>
                  ) : null}
                  {item.hasSubmenu && (
                    <img src={ExpandMoreWhite} width={10} height={5} alt="expand" className={toggleSubMenu ? '' : 'rotate-180'} />
                  )}
                </a>
                
                {item.hasSubmenu && (
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${toggleSubMenu ? 'max-h-60' : 'max-h-0'}`}
                  >
                    <ul className="ml-[44px] mb-4 pl-2 border-l-2 border-[#008A00] mt-1">
                      {item.submenuItems.map((subItem) => (
                        <li key={subItem.label}>
                          <a
                            className={"flex items-center rounded-md py-3 px-2 text-sm transition-colors cursor-pointer" + (activeSubMenu === subItem.label ? " font-bold " : " font-normal")}
                            onClick={() => {
                              setActiveSubMenu(subItem.label);
                              setActiveMenu(item.label);
                            }}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );

  return (
    <>
      <div
        className={
          `md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${open ? 'opacity-100 ' : 'opacity-0 pointer-events-none'}`
        }
        role="dialog"
        aria-modal="true"
        aria-label="sidebar"
      >
        <div
          className="absolute inset-0 bg-black/40 transition-opacity duration-300 ease-in-out"
          aria-hidden="true"
          onClick={onClose}
        />
        <div id="mobile-sidebar" className={`relative z-10 flex h-full w-[260px] flex-col bg-[#008A00] shadow-xl transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <button
            ref={closeBtnRef}
            className="absolute right-2 top-2 text-white focus:outline-none"
            aria-label="close-sidebar"
            onClick={onClose}
          >
            <img src={Close} width={24} height={24} alt="close" />
          </button>
          {sidebarContent}
        </div>
      </div>

      <div className="fixed top-0 bottom-0 left-0 z-40 hidden w-[260px] md:block">
        <div className="h-full">{sidebarContent}</div>
      </div>
    </>
  );
}

export default Sidebar;
