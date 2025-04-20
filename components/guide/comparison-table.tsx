import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function ComparisonTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold">Feature</TableHead>
            <TableHead className="font-semibold">Twilio</TableHead>
            <TableHead className="font-semibold">SMSimple-API</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Product Focus</TableCell>
            <TableCell>
              Multiple complex services (SMS, voice, video, etc.)
            </TableCell>
            <TableCell className="font-semibold text-primary">
              One simple service: send SMS via API
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Onboarding Experience</TableCell>
            <TableCell>
              Complex dashboard with multiple products to configure
            </TableCell>
            <TableCell className="font-semibold text-primary">
              Single-purpose, intuitive interface
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Documentation</TableCell>
            <TableCell>Thousands of pages across multiple products</TableCell>
            <TableCell className="font-semibold text-primary">
              One copy/paste and you&apos;re done
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Time to First SMS</TableCell>
            <TableCell>~1 hour (navigating complex setup)</TableCell>
            <TableCell className="font-semibold text-primary">
              Under 5 minutes
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Support Complexity</TableCell>
            <TableCell>Multiple support paths for different products</TableCell>
            <TableCell className="font-semibold text-primary">
              <Link href="mailto:ia.school.app@gmail.com">
                ia.school.app@gmail.com
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
