"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  User,
  MessageSquare,
  Paperclip,
  Send,
  FileText,
  LinkIcon,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  const [newReply, setNewReply] = useState("")

  // Mock ticket data
  const ticket = {
    id: params.id,
    customer: {
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subject: "Login issues after password reset",
    description:
      "I recently reset my password following the instructions in the email, but now I'm unable to log in to my account. I've tried multiple times and keep getting an 'Invalid credentials' error message. I'm certain I'm using the correct new password.",
    status: "open",
    priority: "high",
    assignee: "Alex Thompson",
    created: "2023-11-20T14:30:00",
    updated: "2023-11-20T15:45:00",
    category: "Authentication",
    messages: [
      {
        id: 1,
        sender: {
          name: "Sarah Johnson",
          role: "customer",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I recently reset my password following the instructions in the email, but now I'm unable to log in to my account. I've tried multiple times and keep getting an 'Invalid credentials' error message. I'm certain I'm using the correct new password.",
        timestamp: "2023-11-20T14:30:00",
        attachments: [],
      },
      {
        id: 2,
        sender: {
          name: "Alex Thompson",
          role: "agent",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "Hi Sarah, I'm sorry to hear you're having trouble logging in. Let me help you with this. Could you please confirm which browser and device you're using to access the platform? Also, have you tried clearing your browser cache and cookies before attempting to log in again?",
        timestamp: "2023-11-20T15:15:00",
        attachments: [],
      },
      {
        id: 3,
        sender: {
          name: "Sarah Johnson",
          role: "customer",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "I'm using Chrome on my MacBook. I just tried clearing the cache and cookies as you suggested, but I'm still getting the same error. I also tried on Safari and got the same result.",
        timestamp: "2023-11-20T15:30:00",
        attachments: [{ name: "error_screenshot.png", size: "245 KB", type: "image/png" }],
      },
      {
        id: 4,
        sender: {
          name: "Alex Thompson",
          role: "agent",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content:
          "Thank you for the additional information and the screenshot. I can see the issue now. It appears there might be a temporary lock on your account due to multiple failed login attempts. I'll reset this from our admin panel. Could you please try logging in again in about 15 minutes? If you still experience issues, please let me know.",
        timestamp: "2023-11-20T15:45:00",
        attachments: [],
      },
    ],
  }

  const handleSendReply = () => {
    if (newReply.trim()) {
      // In a real application, this would send the reply to the backend
      console.log("Sending reply:", newReply)
      setNewReply("")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/tickets">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tickets
            </Link>
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">
                {ticket.id}: {ticket.subject}
              </h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  Merge
                </Button>
                <Button variant="outline" size="sm">
                  Close Ticket
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Conversation</CardTitle>
                  <div className="flex items-center gap-2">
                    <Select defaultValue={ticket.status}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue={ticket.priority}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {ticket.messages.map((message) => (
                    <div key={message.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
                        <AvatarFallback>{message.sender.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{message.sender.name}</span>
                            <Badge variant={message.sender.role === "agent" ? "outline" : "secondary"}>
                              {message.sender.role === "agent" ? "Agent" : "Customer"}
                            </Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(message.timestamp).toLocaleString()}
                          </span>
                        </div>
                        <div className="text-sm">{message.content}</div>
                        {message.attachments.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm font-medium mb-1">Attachments:</p>
                            <div className="flex flex-wrap gap-2">
                              {message.attachments.map((attachment, index) => (
                                <div key={index} className="flex items-center gap-1 text-sm bg-muted p-2 rounded-md">
                                  <FileText className="h-4 w-4" />
                                  <span>{attachment.name}</span>
                                  <span className="text-xs text-muted-foreground">({attachment.size})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-2">
                  <Textarea
                    placeholder="Type your reply here..."
                    className="min-h-[100px]"
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Paperclip className="mr-2 h-4 w-4" />
                        Attach
                      </Button>
                      <Button variant="outline" size="sm">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Insert Link
                      </Button>
                    </div>
                    <Button onClick={handleSendReply}>
                      <Send className="mr-2 h-4 w-4" />
                      Send Reply
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="w-full lg:w-[350px] space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Ticket Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Status</p>
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
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Priority</p>
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
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Assignee</p>
                  <div className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>{ticket.assignee}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Category</p>
                  <div className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>{ticket.category}</span>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm font-medium mb-1">Customer</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={ticket.customer.avatar} alt={ticket.customer.name} />
                      <AvatarFallback>{ticket.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">{ticket.customer.name}</p>
                      <p className="text-xs text-muted-foreground">{ticket.customer.email}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Created</p>
                  <p className="text-sm">{new Date(ticket.created).toLocaleString()}</p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Last Updated</p>
                  <p className="text-sm">{new Date(ticket.updated).toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related FAQs</CardTitle>
                <CardDescription>Suggested articles for this issue</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/faq/password-reset"
                      className="text-sm text-blue-600 hover:underline flex items-center"
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      How to reset your password
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq/account-locked"
                      className="text-sm text-blue-600 hover:underline flex items-center"
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      What to do if your account is locked
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq/browser-issues"
                      className="text-sm text-blue-600 hover:underline flex items-center"
                    >
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Troubleshooting browser-related login issues
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

