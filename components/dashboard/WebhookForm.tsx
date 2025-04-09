"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function WebhookForm() {
  const [webhookUrl, setWebhookUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!webhookUrl) {
      toast({
        title: "Error",
        description: "Please enter a webhook URL",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSubmitting(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // This would normally be an API call to save the webhook URL
      console.log("Saving webhook URL:", webhookUrl)

      toast({
        title: "Success",
        description: "Webhook URL has been updated",
      })
    } catch {
      toast({
        title: "Error",
        description: "Failed to update webhook URL",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="webhook-url">Webhook URL</Label>
        <Input
          id="webhook-url"
          type="url"
          placeholder="https://your-server.com/webhook"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Webhook"}
        </Button>
      </div>
    </form>
  )
}
