
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Features from '@/components/Features';
import Schedule from '@/components/Schedule';
import Testimonials from '@/components/Testimonials';
import RegistrationCTA from '@/components/RegistrationCTA';
import FAQ from '@/components/FAQ';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PhotoGallery from '@/components/PhotoGallery';

const Index = () => {
  // Animação de entrada da página para melhorar a experiência do usuário
  useEffect(() => {
    // Adiciona a classe ao corpo da página para aplicar os estilos
    document.body.classList.add('page-transition-enter-active');
    
    // Remove a classe depois que a animação terminar
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition-enter-active');
    }, 500);
    
    // Scroll para o topo da página quando ela é carregada
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('page-transition-enter-active');
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main>
        <Hero />
        <EventInfo />
        <Features />
        <Testimonials />
        <PhotoGallery />
        <Schedule />
        <RegistrationCTA />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
