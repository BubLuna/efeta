
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, Image } from 'lucide-react';

const photos = [
  {
    id: 1,
    url: "https://live.staticflickr.com/65535/54364940243_78953288df_h.jpg",
    alt: "Sabedoria de São Francisco"
  },
  {
    id: 2,
    url: "https://live.staticflickr.com/65535/54364940263_ecf71bd960_h.jpg",
    alt: "Sorrisos que Contagiam"
  },
  {
    id: 3,
    url: "https://live.staticflickr.com/65535/54363840717_62ac45b3a5_h.jpg",
    alt: "Igreja Jovem!"
  },
  {
    id: 4,
    url: "https://live.staticflickr.com/65535/54364918419_69123651cb_b.jpg",
    alt: "Comunidade, Oração e Comunhão"
  },
  {
    id: 5,
    url: "https://live.staticflickr.com/65535/54364918464_ea5c0db821_b.jpg",
    alt: "Caminhos de Luz"
  },
  {
    id: 6,
    url: "https://live.staticflickr.com/65535/54364918424_b4a70ff83e_b.jpg",
    alt: "Chamado à Missão!"
  }
];

const PhotoGallery = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-efeta-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-gray-900">Galeria de Fotos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns momentos especiais de edições anteriores do Acampamento Éfeta.
          </p>
        </div>
        
        <div className="relative">
          {/* Botões de navegação */}
          <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-efeta-500 p-2 rounded-full shadow-md transition-all -ml-3 md:ml-2"
            aria-label="Deslizar para a esquerda"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 gap-4 md:gap-6 hide-scrollbar scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className={cn(
                  "flex-none w-80 h-60 md:w-96 md:h-72 relative rounded-xl overflow-hidden",
                  "shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                )}
              >
                <img 
                  src={`${photo.url}?auto=format&fit=crop&w=800&q=80`}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <p className="text-sm font-medium">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-efeta-500 p-2 rounded-full shadow-md transition-all -mr-3 md:mr-2"
            aria-label="Deslizar para a direita"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center text-efeta-500 font-medium">
            <Image size={18} className="mr-2" />
            <span>Arraste para ver mais fotos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
