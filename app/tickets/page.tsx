import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Search,
  Plus,
  ArrowUpDown,
  MoreHorizontal,
  Clock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function TicketsPage() {
  // Mock ticket data
  const tickets = [
    {
      id: "T-1024",
      customer: "Sarah Johnson",
      subject: "Login issues after password reset",
      status: "open",
      priority: "high",
      assignee: "Alex Thompson",
      created: "2023-11-20T14:30:00",
      updated: "2023-11-20T15:45:00",
    },
    {
      id: "T-1023",
      customer: "Michael Chen",
      subject: "Cannot update billing information",
      status: "in-progress",
      priority: "medium",
      assignee: "Emma Rodriguez",
      created: "2023-11-19T10:15:00",
      updated: "2023-11-20T09:30:00",
    },
    {
      id: "T-1022",
      customer: "Emma Davis",
      subject: "Question about subscription plans",
      status: "resolved",
      priority: "low",
      assignee: "James Wilson",
      created: "2023-11-18T16:45:00",
      updated: "2023-11-19T11:20:00",
    },
    {
      id: "T-1021",
      customer: "James Wilson",
      subject: "Feature request for mobile app",
      status: "open",
      priority: "medium",
      assignee: "Unassigned",
      created: "2023-11-18T09:20:00",
      updated: "2023-11-18T09:20:00",
    },
    {
      id: "T-1020",
      customer: "Olivia Martinez",
      subject: "Integration with third-party service not working",
      status: "in-progress",
      priority: "high",
      assignee: "Alex Thompson",
      created: "2023-11-17T13:10:00",
      updated: "2023-11-19T16:30:00",
    },
    {
      id: "T-1019",
      customer: "William Taylor",
      subject: "Data export functionality not working",
      status: "open",
      priority: "high",
      assignee: "Emma Rodriguez",
      created: "2023-11-17T11:05:00",
      updated: "2023-11-18T14:15:00",
    },
    {
      id: "T-1018",
      customer: "Sophia Anderson",
      subject: "Need help with API documentation",
      status: "resolved",
      priority: "medium",
      assignee: "James Wilson",
      created: "2023-11-16T15:30:00",
      updated: "2023-11-17T10:45:00",
    },
    {
      id: "T-1017",
      customer: "Benjamin Thomas",
      subject: "Account verification email not received",
      status: "resolved",
      priority: "medium",
      assignee: "Alex Thompson",
      created: "2023-11-16T09:50:00",
      updated: "2023-11-16T14:20:00",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Ticket
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ticket Management</CardTitle>
            <CardDescription>View and manage customer support tickets.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
              <div className="flex w-full md:w-auto items-center space-x-2">
                <Input type="search" placeholder="Search tickets..." className="w-full md:w-[300px]" />
                <Button variant="outline" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col md:flex-row w-full md:w-auto gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Assignees</SelectItem>
                    <SelectItem value="alex">Alex Thompson</SelectItem>
                    <SelectItem value="emma">Emma Rodriguez</SelectItem>
                    <SelectItem value="james">James Wilson</SelectItem>
                    <SelectItem value="unassigned">Unassigned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">
                      <div className="flex items-center space-x-1">
                        <span>ID</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Updated</span>
                        <ArrowUpDown className="h-3 w-3" />
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">
                        <Link href={`/tickets/${ticket.id}`} className="hover:underline">
                          {ticket.id}
                        </Link>
                      </TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.customer}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {ticket.status === "open" && (
                            <>
                              <AlertCircle className="mr-2 h-4 w-4 text-yellow-500" />
                              <span>Open</span>
                            </>
                          )}
                          {ticket.status === "in-progress" && (
                            <>
                              <Clock className="mr-2 h-4 w-4 text-blue-500" />
                              <span>In Progress</span>
                            </>
                          )}
                          {ticket.status === "resolved" && (
                            <>
                              <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                              <span>Resolved</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {ticket.priority === "high" && (
                            <>
                              <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
                              <span>High</span>
                            </>
                          )}
                          {ticket.priority === "medium" && (
                            <>
                              <AlertCircle className="mr-2 h-4 w-4 text-orange-500" />
                              <span>Medium</span>
                            </>
                          )}
                          {ticket.priority === "low" && (
                            <>
                              <AlertCircle className="mr-2 h-4 w-4 text-green-500" />
                              <span>Low</span>
                            </>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{ticket.assignee}</TableCell>
                      <TableCell>{new Date(ticket.updated).toLocaleString()}</TableCell>
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

