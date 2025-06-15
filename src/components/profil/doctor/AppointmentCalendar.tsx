import { useState } from "react";
import {  ChevronLeft, ChevronRight } from 'lucide-react';

const AppointmentCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5)); // Juin 2025
  const [selectedDate, setSelectedDate] = useState(15);
  
  const daysOfWeek = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sa', 'Dim'];
//   const monthNames = [
//     'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
//     'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
//   ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7;

    const days = [];
    
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDay = new Date(year, month, -i);
      days.push({ day: prevDay.getDate(), isCurrentMonth: false });
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const availableDates = [5, 6, 7, 8, 9, 10, 11, 13, 15]; // Dates disponibles

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Sélectionner une date</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button
            onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((dayObj, index) => {
          const isAvailable = availableDates.includes(dayObj.day);
          const isSelected = dayObj.day === selectedDate && dayObj.isCurrentMonth;
          
          return (
            <button
              key={index}
              onClick={() => dayObj.isCurrentMonth && setSelectedDate(dayObj.day)}
              className={`
                p-2 text-sm text-center rounded-lg transition-colors
                ${dayObj.isCurrentMonth 
                  ? isSelected
                    ? 'bg-blue-600 text-white' 
                    : isAvailable
                    ? dayObj.day === 13
                      ? 'bg-red-100 text-red-600'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                    : 'text-gray-300'
                  : 'text-gray-200'
                }
              `}
            >
              {dayObj.day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentCalendar;