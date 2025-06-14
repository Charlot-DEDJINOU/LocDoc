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

export default HowItWorksSection;