'use client'

import { Search, SearchIcon } from 'lucide-react'

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
        <span className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium">
          👜 50,000+ NEW JOBS THIS MONTH
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
         Find Your Dream Job Today with HireLoop
        
        </h1>

        {/* Paragraph */}
        <p className="max-w-2xl mx-auto mt-6 text-neutral-500 text-lg">
          Explore thousands of job opportunities from top companies.
          Search by role, skills, company, or location and take the
          next step in your professional journey.
        </p>

        {/* Search Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          
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

          <button className="h-14 px-8 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition">
            <SearchIcon/> 
          </button>
        </div>

        {/* Trending Tooltips */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {trending.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-full border border-neutral-300 bg-white px-5 py-3 shadow-sm hover:shadow-md transition"
            >
              <span className="text-sm font-medium text-neutral-700">
                🔥 {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}