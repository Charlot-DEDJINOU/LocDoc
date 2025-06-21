// src/pages/dashboard/patient/PatientSearch.tsx
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';
import { get } from '../../../services/apiService';

type Doctor = {
  doctor_id: string;
  first_name: string;
  last_name: string;
  specialties: string[];
  email: string;
  telephone: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
};

const PatientSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      try {
        const data = await get('/doctors/', import.meta.env.VITE_API_URL);

        console.log(data)
        setDoctorsList(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des docteurs :', error);
        alert("Impossible de charger les docteurs.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctorsList.filter((doc) => {
    const fullName = `${doc.first_name} ${doc.last_name}`.toLowerCase();
    const specialties = doc.specialties.join(', ').toLowerCase();
    return (
      fullName.includes(searchQuery.toLowerCase()) ||
      specialties.includes(searchQuery.toLowerCase())
    );
  });

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
        {loading ? (
          <p className="text-gray-500">Chargement en cours...</p>
        ) : filteredDoctors.length === 0 ? (
          <p className="text-gray-500">Aucun docteur trouvé.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.doctor_id}
                className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold text-gray-800">
                  Dr. {doctor.first_name} {doctor.last_name}
                </h2>
                <p className="text-blue-600 font-medium capitalize">
                  {doctor.specialties.join(', ')}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  📧 {doctor.email}<br />
                  📞 {doctor.telephone}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientSearch;
