// Sidebar des contacts
import Input from "../commons/Input";
import ContactItem from "./Contact";
import { MoreHorizontal, Search } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isOnline: boolean;
  isTyping: boolean;
  messageStatus?: 'sent' | 'delivered' | 'read';
}

const Sidebar: React.FC<{ 
  contacts: Contact[], 
  activeContactId: string, 
  onContactSelect: (id: string) => void,
  searchTerm: string,
  onSearchChange: (term: string) => void 
}> = ({ contacts, activeContactId, onContactSelect, searchTerm, onSearchChange }) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Chat</h2>
          <button className="p-1 text-gray-500 hover:text-gray-700">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <Input
          icon={Search}
          placeholder="Rechercher ou démarrer discussion"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="bg-gray-50"
        />
      </div>
      
      {/* Liste des contacts */}
      <div className="flex-1 overflow-y-auto">
        {contacts
          .filter(contact => 
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              isActive={contact.id === activeContactId}
              onClick={() => onContactSelect(contact.id)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;