interface ErrorDetailsProps {
    title: string
    message: string
    errorCode?: string
  }
  
  export default function ErrorDetails({ title, message, errorCode }: ErrorDetailsProps) {
    return (
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-gray-500">{message}</p>
        {errorCode && (
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              Error code: <code className="font-mono bg-gray-100 px-1 py-0.5 rounded">{errorCode}</code>
            </p>
          </div>
        )}
      </div>
    )
  }
  