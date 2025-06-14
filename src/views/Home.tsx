import React from 'react';
import { Search, MapPin, Calendar, Shield, User, Menu } from 'lucide-react';

// Header Component
const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">LocDoc</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Accueil</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Trouver un médecin</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contactez-nous</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Se connecter</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            S'inscrire
          </button>
        </nav>
        
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trouvez le bon médecin,<br />
              <span className="text-blue-500">Au bon endroit,</span><br />
              Au bon moment.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Recherchez les spécialistes qualifiés proche de vous. Prenez rendez-vous 
              facilement et obtenez les soins dont vous avez besoin.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 mb-12">
              Prendre un rendez-vous maintenant
            </button>
            
            {/* Search Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-600 mb-4 text-center">Rechercher un généraliste ou un spécialiste...</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                  <User className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Spécialiste ou médecin" 
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <div className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input 
                    type="text" 
                    placeholder="Où ?" 
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <button className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500 opacity-10 rounded-3xl"></div>
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                <User className="w-32 h-32 text-gray-400" />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// Features Section
const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "Localisez vos médecins",
      description: "Retrouvez tout type de spécialistes dans votre ville ou autour de vous et entrez en contact avec eux."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Réservation simplifiée",
      description: "Prenez rendez-vous en quelques clics selon ses disponibilités et celles du praticien."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "100% Sécurisé",
      description: "Vos données médicales protégées par un chiffrement de niveau entreprise."
    }
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          4 raisons de choisir <span className="text-blue-500">LocDoc.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Sélectionnez votre zone et votre spécialiste",
      description: "Renseignez votre ville et choisissez le spécialiste en charge de votre mal."
    },
    {
      number: "2", 
      title: "Choisissez votre médecin",
      description: "Comparez les profils, tarifs et disponibilités des médecins proche de vous pour faire votre choix."
    },
    {
      number: "3",
      title: "Prenez un rendez-vous",
      description: "Choisissez le moment qui vous convient dans l'agenda du praticien sélectionné et du choisir directement avec lui pour prendre Rdv."
    }
  ];

  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          <span className="text-blue-400">Comment</span> ça marche ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Doctor Profile Component
interface DoctorProfileProps {
  name: string;
  description: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ name, description }) => {
  return (
    <div className="text-center">
      <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <User className="w-16 h-16 text-gray-400" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

// Ready to Find Section
const ReadyToFindSection: React.FC = () => {
  const doctors = [
    {
      name: "Abdoul H.",
      description: "Échangez directement avec les médecins via notre messagerie sécurisée avant de prendre rendez-vous."
    },
    {
      name: "Abdoul H.",
      description: "Échangez directement avec les médecins via notre messagerie sécurisée avant de prendre rendez-vous."
    },
    {
      name: "Abdoul H.",
      description: "Échangez directement avec les médecins via notre messagerie sécurisée avant de prendre rendez-vous."
    }
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          <span className="text-blue-400">Prêt à trouver un médecin ?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Rejoignez +100 000 patients qui prennent le contrôle de leurs soins avec LocDoc.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {doctors.map((doctor, index) => (
            <DoctorProfile
              key={index}
              name={doctor.name}
              description={doctor.description}
            />
          ))}
        </div>
        
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 text-lg">
          Prendre un rendez-vous maintenant
        </button>
      </div>
    </section>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">LocDoc</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">INFORMATIONS</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-gray-900">Politiques et confidentialités</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4">PAGES</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Informations</a></li>
              <li><a href="#" className="hover:text-gray-900">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-gray-900">Politiques et confidentialités</a></li>
            </ul>
          </div>
          
          <div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
              <div className="w-10 h-10 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ReadyToFindSection />
      <Footer />
    </div>
  );
};

export default App;