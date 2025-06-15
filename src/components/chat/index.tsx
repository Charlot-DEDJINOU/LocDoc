import React, { useState, useEffect, useRef } from 'react';
import MessageItem from './Message';
import Sidebar from './SideBar';
import Header from './Header';
import MessageInput from './MessageInput';

// Types
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

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
  status?: 'sent' | 'delivered' | 'read';
}


const Chat: React.FC = () => {
  const [contacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Adriane DJOSSOU',
      lastMessage: 'est entrain d\'écrire...',
      timestamp: '13:30',
      unreadCount: 0,
      isOnline: true,
      isTyping: true
    },
    {
      id: '2',
      name: 'Charbel BACHABI',
      lastMessage: 'Hello M., Je ne serais pas dis...',
      timestamp: '13:30',
      unreadCount: 1,
      isOnline: false,
      isTyping: false
    },
    {
      id: '3',
      name: 'Arik CHALLA',
      lastMessage: 'Hello M., Je ne serais pas dis...',
      timestamp: '13:30',
      unreadCount: 1,
      isOnline: false,
      isTyping: false
    },
    {
      id: '4',
      name: 'Kadi MOUSSA',
      lastMessage: 'D\'accord, c\'est compris.',
      timestamp: 'Hier',
      unreadCount: 0,
      isOnline: false,
      isTyping: false,
      messageStatus: 'read'
    },
    {
      id: '5',
      name: 'Charbel BACHABI',
      lastMessage: 'D\'accord, c\'est compris.',
      timestamp: '22/06/2025',
      unreadCount: 0,
      isOnline: false,
      isTyping: false,
      messageStatus: 'read'
    },
    {
      id: '6',
      name: 'Charbel BACHABI',
      lastMessage: 'D\'accord, c\'est compris.',
      timestamp: '22/06/2025',
      unreadCount: 0,
      isOnline: false,
      isTyping: false,
      messageStatus: 'read'
    },
    {
      id: '7',
      name: 'Charbel BACHABI',
      lastMessage: 'D\'accord, c\'est compris.',
      timestamp: '22/06/2025',
      unreadCount: 0,
      isOnline: false,
      isTyping: false,
      messageStatus: 'read'
    },
    {
      id: '8',
      name: 'Charbel BACHABI',
      lastMessage: 'D\'accord, c\'est compris.',
      timestamp: '22/06/2025',
      unreadCount: 0,
      isOnline: false,
      isTyping: false,
      messageStatus: 'read'
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      senderId: '1',
      content: 'Bonjour madame.',
      timestamp: '16:18',
      isOwn: false
    },
    {
      id: '2',
      senderId: '1',
      content: 'Etes-vous disponible ce soir ?',
      timestamp: '16:18',
      isOwn: false
    },
    {
      id: '3',
      senderId: 'me',
      content: 'Bonjour madame.',
      timestamp: '18:30',
      isOwn: true,
      status: 'read'
    },
    {
      id: '4',
      senderId: 'me',
      content: 'Oui je suis disponible. Je vous ferrez signe pour un rendez-vous',
      timestamp: '18:30',
      isOwn: true,
      status: 'read'
    },
    {
      id: '5',
      senderId: '1',
      content: 'Bonjour madame.',
      timestamp: '16:18',
      isOwn: false
    },
    {
      id: '6',
      senderId: '1',
      content: 'Etes-vous disponible ce soir ?',
      timestamp: '16:18',
      isOwn: false
    },
    {
      id: '7',
      senderId: 'me',
      content: 'Bonjour madame.',
      timestamp: '18:30',
      isOwn: true,
      status: 'read'
    },
    {
      id: '8',
      senderId: 'me',
      content: 'Oui je suis disponible. Je vous ferrez signe pour un rendez-vous',
      timestamp: '18:30',
      isOwn: true,
      status: 'read'
    }
  ]);

  const [activeContactId, setActiveContactId] = useState('1');
  const [searchTerm, setSearchTerm] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeContact = contacts.find(c => c.id === activeContactId) || contacts[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        senderId: 'me',
        content: messageInput.trim(),
        timestamp: new Date().toLocaleTimeString('fr-FR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        isOwn: true,
        status: 'sent'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessageInput('');
    }
  };

  const handleAttach = () => {
    console.log('Attach file');
  };

  const handleEmoji = () => {
    console.log('Open emoji picker');
  };

  const handleVoice = () => {
    console.log('Start voice recording');
  };

  const handleCall = () => {
    console.log('Start voice call');
  };

  const handleVideoCall = () => {
    console.log('Start video call');
  };

  const handleSearch = () => {
    console.log('Search in conversation');
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar des contacts */}
      <Sidebar
        contacts={contacts}
        activeContactId={activeContactId}
        onContactSelect={setActiveContactId}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      {/* Zone de chat principale */}
      <div className="flex-1 flex flex-col">
        {/* Header du chat */}
        <Header
          contact={activeContact}
          onCall={handleCall}
          onVideoCall={handleVideoCall}
          onSearch={handleSearch}
        />
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          {/* Séparateur de date */}
          <div className="flex justify-center mb-4">
            <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
              Aujourd'hui
            </span>
          </div>
          
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Zone de saisie */}
        <MessageInput
          value={messageInput}
          onChange={setMessageInput}
          onSend={handleSendMessage}
          onAttach={handleAttach}
          onEmoji={handleEmoji}
          onVoice={handleVoice}
        />
      </div>
    </div>
  );
};

export default Chat;