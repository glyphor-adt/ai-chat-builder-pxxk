import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Unleash the Power of AI-Driven Conversations
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 mt-4 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the future of communication with our AI-powered chat application. Get instant, intelligent responses and supercharge your productivity.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#"
              className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="border-2 border-gray-300 hover:border-primary px-6 py-3 rounded-xl text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1635341952635-31c99b7430ed?w=800&h=600"
            alt="AI Chat Interface"
            className="rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 rounded-xl"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
