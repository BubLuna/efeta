
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-4">
              O Acampamento ÉFETA é um retiro espiritual para jovens e adultos que buscam uma experiência de fé e renovação.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <a href="https://www.instagram.com/acampamentoefeta/" className="hover:text-efeta-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Facampamentoefeta%2F" className="hover:text-efeta-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Não esqueça!</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Biblia</li>
              <li className="text-gray-600">Panelas</li>
              <li className="text-gray-600">Lanternas</li>
              <li className="text-gray-600">Corda</li>
              <li className="text-gray-600">Cobertores</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-efeta-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Santuário da Beata Albertina</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a href="mailto:contato@acampamentoefeta.com" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  contato@acampamentoefeta.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a className="text-gray-600 hover:text-efeta-500 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Acampamento ÉFETA. Site feito com 
            <Heart size={14} className="mx-1 text-efeta-500" /> 
            por Rebeca Lunardi Bublitz.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
