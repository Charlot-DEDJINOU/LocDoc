// Appointment List Component
import Button from "../../commons/Button";
import { Eye } from "lucide-react";

interface Appointment {
  id: string;
  doctor: Doctor;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  avatar: string;
}

const Appointments: React.FC = () => {
  const appointments: Appointment[] = [
    {
      id: '1',
      doctor: {
        id: '1',
        name: 'Dr. Marie Kouassi',
        specialty: 'Cardiologue',
        location: 'Cabinet Médical Control, Cotonou',
        rating: 4.9,
        avatar: '/api/placeholder/40/40'
      },
      date: '15',
      time: '14h30',
      status: 'confirmed'
    },
    {
      id: '2',
      doctor: {
        id: '2',
        name: 'Dr. Paul Agbodjan',
        specialty: 'Dermatologue',
        location: 'Cabinet Médical Control, Cotonou',
        rating: 4.8,
        avatar: '/api/placeholder/40/40'
      },
      date: '05',
      time: '14h30',
      status: 'pending'
    },
    {
      id: '3',
      doctor: {
        id: '3',
        name: 'Dr. Paul Agbodjan',
        specialty: 'Dermatologue',
        location: 'Cabinet Médical Control, Cotonou',
        rating: 4.8,
        avatar: '/api/placeholder/40/40'
      },
      date: '05',
      time: '14h30',
      status: 'cancelled'
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'confirmed':
        return { text: 'Confirmé', className: 'bg-green-100 text-green-800' };
      case 'pending':
        return { text: 'Terminé', className: 'bg-blue-100 text-blue-800' };
      case 'cancelled':
        return { text: 'Annulé', className: 'bg-red-100 text-red-800' };
      default:
        return { text: 'En attente', className: 'bg-gray-100 text-gray-800' };
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Vos rendez-Vous</h3>
        <Button variant="secondary" className="text-xs">
          Voir tout
        </Button>
      </div>
      
      <div className="space-y-4">
        {appointments.map((appointment) => {
          const statusConfig = getStatusConfig(appointment.status);
          return (
            <div key={appointment.id} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg">
              <div className="bg-blue-100 rounded-lg p-3 text-center min-w-0">
                <div className="text-xl font-bold text-blue-600">{appointment.date}</div>
                <div className="text-xs text-blue-500">Juin</div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900">{appointment.doctor.name}</p>
                <p className="text-sm text-gray-500">{appointment.doctor.location}</p>
                <p className="text-sm text-blue-600">{appointment.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <Eye className="w-4 h-4" />
                </button>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.className}`}>
                  {statusConfig.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appointments;