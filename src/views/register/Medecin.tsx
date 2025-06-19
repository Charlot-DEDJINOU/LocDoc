import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/commons/Button';
import Checkbox from '../../components/commons/Checkbox';
import Input from '../../components/commons/Input';
import FileInput from '../../components/commons/FileInput';
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
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    date_naissance: '',
    sexe: 'M',
    telephone: '',
    street: '',
    city: '',
    postal_code: '',
    country: '',
    longitude: 0,
    latitude: 0,
    role: ['doctor'],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...form,
      address: {
        street: form.street,
        city: form.city,
        postal_code: form.postal_code,
        country: form.country,
      },
      longitude: parseFloat(form.longitude.toString()),
      latitude: parseFloat(form.latitude.toString()),
    };

    try {
      const res = await post(
        '/auth/register',
        payload,
        import.meta.env.VITE_API_URL,
        false
      );

      console.log(res);
      setUser(res.user);
      setToken(res.token);
      navigate('/dashboard');
    } catch (error) {
      alert("Erreur lors de l'inscription. Vérifie les champs.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="relative flex-1 overflow-hidden">
        <img src={phoneImage} alt="Illustration" className="h-full w-full object-cover" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 md:px-20 relative">
        <img src={logoImage} alt="LocDoc" className="absolute top-6 left-6 h-8 md:h-10 z-20" />

        <div className="bg-white bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-lg transform -translate-x-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            Compte <span className="text-green-600">Médecin!</span>
          </h1>
          <p className="text-gray-700 mb-6">
            Ajoutez gratuitement votre compte médecin sur LocDoc
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Informations</h2>
              <Select
                placeholder="Spécialité médicale"
                options={[
                  { value: 'cardio', label: 'Cardiologie' },
                  { value: 'dermato', label: 'Dermatologie' },
                  { value: 'pediatrie', label: 'Pédiatrie' },
                ]}
              />
              <Input type="text" name="username" placeholder="Nom d'utilisateur" value={form.username} onChange={handleChange} />
              <Input type="text" name="first_name" placeholder="Prénom" value={form.first_name} onChange={handleChange} />
              <Input type="text" name="last_name" placeholder="Nom" value={form.last_name} onChange={handleChange} />
              <Input type="date" name="date_naissance" placeholder="Date de naissance" value={form.date_naissance} onChange={handleChange} />
              <Input type="text" name="sexe" placeholder="Sexe (M/F)" value={form.sexe} onChange={handleChange} />
              <Input type="text" name="telephone" placeholder="Téléphone" value={form.telephone} onChange={handleChange} />
              <Input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} />
              <FileInput placeholder="Uploadez votre pièce d'identité" />
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Coordonnées</h2>
              <Input type="email" name="email" placeholder="Courriel professionnel" value={form.email} onChange={handleChange} />
              <Input type="text" name="street" placeholder="Nom du cabinet ou du lieu d’exercice" value={form.street} onChange={handleChange} />
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" name="city" placeholder="Ville cabinet" value={form.city} onChange={handleChange} />
                <Input type="text" name="country" placeholder="Pays" value={form.country} onChange={handleChange} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input type="text" name="postal_code" placeholder="Code postal" value={form.postal_code} onChange={handleChange} />
                <Input type="text" name="longitude" placeholder="Longitude" value={form.longitude.toString()} onChange={handleChange} />
                <Input type="text" name="latitude" placeholder="Latitude" value={form.latitude.toString()} onChange={handleChange} />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Vérification et Sécurité</h2>
              <FileInput placeholder="Uploadez votre dernier diplôme d'état" />
              <FileInput placeholder="Uploadez un justificatif professionnel" />
            </div>

            <div className="flex items-center">
              <Checkbox label="Je confirme avoir lu et accepté les conditions générales" />
            </div>

            <Button type="submit">Créer mon compte Médecin</Button>

            <p className="text-center text-gray-700">
              Vous avez déjà un compte ?{' '}
              <Link to="/login" className="font-semibold underline hover:text-secondary transition">
                Connectez-vous
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;
