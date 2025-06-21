import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../../components/commons/Button';
import Checkbox from '../../components/commons/Checkbox';
import Input from '../../components/commons/Input';
import { post } from '../../services/apiService';
import { useAuthStore } from '../../store/authStore';

const PatientSignup: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setToken, setLoading } = useAuthStore();

  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    genre: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    motDePasse: '',
    confirmMotDePasse: '',
    accepteConditions: false,
    role: 'patient', // 👈 Ajout du rôle
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.accepteConditions) return;

    if (formData.motDePasse !== formData.confirmMotDePasse) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const payload = {
      email: formData.email,
      username: formData.nom.toLowerCase() + formData.prenoms.toLowerCase(),
      password: formData.motDePasse,
      first_name: formData.prenoms,
      last_name: formData.nom,
      date_naissance: formData.dateNaissance,
      sexe: formData.genre === 'masculin' ? 'M' : 'F',
      telephone: formData.telephone,
      role: [formData.role],
      address: {
        street: '123 Rue de la Paix',
        city: 'Paris',
        postal_code: '75001',
        country: 'France',
      },
      longitude: 2.3522,
      latitude: 48.8566,
    };

    try {
      setLoading(true);
      const res = await post('/auth/register', payload, import.meta.env.VITE_API_URL, false);
      console.log(res)
      setUser(res.user);
      setToken(res.token);

      if (formData.role === 'doctor') {
        navigate('/docteur/register');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Erreur lors de l’inscription:', error);
      alert("Une erreur est survenue pendant l’inscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 relative overflow-hidden">
      <div className="absolute top-8 right-8 flex items-center space-x-2 text-white">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <span className="text-xl font-bold">LocDoc</span>
      </div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">{/* illustration possible */}</div>

            <div className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Bienvenue sur <span className="text-blue-500">LocDoc!</span>
                </h1>
                <p className="text-gray-600">
                  Inscrivez-vous et accédez à un réseau de médecins qualifiés.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Identité</h3>
                  <div className="space-y-4">
                    <Input
                      icon={User}
                      name="nom"
                      placeholder="Nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      icon={User}
                      name="prenoms"
                      placeholder="Prénoms"
                      value={formData.prenoms}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="genre"
                          value="masculin"
                          checked={formData.genre === 'masculin'}
                          onChange={handleInputChange}
                          className="form-radio h-4 w-4 text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Masculin</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="genre"
                          value="feminin"
                          checked={formData.genre === 'feminin'}
                          onChange={handleInputChange}
                          className="form-radio h-4 w-4 text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Féminin</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Date de naissance</h3>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleInputChange}
                    className="w-full bg-white bg-opacity-80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Contacts</h3>
                  <div className="space-y-4">
                    <Input
                      icon={Mail}
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      icon={Phone}
                      name="telephone"
                      type="tel"
                      placeholder="Tel (+229 XXXXXXXXX)"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Type de compte</h3>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full bg-white bg-opacity-80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Docteur</option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Mot de passe</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        icon={Lock}
                        name="motDePasse"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Entrez votre mot de passe"
                        value={formData.motDePasse}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                      </button>
                    </div>

                    <div className="relative">
                      <Input
                        icon={Lock}
                        name="confirmMotDePasse"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirmez votre mot de passe"
                        value={formData.confirmMotDePasse}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                      </button>
                    </div>
                  </div>
                </div>

                <Checkbox
                  name="accepteConditions"
                  checked={formData.accepteConditions}
                  onChange={handleInputChange}
                  label="Je confirme avoir lu et accepté les conditions générales"
                />

                <Button onClick={handleSubmit} disabled={!formData.accepteConditions}>
                  Créer mon compte
                </Button>

                <div className="text-center">
                  <span className="text-gray-600">Vous avez déjà un compte ? </span>
                  <a href="/login" className="text-blue-500 font-semibold hover:underline">
                    Connectez-vous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSignup;
