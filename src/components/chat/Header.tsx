// Header du chat
import { Search, Phone, Video } from "lucide-react";

interface ChatHeaderProps {
  contact: Contact;
  onCall: () => void;
  onVideoCall: () => void;
  onSearch: () => void;
}

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

const Header: React.FC<ChatHeaderProps> = ({ contact, onCall, onVideoCall, onSearch }) => {
  return (
    <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          {contact.avatar ? (
            <img 
              src={contact.avatar} 
              alt={contact.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              {contact.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
          {contact.isOnline && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{contact.name}</h3>
          <p className="text-sm text-blue-500">
            {contact.isTyping ? 'est entrain d\'écrire...' : 'En ligne'}
          </p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          onClick={onCall}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Phone className="w-5 h-5" />
        </button>
        <button 
          onClick={onVideoCall}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Video className="w-5 h-5" />
        </button>
        <button 
          onClick={onSearch}
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Header;