import { Search, MapPin, User } from 'lucide-react';

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

export default HeroSection;