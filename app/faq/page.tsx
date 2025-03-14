import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Edit, Trash2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// FAQ categories and items
const faqData = [
  {
    category: "Account Management",
    items: [
      {
        question: "How do I reset my password?",
        answer:
          "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password. Follow the link in the email and create a new password.",
      },
      {
        question: "How can I update my account information?",
        answer:
          "You can update your account information by logging in and navigating to the 'Account Settings' page. From there, you can edit your personal information, contact details, and notification preferences.",
      },
      {
        question: "Can I have multiple users on one account?",
        answer:
          "Yes, our platform supports multiple users with different permission levels. The account administrator can add new users and set appropriate access rights from the 'User Management' section in the admin dashboard.",
      },
    ],
  },
  {
    category: "Billing & Subscriptions",
    items: [
      {
        question: "How do I change my subscription plan?",
        answer:
          "To change your subscription plan, go to 'Billing' in your account settings. You'll see options to upgrade or downgrade your current plan. Changes to your subscription will take effect at the start of your next billing cycle.",
      },
      {
        question: "When will I be charged for my subscription?",
        answer:
          "Subscriptions are billed automatically at the beginning of each billing period (monthly or annually, depending on your plan). You'll receive an email receipt when a payment is processed.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "We offer a 30-day money-back guarantee for new subscriptions. If you're not satisfied with our service, contact our support team within 30 days of your initial purchase for a full refund. For other refund requests, please contact our customer support team.",
      },
    ],
  },
  {
    category: "Technical Support",
    items: [
      {
        question: "The system is running slowly. What can I do?",
        answer:
          "If the system is running slowly, try clearing your browser cache and cookies, ensure you're using a supported browser (latest versions of Chrome, Firefox, Safari, or Edge), and check your internet connection. If problems persist, contact our technical support team.",
      },
      {
        question: "How do I export my data?",
        answer:
          "To export your data, go to the 'Reports' section and select 'Export Data'. You can choose the date range and specific data types you want to export. The system supports exports in CSV, Excel, and PDF formats.",
      },
      {
        question: "Is my data backed up?",
        answer:
          "Yes, we automatically back up all customer data daily. We maintain secure backups for 30 days, ensuring your information is safe and recoverable in case of any issues.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">FAQ Management</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add FAQ
            </Button>
          </div>
        </div>

        <Tabs defaultValue="manage" className="space-y-4">
          <TabsList>
            <TabsTrigger value="manage">Manage FAQs</TabsTrigger>
            <TabsTrigger value="preview">Customer View</TabsTrigger>
          </TabsList>

          <TabsContent value="manage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>FAQ Management</CardTitle>
                <CardDescription>Create, edit, and organize your FAQ content.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="search" placeholder="Search FAQs..." className="w-[300px]" />
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-6">
                  {faqData.map((category, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{category.category}</h3>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border rounded-md p-3">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{item.question}</p>
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
                          </div>
                        ))}
                        <Button variant="ghost" className="w-full mt-2" size="sm">
                          <Plus className="mr-2 h-4 w-4" /> Add Question
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about our services.</CardDescription>
                <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                  <Input type="search" placeholder="Search FAQs..." className="w-full" />
                  <Button variant="outline" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">{category.category}</h3>
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

