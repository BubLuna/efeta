
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Heart, Target, Award, Users } from 'lucide-react';

const Sobre = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="pt-20">
        {/* Banner do Sobre */}
        <section className="relative h-64 md:h-80 bg-efeta-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-efeta-600 to-efeta-500"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/lovable-uploads/d46173e6-3807-4a8c-8a3c-475975151e69.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">Sobre o EFETA</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Conheça nossa história, missão e os valores que nos movem
              </p>
            </div>
          </div>
        </section>
        
        {/* História do EFETA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-display text-center">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  O Acampamento EFETA surgiu em 2013, com a visão de criar um espaço de renovação espiritual para jovens adultos. O nome "EFETA" vem da palavra aramaica que significa "Abra-se", um convite para abrir o coração para novas experiências de fé.
                </p>
                <p>
                  O que começou como um pequeno retiro com apenas 30 participantes cresceu ao longo dos anos, tornando-se um dos eventos espirituais mais aguardados do calendário. Hoje, em sua 11ª edição, o Acampamento EFETA já impactou a vida de mais de 2.000 jovens.
                </p>
                <p>
                  Cada edição é cuidadosamente planejada com um tema específico, sempre baseado em passagens bíblicas que convidam à reflexão e ao crescimento pessoal. A edição deste ano, com o tema "No Senhor ponho minha esperança" (Salmo 146:5), busca inspirar os participantes a renovarem sua confiança em Deus em meio aos desafios da vida contemporânea.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Missão, Visão e Valores */}
        <section className="py-16 bg-efeta-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-display">Missão, Visão e Valores</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Os princípios que orientam nossa jornada e definem nosso propósito
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all">
                <div className="p-3 bg-efeta-100 text-efeta-500 rounded-md w-fit mb-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-display">Missão</h3>
                <p className="text-gray-600">
                  Proporcionar uma experiência profunda de encontro com Deus e com a comunidade, através de um ambiente acolhedor e transformador que inspire jovens adultos a viverem sua fé de forma autêntica no cotidiano.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all">
                <div className="p-3 bg-efeta-100 text-efeta-500 rounded-md w-fit mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-display">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecido como um espaço de referência na formação espiritual de jovens adultos, inspirando uma geração a viver com propósito e a fazer a diferença em suas comunidades através dos valores do Evangelho.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all">
                <div className="p-3 bg-efeta-100 text-efeta-500 rounded-md w-fit mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 font-display">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Fé autêntica e vivencial</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Comunidade e acolhimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Respeito à jornada individual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Serviço ao próximo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Integridade e transparência</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Equipe Organizadora */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-display">Equipe Organizadora</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conheça as pessoas dedicadas que tornam o Acampamento EFETA possível
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <div key={index} className="text-center animate-slide-in" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="relative mx-auto w-40 h-40 mb-4 overflow-hidden rounded-full bg-gray-200">
                    <div className="absolute inset-0 bg-efeta-500/20"></div>
                    <Users size={40} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Membro da Equipe {index + 1}</h3>
                  <p className="text-efeta-500">Função na Organização</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sobre;
