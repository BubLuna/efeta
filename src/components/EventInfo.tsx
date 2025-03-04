
import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventInfoItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const EventInfoItem: React.FC<EventInfoItemProps> = ({ icon, title, description, className, style }) => {
  return (
    <div className={cn("flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:shadow-medium", className)} style={style}>
      <div className="mb-4 p-3 bg-efeta-50 text-efeta-500 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 font-display text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const EventInfo = () => {
  const infoItems = [
    {
      icon: <Calendar size={24} />,
      title: "Data",
      description: "2, 3 e 4 de Maio de 2024",
    },
    {
      icon: <Users size={24} />,
      title: "Público",
      description: "Jovens de 20 a 35 anos",
    },
    {
      icon: <MapPin size={24} />,
      title: "Local",
      description: "São Luiz, Imaruí - SC",
    },
    {
      icon: <Clock size={24} />,
      title: "Duração",
      description: "3 dias de imersão espiritual",
    },
  ];

  return (
    <section className="py-20 bg-white" id="info">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Informações do Evento</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Acampamento ÉFETA, um retiro voltado para a renovação espiritual e conexão com Deus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <EventInfoItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
