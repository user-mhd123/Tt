import React, { useState } from 'react';
import { Icons } from './Icon';
import { Language } from '../types';
import { t } from '../translations';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  scrollToContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { label: t.home[lang], href: '#' },
    { label: t.courses[lang], href: '#courses' },
    { label: t.pages[lang], href: '#' },
    { label: t.shop[lang], href: '#' },
    { label: t.blog[lang], href: '#news' },
    { label: t.contact[lang], href: '#contact', action: scrollToContact },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">U</div>
          <span className="text-xl font-bold text-secondary">UpStudy</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={(e) => {
                if(item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-600 hover:text-primary"><Icons.Search size={20} /></button>
          <button className="text-gray-600 hover:text-primary"><Icons.Cart size={20} /></button>
          
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm font-semibold text-primary border border-primary/20 px-3 py-1.5 rounded-full hover:bg-primary/5 transition"
          >
            <Icons.Globe size={16} />
            {lang === 'en' ? 'Arabic' : 'English'}
          </button>

          <button className="text-gray-600 font-medium hover:text-primary">{t.login[lang]}</button>
          <button className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-green-600 transition shadow-lg shadow-green-200">
            {t.login[lang]}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <button 
            onClick={toggleLang}
            className="text-primary"
          >
            <Icons.Globe size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
            {isOpen ? <Icons.Close size={28} /> : <Icons.Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-lg absolute w-full">
          {navItems.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href}
               onClick={(e) => {
                setIsOpen(false);
                if(item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              className="text-gray-600 font-medium py-2 border-b border-gray-50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 mt-2">
            <button className="flex-1 border py-2 rounded-lg">{t.login[lang]}</button>
            <button className="flex-1 bg-primary text-white py-2 rounded-lg">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;