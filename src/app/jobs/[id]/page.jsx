import React from 'react'
import { Button, Link } from '@heroui/react'
import {
  MapPin,
  Briefcase,
  CircleDollar,
  Calendar,
  ArrowUpRight,
} from '@gravity-ui/icons'
import { getJobById } from '@/lib/api/jobs'

const JobDetailsPage = async ({ params }) => {
  const { id } = await params
  const job = await getJobById(id)

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-400">
        Job not found
      </div>
    )
  }

  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-12">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* COMPANY HEADER */}
          <div className="flex items-center gap-4">
            <img
              src={job.companyLogo}
              alt={job.companyName}
              className="w-14 h-14 rounded-xl object-contain bg-zinc-900 border border-zinc-800 p-2"
            />

            <div>
              <h2 className="text-lg font-medium text-zinc-300">
                {job.companyName}
              </h2>
              <p className="text-sm text-zinc-500 capitalize">
                {job.category} • {job.type}
              </p>
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold">{job.title}</h1>

          {/* BADGES */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {job.category}
            </span>

            <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {job.type}
            </span>

            <span className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300">
              {job.status}
            </span>
          </div>

          {/* DESCRIPTION */}
          <section>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">
              {job.description}
            </p>
          </section>

          {/* REQUIREMENTS */}
          <section>
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <p className="text-zinc-300 whitespace-pre-line">
              {job.requirements}
            </p>
          </section>

          {/* BENEFITS */}
          {job.benefits && (
            <section>
              <h3 className="text-xl font-semibold mb-2">Benefits</h3>
              <p className="text-zinc-300 whitespace-pre-line">
                {job.benefits}
              </p>
            </section>
          )}

          {/* COMPANY SECTION */}
          <section className="border border-zinc-800 bg-zinc-900/40 rounded-2xl p-5 flex items-center gap-4">
            <img
              src={job.companyLogo}
              className="w-14 h-14 rounded-xl object-contain bg-zinc-800 p-2"
              alt={job.companyName}
            />

            <div>
              <h4 className="font-semibold">{job.companyName}</h4>
              <p className="text-sm text-zinc-400">
                Hiring for {job.category}
              </p>
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 h-fit sticky top-8">

          <h3 className="text-lg font-semibold">Job Overview</h3>

          {/* LOCATION */}
          <div className="flex gap-3">
            <MapPin className="text-purple-400" />
            <div>
              <p className="text-xs text-zinc-500">Location</p>
              <p className="text-sm">{job.location}</p>
            </div>
          </div>

          {/* TYPE */}
          <div className="flex gap-3">
            <Briefcase className="text-purple-400" />
            <div>
              <p className="text-xs text-zinc-500">Job Type</p>
              <p className="text-sm capitalize">{job.type}</p>
            </div>
          </div>

          {/* SALARY */}
          <div className="flex gap-3">
            <CircleDollar className="text-purple-400" />
            <div>
              <p className="text-xs text-zinc-500">Salary</p>
              <p className="text-sm">
                {job.currency} {job.minsalary} - {job.maxsalary}
              </p>
            </div>
          </div>

          {/* DEADLINE */}
          <div className="flex gap-3">
            <Calendar className="text-purple-400" />
            <div>
              <p className="text-xs text-zinc-500">Deadline</p>
              <p className="text-sm">{formatDate(job.deadline)}</p>
            </div>
          </div>

          {/* POSTED DATE */}
          <div className="text-xs text-zinc-500">
            Posted: {formatDate(job.createdAt)}
          </div>

          {/* APPLY BUTTON */}
          <Link
            as={Link}
            href={`/jobs/${id}/apply`}
            className="w-full px-4 py-2 text-center items-center justify-center text-xl bg-purple-600 hover:bg-purple-500 text-white font-medium"
            endContent={<ArrowUpRight />}
          >
            Apply Now
          </Link>
        </aside>
      </div>
    </main>
  )
}

export default JobDetailsPage