
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const RegistrationCTA = () => {
  // Defina a data alvo (2 de Maio de 2024)
  const targetDate = new Date('2024-05-02T00:00:00');
  
  // Estado para controlar se a imagem está carregada
  const [imageLoaded, setImageLoaded] = useState(false);

  // Efeito para pré-carregar a imagem
  useEffect(() => {
    const img = new Image();
    img.src = '/lovable-uploads/ccd6c099-c615-4f14-9722-1116054803fb.png';
    img.onload = () => setImageLoaded(true);
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden" id="inscricoes">
      {/* Seção de Inscrição */}
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display text-gray-900">Faça Parte Desta Experiência Única</h2>
            <p className="text-lg text-gray-700 mb-8">
              O tempo está se esgotando! Garanta sua vaga no Acampamento ÉFETA e prepare-se para três dias de renovação espiritual, comunhão e crescimento na fé.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-efeta-500 hover:bg-efeta-600 transition-all hover:scale-105">
                Inscreva-se Agora
              </Button>
            </div>
            
            <div className="mt-10 flex justify-center">
              <div className="bg-white rounded-xl p-8 shadow-medium max-w-md w-full">
                <CountdownTimer targetDate={targetDate} />
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-efeta-500 mb-4 justify-center">
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
    </section>
  );
};

export default RegistrationCTA;
