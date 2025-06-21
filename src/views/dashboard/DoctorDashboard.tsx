import React from 'react';
import { CalendarDays, User, ClipboardList, Star, Stethoscope } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const doctor = {
    firstName: 'Jean',
    lastName: 'KOUASSI',
    specialty: 'Cardiologue',
    rating: 4.6,
    totalPatients: 120,
    upcomingAppointments: 3,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6 md:p-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Bienvenue Dr. {doctor.firstName} {doctor.lastName}
        </h1>
        <p className="text-lg text-gray-600">{doctor.specialty}</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <User className="text-blue-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-600">Patients suivis</p>
              <p className="text-lg font-bold text-gray-800">{doctor.totalPatients}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <CalendarDays className="text-green-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-600">Rendez-vous à venir</p>
              <p className="text-lg font-bold text-gray-800">{doctor.upcomingAppointments}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <div className="flex items-center space-x-4">
            <Star className="text-yellow-500 w-6 h-6" />
            <div>
              <p className="text-sm text-gray-600">Note moyenne</p>
              <p className="text-lg font-bold text-gray-800">{doctor.rating} / 5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center space-x-4 group">
          <ClipboardList className="text-purple-500 w-6 h-6 group-hover:scale-110 transition" />
          <span className="text-gray-800 font-medium">Voir mes rendez-vous</span>
        </button>
        <button className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center space-x-4 group">
          <User className="text-indigo-500 w-6 h-6 group-hover:scale-110 transition" />
          <span className="text-gray-800 font-medium">Accéder à mon profil</span>
        </button>
      </div>

      {/* Conseil ou message */}
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded-lg shadow-sm max-w-2xl">
        <h3 className="font-semibold text-blue-800">Conseil LocDoc</h3>
        <p className="text-sm text-blue-700 mt-1">
          Pensez à mettre à jour régulièrement vos disponibilités pour faciliter la prise de rendez-vous.
        </p>
      </div>
    </div>
  );
};

export default DoctorDashboard;
