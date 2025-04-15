"use client"
import { CheckCircle2 } from 'lucide-react'
import React from 'react'
import { AlertDescription } from '../ui/alert'
import { Alert } from '../ui/alert'
import { Button } from '../ui/button'
import { Copy } from 'lucide-react'

const ApiKeySection = ({apiKey}:{apiKey:string|undefined}) => {
    
  return (
    <section className="space-y-4">
        <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">{apiKey ? "Your API Key" : "API Key already shown"}</h2>
            <h3 className="text-lg underline">
                {apiKey && "You won't be able to see it again"}
            </h3>
        </div>
    <Alert className="bg-gray-50 border">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <AlertDescription className="font-mono text-sm">
            {apiKey ? apiKey : <span className="blur-sm">xxxx-xxxx-xxxx-xxxx</span>}
          </AlertDescription>
        </div>
        {apiKey && <Button variant="outline" size="sm" className="h-8">
          <Copy className="h-4 w-4 mr-2" onClick={() => navigator.clipboard.writeText(apiKey || '')} />
          <span onClick={() => navigator.clipboard.writeText(apiKey || '')}>Copy</span>
        </Button>}
      </div>
    </Alert>
    <p className="text-sm text-gray-500">
      Keep your API key secure. Do not share it in public repositories or client-side code.
    </p>
  </section>
  )
}

export default ApiKeySection