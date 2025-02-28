
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Coffee, BookOpen, Heart, Music, Users, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface DaySchedule {
  date: string;
  day: string;
  theme?: string;
  items: ScheduleItem[];
}

const Schedule = () => {
  const schedule: DaySchedule[] = [
    {
      date: "10º Éfeta",
      day: "Setembro 2024",
      theme: "Eu Vos Escolhi / Jo 15,19",
      items: [
        {
          time: "14:00",
          title: "Check-in",
          description: "Recepção dos participantes e distribuição dos materiais",
          icon: <Heart size={18} />
        },
        {
          time: "16:00",
          title: "Acolhida",
          description: "Boas-vindas e apresentação da equipe organizadora",
          icon: <Heart size={18} />
        },
        {
          time: "18:00",
          title: "Jantar",
          description: "Primeira refeição em comunidade",
          icon: <Heart size={18} />
        },
        {
          time: "20:00",
          title: "Celebração de Abertura",
          description: "Momento de louvor e introdução ao tema do retiro",
          icon: <Heart size={18} />
        },
        {
          time: "22:00",
          title: "Momento de Reflexão",
          description: "Tempo pessoal para oração e meditação",
          icon: <Heart size={18} />
        }
      ]
    },
    {
      date: "3 de Maio",
      day: "Sexta-feira",
      theme: "Formação e Comunhão",
      items: [
        {
          time: "07:00",
          title: "Despertar",
          description: "Começo do dia com oração matinal",
          icon: <Sun size={18} />
        },
        {
          time: "08:00",
          title: "Café da Manhã",
          description: "Primeira refeição do dia",
          icon: <Coffee size={18} />
        },
        {
          time: "09:30",
          title: "Palestra 1",
          description: "Tema: 'No Senhor ponho minha esperança'",
          icon: <BookOpen size={18} />
        },
        {
          time: "12:00",
          title: "Almoço",
          description: "Refeição em comunidade",
          icon: <Coffee size={18} />
        },
        {
          time: "14:00",
          title: "Dinâmicas em Grupo",
          description: "Atividades para integração e partilha",
          icon: <Users size={18} />
        },
        {
          time: "16:00",
          title: "Palestra 2",
          description: "Tema: 'A esperança que não decepciona'",
          icon: <BookOpen size={18} />
        },
        {
          time: "18:00",
          title: "Jantar",
          description: "Refeição em comunidade",
          icon: <Coffee size={18} />
        },
        {
          time: "20:00",
          title: "Adoração",
          description: "Noite de louvor e adoração",
          icon: <Music size={18} />
        }
      ]
    },
    {
      date: "4 de Maio",
      day: "Sábado",
      theme: "Renovação e Envio",
      items: [
        {
          time: "07:00",
          title: "Despertar",
          description: "Começo do dia com oração matinal",
          icon: <Sun size={18} />
        },
        {
          time: "08:00",
          title: "Café da Manhã",
          description: "Última refeição matinal do retiro",
          icon: <Coffee size={18} />
        },
        {
          time: "09:30",
          title: "Palestra Final",
          description: "Tema: 'Levando a esperança ao mundo'",
          icon: <BookOpen size={18} />
        },
        {
          time: "12:00",
          title: "Almoço",
          description: "Última refeição em comunidade",
          icon: <Coffee size={18} />
        },
        {
          time: "14:00",
          title: "Partilha de Experiências",
          description: "Momento para compartilhar testemunhos",
          icon: <Heart size={18} />
        },
        {
          time: "16:00",
          title: "Celebração de Encerramento",
          description: "Missa de ação de graças",
          icon: <Music size={18} />
        },
        {
          time: "18:00",
          title: "Despedida",
          description: "Encerramento oficial e envio dos participantes",
          icon: <Users size={18} />
        }
      ]
    }
  ];

  const [activeDay, setActiveDay] = useState("day-1");

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Programação</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira as informações dos ultimos retiros do Acampamento ÉFETA.
          </p>
        </div>

        <Tabs defaultValue="day-1" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-10">
            {schedule.map((day, index) => (
              <TabsTrigger 
                key={`day-${index + 1}`} 
                value={`day-${index + 1}`}
                onClick={() => setActiveDay(`day-${index + 1}`)}
                className={cn(
                  "text-base py-3",
                  activeDay === `day-${index + 1}` ? "bg-efeta-500 text-white" : ""
                )}
              >
                <div className="flex flex-col items-center">
                  <span className="font-medium">{day.day}</span>
                  <span className="text-sm font-normal opacity-80">{day.date}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {schedule.map((day, dayIndex) => (
            <TabsContent key={`day-${dayIndex + 1}`} value={`day-${dayIndex + 1}`} className="animate-fade-in">
              {day.theme && (
                <div className="mb-6 text-center">
                  <div className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-efeta-500 text-white mb-1">
                    Tema
                  </div>
                  <p className="text-xl text-gray-800 font-medium">{day.theme}</p>
                </div>
              )}
              
              <div className="space-y-4">
                {day.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="flex bg-white rounded-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-soft group"
                  >
                    <div className="w-20 sm:w-28 bg-efeta-50 flex items-center justify-center p-4 font-medium text-efeta-500 group-hover:bg-efeta-100 transition-colors">
                      <Clock className="mr-1 hidden sm:inline" size={16} />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-start">
                        <div className="mr-3 p-2 rounded-md bg-efeta-50 text-efeta-500">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
