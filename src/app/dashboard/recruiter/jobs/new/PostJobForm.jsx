'use client'

import React, { useState } from 'react'
import { Check } from '@gravity-ui/icons'
import {
  Button,
  ListBox,
  Select,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  TextArea,
} from '@heroui/react'
import { createJob } from '@/lib/actions/jobs'
import toast from 'react-hot-toast'
import { redirect, useRouter } from 'next/navigation'

const categories = [
  { id: 'software', label: 'Software Development' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'sales', label: 'Sales' },
]

const jobTypes = [
  { id: 'full-time', label: 'Full Time' },
  { id: 'part-time', label: 'Part Time' },
  { id: 'contract', label: 'Contract' },
  { id: 'internship', label: 'Internship' },
]

const currencies = [
  { id: 'USD', label: 'USD' },
  { id: 'EUR', label: 'EUR' },
  { id: 'BDT', label: 'BDT' },
  { id: 'INR', label: 'INR' },
]

const statuses = [
  { id: 'active', label: 'Active' },
  { id: 'inactive', label: 'Inactive' },
]

const PostJobForm = ({company}) => {
  const router = useRouter()
const [loading, setLoading] = useState(false)
  
 const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const jobData = Object.fromEntries(formData.entries())

    jobData.minsalary = Number(jobData.minsalary)
    jobData.maxsalary = Number(jobData.maxsalary)

    if (jobData.minsalary > jobData.maxsalary) {
      toast.error(
        'Minimum salary cannot be greater than maximum salary'
      )
      return
    }

    const payload = {
        ...jobData,
        companyId: company._id,
        companyName: company.name,
        companyLogo: company.logo,
        status: 'active',
      
    }

    const res = await createJob(payload)

    if (res?.insertedId) {
      toast.success('Job posted successfully')
      router.push('/dashboard/recruiter')
    } else {
      toast.error('Failed to post job')
    }
  } catch (error) {
    console.error(error)
    toast.error('Something went wrong')
  } finally {
    setLoading(false)
  }
}

  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-4xl rounded-2xl border border-default-200 bg-content1 p-6 shadow-sm">
        <div className='flex gap-6'>
          <h1 className="mb-6 text-2xl font-semibold">
          Post a New Job
        </h1>
        <span className='text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50'>{company.status}</span>
        </div>

        {company.status !== 'Approved' && <div>Please wait to get approval...</div>}

       {company.status==='Approved' && <Form className="flex flex-col gap-6" onSubmit={handleSubmit} validationBehavior='aria'>
          {/* GRID */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* TITLE */}
            <TextField isRequired name="title">
              <Label>Job Title</Label>
              <Input placeholder="e.g. Frontend Developer" />
              <FieldError />
            </TextField>

            {/* CATEGORY */}
            <div className="flex flex-col gap-1">
              <Label>Job Category</Label>
              <Select name="category" placeholder="Select category">
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {categories.map((c) => (
                      <ListBox.Item
                        key={c.id}
                        id={c.id}
                        textValue={c.label}
                      >
                        {c.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* JOB TYPE */}
            <div className="flex flex-col gap-1">
              <Label>Job Type</Label>
              <Select name="type" placeholder="Select job type">
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {jobTypes.map((t) => (
                      <ListBox.Item
                        key={t.id}
                        id={t.id}
                        textValue={t.label}
                      >
                        {t.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* SALARY MIN */}
            <TextField isRequired name="minsalary" type="number">
              <Label>Min Salary</Label>
              <Input placeholder="e.g. 500" />
              <FieldError />
            </TextField>

            {/* SALARY MAX */}
            <TextField isRequired name="maxsalary" type="number">
              <Label>Max Salary</Label>
              <Input placeholder="e.g. 2000" />
              <FieldError />
            </TextField>

            {/* <TextField isRequired name="companyId" type="text">
              <Label>companyId</Label>
              <Input placeholder="companyId-123" />
              <FieldError />
            </TextField> */}

            {/* CURRENCY */}
            <div className="flex flex-col gap-1">
              <Label>Currency</Label>
              <Select name="currency" placeholder="Select currency">
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {currencies.map((c) => (
                      <ListBox.Item
                        key={c.id}
                        id={c.id}
                        textValue={c.label}
                      >
                        {c.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* STATUS */}
            <div className="flex flex-col gap-1">
              <Label>Status</Label>
              <Select name="status" placeholder="Select status">
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    {statuses.map((s) => (
                      <ListBox.Item
                        key={s.id}
                        id={s.id}
                        textValue={s.label}
                      >
                        {s.label}
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* LOCATION */}
            <TextField isRequired name="location">
              <Label>Location</Label>
              <Input placeholder="e.g. Dhaka, Bangladesh" />
              <FieldError />
            </TextField>

            {/* DEADLINE */}
            <TextField isRequired name="deadline" type="date">
              <Label>Application Deadline</Label>
              <Input />
              <FieldError />
            </TextField>

            {/* LOGO */}
           
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-4">
            <TextField isRequired name="description">
              <Label>Job Description</Label>
              <TextArea placeholder="Write job description..." />
              <FieldError />
            </TextField>

            <TextField isRequired name="requirements">
              <Label>Requirements</Label>
              <TextArea placeholder="Skills, experience..." />
              <FieldError />
            </TextField>

            <TextField name="benefits">
              <Label>Benefits (Optional)</Label>
              <TextArea placeholder="Perks, bonuses..." />
              <FieldError />
            </TextField>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" className="gap-2">
              <Check />
              Post Job
            </Button>

            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </div>
        </Form>}
      </div>
    </div>
  )
}

export default PostJobForm