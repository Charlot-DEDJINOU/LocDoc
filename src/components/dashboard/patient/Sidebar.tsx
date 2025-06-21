import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Users,
  User,
  Settings,
  Menu,
  SearchCheck,
  Star,
} from 'lucide-react';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { icon: Star, label: 'Dashboard', route: '/dashboard' },
    { icon: Users, label: 'Je suis docteur', route: '/docteur/register' },
    { icon: SearchCheck, label: 'Rechercher un docteur', route: '/search' },
    { icon: Calendar, label: 'Prendre RDV', route: '/rdv' },
  ];

  return (
    <div className="w-72 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Tableau de bord</h1>
        <Menu className="w-5 h-5 text-gray-500" />
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <nav className="space-y-1">
          {menuItems.map((item, idx) => {
            const isActive = location.pathname === item.route;
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => navigate(item.route)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all group ${
                  isActive
                    ? 'bg-blue-100 text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-500'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            );
          })}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-100 px-4 py-4 space-y-2">
        <div
          onClick={() => navigate('/profile')}
          className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-500 cursor-pointer transition-colors"
        >
          <User className="w-5 h-5" />
          <span>Profil</span>
        </div>
        <div
          onClick={() => navigate('/settings')}
          className="flex items-center gap-3 p-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-blue-500 cursor-pointer transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Paramètres</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
