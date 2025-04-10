import ErrorIllustration from "@/components/error/error-illustration"
import ErrorDetails from "@/components/error/error-details"
import ErrorActions from "@/components/error/error-actions"

export default function Error() {

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center space-y-8">
            <ErrorIllustration />

            <ErrorDetails
              title="Something went wrong!"
              message={ "An unexpected error occurred"}
            />

            <ErrorActions />
          </div>
        </div>
      </main>
    </div>
  )
}
