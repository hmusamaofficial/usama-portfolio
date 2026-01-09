'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
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
  Briefcase,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  ChevronRight,
  Code,
  FileSearch,
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  Star
} from 'lucide-react';

// Stats data
const stats = [
  { label: 'Years Experience', value: '1+', icon: Briefcase },
  { label: 'ERP Modules Tested', value: '10+', icon: Target },
  { label: 'Bugs Found', value: '500+', icon: Bug },
  { label: 'GitHub Contributions', value: '650+', icon: Github },
];

// Social links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/hmusamaofficial', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hmusama/', icon: Linkedin },
  { name: 'Email', href: 'mailto:hmusama2018@gmail.com', icon: Mail },
];

// Education data
const education = [
  {
    degree: 'Master of Science (MS) in Chemistry',
    institution: 'University of the Education',
    location: 'Lahore, Pakistan',
    period: '2024 - 2026',
    description: 'Research focus on analytical chemistry. Developed strong analytical thinking and research methodology skills now applied to QA.',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Science (BS) in Chemistry',
    institution: 'University of the Punjab',
    location: 'Lahore, Pakistan', 
    period: '2019 - 2023',
    description: 'Built foundation in scientific methodology, data analysis, and systematic problem-solving approaches.',
    icon: GraduationCap,
  },
];

// Experience data with company logos
const experiences = [
  {
    title: 'QA Engineer',
    company: 'Texinnova',
    logo: 'https://texinnova.com/texinnova.svg',
    period: 'August 2025 - Present',
    location: 'Lahore, Pakistan (Hybrid)',
    type: 'Full-time',
    description: 'Leading QA efforts for ERPX - a comprehensive ERP system. Testing 10+ modules including Financials, HR, Sales, Purchase, and Inventory.',
    achievements: [
      'Tested 10+ ERP modules end-to-end',
      'Identified 500+ critical bugs before production',
      'Implemented AI-powered testing workflows',
      'Created comprehensive test documentation',
    ],
    skills: ['Manual Testing', 'ERP Testing', 'AI Testing', 'Jira', 'Agile'],
  },
  {
    title: 'Research & Development Associate',
    company: 'Burlytex Pvt Ltd',
    logo: 'https://texinnova.com/icons/burlytex.svg',
    period: 'July 2025 - July 2025',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    description: 'Applied chemistry expertise in R&D for textile manufacturing processes and quality control.',
    achievements: [
      'Quality control for textile products',
      'Process optimization research',
      'Data analysis and reporting',
      'Cross-functional collaboration',
    ],
    skills: ['R&D', 'Quality Control', 'Data Analysis', 'Chemistry'],
  },
  {
    title: 'R&D Associate',
    company: 'Top Notch Rubber & Metals',
    logo: 'https://texinnova.com/icons/topNotchLogo.svg',
    period: 'May 2025 - June 2025',
    location: 'Lahore, Pakistan',
    type: 'Full-time',
    description: 'Conducted research on material properties and quality assurance for rubber and metal products.',
    achievements: [
      'Material testing and analysis',
      'Quality assurance procedures',
      'Technical documentation',
      'Lab equipment operation',
    ],
    skills: ['R&D', 'Material Testing', 'Documentation', 'Lab Work'],
  },
];

// Skills categories
const skillCategories = [
  {
    title: 'Testing Expertise',
    icon: Bug,
    skills: ['Manual Testing', 'Regression Testing', 'UAT', 'Smoke Testing', 'Exploratory Testing', 'Integration Testing'],
  },
  {
    title: 'ERP Modules',
    icon: Building2,
    skills: ['Financials', 'HR & Payroll', 'Sales', 'Purchase', 'Inventory', 'Stock Management'],
  },
  {
    title: 'AI Testing Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'GitHub Copilot', 'Claude AI', 'Google Gemini', 'MCP Protocol'],
  },
  {
    title: 'Tools & Methods',
    icon: Code,
    skills: ['Jira', 'Git/GitHub', 'Agile/Scrum', 'SDLC', 'STLC', 'Test Documentation'],
  },
];

