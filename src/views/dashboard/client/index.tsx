import React from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';

const PatientDashboard: React.FC = () => {
  // Ces données pourraient venir de l'authStore ou d'une API
  const patient = {
    nom: 'YENONMON',
    prenom: 'Gbèto',
    groupeSanguin: 'O+',
    facteurRhesus: 'Rh+',
    derniereConsultation: '2024-12-12',
    traitements: [
      { nom: 'Paracétamol 500mg', date: '2024-11-05' },
      { nom: 'Amoxicilline', date: '2024-10-22' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Bonjour, <span className="text-primary">{patient.prenom} {patient.nom}</span>
          </h1>
          <p className="text-gray-600">Bienvenue sur votre espace personnel</p>
        </div>

        {/* Infos patient */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Groupe sanguin</h2>
            <p className="text-2xl font-bold text-primary">{patient.groupeSanguin}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Facteur Rhésus</h2>
            <p className="text-2xl font-bold text-primary">{patient.facteurRhesus}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Dernière consultation</h2>
            <p className="text-2xl font-bold text-primary">{patient.derniereConsultation}</p>
          </div>
        </div>

        {/* Liste des traitements */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Derniers traitements</h2>
          <ul className="space-y-3">
            {patient.traitements.map((traitement, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-200 pb-2"
              >
                <span className="text-gray-700">{traitement.nom}</span>
                <span className="text-sm text-gray-500">{traitement.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
