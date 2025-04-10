import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const CreditSection = ( {usedCredits, remainingCredits, usagePercentage}: {usedCredits: number, remainingCredits: number, usagePercentage: number} ) => {
  return (
    <section className="space-y-4">
    <h2 className="text-xl font-semibold">SMS Credits</h2>
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Used Credits</CardTitle>
          <CardDescription>Number of SMS you&apos;ve sent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{usedCredits.toLocaleString()}</span>
            <span className="text-gray-500">SMS</span>
          </div>
          <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${usagePercentage}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">{usagePercentage}% of your plan used</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Remaining Credits</CardTitle>
          <CardDescription>Number of SMS you can send</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">{remainingCredits.toLocaleString()}</span>
            <span className="text-gray-500">SMS</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className=""></div>
            <Button variant="outline" size="sm" asChild>
              <a href="/dashboard/purchase-credits">Buy More</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
  )
}

export default CreditSection