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

export default Footer;