import { Menu } from 'lucide-react';

// Header Component
const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">LocDoc</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Accueil</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Trouver un médecin</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contactez-nous</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Se connecter</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            S'inscrire
          </button>
        </nav>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;