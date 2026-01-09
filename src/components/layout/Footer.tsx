'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bug, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Heart,
  Coffee,
  MessageCircle,
  Facebook,
  Instagram,
  Phone
} from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    { name: 'GitHub', href: 'https://github.com/hmusamaofficial', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hmusama/', icon: Linkedin },
    { name: 'Facebook', href: 'https://web.facebook.com/MuhammadUsamaUmair/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/itsusamaofficial', icon: Instagram },
    { name: 'Telegram', href: 'https://t.me/hmusamaofficial', icon: MessageCircle },
  ],
  resources: [
    { name: 'Resume', href: '/resume.html' },
    { name: 'Linktree', href: 'https://linktr.ee/hmusamaofficial' },
    { name: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/hmusamaofficial' },
  ],
  hireMe: [
    { name: 'Upwork', href: 'https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e' },
    { name: 'Fiverr', href: 'https://www.fiverr.com/i_am_muhammad' },
    { name: 'Kwork', href: 'https://kwork.com/user/hmusamaofficial' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Bug className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Muhammad Usama</span>
            </Link>
            <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
              QA Engineer specializing in ERP systems, AI-powered testing, and comprehensive quality assurance. Breaking software professionally to make it unbreakable.
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Hire Me */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-3">Hire Me</h3>
            <ul className="space-y-2">
              {footerLinks.hireMe.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-500 dark:text-dark-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors text-sm flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-dark-900 dark:text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hmusama2018@gmail.com"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  hmusama2018@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923134544995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/hmusamaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  @hmusamaofficial (Telegram)
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://www.buymeacoffee.com/hmusamaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-dark-900 font-medium text-sm transition-colors"
              >
                <Coffee className="w-4 h-4" />
                Buy me a coffee
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 dark:text-dark-400 text-sm text-center md:text-left">
              © {currentYear} Muhammad Usama. All rights reserved.
            </p>
            <p className="text-dark-500 dark:text-dark-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Quality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
