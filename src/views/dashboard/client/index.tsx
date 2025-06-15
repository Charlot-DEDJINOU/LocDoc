import React from 'react';
import { Search } from 'lucide-react';
import Messages from '../../../components/dashboard/patient/Messages';
import AppointmentChart from '../../../components/dashboard/patient/AppointmentChart';
import Calendar from '../../../components/dashboard/patient/Calendar';
import Appointments from '../../../components/dashboard/patient/Appointments';
import Doctors from '../../../components/dashboard/patient/Doctors';
import Input from '../../../components/commons/Input';
import Sidebar from '../../../components/dashboard/patient/Sidebar';

// Main Dashboard Component
const PatientDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <Input
            icon={Search}
            placeholder="Rechercher un généraliste ou un spécialiste..."
            className="max-w-md"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <AppointmentChart />
            <Messages />
          </div>

          {/* Center Column */}
          <div className="space-y-6">
            <Calendar />
            <Appointments />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Doctors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;