
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
              O Acampamento EFETA é um retiro espiritual para jovens e adultos que buscam uma experiência de fé e renovação.
            </p>
            <div className="flex space-x-4 text-gray-500">
              <a href="https://instagram.com" className="hover:text-efeta-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-efeta-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-efeta-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-efeta-500 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 hover:text-efeta-500 transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/programacao" className="text-gray-600 hover:text-efeta-500 transition-colors">Programação</Link>
              </li>
              <li>
                <Link to="/inscricoes" className="text-gray-600 hover:text-efeta-500 transition-colors">Inscrições</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 hover:text-efeta-500 transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Programação</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Celebração de Abertura</li>
              <li className="text-gray-600">Palestras e Workshops</li>
              <li className="text-gray-600">Momentos de Oração</li>
              <li className="text-gray-600">Atividades em Grupo</li>
              <li className="text-gray-600">Cerimônia de Encerramento</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-display text-lg font-semibold mb-4 text-gray-800">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-efeta-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">São Paulo, Brasil</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a href="mailto:contato@acampamentoefeta.com" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  contato@acampamentoefeta.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-efeta-500 flex-shrink-0" />
                <a href="tel:+551199999999" className="text-gray-600 hover:text-efeta-500 transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            © {new Date().getFullYear()} Acampamento EFETA. Feito com 
            <Heart size={14} className="mx-1 text-efeta-500" /> 
            pela comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
