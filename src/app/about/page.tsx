'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  FlaskConical,
  Bug,
  Brain,
  Target,
  Lightbulb,
  Heart,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  BookOpen,
  Award,
  Users,
  Coffee
} from 'lucide-react';

const journey = [
  {
    icon: GraduationCap,
    title: 'MS Chemistry Researcher',
    description: 'Developed analytical thinking and research methodology that now powers my testing approach.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FlaskConical,
    title: 'Scientific Foundation',
    description: 'Research experience brought systematic thinking, precision, and data analysis skills.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bug,
    title: 'QA Engineer',
    description: 'Transitioned to software quality, bringing scientific rigor to testing methodologies.',
    color: 'from-primary-500 to-accent-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Testing',
    description: 'Now leveraging cutting-edge AI tools for intelligent, efficient testing workflows.',
    color: 'from-orange-500 to-red-500',
  },
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'Uncompromising standards for software quality. Nothing escapes my testing scrutiny.',
  },
  {
    icon: Lightbulb,
    title: 'Analytical Thinking',
    description: 'Scientific background enables unique perspectives in problem-solving and root cause analysis.',
  },
  {
    icon: Zap,
    title: 'Adaptability',
    description: 'Rapid adaptation to new tools, technologies, and domain requirements.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Clear communication and effective teamwork with cross-functional teams.',
  },
];

const funFacts = [
  { label: 'Cups of Coffee', value: '∞', icon: Coffee },
  { label: 'Bugs Squashed', value: '500+', icon: Bug },
  { label: 'Test Cases Written', value: '1000+', icon: CheckCircle2 },
  { label: 'Happy Clients', value: '15+', icon: Heart },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30" />
                <div className="relative glass-card p-4 rounded-3xl">
                  <Image
                    src="https://avatars.githubusercontent.com/u/108584209?v=4"
                    alt="Muhammad Usama"
                    width={500}
                    height={500}
                    className="w-full rounded-2xl"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <Bug className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-dark-900 dark:text-white">QA Engineer</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400">@ Texinnova</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
                <Sparkles className="w-4 h-4" />
                About Me
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                From <span className="gradient-text">Chemistry</span> to{' '}
                <span className="gradient-text">Quality</span>
              </h1>
              
              <div className="space-y-4 text-dark-600 dark:text-dark-300 text-lg">
                <p>
                  I&apos;m <span className="font-semibold text-dark-900 dark:text-white">Muhammad Usama</span>, 
                  a QA Engineer with a unique journey from scientific research to software testing.
                </p>
                <p>
                  My background in MS Chemistry research has equipped me with{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">analytical rigor</span>,{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">systematic thinking</span>, and{' '}
                  <span className="text-primary-600 dark:text-primary-400 font-medium">attention to detail</span>{' '}
                  that I now apply to breaking software professionally.
                </p>
                <p>
                  Currently working at <span className="font-semibold">Texinnova Axis</span>, I specialize in 
                  comprehensive ERP system testing (ERPX), leveraging AI-powered testing workflows, and 
                  ensuring quality across complex enterprise applications.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/experience" className="btn-primary">
                  View Experience
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let&apos;s Connect
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle">
              An unconventional path that built unique problem-solving capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-dark-200 dark:from-dark-700 to-transparent z-0" />
                )}
                <div className="glass-card p-6 relative z-10 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-dark-500 dark:text-dark-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QA Section */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🎯 Why QA? <span className="gradient-text">Why Me?</span>
              </h2>
              
              <div className="space-y-6 text-dark-600 dark:text-dark-300">
                <p className="text-lg">
                  Modern software quality requires more than just technical skills—it demands{' '}
                  <span className="font-semibold text-dark-900 dark:text-white">analytical thinking</span>,{' '}
                  <span className="font-semibold text-dark-900 dark:text-white">attention to detail</span>, and{' '}
                  <span className="font-semibold text-dark-900 dark:text-white">domain expertise</span>.
                </p>
                <p className="text-lg">
                  My scientific research background has honed these exact qualities:
                </p>
                
                <div className="grid gap-4">
                  {[
                    { icon: '🔬', from: 'Research Methodology', to: 'Systematic test case design' },
                    { icon: '🧪', from: 'Experimental Precision', to: 'Meticulous bug documentation' },
                    { icon: '📊', from: 'Data Analysis', to: 'Pattern recognition in software behavior' },
                    { icon: '🧠', from: 'Critical Thinking', to: 'Root cause analysis and problem solving' },
                  ].map((item) => (
                    <div key={item.from} className="flex items-center gap-4 p-4 rounded-xl glass">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="font-medium text-dark-900 dark:text-white">{item.from}</span>
                        <span className="text-primary-600 dark:text-primary-400 mx-2">→</span>
                        <span className="text-dark-500 dark:text-dark-400">{item.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <blockquote className="text-xl md:text-2xl font-medium text-dark-800 dark:text-dark-200 mb-6 italic">
                  &quot;Great QA engineers are made through curiosity, methodology, and relentless pursuit of quality—not just coding skills.&quot;
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <span className="text-white font-bold">MU</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-white">Muhammad Usama</p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">QA Engineer @ Texinnova</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              What I <span className="gradient-text">Bring</span> to Your Team
            </h2>
            <p className="section-subtitle">
              Core values and competencies that drive my work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-dark-500 dark:text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-dark-900 dark:text-white">
              📊 By the Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4">
                    <fact.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{fact.value}</div>
                  <div className="text-dark-500 dark:text-dark-400">{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
