
import React from 'react';
import { Heart, BookOpen, Users, Music, Sun, Coffee } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, className, style }) => {
  return (
    <div className={cn(
      "p-6 rounded-xl transition-all duration-300 hover:shadow-soft bg-white group",
      className
    )} style={style}>
      <div className="flex items-start">
        <div className="mr-4 p-3 bg-efeta-50 text-efeta-500 rounded-lg transition-all duration-300 group-hover:bg-efeta-500 group-hover:text-white">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 font-display text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Heart size={24} />,
      title: "Crescimento Espiritual",
      description: "Momentos de profunda conexão e crescimento na fé através de práticas devocionais guiadas."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Ensinamentos Bíblicos",
      description: "Palestras e estudos bíblicos para fortalecer seu conhecimento e aplicação das escrituras."
    },
    {
      icon: <Users size={24} />,
      title: "Comunidade",
      description: "Conexão com outros jovens que compartilham os mesmos valores e buscam uma vida espiritual mais rica."
    },
    {
      icon: <Music size={24} />,
      title: "Louvor e Adoração",
      description: "Momentos de adoração coletiva com músicas que elevam o espírito e aproximam de Deus."
    },
    {
      icon: <Sun size={24} />,
      title: "Reflexão e Renovação",
      description: "Tempo para refletir sobre sua jornada pessoal e renovar compromissos com a fé."
    },
    {
      icon: <Coffee size={24} />,
      title: "Confraternização",
      description: "Momentos de descontração e criação de laços de amizade que vão além do retiro."
    }
  ];

  return (
    <section className="py-20 bg-efeta-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">O Que Oferecemos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No Acampamento EFETA, preparamos uma experiência completa para fortalecer sua fé e criar memórias inesquecíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
