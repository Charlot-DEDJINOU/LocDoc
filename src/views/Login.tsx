import React, { useState } from 'react';
import Button from '../components/commons/Button';
import Checkbox from '../components/commons/Checkbox';
import Input from '../components/commons/Input';
import { Link, useNavigate } from 'react-router-dom';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import phoneImage from '../assets/phone.png';
import logoImage from '../assets/logo.png';

import { post } from '../services/apiService';
import { useAuthStore } from '../store/authStore';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setToken, setLoading } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await post(
        '/auth/login',
        { email, password },
        import.meta.env.VITE_API_URL,
        false // Pas besoin de token ici
      );

      console.log(res);
      // En supposant que res = { token, user }
      setUser(res.user);
      setToken(res.token);

      // Redirection post-login
      navigate('/dashboard');
    } catch (error) {
      alert("Erreur lors de la connexion. Vérifie ton email ou mot de passe.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <img src={phoneImage} alt="Illustration" className="w-3/4 max-w-sm" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-white to-secondary px-6 md:px-20 relative">
        <img src={logoImage} alt="LocDoc" className="absolute top-8 left-8 h-8" />

        <div className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-8 w-full max-w-md shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            Bienvenue à <span className="text-green-600">nouveau&nbsp;!</span>
          </h1>
          <p className="text-gray-700 mb-6">Nous sommes ravis de vous revoir :)</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <Input icon={HiMail} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input icon={HiLockClosed} type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="flex items-center justify-between">
              <Checkbox label="Se souvenir de moi" />
              <Link
                to="/forgot"
                className="text-sm text-gray-700 underline hover:text-primary transition"
              >
                Mot de passe oublié?
              </Link>
            </div>

            <Button type="submit">Se connecter</Button>
          </form>

          <p className="text-center text-gray-700 mt-4">
            Vous n'avez pas de compte ?{' '}
            <Link to="/signup" className="font-semibold underline hover:text-primary">
              Créez-en un
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
