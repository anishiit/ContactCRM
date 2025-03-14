import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"


export default function CustomerPage() {
  // For now, let's use the mock data. In a real app, you'd fetch this from an API
  const customer = {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    tickets: 3,
    lastContact: "2023-11-15",
    address: "123 Main St, City, State 12345",
    notes: "Premium customer since 2022",
  }

  if (!customer) {
    notFound()
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center space-x-2">
        <Link href="/customers">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Customers
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold tracking-tight">{customer.name}</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="text-sm">{customer.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="text-sm">{customer.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="text-sm">{customer.address}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Status</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      customer.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </div>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Open Tickets</dt>
                <dd className="text-sm">{customer.tickets}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Last Contact</dt>
                <dd className="text-sm">
                  {new Date(customer.lastContact).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">{customer.notes}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}