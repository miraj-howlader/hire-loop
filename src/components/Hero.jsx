'use client'

import {
  Briefcase,
  Search,
  Star,
} from 'lucide-react'
import { GrAnalytics } from 'react-icons/gr'
import { motion } from 'framer-motion'

export default function Hero() {
  const stats = [
    {
      icon: <Briefcase size={28} />,
      value: '50K+',
      label: 'Active Jobs',
    },
    {
      icon: <GrAnalytics size={28} />,
      value: '12K+',
      label: 'Companies',
    },
    {
      icon: <Search size={28} />,
      value: '5M',
      label: 'Job Seekers',
    },
    {
      icon: <Star size={28} />,
      value: '98%',
      label: 'Satisfaction Rate',
    },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/globe.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">

        {/* Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-4xl md:text-5xl lg:text-4xl font-bold leading-tight"
        >
          Assisting over 10,000 job seekers <br />
          find their dream positions
        </motion.h1>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-14">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex justify-start -right-4 text-green-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {item.value}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}