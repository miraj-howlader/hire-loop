import { getLoggedInRecruiterCompany } from '@/lib/api/companies'
import { getCompanyJobs } from '@/lib/api/jobs'
import {
  Table,
  Button,
} from '@heroui/react'

import { Pencil, Trash2 } from 'lucide-react'

const RecruiterJobs = async () => {
  const company = await getLoggedInRecruiterCompany()
  const jobs = await getCompanyJobs(company._id)
  console.log(jobs)

  return (
    <div className="p-6">
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Job Title</Table.Column>
              <Table.Column>Category</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {jobs.map(job => (
                <Table.Row key={job._id}>
                  <Table.Cell>{job.title}</Table.Cell>
                  <Table.Cell>{job.category}</Table.Cell>
                  <Table.Cell>{job.location}</Table.Cell>
                  <Table.Cell>{job.status}</Table.Cell>

                  {/* ✅ Actions column added */}
                  <Table.Cell>
                    <div className="flex gap-2">
                      <Button isIconOnly size="sm" variant="light">
                        <Pencil className="w-4 h-4 text-blue-600" />
                      </Button>

                      <Button isIconOnly size="sm" variant="light">
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  )
}

export default RecruiterJobs