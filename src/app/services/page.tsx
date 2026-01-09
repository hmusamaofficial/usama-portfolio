'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Bug,
  TestTube2,
  FileSearch,
  Brain,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  Search,
  FileText,
  Repeat,
  Users,
  Zap,
  ExternalLink
} from 'lucide-react';

const services = [
  {
    icon: TestTube2,
    title: 'Manual Testing',
    description: 'Comprehensive manual testing for web and mobile applications with meticulous attention to detail.',
    features: [
      'Functional Testing',
      'UI/UX Testing',
      'Cross-browser Testing',
      'Mobile Responsiveness',
      'Accessibility Testing',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Bug,
    title: 'Bug Reporting & Tracking',
    description: 'Detailed bug documentation with clear reproduction steps, screenshots, and severity classification.',
    features: [
      'Detailed Bug Reports',
      'Reproduction Steps',
      'Screenshot/Video Evidence',
      'Severity Classification',
      'Jira Integration',
    ],
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: FileSearch,
    title: 'Test Case Design',
    description: 'Creating comprehensive test cases and test plans aligned with project requirements.',
    features: [
      'Test Plan Creation',
      'Test Case Documentation',
      'Edge Case Identification',
      'Requirements Traceability',
      'Test Coverage Analysis',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Testing',
    description: 'Leveraging AI tools like ChatGPT, Gemini, and Claude for efficient test case generation.',
    features: [
      'AI Test Case Generation',
      'ChatGPT Integration',
      'Google Gemini Usage',
      'Claude AI Workflows',
      'GitHub Copilot',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Repeat,
    title: 'Regression Testing',
    description: 'Systematic regression testing to ensure stability across releases and updates.',
    features: [
      'Regression Test Suites',
      'Release Validation',
      'Impact Analysis',
      'Smoke Testing',
      'Sanity Testing',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: ClipboardCheck,
    title: 'ERP System Testing',
    description: 'Specialized testing for enterprise resource planning systems across multiple modules.',
    features: [
      'Multi-module Testing',
      'Integration Testing',
      'Business Workflow Validation',
      'Data Integrity Checks',
      'User Permission Testing',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
];

const process = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Discuss Requirements',
    description: 'Understanding your project, goals, and quality expectations.',
  },
  {
    step: 2,
    icon: FileText,
    title: 'Create Test Plan',
    description: 'Developing comprehensive test strategy and test cases.',
  },
  {
    step: 3,
    icon: Search,
    title: 'Execute Testing',
    description: 'Systematic test execution with thorough documentation.',
  },
  {
    step: 4,
    icon: Bug,
    title: 'Report & Track',
    description: 'Detailed bug reports and defect tracking until resolution.',
  },
];

const platforms = [
  {
    name: 'Upwork',
    url: 'https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e',
    description: 'Top Rated Freelancer',
  },
  {
    name: 'Fiverr',
    url: 'https://www.fiverr.com/i_am_muhammad',
    description: '5.0 Star Rating',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              What I Offer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              QA <span className="gradient-text">Services</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              Professional quality assurance services to ensure your software meets the highest standards of quality and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 md:p-8 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-dark-500 dark:text-dark-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-dark-600 dark:text-dark-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              How I <span className="gradient-text">Work</span>
            </h2>
            <p className="section-subtitle">
              A systematic approach to delivering quality assurance excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full glass mb-4 relative">
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <item.icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-dark-500 dark:text-dark-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Hire Me as Your <span className="gradient-text">QA Partner</span>?
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: 'Quick turnaround with quality results' },
                  { icon: Brain, text: 'AI-augmented testing for efficiency' },
                  { icon: Users, text: 'Clear communication and collaboration' },
                  { icon: CheckCircle2, text: 'Meticulous attention to detail' },
                  { icon: Bug, text: 'Comprehensive bug documentation' },
                  { icon: ClipboardCheck, text: 'ERP system expertise' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-4 p-4 rounded-xl glass">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="font-medium text-dark-800 dark:text-dark-200">{item.text}</span>
                  </div>
                ))}
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
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Hire Me On</h3>
                <div className="space-y-4">
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-dark-100 dark:bg-dark-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors group"
                    >
                      <div>
                        <p className="font-semibold text-dark-900 dark:text-white">{platform.name}</p>
                        <p className="text-sm text-dark-500 dark:text-dark-400">{platform.description}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-dark-400 group-hover:text-primary-500 transition-colors" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-dark-200 dark:border-dark-700">
                  <p className="text-dark-500 dark:text-dark-400 text-sm mb-4">
                    Prefer direct communication?
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Contact Me Directly
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
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
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-900 dark:text-white">
                Ready to Ensure <span className="gradient-text">Quality</span>?
              </h2>
              <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto mb-8">
                Let&apos;s discuss how I can help ensure your software meets the highest quality standards.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a 
                  href="https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Upwork Profile
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
