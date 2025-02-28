
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Bell } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const RegistrationCTA = () => {
  // Defina a data alvo (2 de Maio de 2024)
  const targetDate = new Date('2024-05-02T00:00:00');
  
  // Estado para controlar se a imagem está carregada
  const [imageLoaded, setImageLoaded] = useState(false);
  // Estado para verificar se o evento já começou
  const [eventStarted, setEventStarted] = useState(false);

  // Efeito para pré-carregar a imagem
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/ccd6c099-c615-4f14-9722-1116054803fb.png';
    img.onload = () => setImageLoaded(true);
    
    // Verifica se o evento já começou
    const checkEventStarted = () => {
      const now = new Date();
      setEventStarted(now >= targetDate);
    };
    
    checkEventStarted();
    const timer = setInterval(checkEventStarted, 60000); // Verifica a cada minuto
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Primeira parte - Inscrição */}
      <div className="relative bg-efeta-50 py-16 overflow-hidden">
        {/* Background image with blur effect */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${imageLoaded ? 'opacity-30' : 'opacity-0'}`}
          style={{ 
            backgroundImage: "url('/lovable-uploads/ccd6c099-c615-4f14-9722-1116054803fb.png')",
            filter: "blur(8px)"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-gray-900">Faça Parte Desta Experiência Única</h2>
              <p className="text-lg text-gray-700 mb-8">
                O tempo está se esgotando! Garanta sua vaga no Acampamento EFETA e prepare-se para três dias de renovação espiritual, comunhão e crescimento na fé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-efeta-500 hover:bg-efeta-600 transition-all hover:scale-105">
                  Inscreva-se Agora
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-8 shadow-medium max-w-md w-full">
                <CountdownTimer targetDate={targetDate} />
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-efeta-500 mb-4">
                    <Clock size={20} className="mr-2" />
                    <span className="font-medium">Inscrições encerram em breve!</span>
                  </div>
                  <Button className="w-full bg-efeta-500 hover:bg-efeta-600 transition-colors">
                    Reservar Minha Vaga
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Segunda parte - Notificação de próximos eventos */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {eventStarted ? (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display text-gray-900">O evento já começou!</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Não vai conseguir participar desse evento? Clique abaixo e receba uma notificação dos próximos acampamentos.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 font-display text-gray-900">Não pode participar desse evento?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Clique abaixo e receba uma notificação dos próximos acampamentos que iremos realizar.
                </p>
              </>
            )}
            
            <Button className="bg-white border-2 border-efeta-500 text-efeta-500 hover:bg-efeta-50 transition-colors flex items-center gap-2 mx-auto">
              <Bell size={18} />
              Receber Notificações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
