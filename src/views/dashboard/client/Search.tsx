import React, { useState } from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';

type Doctor = {
  id: string;
  firstName: string;
  lastName: string;
  speciality: string;
};

const doctorsList: Doctor[] = [
  { id: '1', firstName: 'Jean', lastName: 'Dupont', speciality: 'Cardiologue' },
  { id: '2', firstName: 'Aïcha', lastName: 'Bako', speciality: 'Dermatologue' },
  { id: '3', firstName: 'Emmanuel', lastName: 'Adou', speciality: 'Pédiatre' },
  { id: '4', firstName: 'Marie', lastName: 'Kouassi', speciality: 'Gynécologue' },
];

const PatientSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDoctors = doctorsList.filter(
    (doc) =>
      `${doc.firstName} ${doc.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Champ de recherche */}
        <div className="max-w-xl mb-8">
          <label htmlFor="search" className="block text-lg font-semibold text-gray-800 mb-2">
            Rechercher un docteur
          </label>
          <input
            type="text"
            id="search"
            placeholder="Nom, prénom ou spécialité..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Liste des docteurs */}
        {filteredDoctors.length === 0 ? (
          <p className="text-gray-500">Aucun docteur trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-gray-800">
                  Dr. {doctor.firstName} {doctor.lastName}
                </h2>
                <p className="text-blue-600 font-medium">{doctor.speciality}</p>
                <p className="text-sm text-gray-500 mt-2">Disponible pour consultation</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientSearch;
