// T105: Landing page with branding and auth CTAs

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function LandingPage() {
  return (
    <motion.div 
      className="min-h-screen bg-[#0F0F0F] text-gray-100 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      
      {/* Floating particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header 
          className="py-6 flex items-center justify-between"
          variants={itemVariants}
        >
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ✨ Todo App
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" size="sm" className="hover:bg-gray-800/50">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        </motion.header>

        {/* Hero section */}
        <motion.section 
          className="py-20 md:py-32 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block mb-6 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-sm font-medium text-blue-400">🚀 Modern Task Management</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Organize Your Tasks.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              Boost Your Productivity.
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Stay organized and productive with our intuitive task management app.
            Create, edit, and track your tasks effortlessly in a beautiful dark interface.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/signup">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800/50">
                View Features
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        {/* Features section */}
        <motion.section 
          className="py-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Add, Edit, and Delete Tasks",
                description: "Quickly manage your tasks with simple controls"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                title: "Task Categories & Priorities",
                description: "Organize tasks by importance and category"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
                title: "Dark Mode Optimized UI",
                description: "Comfortable viewing in any lighting condition"
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Fast, Simple, and Secure",
                description: "Built with security and performance in mind"
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-lg hover:shadow-blue-500/10"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section 
          className="py-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "Step 1", title: "Create your tasks", description: "Add tasks with titles, descriptions, and due dates" },
              { step: "Step 2", title: "Organize and prioritize", description: "Categorize and set priorities for your tasks" },
              { step: "Step 3", title: "Stay focused and productive", description: "Complete tasks and track your progress" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-xl transition-all duration-300 hover:border-gray-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-blue-400 font-bold text-lg mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section 
          className="py-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Todo App
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: "⏱️", title: "Saves Time", description: "Efficient task management" },
              { icon: "😌", title: "Reduces Stress", description: "Keep everything organized" },
              { icon: "📋", title: "Keeps You Organized", description: "Never miss a deadline" },
              { icon: "📱", title: "Works on All Devices", description: "Sync across platforms" }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-lg transition-all duration-300 hover:bg-gray-800/40"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 mb-12"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-emerald-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start Managing Your Tasks Today
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of users who have transformed their productivity with our intuitive task management solution.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/signup">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                  Launch Todo App
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          className="py-8 text-center text-sm text-gray-500 border-t border-gray-800"
          variants={itemVariants}
        >
          <motion.div 
            className="mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
              ✨ Todo App
            </h3>
            <p className="text-gray-400">Simple & Efficient Task Management</p>
          </motion.div>
          <motion.div 
            className="flex justify-center space-x-6 mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            &copy; 2026 Todo App. Built with Next.js, FastAPI, and PostgreSQL.
          </motion.p>
        </motion.footer>
      </motion.div>
    </motion.div>
  );
}
