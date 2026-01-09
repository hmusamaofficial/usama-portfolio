'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Bug,
  TestTube2,
  Database,
  Brain,
  Wrench,
  Cpu,
  CheckCircle2,
  Sparkles,
  Code2,
  Globe,
  Server,
  GitBranch,
  FileSearch,
  ClipboardCheck,
  Layers,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    id: 'testing',
    name: 'Testing Expertise',
    icon: TestTube2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Manual Testing', level: 95 },
      { name: 'Test Case Design', level: 90 },
      { name: 'Bug Reporting', level: 95 },
      { name: 'Regression Testing', level: 90 },
      { name: 'UAT', level: 85 },
      { name: 'Smoke Testing', level: 90 },
      { name: 'Sanity Testing', level: 90 },
      { name: 'Exploratory Testing', level: 85 },
      { name: 'Integration Testing', level: 80 },
    ],
  },
  {
    id: 'erp',
    name: 'ERP & Domain',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'ERPX System', level: 95 },
      { name: 'Financials Module', level: 90 },
      { name: 'HR & Payroll', level: 90 },
      { name: 'Inventory Management', level: 90 },
      { name: 'Sales Module', level: 85 },
      { name: 'Purchase Module', level: 85 },
      { name: 'Stock Management', level: 85 },
      { name: 'User Management', level: 80 },
      { name: 'Business Workflows', level: 85 },
    ],
  },
  {
    id: 'ai',
    name: 'AI-Powered Testing',
    icon: Brain,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'ChatGPT for Testing', level: 90 },
      { name: 'Google Gemini', level: 85 },
      { name: 'Claude AI', level: 85 },
      { name: 'GitHub Copilot', level: 80 },
      { name: 'MCP (Model Context Protocol)', level: 75 },
      { name: 'AI Test Case Generation', level: 85 },
      { name: 'Agentic Workflows', level: 70 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Jira', level: 90 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 75 },
      { name: 'Chrome DevTools', level: 80 },
      { name: 'Markdown', level: 90 },
      { name: 'SQL Basics', level: 70 },
    ],
  },
  {
    id: 'methodology',
    name: 'Methodologies',
    icon: Layers,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Agile/Scrum', level: 90 },
      { name: 'SDLC', level: 85 },
      { name: 'STLC', level: 90 },
      { name: 'Defect Lifecycle', level: 95 },
      { name: 'Risk-Based Testing', level: 80 },
      { name: 'Test Documentation', level: 90 },
    ],
  },
  {
    id: 'learning',
    name: 'Currently Learning',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
    skills: [
      { name: 'Selenium WebDriver', level: 40 },
      { name: 'Playwright', level: 45 },
      { name: 'API Testing', level: 60 },
      { name: 'Performance Testing', level: 35 },
      { name: 'CI/CD Integration', level: 40 },
    ],
  },
];

const coreCompetencies = [
  { icon: CheckCircle2, text: 'Test Case Design & Execution' },
  { icon: Bug, text: 'Defect Tracking & Lifecycle Management' },
  { icon: FileSearch, text: 'Requirements Analysis & Validation' },
  { icon: Globe, text: 'Cross-Browser & Cross-Platform Testing' },
  { icon: ClipboardCheck, text: 'Documentation & Reporting' },
  { icon: Code2, text: 'Team Collaboration & Communication' },
  { icon: GitBranch, text: 'Version Control (Git)' },
  { icon: Cpu, text: 'Analytical Problem Solving' },
];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState('testing');

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
              <Sparkles className="w-4 h-4" />
              Technical Expertise
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg md:text-xl max-w-2xl mx-auto">
              A comprehensive toolkit for ensuring software quality, from manual testing expertise to cutting-edge AI-powered workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : 'glass hover:bg-dark-100 dark:hover:bg-dark-800 text-dark-600 dark:text-dark-300'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeSkills?.color} flex items-center justify-center`}>
                {activeSkills && <activeSkills.icon className="w-7 h-7 text-white" />}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white">
                  {activeSkills?.name}
                </h2>
                <p className="text-dark-500 dark:text-dark-400">
                  {activeSkills?.skills.length} skills in this category
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {activeSkills?.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-dark-800 dark:text-dark-200">{skill.name}</span>
                    <span className="text-sm text-dark-500 dark:text-dark-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="skill-progress"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 relative bg-dark-50 dark:bg-dark-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">
              Core <span className="gradient-text">Competencies</span>
            </h2>
            <p className="section-subtitle">
              The fundamental skills that drive quality in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreCompetencies.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 rounded-xl glass"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <span className="font-medium text-dark-800 dark:text-dark-200">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Target */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark-900 dark:text-white">
              🎯 Target Certifications
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'ISTQB Foundation Level', status: 'In Progress' },
                { name: 'ISTQB Advanced Test Analyst', status: 'Planned' },
                { name: 'Certified Agile Tester (CAT)', status: 'Future' },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-4 rounded-xl glass border-2 border-primary-200 dark:border-primary-800"
                >
                  <p className="font-semibold text-dark-900 dark:text-white">{cert.name}</p>
                  <p className="text-sm text-primary-600 dark:text-primary-400">{cert.status}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
