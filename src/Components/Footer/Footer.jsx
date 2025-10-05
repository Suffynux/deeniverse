import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  BookOpen,
  MessageSquare,
  Users
} from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="relative text-white z-10"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-800 to-slate-800 opacity-90"></div>

      {/* Main Footer Content - Changed to 4 columns */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-slate-700">
        {/* Left Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-orange-400">Deeniverse Academy</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            A premier Islamic learning platform dedicated to Quran, Tajweed, and Islamic sciences — delivered with excellence, spirituality, and global accessibility.
          </p>
        </div>

        {/* Center Section - Regular Courses */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Our Courses</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <Link 
                to="/courses/1" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Basic Qaida with Tajweed
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/2" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Nazra Quran with Tajweed
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/3" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Masnoon Duas & Namaz
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/4" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tajweed-ul-Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/5" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tarjuma Tul Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/6" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Tafsir-ul-Quran
              </Link>
            </li>
            <li>
              <Link 
                to="/courses/7" 
                className="block py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200 touch-manipulation"
              >
                Fahm-ul-Quran
              </Link>
            </li>
          </ul>
        </div>
        
        {/* New Section - Free Courses */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-orange-400">Free WhatsApp Courses</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a 
                href="https://chat.whatsapp.com/JHUCTLQx2kA4FX5bEuwd6u" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Tafseer ul Quran</span>
              </a>
            </li>
            <li>
              <a 
                href="https://chat.whatsapp.com/LjhcbIQ8BrNFhB5aAOpYJX" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Hadith Studies</span>
              </a>
            </li>
            <li>
              <a 
                href="https://chat.whatsapp.com/Cdvs19Ivo395ApcpIo6EYf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-1 px-2 -mx-2 rounded hover:text-orange-400 hover:bg-white/5 transition-all duration-200"
              >
                <Users className="w-4 h-4 text-yellow-400" />
                <span>Kids Islamic Course</span>
              </a>
            </li>
            <li className="pt-2">
              <div className="bg-gradient-to-r from-amber-600/30 to-amber-700/20 border border-amber-600/30 rounded-lg p-3 mt-2">
                <p className="text-xs text-amber-200">
                  Join our free WhatsApp groups to start learning today! No registration required.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">Connect With Us</h3>
          <div className="flex gap-4 mt-2 flex-wrap">
            <a 
              href="https://www.linkedin.com/company/deeni-verse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.instagram.com/deeniverse.official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.youtube.com/@deenverse.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 hover:text-orange-400 transition" />
            </a>
            <a 
              href="https://www.tiktok.com/@deeniverse.official" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 -m-2 rounded hover:bg-white/10 transition-all duration-200 touch-manipulation"
              title="TikTok"
            >
              <svg className="w-5 h-5 hover:text-orange-400 transition" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          
          <div className="pt-4">
            <h3 className="text-md font-semibold text-orange-400">Contact</h3>
            <a 
              href="https://api.whatsapp.com/send/?phone=923265566969"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 py-1 px-2 -mx-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-white/5 rounded transition-all duration-200"
            >
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp: +92 326 5566969
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative text-center py-4 text-sm text-gray-400 border-t border-slate-700 space-y-1">
        <div>© {new Date().getFullYear()} Deeniverse Academy. All rights reserved.</div>
        <div>
          Developed by{' '}
          <a 
            href="https://sufiyan-nine.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-300 transition-colors duration-200 font-medium"
          >
            Suffynux
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;