"use client"
import { Button } from "../ui/button"
import Link from "next/link"

export default function ErrorActions() {
    const refreshPage = () => {
        window.location.reload()
      }
  return (
    <div>
      <Button onClick={refreshPage} variant="default" className="mr-4">
        Try again
      </Button>
      <Button variant="outline" asChild>
        <Link href="/dashboard">Go back home</Link>
      </Button>
    </div>
  )
}

