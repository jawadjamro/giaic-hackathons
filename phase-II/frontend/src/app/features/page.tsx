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

export default function FeaturesPage() {
  return (
    <motion.div 
      className="min-h-screen bg-[#0F0F0F] text-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-emerald-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />

      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.header 
          className="py-6 flex items-center justify-between"
          variants={itemVariants}
        >
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ✨ Todo App
            </h1>
          </Link>
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

        {/* Features Hero */}
        <motion.section 
          className="py-20 text-center"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Features</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Discover all the tools you need to boost your productivity and stay organized
          </motion.p>
        </motion.section>

        {/* Detailed Features */}
        <motion.section 
          className="py-16"
          variants={itemVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Task Management Made Simple</h2>
              <p className="text-gray-400 mb-6 text-lg">
                Our intuitive interface lets you create, edit, and organize tasks with ease. 
                Add due dates, priority levels, and categories to keep everything structured.
              </p>
              <ul className="space-y-3">
                {[
                  "Create tasks with detailed descriptions",
                  "Set due dates and reminders",
                  "Assign priority levels (High, Medium, Low)",
                  "Categorize tasks by project or context",
                  "Mark tasks as complete with one click"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="h-3 w-24 bg-gray-700 rounded"></div>
                  <div className="h-3 w-8 bg-gray-700 rounded"></div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-800 rounded">
                      <div className="h-4 w-4 border border-gray-600 rounded mr-3"></div>
                      <div className="h-4 flex-1 bg-gray-700 rounded"></div>
                      <div className="h-4 w-4 bg-gray-700 rounded-full ml-3"></div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm">Task management interface preview</p>
            </motion.div>
          </div>
        </motion.section>

        {/* More Features Grid */}
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
            Everything You Need
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Notifications",
                description: "Get timely reminders for upcoming deadlines and important tasks",
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                )
              },
              {
                title: "Cross-Platform Sync",
                description: "Access your tasks from any device with seamless synchronization",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                )
              },
              {
                title: "Focus Mode",
                description: "Minimize distractions and concentrate on your most important tasks",
                icon: (
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Productivity Analytics",
                description: "Track your progress and identify patterns to improve your workflow",
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Team Collaboration",
                description: "Share tasks and collaborate with your team members in real-time",
                icon: (
                  <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Secure & Private",
                description: "Your data is encrypted and stored securely with industry-standard protocols",
                icon: (
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-600"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 mb-12 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-emerald-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Productivity?
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of users who have revolutionized their task management with our app.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/signup">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-4">
                  Get Started Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}