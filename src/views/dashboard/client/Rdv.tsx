import React, { useState } from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';

type RdvData = {
  doctor: string;
  date: string;
  period: 'Matin' | 'Soir';
};

const PatientRdv: React.FC = () => {
  const [formData, setFormData] = useState<RdvData>({
    doctor: '',
    date: '',
    period: 'Matin',
  });

  const [rdvPris, setRdvPris] = useState<RdvData | null>(null);

  const isRdvAvenir = rdvPris && new Date(rdvPris.date) > new Date();

  const doctorsList = [
    { id: 'dr-1', name: 'Dr. Jean Kossi' },
    { id: 'dr-2', name: 'Dr. Aïcha Bako' },
    { id: 'dr-3', name: 'Dr. Emmanuel Adou' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRdvPris(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* En-tête */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Prendre un Rendez-vous</h1>

        {/* Formulaire RDV */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md max-w-xl space-y-4"
        >
          {/* Select Docteur */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Choisir un docteur</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              disabled={!!isRdvAvenir}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              required
            >
              <option value="">-- Sélectionner --</option>
              {doctorsList.map(doctor => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          {/* Calendrier */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Date du rendez-vous</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={!!isRdvAvenir}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              required
            />
          </div>

          {/* Plage horaire */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Plage horaire</label>
            <select
              name="period"
              value={formData.period}
              onChange={handleChange}
              disabled={!!isRdvAvenir}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <option value="Matin">Matin</option>
              <option value="Soir">Soir</option>
            </select>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={!!isRdvAvenir}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Prendre Rendez-vous
          </button>
        </form>

        {/* RDV existant */}
        {rdvPris && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Votre dernier RDV</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Docteur :</span> {rdvPris.doctor}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date :</span> {rdvPris.date}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Période :</span> {rdvPris.period}
            </p>
            {isRdvAvenir && (
              <p className="text-sm mt-4 text-yellow-600">
                Vous avez déjà un rendez-vous prévu. Vous ne pouvez pas en prendre un autre pour
                l’instant.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientRdv;
