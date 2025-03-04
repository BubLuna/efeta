
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const RegistrationCTA = () => {
  
  // Estado para controlar se a imagem está carregada
  const [imageLoaded, setImageLoaded] = useState(false);

  // Efeito para pré-carregar a imagem
  useEffect(() => {
    const img = new Image();
    img.src = 'https://live.staticflickr.com/65535/54364918424_b4a70ff83e_b.jpg';
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
            backgroundImage: "url('https://live.staticflickr.com/65535/54364918424_b4a70ff83e_b.jpg')",
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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9NgYJkKlw9Vl9ei5wYvg53l56SLAJeU3UNKBADle87zstMg/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-efeta-500 hover:bg-efeta-600 transition-all hover:scale-105">
                  Inscreva-se Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
