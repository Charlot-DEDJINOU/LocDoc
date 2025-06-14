import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../../components/commons/Button';
import Checkbox from '../../components/commons/Checkbox';
import Input from '../../components/commons/Input';

// Composant principal
const PatientSignup: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenoms: '',
    genre: '',
    dateNaissance: '',
    email: '',
    telephone: '',
    motDePasse: '',
    confirmMotDePasse: '',
    accepteConditions: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-20 rounded-full"></div>
      <div className="absolute top-40 left-4 w-20 h-20 bg-white bg-opacity-15 rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
      <div className="absolute bottom-40 left-4 w-24 h-24 bg-white bg-opacity-15 rounded-full"></div>

      {/* Logo */}
      <div className="absolute top-8 right-8 flex items-center space-x-2 text-white">
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <span className="text-xl font-bold">LocDoc</span>
      </div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Section illustration */}
            <div className="relative hidden lg:block">
              {/* Téléphone */}
              <div className="relative z-10">
                <div className="w-80 h-160 bg-black rounded-3xl p-2 mx-auto shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-400 rounded-3xl relative overflow-hidden">
                    {/* Barre de statut */}
                    <div className="flex justify-between items-center p-4 text-black">
                      <div className="flex items-center space-x-1">
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                        <div className="w-1 h-1 bg-black rounded-full"></div>
                      </div>
                      <div className="text-sm font-semibold">100% ⚡</div>
                    </div>
                    
                    {/* Heure */}
                    <div className="text-center mt-8">
                      <div className="text-4xl font-light text-black">10:30</div>
                      <div className="text-sm text-black opacity-80">Tuesday, September 29</div>
                    </div>
                    
                    {/* Cœur avec stéthoscope */}
                    <div className="flex justify-center mt-16">
                      <div className="relative">
                        {/* Cœur */}
                        <div className="w-32 h-28 relative">
                          <div className="absolute inset-0 bg-red-500 transform rotate-45 origin-bottom-left" style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}}></div>
                          <div className="absolute inset-0 bg-red-500 transform -rotate-45 origin-bottom-right" style={{borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'}}></div>
                          <div className="absolute bottom-0 left-1/2 w-0 h-0 transform -translate-x-1/2" style={{
                            borderLeft: '16px solid transparent',
                            borderRight: '16px solid transparent',
                            borderTop: '20px solid #ef4444'
                          }}></div>
                        </div>
                        
                        {/* Ligne de vie */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-24 h-12 text-white" viewBox="0 0 100 40" fill="none">
                            <path d="M10 20 L20 20 L25 10 L30 30 L35 15 L40 25 L45 20 L90 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                        
                        {/* Cercle du stéthoscope */}
                        <div className="absolute bottom-4 right-4 w-12 h-12 bg-gray-600 rounded-full border-4 border-gray-700 flex items-center justify-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Stéthoscope qui sort du téléphone */}
                <div className="absolute -right-20 top-1/2 transform -translate-y-1/2">
                  <svg className="w-32 h-40" viewBox="0 0 120 160" fill="none">
                    {/* Tubes du stéthoscope */}
                    <path d="M10 20 Q30 10 50 20 Q70 30 80 50 Q85 70 80 90 Q75 110 70 130" stroke="#374151" strokeWidth="4" fill="none"/>
                    <path d="M10 40 Q30 50 50 40 Q70 30 80 50" stroke="#374151" strokeWidth="4" fill="none"/>
                    
                    {/* Embouts */}
                    <circle cx="10" cy="20" r="8" fill="#6B7280"/>
                    <circle cx="10" cy="40" r="8" fill="#6B7280"/>
                    <circle cx="10" cy="20" r="4" fill="#374151"/>
                    <circle cx="10" cy="40" r="4" fill="#374151"/>
                    
                    {/* Partie qui écoute */}
                    <circle cx="70" cy="130" r="12" fill="#374151"/>
                    <circle cx="70" cy="130" r="8" fill="#6B7280"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Formulaire d'inscription */}
            <div className="bg-white bg-opacity-90 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Bienvenue sur <span className="text-blue-500">LocDoc!</span>
                </h1>
                <p className="text-gray-600">
                  Inscrivez-vous et Accédez à un réseau de médecins qualifiés en quelques clics
                </p>
              </div>

              <div className="space-y-6">
                {/* Section Identité */}
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
                    
                    {/* Genre */}
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

                {/* Section Date de naissance */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Date de naissance</h3>
                  <input
                    type="date"
                    name="dateNaissance"
                    value={formData.dateNaissance}
                    onChange={handleInputChange}
                    className="w-full bg-white bg-opacity-80 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="jj/mm/aa"
                    required
                  />
                </div>

                {/* Section Contacts */}
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
                      placeholder="Tel (+229 XXXXXXXXXXX)"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Section Mot de passe */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-4">Mot de passe</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        icon={Lock}
                        name="motDePasse"
                        type={showPassword ? "text" : "password"}
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
                        type={showConfirmPassword ? "text" : "password"}
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

                {/* Conditions */}
                <Checkbox
                  name="accepteConditions"
                  checked={formData.accepteConditions}
                  onChange={handleInputChange}
                  label="Je confirme avoir lu et accepté les conditions générales"
                />

                {/* Bouton de soumission */}
                <Button onClick={handleSubmit} disabled={!formData.accepteConditions}>
                  Créer mon compte patient
                </Button>

                {/* Lien de connexion */}
                <div className="text-center">
                  <span className="text-gray-600">Vous avez déjà un compte ? </span>
                  <a href="#" className="text-blue-500 font-semibold hover:underline">
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