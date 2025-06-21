import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';
import { post, get } from '../../../services/apiService';
import { useAuthStore } from '../../../store/authStore';

type RdvData = {
  doctor: string;
  date: string;
  period: 'Matin' | 'Soir';
};

type Doctor = {
  doctor_id: string;
  first_name: string;
  last_name: string;
};

const PatientRdv: React.FC = () => {
  const { user } = useAuthStore();

  const [formData, setFormData] = useState<RdvData>({
    doctor: '',
    date: '',
    period: 'Matin',
  });

  const [rdvPris, setRdvPris] = useState<RdvData | null>(null);
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);

  const isRdvAvenir = rdvPris && new Date(rdvPris.date) > new Date();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await get('/doctors/', import.meta.env.VITE_API_URL);
        setDoctorsList(res);
      } catch (error) {
        console.error("Erreur lors de la récupération des docteurs :", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.date || !formData.doctor || !user?.email) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      const baseDate = new Date(formData.date);
      const start = new Date(baseDate);
      const end = new Date(baseDate);

      if (formData.period === 'Matin') {
        start.setHours(9, 0, 0, 0);
        end.setHours(12, 0, 0, 0);
      } else {
        start.setHours(14, 0, 0, 0);
        end.setHours(17, 0, 0, 0);
      }

      const payload = {
        id: crypto.randomUUID(),
        doctor_id: formData.doctor,
        patient_id: user.email,
        slot: {
          start: start.toISOString(),
          end: end.toISOString(),
        },
        notes: '',
        status: 'confirmed',
        created_at: new Date().toISOString(),
      };

      const res = await post('/appointments/', payload, import.meta.env.VITE_API_URL, false);
      
      console.log(res)
      setRdvPris(formData);
    } catch (error) {
      console.error("Erreur lors de la prise de rendez-vous", error);
      alert("Erreur lors de la prise de RDV. Vérifiez les champs ou réessayez.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Prendre un Rendez-vous</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md max-w-xl space-y-4"
        >
          {/* Docteur */}
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
              {doctorsList.map((doctor) => (
                <option key={doctor.doctor_id} value={doctor.doctor_id}>
                  Dr. {doctor.first_name} {doctor.last_name}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
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

        {/* Affichage RDV */}
        {rdvPris && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md max-w-xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Votre dernier RDV</h2>
            <p className="text-gray-700">
              <span className="font-semibold">Docteur :</span>{' '}
              {doctorsList.find((d) => d.doctor_id === rdvPris.doctor)?.first_name}{' '}
              {doctorsList.find((d) => d.doctor_id === rdvPris.doctor)?.last_name}
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
