import React from 'react'
import { Zap, Shield, TrendingUp, MessageSquare, Users, Code } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const featuresData = [
    {
      icon: Zap,
      title: 'Instant Responses, Zero Wait Time',
      description: 'Get immediate answers and insights with our cutting-edge AI, eliminating frustrating delays.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security for Your Conversations',
      description: 'Your data is protected with advanced encryption and robust security protocols.',
    },
    {
      icon: TrendingUp,
      title: 'Boost Productivity by 40% with AI Assistance',
      description: 'Streamline your workflow and achieve peak efficiency with our intelligent AI companion.',
    },
    {
      icon: MessageSquare,
      title: 'Engage in Natural, Human-Like Conversations',
      description: 'Experience seamless and intuitive interactions with our sophisticated AI chat technology.',
    },
    {
      icon: Users,
      title: 'Collaborate Seamlessly with Team Chat Integration',
      description: 'Enhance teamwork and communication with integrated chat features for efficient collaboration.',
    },
    {
      icon: Code,
      title: 'Customize and Integrate with Our Open API',
      description: 'Tailor the AI chat experience to your specific needs with our flexible and extensible API.',
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold mb-8 text-center">Supercharge Your Workflow with AI Chat</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-background rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4">
              <feature.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
