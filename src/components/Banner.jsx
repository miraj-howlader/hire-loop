'use client'

import { Search, SearchIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Banner() {
  const trending = [
    'Trending Position',
    'Product Designer',
    'AI Engineer',
    'DevOps Engineer',
  ]

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium"
        >
          👜 50,000+ NEW JOBS THIS MONTH
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-5xl md:text-7xl font-bold leading-tight"
        >
          Find Your Dream Job Today with HireLoop
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto mt-6 text-neutral-500 text-lg"
        >
          Explore thousands of job opportunities from top companies.
          Search by role, skills, company, or location and take the
          next step in your professional journey.
        </motion.p>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto"
        >

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Job title, keyword, or skill..."
              className="w-full h-14 rounded-xl border border-neutral-300 pl-12 pr-4 outline-none focus:border-green-500"
            />
          </div>

          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              type="text"
              placeholder="Location..."
              className="w-full h-14 rounded-xl border border-neutral-300 pl-12 pr-4 outline-none focus:border-green-500"
            />
          </div>

          <button className="h-14 px-8 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition flex items-center justify-center gap-2">
            <SearchIcon size={18} />
            Search
          </button>
        </motion.div>

        {/* Trending Tooltips */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {trending.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer rounded-full border border-neutral-300 bg-white px-5 py-3 shadow-sm hover:shadow-md transition"
            >
              <span className="text-sm font-medium text-neutral-700">
                🔥 {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}