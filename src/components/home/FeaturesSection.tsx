// Features Section
import { Search, Calendar, Shield } from 'lucide-react';

import React from 'react';

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

export default FeaturesSection;