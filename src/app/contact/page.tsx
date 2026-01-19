'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  ExternalLink,
  Phone,
  Sparkles,
  CheckCircle2,
  Coffee,
  Facebook,
  Instagram,
  Youtube,
  ShoppingBag,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hmusama2018@gmail.com',
    href: 'mailto:hmusama2018@gmail.com',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    value: '+92 313 454 4995',
    href: 'https://wa.me/923134544995',
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    value: '@hmusamaofficial',
    href: 'https://t.me/hmusamaofficial',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Lahore, Pakistan',
    href: null,
  },
  {
    icon: Clock,
    title: 'Availability',
    value: 'Mon-Sat, 9AM-11PM PKT',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/hmusamaofficial',
    description: 'Check out my repositories',
    color: 'from-gray-600 to-gray-800',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/hmusama/',
    description: 'Connect professionally',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://web.facebook.com/MuhammadUsamaUmair/',
    description: 'Follow me on Facebook',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/itsusamaofficial',
    description: 'Follow my journey',
    color: 'from-pink-500 via-purple-500 to-orange-500',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    href: 'https://www.youtube.com/@hmusamaofficial',
    description: 'Watch my videos',
    color: 'from-red-600 to-red-800',
  },
  {
    name: 'Telegram',
    icon: MessageCircle,
    href: 'https://t.me/hmusamaofficial',
    description: 'Message me directly',
    color: 'from-sky-400 to-blue-600',
  },
];

const freelancePlatforms = [
  {
    name: 'Upwork',
    icon: Briefcase,
    href: 'https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e',
    description: 'Top Rated QA Freelancer',
    tagline: 'Hire me for long-term projects',
    color: 'from-green-500 to-green-700',
    buttonText: 'Place Order on Upwork',
  },
  {
    name: 'Fiverr',
    icon: ShoppingBag,
    href: 'https://www.fiverr.com/i_am_muhammad',
    description: 'Level 2 Seller',
    tagline: 'Quick gigs & testing services',
    color: 'from-emerald-400 to-green-600',
    buttonText: 'Order on Fiverr',
  },
  {
    name: 'Kwork',
    icon: ExternalLink,
    href: 'https://kwork.com/user/hmusamaofficial',
    description: 'Professional Seller',
    tagline: 'Affordable QA services',
    color: 'from-orange-500 to-red-600',
    buttonText: 'Order on Kwork',
  },
];

const moreLinks = [
  { name: 'Linktree', href: 'https://linktr.ee/hmusamaofficial' },
  { name: 'Buy Me a Coffee', href: 'https://www.buymeacoffee.com/hmusamaofficial' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/19504833/muhammad-usama-hmusamaofficial' },
  { name: 'Skype', href: 'https://join.skype.com/invite/hoQ8kQvUpJN9' },
  { name: 'WhatsApp', href: 'https://wa.me/923134544995' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build mailto link with form data - opens user's email client
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Hi Muhammad Usama,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your Portfolio Contact Form`
    );
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:hmusama2018@gmail.com?subject=${subject}&body=${body}`;
    
    // Create a temporary link and click it to open email client
    const link = document.createElement('a');
    link.href = mailtoLink;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success message and reset form
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              I&apos;m always open to discussing QA opportunities, testing strategies, or collaboration on quality initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Send a Message
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-dark-500 dark:text-dark-400">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-white placeholder-dark-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-white placeholder-dark-400"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-white placeholder-dark-400"
                      placeholder="Project Inquiry / Job Opportunity"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-dark-900 dark:text-white placeholder-dark-400 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('mailto') ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            className="font-medium text-dark-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-dark-900 dark:text-white">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Connect With Me
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-4 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-3`}>
                        <link.icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="font-semibold text-dark-900 dark:text-white">{link.name}</p>
                      <p className="text-xs text-dark-500 dark:text-dark-400">{link.description}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* More Links */}
              <div className="glass-card p-8">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">More Links</h3>
                <div className="flex flex-wrap gap-2">
                  {moreLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Buy Me a Coffee */}
              <motion.a
                href="https://www.buymeacoffee.com/hmusamaofficial"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-center gap-4 hover:border-yellow-400 dark:hover:border-yellow-500 transition-colors group"
              >
                <div className="w-14 h-14 rounded-2xl bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Coffee className="w-7 h-7 text-dark-900" />
                </div>
                <div>
                  <p className="font-bold text-dark-900 dark:text-white">Buy Me a Coffee</p>
                  <p className="text-sm text-dark-500 dark:text-dark-400">Support my work with a coffee! ☕</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order My Services Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-accent-600 dark:text-accent-400 mb-4">
              <ShoppingBag className="w-4 h-4" />
              Hire Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Order My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto">
              Ready to get started? Place an order through your preferred freelance platform or contact me directly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {freelancePlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card p-6 text-center group hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                  {platform.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {platform.description}
                </p>
                <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
                  {platform.tagline}
                </p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${platform.color} text-white font-medium text-sm group-hover:shadow-lg transition-shadow`}>
                  {platform.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Direct Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-dark-500 dark:text-dark-400 mb-4">
              Prefer to discuss your project first?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/923134544995"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Me
              </a>
              <a
                href="https://t.me/hmusamaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Telegram
              </a>
              <a
                href="mailto:hmusama2018@gmail.com?subject=Project%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open to Opportunities */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark-900 dark:text-white">
              💡 Open to Opportunities
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto mb-8">
              I&apos;m actively seeking QA opportunities where I can contribute my testing expertise and passion for quality. Whether it&apos;s full-time, contract, or freelance—let&apos;s talk!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium">
                ✅ Full-time Positions
              </div>
              <div className="px-4 py-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium">
                ✅ Contract/Freelance
              </div>
              <div className="px-4 py-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium">
                ✅ Remote Work
              </div>
              <div className="px-4 py-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-sm font-medium">
                ✅ QA Consulting
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
