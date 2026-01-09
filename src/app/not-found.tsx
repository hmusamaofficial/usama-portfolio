'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Bug } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6">
            <Bug className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-dark-500 dark:text-dark-400 text-lg mb-8 max-w-md mx-auto">
            Looks like this page went on an unexpected vacation. Even QA Engineers can&apos;t find bugs here!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="btn-primary"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
