// Composant Sélecteur d'heure
import { Clock } from "lucide-react";
import Button from "../../commons/Button";

const TimeSlotPicker: React.FC<{ selectedTime: string; onTimeSelect: (time: string) => void }> = ({ 
  selectedTime
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Créneaux disponibles</h3>
      
      {/* Horloge visuelle */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
          <Clock className="w-16 h-16 text-white" />
          <div className="absolute bottom-4 text-white font-bold text-sm">
            {selectedTime}
          </div>
        </div>
      </div>
      
      {/* Affichage de l'heure sélectionnée */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-gray-800">{selectedTime}</div>
        <div className="text-sm text-gray-500 flex justify-center space-x-8 mt-2">
          <span>16</span>
          <span>01</span>
        </div>
      </div>
      
      {/* Bouton de réservation */}
      <Button className="w-full py-3 text-lg">
        Réserver mon rendez-vous
      </Button>
    </div>
  );
};

export default TimeSlotPicker;