// Featured projects
const featuredProjects = [
  {
    title: 'ERPX Testing Suite',
    description: 'Comprehensive QA testing for enterprise resource planning system covering 10+ modules.',
    tags: ['Manual Testing', 'ERP', 'Jira'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI-Powered Test Automation',
    description: 'Pioneering AI-driven testing using MCP and AI assistants for intelligent test execution.',
    tags: ['AI Testing', 'MCP', 'Automation'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'GitHub Readme Stats',
    description: 'Customized GitHub streak stats widget displaying contribution streaks.',
    tags: ['PHP', 'Open Source'],
    color: 'from-orange-500 to-red-500',
  },
];

// Services
const services = [
  {
    icon: FileSearch,
    title: 'Manual Testing',
    description: 'Comprehensive manual testing including functional, regression, and exploratory testing.',
  },
  {
    icon: Building2,
    title: 'ERP System Testing',
    description: 'Specialized testing for ERP modules - Financials, HR, Sales, Purchase, Inventory.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered QA',
    description: 'Leveraging AI tools for test case generation and intelligent testing workflows.',
  },
  {
    icon: Bug,
    title: 'Bug Hunting',
    description: 'Expert defect identification with detailed documentation and reproduction steps.',
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
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

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-dark-500 dark:text-dark-400 mb-2"
              >
                Assalam o Alaikum, I&apos;m
              </motion.p>

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
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
              >
                Breaking software professionally to make it{' '}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">unbreakable</span>.
                Specialized in ERP systems testing, AI-powered QA workflows, and comprehensive quality assurance.
              </motion.p>

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
                  href="/resume.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Resume
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center lg:justify-start gap-4"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5 text-dark-600 dark:text-dark-300" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white">MU</span>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 p-4 glass-card"
                >
                  <Bug className="w-8 h-8 text-primary-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute -bottom-4 -left-4 p-4 glass-card"
                >
                  <Shield className="w-8 h-8 text-accent-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 text-dark-400"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:border-primary-500/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Users className="w-4 h-4" />
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              My <span className="gradient-text">Introduction</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
                I&apos;m a <strong className="text-primary-600 dark:text-primary-400">QA Engineer</strong> at Texinnova with a unique background - 
                an <strong>MS in Chemistry</strong> that gives me exceptional analytical thinking and attention to detail.
              </p>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
                I specialize in <strong className="text-primary-600 dark:text-primary-400">ERP system testing</strong>, having tested 10+ modules 
                of ERPX including Financials, HR, Sales, Purchase, and Inventory. I leverage <strong>AI-powered tools</strong> like 
                ChatGPT, Claude, and GitHub Copilot to enhance testing efficiency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Read More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Why QA Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: Bug, title: 'Bug Hunter', desc: 'Finding defects before users do' },
                { icon: Shield, title: 'Quality Guardian', desc: 'Ensuring software reliability' },
                { icon: Zap, title: 'AI-Powered Testing', desc: 'Leveraging cutting-edge AI tools' },
                { icon: Target, title: 'ERP Specialist', desc: 'Multi-module expertise in ERPX' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card hover:border-primary-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 dark:text-white">{item.title}</h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <GraduationCap className="w-4 h-4" />
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Academic <span className="gradient-text">Background</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Briefcase className="w-4 h-4" />
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Work <span className="gradient-text">History</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 flex items-center justify-center p-3 shadow-lg">
                      <img 
                        src={exp.logo} 
                        alt={exp.company}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <Building2 className="w-10 h-10 text-primary-500 hidden" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900 dark:text-white">{exp.title}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-dark-600 dark:text-dark-300 mb-4">{exp.description}</p>

                    <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-300">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/experience" className="btn-secondary">
              View Full Experience <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Zap className="w-4 h-4" />
              Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/skills" className="btn-secondary">
              View All Skills <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Code className="w-4 h-4" />
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Featured <span className="gradient-text">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:border-primary-500/50 transition-all"
              >
                <div className={`h-24 bg-gradient-to-br ${project.color} p-4 relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <h3 className="relative z-10 text-lg font-bold text-white">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded text-xs bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/projects" className="btn-secondary">
              View All Projects <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative bg-dark-50/50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Sparkles className="w-4 h-4" />
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              What I <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary-500/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/services" className="btn-secondary">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <MessageCircle className="w-4 h-4" />
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Have a Project? <span className="gradient-text">Let&apos;s Talk!</span>
            </h2>
            <p className="text-dark-500 dark:text-dark-400 text-lg max-w-2xl mx-auto mb-8">
              I&apos;m currently available for freelance work and full-time opportunities. 
              Let&apos;s discuss how I can help ensure quality in your software projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
              <a
                href="https://wa.me/923134544995"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01c5bcc00e0f0a4a9e"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                Hire on Upwork
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
