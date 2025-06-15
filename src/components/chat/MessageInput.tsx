// Zone de saisie
import { 
  Paperclip,
  Smile,
  Mic,
  Send,
} from 'lucide-react';

const MessageInput: React.FC<{ 
  value: string, 
  onChange: (value: string) => void, 
  onSend: () => void,
  onAttach: () => void,
  onEmoji: () => void,
  onVoice: () => void 
}> = ({ value, onChange, onSend, onAttach, onEmoji, onVoice }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-end space-x-3">
        <button 
          onClick={onAttach}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        
        <div className="flex-1 border border-gray-300 rounded-lg overflow-hidden">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Mon premier message . Mon premier message . Mon premier message."
            className="w-full p-3 resize-none focus:outline-none max-h-32"
            rows={1}
          />
        </div>
        
        <button 
          onClick={onEmoji}
          className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Smile className="w-5 h-5" />
        </button>
        
        {value.trim() ? (
          <button 
            onClick={onSend}
            className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <Send className="w-5 h-5" />
          </button>
        ) : (
          <button 
            onClick={onVoice}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Mic className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MessageInput;