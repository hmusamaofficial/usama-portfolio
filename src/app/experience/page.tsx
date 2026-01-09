'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
  Bug,
  Sparkles,
  ArrowRight,
  Database,
  Users,
  ShoppingCart,
  Package,
  DollarSign,
  Award,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const experience = [
  {
    role: 'QA Engineer',
    company: 'Texinnova Axis',
    location: 'Pakistan',
    period: '2024 - Present',
    type: 'Full-time',
    current: true,
    description: 'Comprehensive quality assurance for ERPX enterprise system with focus on multi-module testing, AI-powered workflows, and ensuring business-critical functionality.',
    highlights: [
      'Designed and executed comprehensive test scenarios for complex ERP application features across 10+ modules',
      'Specialized in Financials, HR, Inventory, Sales, and Purchase module testing ensuring accuracy in critical business operations',
      'Identified and documented critical bugs before production release, preventing potential customer impact',
      'Implemented AI-driven testing approaches using ChatGPT, Gemini, Claude AI, and GitHub Copilot',
      'Validated end-to-end business workflows spanning multiple ERP modules',
      'Collaborated in Agile/Scrum environment with sprint planning, daily standups, and retrospectives',
      'Created detailed bug reports with reproduction steps, screenshots, and severity classifications',
      'Performed exploratory testing to uncover edge cases and usability issues',
      'Tested role-based access control and user permissions across all modules',
    ],
    technologies: ['Manual Testing', 'ERPX', 'Jira', 'Agile/Scrum', 'AI-Assisted Testing', 'Git'],
  },
  {
    role: 'Freelance QA & Testing Services',
    company: 'Upwork & Fiverr',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Freelance',
    current: true,
    description: 'Providing professional quality assurance and testing services to international clients across various industries and application types.',
    highlights: [
      'Delivered manual testing services for web and mobile applications',
      'Created comprehensive test documentation and bug reports',
      'Achieved 5-star ratings with positive client feedback',
      'Worked with clients from Sweden, Norway, and other countries',
      'Provided programming and technical solutions alongside QA services',
    ],
    technologies: ['Manual Testing', 'Bug Reporting', 'Test Documentation', 'Client Communication'],
  },
];

const erpModules = [
  { name: 'Financials', icon: DollarSign, expertise: 'Expert', description: 'Accounting, Billing, Invoicing, Financial Reports' },
  { name: 'HR & Payroll', icon: Users, expertise: 'Expert', description: 'Employee Management, Payroll, Leave, Attendance' },
  { name: 'Inventory', icon: Package, expertise: 'Expert', description: 'Stock Tracking, Warehouse, Stock Movements' },
  { name: 'Sales', icon: ShoppingCart, expertise: 'Expert', description: 'Sales Orders, Quotations, Customer Management' },
  { name: 'Purchase', icon: ShoppingCart, expertise: 'Expert', description: 'Purchase Orders, Vendor Management, Procurement' },
  { name: 'Master Data', icon: Database, expertise: 'Advanced', description: 'Data Integrity, Master Records, Configuration' },
];

const achievements = [
  { icon: Bug, value: '500+', label: 'Bugs Identified' },
  { icon: Target, value: '10+', label: 'ERP Modules Tested' },
  { icon: CheckCircle2, value: '1000+', label: 'Test Cases Executed' },
  { icon: Award, value: '5.0', label: 'Fiverr Rating' },
];

export default function ExperiencePage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Professional Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              From scientific research to QA excellence—a journey of continuous learning and quality obsession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{item.value}</div>
                  <div className="text-dark-500 dark:text-dark-400 text-sm">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-white dark:border-dark-900 shadow-lg hidden md:block z-10" />

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass-card p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {exp.current && (
                              <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium">
                                Current
                              </span>
                            )}
                            <span className="px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 mt-1">
                            <Building2 className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 text-sm mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-600 dark:text-dark-300 mb-4">{exp.description}</p>

                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-dark-900 dark:text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.slice(0, 5).map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-dark-600 dark:text-dark-300 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ERP Expertise */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              🏢 ERPX Module <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle">
              Deep testing experience across all major enterprise resource planning modules
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpModules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <module.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-dark-900 dark:text-white">{module.name}</h3>
                      <span className="px-2 py-0.5 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 text-xs font-medium">
                        {module.expertise}
                      </span>
                    </div>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">{module.description}</p>
                  </div>
                </div>
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
            className="glass-card p-8 md:p-12 text-center"
          >
            <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark-900 dark:text-white">
              Ready to bring this expertise to your team?
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto mb-8">
              I&apos;m actively seeking new QA opportunities where I can contribute my testing expertise and passion for quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
