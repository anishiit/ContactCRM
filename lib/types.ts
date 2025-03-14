export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  status: "active" | "inactive"
  lastContact: string
  createdAt: string
  updatedAt: string
}

// Ticket Types
export type TicketStatus = "open" | "in-progress" | "resolved" | "closed"
export type TicketPriority = "low" | "medium" | "high"

export interface Ticket {
  id: string
  customerId: number
  subject: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  assigneeId?: number
  category: string
  createdAt: string
  updatedAt: string
}

export interface TicketMessage {
  id: number
  ticketId: string
  senderId: number
  senderType: "customer" | "agent"
  content: string
  attachments: Attachment[]
  createdAt: string
}

export interface Attachment {
  id: number
  name: string
  url: string
  size: string
  type: string
}

// FAQ Types
export interface FaqCategory {
  id: number
  name: string
  description?: string
  order: number
}

export interface FaqItem {
  id: number
  categoryId: number
  question: string
  answer: string
  isPublished: boolean
  views: number
  helpful: number
  notHelpful: number
  createdAt: string
  updatedAt: string
}

// User Types
export type UserRole = "admin" | "agent" | "manager"

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  role: UserRole
  isActive: boolean
  lastLogin?: string
  createdAt: string
  updatedAt: string
}

