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
import { Metadata } from 'next'
import { TicketDetail } from './TicketDetail'

// Define the page props interface
interface TicketPageProps {
  params: {
    id: string;
  };
}

// Add the metadata export (optional but recommended)
export const metadata: Metadata = {
  title: 'Ticket Details',
  description: 'View and manage ticket details',
}

// Update the component definition
export default async function TicketDetailPage({ params }: TicketPageProps) {
  // Fetch ticket data here (replace mock data with actual API call)
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

  return <TicketDetail ticket={ticket} />
}

