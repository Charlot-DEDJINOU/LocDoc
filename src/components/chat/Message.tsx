// Message individuel
import { Check, CheckCheck } from "lucide-react";

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const renderMessageStatus = () => {
    if (!message.isOwn || !message.status) return null;
    
    switch (message.status) {
      case 'sent':
        return <Check className="w-3 h-3 text-gray-400" />;
      case 'delivered':
        return <CheckCheck className="w-3 h-3 text-gray-400" />;
      case 'read':
        return <CheckCheck className="w-3 h-3 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex mb-4 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        message.isOwn 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
          : 'bg-gray-100 text-gray-800'
      }`}>
        <p className="text-sm">{message.content}</p>
        <div className={`flex items-center justify-end space-x-1 mt-1 ${
          message.isOwn ? 'text-blue-100' : 'text-gray-500'
        }`}>
          <span className="text-xs">{message.timestamp}</span>
          {renderMessageStatus()}
        </div>
      </div>
    </div>
  );
};

export default MessageItem;