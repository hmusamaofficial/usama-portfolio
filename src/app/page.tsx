'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { 
  ArrowDown, 
  Download, 
  Github, 
  Linkedin, 
  Mail,
  Bug,
  CheckCircle2,
  Zap,
  Shield,
  Target,
  ExternalLink,
  Award,
  Users,
  Briefcase
} from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '1+', icon: Briefcase },
  { label: 'ERP Modules Tested', value: '10+', icon: Target },
  { label: 'Testing Techniques', value: '15+', icon: Zap },
  { label: 'GitHub Contributions', value: '645+', icon: Github },
];

const highlights = [
  { icon: Bug, title: 'Bug Hunter', description: 'Finding defects before they find users' },
  { icon: Shield, title: 'Quality Guardian', description: 'Ensuring software reliability' },
  { icon: Zap, title: 'AI-Powered Testing', description: 'Leveraging cutting-edge AI tools' },
  { icon: Target, title: 'ERP Specialist', description: 'Multi-module expertise in ERPX' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/hmusamaofficial', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hmusama/', icon: Linkedin },
  { name: 'Email', href: 'mailto:hmusama2018@gmail.com', icon: Mail },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-500/10 to-transparent rounded-full" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
                  Available for new opportunities
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-dark-500 dark:text-dark-400 mb-2"
              >
                Assalam o Alaikum, I&apos;m
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
              >
                <span className="gradient-text">Muhammad</span>
                <br />
                <span className="text-dark-900 dark:text-white">Usama</span>
              </motion.h1>

              {/* Animated Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark-600 dark:text-dark-300 mb-6 h-10"
              >
                <TypeAnimation
                  sequence={[
                    'QA Engineer',
                    2000,
                    'Bug Hunter 🐛',
                    2000,
                    'ERP Testing Specialist',
                    2000,
                    'AI-Powered QA Expert',
                    2000,
                    'Quality Advocate',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Breaking software professionally to make it <span className="text-primary-600 dark:text-primary-400 font-semibold">unbreakable</span>. 
                Specialized in ERP systems testing, AI-powered QA workflows, and comprehensive quality assurance.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </Link>
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass hover:bg-primary-100 dark:hover:bg-primary-900/30 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
                
                {/* Profile Image Container */}
                <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-full animate-gradient p-1">
                    <div className="w-full h-full rounded-full bg-dark-50 dark:bg-dark-900 p-2">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-accent-100 dark:from-dark-800 dark:to-dark-700 flex items-center justify-center">
                        <Image
                          src="https://avatars.githubusercontent.com/u/108584209?v=4"
                          alt="Muhammad Usama"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 p-3 rounded-xl glass shadow-lg"
                  >
                    <Bug className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-4 -left-8 p-3 rounded-xl glass shadow-lg"
                  >
                    <CheckCircle2 className="w-8 h-8 text-accent-500" />
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 -right-12 p-3 rounded-xl glass shadow-lg"
                  >
                    <Shield className="w-6 h-6 text-purple-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-dark-500 dark:text-dark-400"
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-dark-500 dark:text-dark-400 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              What I <span className="gradient-text">Bring</span>
            </h2>
            <p className="section-subtitle">
              Combining analytical thinking with cutting-edge testing methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-dark-500 dark:text-dark-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Have a Project in <span className="gradient-text">Mind?</span>
              </h2>
              <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                I&apos;m always open to discussing QA opportunities, testing strategies, or collaboration on quality initiatives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  <Mail className="w-5 h-5" />
                  Let&apos;s Talk
                </Link>
                <a 
                  href="https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="w-5 h-5" />
                  Hire on Upwork
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
