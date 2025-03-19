import React, { useState, useEffect } from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventInfoItemProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
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
  // Estado para controlar se a imagem está carregada
  const [imageLoaded, setImageLoaded] = useState(false);

  // Efeito para pré-carregar a imagem
  useEffect(() => {
    const img = new Image();
    img.src = 'https://live.staticflickr.com/65535/54379913251_b23b6a675b_b.jpg'; // Substitua pela URL desejada
    img.onload = () => setImageLoaded(true);
  }, []);

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
      icon: ( 
        <a 
          href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA" 
          target="_blank" 
        >
          <MapPin size={24} />
        </a>
      ),
      title:( 
        <a 
          href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA" 
          target="_blank" 
          className="text-gray-700"
        >
          Local
        </a>
      ),
      description: (
        <a 
          href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA" 
          target="_blank" 
          className="text-gray-700"
        >
          São Luiz, Imaruí - SC
        </a>
      ),
    },
    {
      icon: <Clock size={24} />,
      title: "Duração",
      description: "3 dias de imersão espiritual",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="info">
      {/* Seção de Informações do Evento */}
      <div className="relative bg-efeta-50 py-16 overflow-hidden">
        {/* Background image with blur effect */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-30' : 'opacity-0'}`}
          style={{ 
            backgroundImage: "url('https://live.staticflickr.com/65535/54379913251_b23b6a675b_b.jpg')", // Substitua pela URL desejada
            filter: "blur(8px)",
            transition: "filter 1s ease-in-out"
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Informações do Evento</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tudo o que você precisa saber sobre o Acampamento ÉFETA, um retiro voltado para a renovação espiritual e conexão com Deus.
            </p>
          </div>

          {/* Informações do Evento */}
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
      </div>
    </section>
  );
};

export default EventInfo;
