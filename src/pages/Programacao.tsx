
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Schedule from '@/components/Schedule';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Programacao = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="pt-20">
        {/* Banner da Programação */}
        <section className="relative h-64 md:h-80 bg-efeta-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-efeta-600 to-efeta-500"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/lovable-uploads/ccd6c099-c615-4f14-9722-1116054803fb.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">Programação</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Conheça todas as atividades do Acampamento EFETA 2024
              </p>
            </div>
          </div>
        </section>
        
        {/* Introdução */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-display">Três Dias de Transformação</h2>
              <p className="text-lg text-gray-700 mb-8">
                A programação do Acampamento EFETA foi cuidadosamente planejada para proporcionar momentos de aprendizado, reflexão, adoração e comunhão. Cada atividade foi pensada para contribuir com sua jornada espiritual.
              </p>
              <Button className="bg-efeta-500 hover:bg-efeta-600 transition-colors">
                <Download size={18} className="mr-2" />
                Download da Programação
              </Button>
            </div>
          </div>
        </section>
        
        {/* Componente de Programação Detalhada */}
        <Schedule />
        
        {/* Informações Adicionais */}
        <section className="py-16 bg-efeta-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 font-display text-center">Informações Importantes</h2>
              
              <div className="bg-white rounded-xl p-8 shadow-soft mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Horários</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Check-in: 2 de Maio, das 14h às 16h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Check-out: 4 de Maio, até as 19h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Café da manhã: 7h às 8h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Almoço: 12h às 13h30</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Jantar: 18h às 19h30</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Silêncio: a partir das 23h</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Recomendações</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Traga sua Bíblia e material para anotações</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Use roupas confortáveis e adequadas para atividades ao ar livre</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Traga itens de higiene pessoal e toalhas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Traga itens de cama (lençol, fronha, cobertor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Medicamentos pessoais, se necessário</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-efeta-500 mr-2">•</span>
                    <span>Evite trazer objetos de valor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programacao;
