import React from 'react';
import Sidebar from '../../../components/dashboard/patient/Sidebar';
import Messages from '../../../components/dashboard/patient/Messages';
import Chat from '../../../components/chat/index';


const ChatMessagerie: React.FC = () => {
 
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 p-8 space-y-6">
     <Messages />
     <Chat />
      </div>
    </div>
  );
};

export default ChatMessagerie;
