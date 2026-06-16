import { Card } from '@heroui/react'
import React from 'react'

const DashboardStats = ({ statsData }) => {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {statsData.map((item) => {
        const Icon = item.icon

        return (
          <Card
            key={item.title}
            variant="flat"
            className="group border border-default-200/60 bg-background/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
          >
            <Card.Content className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium tracking-wide text-default-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight">
                    {item.value}
                  </h2>

                  {item.description && (
                    <p className="text-xs text-default-400">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
              </div>
            </Card.Content>
          </Card>
        )
      })}
    </section>
  )
}

export default DashboardStats