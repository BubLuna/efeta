
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
      day: "09/2024",
      theme: "Eu Vos Escolhi | Jo 15,19",
      items: [
        {
          time: "I",
          title: "Efetados",
          description: "Tivemos um total de 60 jovens Efetados",
          icon: <Heart size={18} />
        },
        {
          time: "II",
          title: "Servos",
          description: "Um total de 126 servos estiveram envolvidos na organização do evento.",
          icon: <Heart size={18} />
        },
        {
          time: "III",
          title: "Famílias envolvidas",
          description: "+200 famílias envolvidas no retiro",
          icon: <Heart size={18} />
        },
        {
          time: "IV",
          title: "Música Tema",
          description: "Romanos 12 - Fraternidade São João Paulo II",
          icon: <Heart size={18} />
        },
        {
          time: "V",
          title: "Relato de um Efetado da Edição",
          description: "O Acampamento Éfeta me fez refletir sobre minhas escolhas e fortalecer minha fé de um jeito que nunca imaginei possível (Maria Clara, 16 anos)",
          icon: <Heart size={18} />
        }
      ]
    },
    {
      date: "9º Éfeta",
      day: "05/2024",
      theme: "Coragem! Eu venci o mundo | Jo 16,33",
      items: [
        {
          time: "I",
          title: "Efetados",
          description: "Tivemos um total de 50 jovens Efetados",
          icon: <Heart size={18} />
        },
        {
          time: "II",
          title: "Servos",
          description: "Um total de 116 servos estiveram envolvidos na organização do evento.",
          icon: <Heart size={18} />
        },
        {
          time: "III",
          title: "Famílias envolvidas",
          description: "+190 famílias envolvidas no retiro",
          icon: <Heart size={18} />
        },
        {
          time: "IV",
          title: "Música Tema",
          description: "De ti Preciso - Frei Gilson",
          icon: <Heart size={18} />
        },
        {
          time: "V",
          title: "Relato de um Efetado da Edição",
          description: "No Éfeta, encontrei um ambiente de amizade e espiritualidade que me ajudou a descobrir um novo propósito para minha vida (Ana Júlia, 19 anos)",
          icon: <Heart size={18} />
        }
      ]
    },
    {
      date: "8º Éfeta",
      day: "09/2023",
      theme: "Mostra-nos tua face Senhor |  Salmo 80:19",
      items: [
        {
          time: "I",
          title: "Efetados",
          description: "Tivemos um total de 58 jovens Efetados",
          icon: <Heart size={18} />
        },
        {
          time: "II",
          title: "Servos",
          description: "Um total de 120 servos estiveram envolvidos na organização do evento.",
          icon: <Heart size={18} />
        },
        {
          time: "III",
          title: "Famílias envolvidas",
          description: "+170 famílias envolvidas no retiro",
          icon: <Heart size={18} />
        },
        {
          time: "IV",
          title: "Música Tema",
          description: "Meu Amigo Jesus - Tony Allysson",
          icon: <Heart size={18} />
        },
        {
          time: "V",
          title: "Relato de um Efetado da Edição",
          description: "O momento mais importante da minha vida! (Rebeca, 19 anos)",
          icon: <Heart size={18} />
        }
      ]
    }
  ];

  const [activeDay, setActiveDay] = useState("day-1");

  return (
    <section className="py-20 bg-white" id="historico">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Últimos retiros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira as informações dos ultimos retiros do Acampamento ÉFETA, com alguns dados que achamos importante que você conheça!
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
                  activeDay === `day-${index + 1 }` ? "bg-white" : "bg-efeta-500 text-white"
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
                      <BookOpen className="mr-1 hidden sm:inline" size={16} />
                      <span>{item.icon}</span>
                    </div>
                    <div className="flex-1 p-4 sm:p-6">
                      <div className="flex items-start">
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
