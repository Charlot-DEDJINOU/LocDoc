import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import TimeSlotPicker from "./TimeSlotPicker";
import AppointmentCalendar from "./AppointmentCalendar";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  reviewCount: number;
  avatar: string;
  about: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
}

const AppointmentBooking: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const [selectedTime, setSelectedTime] = useState('15:00');
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-6">
        <span className="text-blue-600">Réserver un</span> <span className="text-teal-600">rendez-vous</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Informations du médecin */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              MK
            </div>
            <div>
              <p className="font-medium text-gray-900">Dr. Marie Kouassi</p>
              <p className="text-sm text-gray-500">Cardiologue</p>
            </div>
          </div>
          
          {/* Méthodes de contact */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-blue-600">
              <Phone className="w-5 h-5" />
              <span className="text-sm">{doctor.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-green-600">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{doctor.whatsapp}</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-600">
              <Mail className="w-5 h-5" />
              <span className="text-sm">{doctor.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-blue-600">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">{doctor.location}</span>
            </div>
          </div>
          
          {/* Zone de description */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Décrivez votre problème ou demande..."
            />
          </div>
        </div>
        
        {/* Calendrier */}
        <div>
          <AppointmentCalendar />
        </div>
        
        {/* Créneaux disponibles */}
        <div>
          <TimeSlotPicker 
            selectedTime={selectedTime} 
            onTimeSelect={setSelectedTime} 
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;