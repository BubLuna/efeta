import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-efeta-100 border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contato Column */}
          <div className="col-span-1 text-center">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <MapPin size={18} className="mr-2 text-efeta-500 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/pR3gYQZWRKxH4wUMA" 
                  target="_blank" 
                  className="text-gray-600 hover:text-efeta-500 transition-colors"
                >
                  Santuário da Beata Albertina
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Mail size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a href="mailto:contato@acampamentoefeta.com" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  contato@acampamentoefeta.com
                </a>
              </li>
              <li className="flex items-center justify-center">
                <Phone size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a href="https://wa.me/48999885086?text=Olá,%20vim%20pelo%20site%20do%20ÉFETA!%20Gostaria%20de%20mais%20informações%20:)" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  (48) 9.9988-5086
                </a>
              </li>
            </ul>
          </div>
          
          {/* Logo and Social Media Column */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center text-center">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              O Acampamento ÉFETA é um retiro espiritual para jovens e adultos que buscam uma experiência de fé e renovação.
            </p>
            <div className="flex space-x-4 text-gray-500 justify-center">
              <a href="https://www.instagram.com/acampamentoefeta/" className="hover:text-efeta-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Facampamentoefeta%2F" className="hover:text-efeta-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Não esqueça Column */}
          <div className="col-span-1 text-center">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Não esqueça!</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Bíblia</li>
              <li className="text-gray-600">Panelas</li>
              <li className="text-gray-600">Lanternas</li>
              <li className="text-gray-600">Corda</li>
              <li className="text-gray-600">Cobertores</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Acampamento ÉFETA. Site feito com 
            <Heart size={14} className="mx-1 text-efeta-500" /> 
            <a href="https://www.instagram.com/rebecalunardibublitz/" className="hover:text-efeta-500 transition-colors">
              por Rebeca Lunardi Bublitz.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
