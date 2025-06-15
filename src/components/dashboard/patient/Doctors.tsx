// Doctor List Component
import { Eye, User } from "lucide-react";
import Button from "../../commons/Button";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  avatar: string;
}

const Doctors: React.FC = () => {
  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Marie Kouassi',
      specialty: 'Cardiologue',
      location: 'Cabinet Médical Control, Cotonou',
      rating: 4.9,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '2',
      name: 'Dr. Marie Kouassi',
      specialty: 'Cardiologue',
      location: 'Cabinet Médical Control, Cotonou',
      rating: 4.9,
      avatar: '/api/placeholder/40/40'
    },
    {
      id: '3',
      name: 'Dr. Marie Kouassi',
      specialty: 'Cardiologue',
      location: 'Cabinet Médical Control, Cotonou',
      rating: 4.9,
      avatar: '/api/placeholder/40/40'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Médecins consultés</h3>
        <Button variant="secondary" className="text-xs">
          Voir tout
        </Button>
      </div>
      
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex items-center space-x-4 p-3 border border-gray-100 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900">{doctor.name}</p>
              <p className="text-sm text-gray-500">{doctor.location}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Eye className="w-4 h-4" />
              </button>
              <Button variant="primary" className="px-3 py-1 text-xs">
                Noter
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;