import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Plus, Filter, ArrowUpDown, MoreHorizontal, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function CustomersPage() {
  // Mock customer data
  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 123-4567",
      status: "active",
      tickets: 3,
      lastContact: "2023-11-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.c@example.com",
      phone: "+1 (555) 234-5678",
      status: "active",
      tickets: 1,
      lastContact: "2023-11-18",
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.d@example.com",
      phone: "+1 (555) 345-6789",
      status: "inactive",
      tickets: 0,
      lastContact: "2023-10-25",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.w@example.com",
      phone: "+1 (555) 456-7890",
      status: "active",
      tickets: 2,
      lastContact: "2023-11-20",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      email: "olivia.m@example.com",
      phone: "+1 (555) 567-8901",
      status: "active",
      tickets: 0,
      lastContact: "2023-11-10",
    },
    {
      id: 6,
      name: "William Taylor",
      email: "william.t@example.com",
      phone: "+1 (555) 678-9012",
      status: "inactive",
      tickets: 0,
      lastContact: "2023-09-30",
    },
    {
      id: 7,
      name: "Sophia Anderson",
      email: "sophia.a@example.com",
      phone: "+1 (555) 789-0123",
      status: "active",
      tickets: 1,
      lastContact: "2023-11-17",
    },
    {
      id: 8,
      name: "Benjamin Thomas",
      email: "benjamin.t@example.com",
      phone: "+1 (555) 890-1234",
      status: "active",
      tickets: 0,
      lastContact: "2023-11-05",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Customer
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Management</CardTitle>
            <CardDescription>View and manage all your customers in one place.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="search" placeholder="Search customers..." className="w-[300px]" />
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">
                      <div className="flex items-center space-x-1">
                        <span>Name</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-center">Open Tickets</TableHead>
                    <TableHead>Last Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">
                        <Link href={`/customers/${customer.id}`} className="hover:underline">
                          {customer.name}
                        </Link>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="mr-2 h-3 w-3" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Phone className="mr-2 h-3 w-3" />
                            {customer.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            customer.status === "active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">{customer.tickets}</TableCell>
                      <TableCell>{new Date(customer.lastContact).toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

