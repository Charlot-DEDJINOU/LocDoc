// Ready to Find Section
import { User } from 'lucide-react';

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

export default ReadyToFindSection;