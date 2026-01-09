'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Bug, 
  FileCode, 
  Gamepad2, 
  BarChart3,
  Sparkles,
  Eye,
  Star,
  Folder
} from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'ERPX Testing Suite',
    description: 'Comprehensive QA testing for enterprise resource planning system covering 10+ modules including Financials, HR, Inventory, Sales, and Purchase. Identified 500+ critical bugs before production.',
    tags: ['Manual Testing', 'ERP', 'Test Cases', 'Bug Tracking', 'Jira'],
    image: '/projects/erpx.png',
    highlights: [
      '10+ modules tested',
      '500+ bugs identified',
      '100% test coverage',
      'Cross-module integration testing'
    ],
    color: 'from-blue-500 to-cyan-500',
    featured: true,
    category: 'QA Testing',
  },
  {
    title: 'AI-Powered Test Automation',
    description: 'Pioneering AI-driven testing using Model Context Protocol (MCP) and AI assistants for intelligent test execution via natural language commands.',
    tags: ['AI Testing', 'MCP', 'ChatGPT', 'Claude AI', 'Automation'],
    github: 'https://github.com/hmusamaofficial/ERPX',
    highlights: [
      'Natural language test commands',
      'AI-generated test cases',
      'Intelligent bug detection',
      'Zero-code testing approach'
    ],
    color: 'from-purple-500 to-pink-500',
    featured: true,
    category: 'AI Testing',
  },
  {
    title: 'GitHub Readme Streak Stats',
    description: 'Forked and customized version of the popular GitHub streak stats widget, displaying contribution streaks on developer profiles.',
    tags: ['PHP', 'GitHub API', 'Open Source', 'Web Development'],
    github: 'https://github.com/hmusamaofficial/github-readme-streak-stats',
    live: 'https://nirzak-streak-stats.vercel.app',
    highlights: [
      'Customizable themes',
      'Real-time GitHub data',
      'SVG generation',
      'Open source contribution'
    ],
    color: 'from-orange-500 to-red-500',
    category: 'Open Source',
  },
  {
    title: 'Panda Snake Game',
    description: 'Interactive canvas-based snake game with a cute panda theme. Built with vanilla JavaScript and HTML5 Canvas for smooth gameplay.',
    tags: ['JavaScript', 'HTML5 Canvas', 'Game Dev', 'CSS'],
    github: 'https://github.com/hmusamaofficial/Panda-Snake-Game',
    highlights: [
      'Smooth animations',
      'Score tracking',
      'Responsive controls',
      'Fun gameplay'
    ],
    color: 'from-green-500 to-emerald-500',
    category: 'Game Development',
  },
  {
    title: 'Head & Tail Game',
    description: 'Simple yet engaging coin flip game built with HTML, CSS, and JavaScript. Features animated coin flips and score tracking.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game'],
    github: 'https://github.com/hmusamaofficial/head-and-tail-game',
    highlights: [
      'Animated coin flip',
      'Win/lose tracking',
      'Clean UI',
      'Mobile responsive'
    ],
    color: 'from-yellow-500 to-orange-500',
    category: 'Game Development',
  },
  {
    title: 'ERPX Web Interface',
    description: 'HTML/CSS prototype of ERPX enterprise system interface, demonstrating UI/UX design skills for complex business applications.',
    tags: ['HTML', 'CSS', 'UI/UX', 'Enterprise'],
    github: 'https://github.com/hmusamaofficial/ERPX-in-HTML',
    highlights: [
      'Enterprise UI design',
      'Module layouts',
      'Responsive design',
      'Clean architecture'
    ],
    color: 'from-indigo-500 to-blue-500',
    category: 'Web Development',
  },
];

const categories = ['All', 'QA Testing', 'AI Testing', 'Open Source', 'Game Development', 'Web Development'];

export default function ProjectsPage() {
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
              <Folder className="w-4 h-4" />
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              A showcase of my QA expertise, testing projects, and personal development work. Each project represents my commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Projects Completed', value: '15+', icon: Folder },
              { label: 'Bugs Found', value: '500+', icon: Bug },
              { label: 'Test Cases Written', value: '1000+', icon: FileCode },
              { label: 'Modules Tested', value: '10+', icon: BarChart3 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:border-primary-500/50 dark:hover:border-primary-400/50 transition-all duration-300"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  {project.featured && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                  <div className="relative z-10">
                    <span className="text-white/80 text-sm">{project.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-2 py-1 rounded-md bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                        >
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-dark-200 dark:border-dark-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {!project.github && !project.live && (
                      <span className="flex items-center gap-2 text-sm text-dark-400">
                        <Bug className="w-4 h-4" />
                        Private/Internal Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <Github className="w-16 h-16 text-dark-600 dark:text-dark-300 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
              See More on GitHub
            </h2>
            <p className="text-dark-500 dark:text-dark-400 max-w-xl mx-auto mb-8">
              Check out my GitHub profile for more projects, contributions, and code samples. I&apos;m always working on something new!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/hmusamaofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github className="w-5 h-5" />
                View GitHub Profile
              </a>
              <Link href="/contact" className="btn-secondary">
                <Sparkles className="w-5 h-5" />
                Work With Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
