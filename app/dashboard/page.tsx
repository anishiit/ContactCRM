import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Users,
  MessageSquare,
  HelpCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Download Report</Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Tickets</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowDownRight className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500">-8%</span> from last week
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.4h</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowDownRight className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500">-15%</span> from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">FAQ Usage</CardTitle>
                  <HelpCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
                    <span className="text-green-500">+18%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Ticket Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-muted-foreground" />
                    <span className="ml-2 text-muted-foreground">Chart visualization would appear here</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Tickets</CardTitle>
                  <CardDescription>Latest customer inquiries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: "T-1024",
                        customer: "Sarah Johnson",
                        status: "open",
                        priority: "high",
                        issue: "Login issues after password reset",
                      },
                      {
                        id: "T-1023",
                        customer: "Michael Chen",
                        status: "in-progress",
                        priority: "medium",
                        issue: "Cannot update billing information",
                      },
                      {
                        id: "T-1022",
                        customer: "Emma Davis",
                        status: "resolved",
                        priority: "low",
                        issue: "Question about subscription plans",
                      },
                      {
                        id: "T-1021",
                        customer: "James Wilson",
                        status: "open",
                        priority: "medium",
                        issue: "Feature request for mobile app",
                      },
                    ].map((ticket) => (
                      <div key={ticket.id} className="flex items-center">
                        <div className="mr-2">
                          {ticket.status === "open" && <AlertCircle className="h-4 w-4 text-yellow-500" />}
                          {ticket.status === "in-progress" && <Clock className="h-4 w-4 text-blue-500" />}
                          {ticket.status === "resolved" && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {ticket.id}: {ticket.issue}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {ticket.customer} • {ticket.priority} priority
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/tickets/${ticket.id}`}>View</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

