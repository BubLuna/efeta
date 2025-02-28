
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
      question: "Quem pode participar do Acampamento EFETA?",
      answer: "O Acampamento EFETA é destinado a jovens e adultos entre 20 e 35 anos. Todos são bem-vindos, independentemente do nível de conhecimento religioso ou experiência prévia em retiros."
    },
    {
      question: "O que devo levar para o retiro?",
      answer: "Recomendamos trazer roupas confortáveis, itens de higiene pessoal, Bíblia (se tiver), caderno para anotações, medicamentos pessoais se necessário, e uma atitude aberta para vivenciar novas experiências espirituais."
    },
    {
      question: "As refeições estão inclusas no valor da inscrição?",
      answer: "Sim, todas as refeições durante os três dias de retiro estão inclusas no valor da inscrição. Oferecemos café da manhã, almoço e jantar, além de lanches nos intervalos das atividades."
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
      question: "Como funciona o alojamento?",
      answer: "O alojamento é em quartos compartilhados, separados por gênero. Fornecemos colchões, mas cada participante deve trazer seus próprios itens de cama (lençol, cobertor, travesseiro)."
    },
    {
      question: "Posso pagar a inscrição em parcelas?",
      answer: "Sim, oferecemos opções de pagamento parcelado. Os detalhes estão disponíveis na página de inscrição. Também oferecemos descontos para inscrições antecipadas."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esclarecemos as dúvidas mais comuns sobre o Acampamento EFETA. Se sua pergunta não estiver aqui, entre em contato conosco.
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
