
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "O Éfeta trouxe de volta a luz de Deus na minha vida. Foi uma experiência que renovou minha fé e me mostrou que, com coragem e a presença de Deus, posso vencer meus medos e enfrentar o mundo. Eu amo, e não tenho dúvida que é o melhor acampamento do mundo, onde Deus se faz presente em todos os momentos!",
      author: "Rohana Lunardi",
      role: "Participante da 9ª Edição",
      image: "https://live.staticflickr.com/65535/54365482813_e9fd552091_b.jpg"
    },
    {
      quote: "O Acampamento Éfeta foi uma experiência incrível que fortaleceu minha fé e me trouxe paz. Através das orações, dinâmicas e partilhas, me senti renovada e mais próxima de Deus. Sai grata por tudo que vivi e pelas pessoas que conheci!",
      author: "Maria Laura",
      role: "Participante da 8ª Edição",
      image: "https://live.staticflickr.com/65535/54365650510_db03015a5d_c.jpg"
    },
    {
      quote: "Momentos de profunda conexão com Deus e com pessoas que compartilham os mesmos valores. Sinto que voltei renovado para enfrentar os meus desafios diários.",
      author: "Kaio da Rosa",
      role: "Participante da 10ª Edição",
      image: "https://live.staticflickr.com/65535/54365659165_1a5b4976d5_c.jpg"
    },
    {
      quote: "Quando nos encontramos nos piores lugares do mundo, somente Deus pode nos salvar. O Éfeta é um passo pra melhora, é também o lugar para encontrar pessoas que nao nos deixarão mais decair. É a maior virada de chave da nossa vida!",
      author: "Rebeca Bublitz",
      role: "Participante da 8ª Edição",
      image: "https://live.staticflickr.com/65535/54365650505_0a0167cd36_c.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-efeta-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Depoimentos</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Veja o que os participantes das edições anteriores têm a dizer sobre sua experiência.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center p-6 md:p-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 text-efeta-500">
              <Quote size={24} />
            </div>
            
            <blockquote className="text-xl md:text-2xl italic mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="flex items-center justify-center mb-6">
              {testimonials[currentIndex].image ? (
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-white mr-4"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold">{testimonials[currentIndex].author.charAt(0)}</span>
                </div>
              )}
              <div className="text-left">
                <div className="font-bold text-lg">{testimonials[currentIndex].author}</div>
                <div className="text-white/70">{testimonials[currentIndex].role}</div>
              </div>
            </div>
            
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
