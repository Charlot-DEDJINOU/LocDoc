// Composant Header du profil médecin
import Button from "../../commons/Button";
import { Star, Edit } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  reviewCount: number;
  avatar: string;
  about: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
}

const Header: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200 rounded-full"></div>
        <div className="absolute top-12 right-8 w-16 h-16 bg-purple-200 rounded-full"></div>
        <div className="absolute bottom-8 left-12 w-12 h-12 bg-blue-300 rounded-full"></div>
      </div>
      
      <div className="relative flex items-center space-x-6">
        {/* Photo du médecin */}
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          {doctor.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
        </div>
        
        {/* Informations principales */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            <span className="text-blue-600">Dr {doctor.name.split(' ')[1]}</span>
            <span className="text-gray-600"> {doctor.name.split(' ')[2]}</span> - 
            <span className="text-teal-600"> {doctor.specialty}</span>
          </h1>
          
          {/* Statistiques */}
          <div className="flex items-center space-x-8 mt-4">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="text-3xl font-bold text-blue-600">{doctor.rating}</span>
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{doctor.experience}</div>
              <div className="text-sm text-gray-600">d'Expérience</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{doctor.reviewCount}</div>
              <div className="text-sm text-gray-600">Avis</div>
            </div>
          </div>
        </div>
        
        {/* Bouton contacter */}
        <Button variant="outline" className="flex items-center space-x-2">
          <span>Contacter</span>
          <Edit className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default Header;