import HamburgerMenu from "../assets/hamburger-menu.svg";
import Help from "../assets/help.svg";
import Language from "../assets/language.svg";
import Logout from "../assets/logout.svg";
import User from "../assets/user.svg";
import ExpandMore from "../assets/expand-more.svg";

export default function Topbar(props) {
  const { handleMobileMenuClick, isSidebarOpen } = props;

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-custom-grey bg-white md:pl-[260px] lg:pr-10" role="navigation">
      <div className="flex h-[60px] items-center px-5">
        <button
          className="md:hidden flex items-center justify-center focus:outline-none"
          aria-label="mobile-sidebar"
          aria-expanded={isSidebarOpen}
          onClick={handleMobileMenuClick}
        >
          <img src={HamburgerMenu} width={24} height={24} alt="menu" />
        </button>

        <div className="ml-auto flex items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-[6px] cursor-pointer">
            <img src={Help} width={22} height={22} alt="help" />
            <span className="text-primary-black hidden sm:inline-block">How It Works</span>
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer">
            <img src={Language} width={40} height={22} alt="language" />
            <span className="text-primary-black hidden sm:inline-block">English</span>
            <img src={ExpandMore} width={8} height={8} className="mt-[2px]" alt="expand" />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer">
            <img src={User} width={22} height={22} alt="user" />
            <span className="text-primary-black hidden sm:inline-block">My Account</span>
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer">
            <img src={Logout} width={22} height={22} alt="logout" />
            <span className="text-primary-black hidden sm:inline-block">Logout</span>
          </div>
        </div>
      </div>
    </header>
  );
}
