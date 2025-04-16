import { Card } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export default function RegionsPricing() {
  // Country data from the provided HTML
  const countries = [
    { country: "Argentina", code: "ARG", creditsPerSMS: 5, areaCode: "+54" },
    { country: "Australia", code: "AUS", creditsPerSMS: 3, areaCode: "+61" },
    { country: "Austria", code: "AUT", creditsPerSMS: 5, areaCode: "+43" },
    { country: "Brazil", code: "BRA", creditsPerSMS: 3, areaCode: "+55" },
    { country: "Canada", code: "CAN", creditsPerSMS: 1, areaCode: "+1" },
    { country: "Chile", code: "CHL", creditsPerSMS: 4, areaCode: "+56" },
    { country: "China", code: "CHN", creditsPerSMS: 2, areaCode: "+86" },
    { country: "Colombia", code: "COL", creditsPerSMS: 3, areaCode: "+57" },
    { country: "Costa Rica", code: "CRI", creditsPerSMS: 3, areaCode: "+506" },
    { country: "Cyprus", code: "CYP", creditsPerSMS: 5, areaCode: "+357" },
    { country: "Denmark", code: "DNK", creditsPerSMS: 3, areaCode: "+45" },
    { country: "Finland", code: "FIN", creditsPerSMS: 5, areaCode: "+358" },
    { country: "France", code: "FRA", creditsPerSMS: 4, areaCode: "+33" },
    { country: "Germany", code: "DEU", creditsPerSMS: 5, areaCode: "+49" },
    { country: "Greece", code: "GRC", creditsPerSMS: 4, areaCode: "+30" },
    { country: "Hong Kong", code: "HKG", creditsPerSMS: 4, areaCode: "+852" },
    { country: "Hungary", code: "HUN", creditsPerSMS: 5, areaCode: "+36" },
    { country: "Iceland", code: "ISL", creditsPerSMS: 4, areaCode: "+354" },
    { country: "India", code: "IND", creditsPerSMS: 5, areaCode: "+91" },
    { country: "Ireland", code: "IRL", creditsPerSMS: 4, areaCode: "+353" },
    { country: "Italy", code: "ITA", creditsPerSMS: 5, areaCode: "+39" },
    { country: "Japan", code: "JPN", creditsPerSMS: 5, areaCode: "+81" },
    { country: "Latvia", code: "LVA", creditsPerSMS: 4, areaCode: "+371" },
    { country: "Liechtenstein", code: "LIE", creditsPerSMS: 2, areaCode: "+423" },
    { country: "Luxembourg", code: "LUX", creditsPerSMS: 4, areaCode: "+352" },
    { country: "Norway", code: "NOR", creditsPerSMS: 4, areaCode: "+47" },
    { country: "Poland", code: "POL", creditsPerSMS: 3, areaCode: "+48" },
    { country: "Portugal", code: "PRT", creditsPerSMS: 3, areaCode: "+351" },
    { country: "Romania", code: "ROU", creditsPerSMS: 4, areaCode: "+40" },
    { country: "Singapore", code: "SGP", creditsPerSMS: 3, areaCode: "+65" },
    { country: "South Africa", code: "ZAF", creditsPerSMS: 4, areaCode: "+27" },
    { country: "Spain", code: "ESP", creditsPerSMS: 5, areaCode: "+34" },
    { country: "Switzerland", code: "CHE", creditsPerSMS: 4, areaCode: "+41" },
    { country: "Taiwan", code: "TWN", creditsPerSMS: 3, areaCode: "+886" },
    { country: "Thailand", code: "THA", creditsPerSMS: 2, areaCode: "+66" },
    { country: "Turkey", code: "TUR", creditsPerSMS: 2, areaCode: "+90" },
    { country: "United Kingdom", code: "GBR", creditsPerSMS: 3, areaCode: "+44" },
    { country: "United States of America", code: "USA", creditsPerSMS: 1, areaCode: "+1" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Country Coverage</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check which countries are supported by our SMS API and how many credits are used per message.
              </p>
            </div>
          </div>

          <Card className="overflow-hidden shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 text-center font-medium">Country</th>
                    <th className="p-3 text-center font-medium">Code</th>
                    <th className="p-3 text-center font-medium">Credits Used Per SMS</th>
                    <th className="p-3 text-center font-medium">Area Code</th>
                  </tr>
                </thead>
                <tbody>
                  {countries.map((country, index) => (
                    <tr
                      key={country.code}
                      className="border-b border-gray-200 transition-colors hover:bg-gray-50"
                    >
                      <td className="p-3 text-center">{country.country}</td>
                      <td className="p-3 text-center">{country.code}</td>
                      <td className="p-3 text-center">{country.creditsPerSMS}</td>
                      <td className="p-3 text-center">{country.areaCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Service availability is subject to change. For the most up-to-date information, please contact our support
              team.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
