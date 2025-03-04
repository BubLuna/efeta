
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quem pode participar do Acampamento ÉFETA?",
      answer: "O Acampamento ÉFETA é destinado a jovens e adultos de 16 a 35 anos, com dois eventos anuais: um para participantes de 16 a 24 anos e outro para aqueles de 25 a 35 anos. Em casos especiais, pessoas com mais de 35 anos podem tentar obter uma vaga entrando em contato pelo WhatsApp. Todos são bem-vindos, independentemente do nível de conhecimento religioso ou da experiência prévia em retiros."
    },
    {
      question: "O que devo levar para o retiro?",
      answer: "Recomendamos que você traga roupas confortáveis, itens de higiene pessoal, Bíblia (se tiver), caderno para anotações, além de uma panela, corda e lanterna. Também é importante trazer medicamentos pessoais de uso controlado, caso necessário, e, claro, uma atitude aberta para vivenciar novas experiências espirituais."
    },
    {
      question: "As refeições estão inclusas no valor da inscrição?",
      answer: "Sim, todas as refeições durante os três dias de retiro estão inclusas no valor da inscrição."
    },
    {
      question: "Posso sair do local do retiro durante o evento?",
      answer: "Pedimos que os participantes permaneçam no local durante todo o retiro para aproveitar a experiência completa. Saídas são permitidas apenas em casos excepcionais e devem ser comunicadas à coordenação."
    },
    {
      question: "O que acontece se eu tiver necessidades alimentares específicas?",
      answer: "No formulário de inscrição, há um campo para informar necessidades alimentares especiais (alergias, intolerâncias, restrições). Faremos o possível para acomodar todas as necessidades, desde que informadas com antecedência."
    },
    {
      question: "Posso levar meu celular para o Acampamento ÉFETA?",
      answer: "Preferimos que os participantes não tragam celulares para o acampamento. O objetivo é proporcionar um momento de desconexão do mundo exterior, permitindo que você se concentre no seu crescimento espiritual e nas experiências compartilhadas com os outros. O uso do celular pode ser uma distração e tirar o foco das vivências e reflexões que queremos oferecer. No entanto, caso seja necessário entrar em contato com alguém, os coordenadores terão seus celulares à disposição para atender a qualquer emergência. Essa é uma oportunidade para se reconectar consigo mesmo e com o propósito do evento, sem as distrações do cotidiano."
    },
    {
      question: "Como funciona o alojamento no Acampamento ÉFETA?",
      answer: "No Acampamento ÉFETA, os participantes serão alojados separadamente por gênero, com meninas e meninos em locais distintos. Isso é feito para garantir um ambiente organizado e respeitoso para todos. Cada pessoa terá seu espaço para descanso à noite, com total segurança. Essa organização visa oferecer uma experiência tranquila, focada no propósito espiritual do evento."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as dúvidas mais comuns sobre o Acampamento ÉFETA. Se sua pergunta não estiver aqui, entre em contato conosco.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-xl p-6 shadow-soft">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 py-2">
                <AccordionTrigger className="text-left font-display font-medium text-lg text-gray-800 hover:text-efeta-500 py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Ainda tem dúvidas? Entre em contato com nossa equipe pelo email{' '}
              <a href="mailto:contato@acampamentoefeta.com" className="text-efeta-500 hover:underline">
                contato@acampamentoefeta.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
