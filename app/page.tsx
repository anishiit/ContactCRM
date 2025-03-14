import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Users, MessageSquare, HelpCircle, BarChart3 } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <HelpCircle className="h-6 w-6 text-primary" />
            <span>ContactCRM</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="font-medium">
              Dashboard
            </Link>
            <Link href="/customers" className="font-medium">
              Customers
            </Link>
            <Link href="/tickets" className="font-medium">
              Tickets
            </Link>
            <Link href="/faq" className="font-medium">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Streamline Your Contact Center Operations
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our CRM solution helps you manage customer interactions, track tickets, and provide instant answers
                  with our integrated FAQ system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/dashboard">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/demo">Request Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-8">
                <div className="aspect-video relative bg-muted rounded-md flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Dashboard preview"
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your contact center efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Customer Management</CardTitle>
                  <CardDescription>Track customer information, history, and preferences in one place.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Maintain detailed customer profiles with interaction history, preferences, and notes for
                    personalized service.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/customers">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Ticket Tracking</CardTitle>
                  <CardDescription>Manage and resolve customer inquiries efficiently.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Create, assign, and track tickets from creation to resolution with automated workflows and priority
                    management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/tickets">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <HelpCircle className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>FAQ Solution</CardTitle>
                  <CardDescription>Provide instant answers to common questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Create and manage a comprehensive knowledge base that helps customers find answers quickly and
                    reduces support volume.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/faq">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Analytics Dashboard</CardTitle>
                  <CardDescription>Gain insights into your contact center performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Track key metrics like response time, resolution rate, and customer satisfaction to optimize your
                    operations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full" asChild>
                    <Link href="/analytics">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span>ContactCRM</span>
            </div>
            <p className="text-sm text-muted-foreground">A comprehensive CRM and FAQ solution for contact centers.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="text-muted-foreground hover:text-foreground">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ContactCRM. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

