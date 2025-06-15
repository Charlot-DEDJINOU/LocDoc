// Message List Component
import Button from "../../commons/Button";

interface Message {
  id: string;
  doctor: Doctor;
  content: string;
  time: string;
  isRead: boolean;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  avatar: string;
}

const Messages: React.FC = () => {
  const messages: Message[] = [
    {
      id: '1',
      doctor: {
        id: '1',
        name: 'Dr. Marie Kouassi',
        specialty: 'Cardiologue',
        location: 'Cabinet Médical Control',
        rating: 4.9,
        avatar: '/api/placeholder/40/40'
      },
      content: 'Résultats de vos analyses disponibles. Tout semble bien aller...',
      time: 'Il y a 2h',
      isRead: false
    },
    {
      id: '2',
      doctor: {
        id: '2',
        name: 'Dr. Elias Houndji',
        specialty: 'Généraliste',
        location: 'Cabinet Médical Control',
        rating: 4.8,
        avatar: '/api/placeholder/40/40'
      },
      content: 'Résultats de vos analyses disponibles. Tout semble bien aller...',
      time: 'Il y a 2h',
      isRead: false
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Messagerie</h3>
        <Button variant="secondary" className="text-xs">
          Voir tout
        </Button>
      </div>
      
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              {message.doctor.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{message.doctor.name}</p>
              <p className="text-xs text-gray-500 truncate">{message.content}</p>
              <p className="text-xs text-gray-400 mt-1">{message.time}</p>
            </div>
            {!message.isRead && (
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;