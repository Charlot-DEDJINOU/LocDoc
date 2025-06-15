// Sidebar Component
import { 
  Search, 
  Calendar, 
  MessageSquare, 
  Users, 
  User, 
  Settings, 
  Menu,
  Star,
  ChevronRight,
} from 'lucide-react';
import Button from '../../commons/Button';

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Search, label: "Rechercher un médecin", active: false },
    { icon: Calendar, label: "Mes rendez-vous", active: true },
    { icon: MessageSquare, label: "Messagerie", active: false },
    { icon: Users, label: "Médecins consultés", active: false },
  ];

  const topDoctors = Array(10).fill(null).map((_, i) => ({
    id: `doc-${i}`,
    name: "Dr. Hamza DOSSOU",
    specialty: "Senior Surgeon",
    location: "CHU Trinité",
    rating: 4.9,
    avatar: "/api/placeholder/40/40"
  }));

  return (
    <div className="w-72 bg-gray-50 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-blue-600">Tableau de bord</h1>
          <Menu className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                item.active 
                  ? 'bg-blue-100 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Top Doctors Section */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-blue-600 mb-4">
            TOP 10 Médecins de la semaine
          </h3>
          <p className="text-xs text-gray-500 mb-4">
            Les 10 Médecins de votre pays les mieux notés de la semaine
          </p>
          
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {topDoctors.slice(0, 8).map((doctor, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{doctor.name}</p>
                  <p className="text-xs text-gray-500">{doctor.specialty}</p>
                  <p className="text-xs text-gray-400">{doctor.location}</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-xs font-medium">{doctor.rating}</span>
                </div>
                <Button variant="primary" className="w-8 h-8 p-0 rounded-full">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-gray-200">
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <User className="w-5 h-5" />
            <span>Profil</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings className="w-5 h-5" />
            <span>Paramètres</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;