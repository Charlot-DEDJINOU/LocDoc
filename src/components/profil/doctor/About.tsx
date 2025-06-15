const About: React.FC<{ about: string }> = ({ about }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-4">
        <span className="text-blue-600">À propos de</span> <span className="text-teal-600">moi</span>
      </h2>
      <p className="text-gray-600 leading-relaxed">{about}</p>
    </div>
  );
};

export default About;