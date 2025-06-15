// Appointment Chart Component
import { User } from 'lucide-react';

const AppointmentChart: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Rendez-vous</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${(69/80) * 251.2} 251.2`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-gray-800">80 RDV</span>
            <span className="text-sm text-gray-500">Au total</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-sm text-gray-600">69 Terminés</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <span className="text-sm text-gray-600">11 Terminés</span>
        </div>
      </div>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-800">Dr. Marie Kouassi</p>
            <p className="text-xs text-gray-500">Cabinet Médical Control</p>
            <p className="text-xs text-gray-400">15 Juin • 14h30</p>
          </div>
          <span className="text-xs text-blue-600 font-medium">À venir</span>
        </div>
      </div>
    </div>
  );
};

export default AppointmentChart;