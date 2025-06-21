import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/commons/Button';
import Checkbox from '../../components/commons/Checkbox';
import Input from '../../components/commons/Input';
import Select from '../../components/commons/Select';
import phoneImage from '../../assets/phone.png';
import logoImage from '../../assets/logo.png';
import { post } from '../../services/apiService';
import { useAuthStore } from '../../store/authStore';

const DoctorSignup: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setToken, setLoading } = useAuthStore();

  const [form, setForm] = useState({
    email: '',
    specialties: '',
    description: '',
    disponibilite: {
      lundi: { available: false },
      mardi: { available: false },
      mercredi: { available: false },
      jeudi: { available: false },
      vendredi: { available: false },
      samedi: { available: false },
      dimanche: { available: false },
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleDayAvailability = (day: keyof typeof form.disponibilite) => {
    setForm(prev => ({
      ...prev,
      disponibilite: {
        ...prev.disponibilite,
        [day]: {
          ...prev.disponibilite[day],
          available: !prev.disponibilite[day].available,
          morning: {
            start: '09:00',
            end: '12:00'
          },
          afternoon: {
            start: '14:00',
            end: '17:00'
          }
        }
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        id: "354654s3d5435sd",
        email: form.email,
        specialties: [form.specialties],
        description: form.description,
        disponibilite: form.disponibilite,
        rating: 0
      };

      const res = await post('/doctors', payload);

      setUser(res.user);
      setToken(res.token);
      navigate('/docteur/dashboard');
    } catch (error) {
      alert("Erreur lors de l'inscription. Vérifie les champs.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="hidden md:flex flex-1 items-center justify-center">
        <img src={phoneImage} alt="Illustration" className="w-full h-full object-cover" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-10 relative">
        <img src={logoImage} alt="LocDoc" className="absolute top-6 left-6 h-10" />

        <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full max-w-xl">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Inscription <span className="text-green-600">Médecin</span></h1>
          <p className="text-gray-700 mb-6">Remplissez les informations ci-dessous pour créer votre compte.</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="Email professionnel"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Select
              name="specialties"
              value={form.specialties}
              onChange={handleChange}
              options={[
                { value: 'cardiologie', label: 'Cardiologie' },
                { value: 'dermatologie', label: 'Dermatologie' },
                { value: 'pediatrie', label: 'Pédiatrie' },
              ]}
              placeholder="Sélectionnez une spécialité"
            />

            <textarea
              name="description"
              placeholder="Décrivez votre expérience et vos compétences"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />

            <div>
              <p className="font-medium text-gray-800 mb-2">Disponibilités :</p>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(form.disponibilite).map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={form.disponibilite[day as keyof typeof form.disponibilite].available}
                      onChange={() => toggleDayAvailability(day as keyof typeof form.disponibilite)}
                      className="form-checkbox text-blue-600"
                    />
                    <span className="capitalize">{day}</span>
                  </label>
                ))}
              </div>
            </div>

            <Checkbox
              name="terms"
              label="J'accepte les conditions générales d'utilisation"
              required
            />

            <Button type="submit" className="w-full">Créer mon compte</Button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Vous avez déjà un compte ?{' '}
              <Link to="/login" className="text-blue-600 underline hover:text-blue-800">Connectez-vous</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
