import logoImage from "../../assets/LogoNegativa.png";
import { User, Settings } from "lucide-react";

const Header = () => {
  return (
    <nav className="bg-[#007632] border-b border-white rounded-t-lg">
      <div className="px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-32 text-xl font-bold text-white">
                <img src={logoImage} alt="PLVB Logo" />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="border-[#65B32E] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:text-[#95C230]"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:border-white hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Relatórios
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:border-white hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Configurações
              </a>
              <a
                href="#"
                className="border-transparent text-white hover:border-white hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Perfil
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <User size={20} />
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
