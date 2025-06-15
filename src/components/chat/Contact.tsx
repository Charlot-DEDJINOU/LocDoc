// Item de contact dans la sidebar
import { Check, CheckCheck } from "lucide-react";

interface ContactProps {
  contact: Contact;
  isActive: boolean;
  onClick: () => void;
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

const Contact: React.FC<ContactProps> = ({ contact, isActive, onClick }) => {
  const renderMessageStatus = () => {
    if (!contact.messageStatus) return null;
    
    switch (contact.messageStatus) {
      case 'sent':
        return <Check className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`flex items-center space-x-3 p-3 cursor-pointer transition-colors ${
        isActive ? 'bg-blue-50 border-r-2 border-blue-500' : 'hover:bg-gray-50'
      }`}
    >
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
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-900 truncate">{contact.name}</p>
          <span className="text-xs text-gray-500">{contact.timestamp}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500 truncate">
            {contact.isTyping ? (
              <span className="text-blue-500 italic">est entrain d'écrire...</span>
            ) : (
              contact.lastMessage
            )}
          </p>
          <div className="flex items-center space-x-1">
            {renderMessageStatus()}
            {contact.unreadCount > 0 && (
              <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {contact.unreadCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;