import React from 'react';
import { Icons } from './Icon';
import { Language } from '../types';
import { t } from '../translations';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">{t.contactUsTitle[lang]}</h2>
            <p className="text-gray-300">{t.adminName[lang]}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/967736871497" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center hover:bg-primary/20 transition-all border border-white/10 group"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icons.Phone className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{t.whatsapp[lang]}</h3>
              <p className="text-sm text-gray-300 dir-ltr">+967 736 871 497</p>
            </a>

            {/* Email */}
            <a 
              href="mailto:moshmmedmoshmmed56@gmail.com"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center hover:bg-blue-500/20 transition-all border border-white/10 group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icons.Mail className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{t.email[lang]}</h3>
              <p className="text-xs text-gray-300 break-all text-center">moshmmedmoshmmed56@gmail.com</p>
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com/mohammed313581"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center hover:bg-pink-500/20 transition-all border border-white/10 group"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icons.Instagram className="text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{t.instagram[lang]}</h3>
              <p className="text-sm text-gray-300">@mohammed313581</p>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;