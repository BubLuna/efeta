
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(1 - scrollY / 500, 0.2);
      const scale = Math.max(1 - scrollY / 1000, 0.95);
      const translateY = scrollY * 0.5;
      
      heroRef.current.style.opacity = opacity.toString();
      heroRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-efeta-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-efeta-300 rounded-full opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-32 left-10 w-12 h-12 bg-efeta-400 rounded-full opacity-20 animate-float" style={{animationDelay: '1.2s'}}></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-efeta-200 rounded-full opacity-40 animate-float" style={{animationDelay: '0.8s'}}></div>
      
      {/* Diagonal line decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-1 bg-efeta-300 opacity-30 transform -rotate-12 origin-left"></div>
        <div className="absolute top-40 right-0 w-full h-0.5 bg-efeta-400 opacity-20 transform rotate-12 origin-right"></div>
        <div className="absolute bottom-80 left-0 w-full h-0.5 bg-efeta-500 opacity-30 transform rotate-6 origin-left"></div>
      </div>
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-efeta-500/20 mix-blend-overlay"></div>
      
      {/* Background image with parallax effect */}
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/lovable-uploads/d46173e6-3807-4a8c-8a3c-475975151e69.png')",
          transform: "scale(1.05)"
        }}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="glass max-w-3xl p-8 rounded-2xl animate-fade-in border-t-4 border-efeta-500">
          <div className="mb-4 inline-block">
            <span className="px-4 py-1 rounded-full text-sm font-medium bg-efeta-500 text-white animate-pulse-soft">
              11ª Edição
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-efeta-950 text-shadow animate-slide-in">
            Acampamento <span className="text-efeta-500">EFETA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "100ms" }}>
            "No Senhor ponho minha esperança" <span className="text-efeta-500">Salmo 146:5</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-slide-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-center glass-orange px-4 py-3 rounded-lg border border-efeta-300">
              <Calendar className="text-efeta-500 mr-2" size={20} />
              <span className="text-gray-700">2, 3 e 4 de Maio</span>
            </div>
            <div className="flex items-center justify-center glass-orange px-4 py-3 rounded-lg border border-efeta-300">
              <MapPin className="text-efeta-500 mr-2" size={20} />
              <span className="text-gray-700">São Paulo, Brasil</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in" style={{ animationDelay: "300ms" }}>
            <Button size="lg" className="bg-efeta-500 hover:bg-efeta-600 transition-all hover:scale-105">
              Inscreva-se Agora
            </Button>
            <Button variant="outline" size="lg" className="border-efeta-500 text-efeta-500 hover:bg-efeta-50 transition-all">
              Saiba Mais
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float"
          onClick={scrollToContent}
        >
          <ChevronDown className="text-white drop-shadow-md" size={36} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
