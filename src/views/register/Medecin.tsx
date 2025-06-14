import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/commons/Button';
import Checkbox from '../../components/commons/Checkbox';
import Input from '../../components/commons/Input';
import FileInput from '../../components/commons/FileInput';
import Select from '../../components/commons/Select';
import phoneImage from '../../assets/phone.png';
import logoImage from '../../assets/logo.png';

// Main doctor signup page component
const DoctorSignup: React.FC = () => (
  <div
    className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${phoneImage})` }}
  >
    {/* Logo */}
    <img
      src={logoImage}
      alt="LocDoc"
      className="absolute top-6 left-6 h-8 md:h-10 z-10"
    />

    {/* Form container */}
    <div className="relative w-full max-w-lg px-4 sm:px-6">
      <div className="bg-transparent backdrop-blur-md rounded-2xl p-8 shadow-lg">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
          Compte <span className="text-green-600">Médecin!</span>
        </h1>
        <p className="text-gray-100 mb-6">
          Ajoutez gratuitement votre compte médecin sur LocDoc
        </p>

        <form className="space-y-6">
          {/* Informations section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-200">Informations</h2>
            <Select
              placeholder="Spécialité médicale"
              options={[
                { value: 'cardio', label: 'Cardiologie' },
                { value: 'dermato', label: 'Dermatologie' },
                { value: 'pediatrie', label: 'Pédiatrie' },
              ]}
            />
            <Input
              type="text"
              placeholder="Numéro d'inscription à l'ordre des médecins"
            />
            <FileInput placeholder="Uploadez votre pièce d'identité" />
          </div>

          {/* Coordonnées section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-200">Coordonnées</h2>
            <Input type="email" placeholder="Courriel professionnel" />
            <Input type="text" placeholder="Nom du cabinet ou du lieu d’exercice" />
            <div className="grid grid-cols-2 gap-4">
              <Input type="text" placeholder="Ville cabinet" />
              <Input type="text" placeholder="Pays" />
            </div>
          </div>

          {/* Vérification & Sécurité section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-200">
              Vérification et Sécurité
            </h2>
            <FileInput placeholder="Uploadez votre dernier diplôme d'état" />
            <FileInput placeholder="Uploadez un justificatif professionnel" />
          </div>

          {/* Conditions */}
          <div className="flex items-center">
            <Checkbox label="Je confirme avoir lu et accepté les conditions générales" />
          </div>

          {/* Submit */}
          <Button>Créer mon compte Médecin</Button>

          {/* Footer link */}
          <p className="text-center text-gray-100">
            Vous avez déjà un compte ?{' '}
            <Link
              to="/login"
              className="font-semibold underline hover:text-white transition"
            >
              Connectez-vous
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);

export default DoctorSignup;