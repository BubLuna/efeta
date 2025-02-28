
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import { Check, AlertCircle } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  isPopular = false 
}: { 
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-medium ${isPopular ? 'border-2 border-efeta-500 shadow-medium transform hover:-translate-y-1' : 'border border-gray-100 shadow-soft'}`}>
      {isPopular && (
        <div className="bg-efeta-500 text-white py-2 px-4 text-center font-medium">
          Mais Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold mb-2 font-display text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-efeta-500">{price}</span>
          <span className="text-gray-500 ml-1">/ pessoa</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-efeta-500"><Check size={16} /></span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${isPopular ? 'bg-efeta-500 hover:bg-efeta-600' : 'bg-gray-800 hover:bg-gray-700'} transition-colors`}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const Inscricoes = () => {
  // Definindo a data alvo para o encerramento das inscrições
  const targetDate = new Date('2024-04-25T23:59:59');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <main className="pt-20">
        {/* Banner de Inscrições */}
        <section className="relative h-64 md:h-80 bg-efeta-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-efeta-600 to-efeta-500"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/lovable-uploads/d46173e6-3807-4a8c-8a3c-475975151e69.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">Inscrições</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Garanta sua vaga no Acampamento EFETA 2024
              </p>
            </div>
          </div>
        </section>
        
        {/* Contagem Regressiva */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </section>
        
        {/* Planos de Inscrição */}
        <section className="py-16 bg-efeta-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-display">Escolha seu Plano</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos diferentes opções para atender às suas necessidades. Todos os planos incluem a experiência completa do retiro.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard 
                title="Plano Básico" 
                price="R$350" 
                description="Ideal para quem busca uma experiência completa com valor acessível." 
                features={[
                  "Alojamento compartilhado",
                  "Todas as refeições inclusas",
                  "Participação em todas as atividades",
                  "Kit do participante",
                  "Certificado de participação"
                ]} 
                buttonText="Inscreva-se" 
              />
              
              <PricingCard 
                title="Plano Conforto" 
                price="R$450" 
                description="Nossa opção mais popular, com benefícios adicionais para sua comodidade." 
                features={[
                  "Alojamento compartilhado (menos pessoas)",
                  "Todas as refeições inclusas",
                  "Participação em todas as atividades",
                  "Kit do participante premium",
                  "Certificado de participação",
                  "Camiseta exclusiva do evento"
                ]} 
                buttonText="Escolher Este Plano" 
                isPopular={true}
              />
              
              <PricingCard 
                title="Plano Grupo" 
                price="R$300" 
                description="Valor especial para grupos a partir de 5 pessoas que se inscrevem juntas." 
                features={[
                  "Alojamento compartilhado",
                  "Todas as refeições inclusas",
                  "Participação em todas as atividades",
                  "Kit do participante",
                  "Certificado de participação",
                  "10% de desconto na próxima edição"
                ]} 
                buttonText="Inscrever Grupo" 
              />
            </div>
            
            <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-lg border border-yellow-200 flex items-start">
              <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Política de Cancelamento</h3>
                <p className="text-gray-600 text-sm">
                  Cancelamentos até 10 dias antes do evento recebem reembolso de 70% do valor. Após esse prazo, não haverá reembolso, mas a inscrição pode ser transferida para outra pessoa mediante comunicação prévia.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Perguntas sobre Inscrição */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 font-display text-center">Como se Inscrever</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">1. Preencha o formulário online</h3>
                  <p className="text-gray-600 mb-3">
                    Clique no botão "Inscreva-se" do plano escolhido e preencha o formulário com seus dados pessoais e informações necessárias.
                  </p>
                  <Button className="bg-efeta-500 hover:bg-efeta-600 transition-colors">
                    Acessar Formulário
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">2. Efetue o pagamento</h3>
                  <p className="text-gray-600 mb-3">
                    Após preencher o formulário, você será redirecionado para a página de pagamento. Aceitamos cartão de crédito, PIX e transferência bancária.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">3. Confirme sua inscrição</h3>
                  <p className="text-gray-600 mb-3">
                    Após o pagamento, você receberá um e-mail de confirmação com todas as informações necessárias para participar do evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Inscricoes;
