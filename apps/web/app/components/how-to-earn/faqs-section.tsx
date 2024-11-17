"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What types of tasks are available to earn rewards?",
    answer: "BuzzRoom offers a variety of tasks, including watching short videos and engaging with trending content."
  },
  {
    question: "How do I start earning with BuzzRoom?",
    answer: "Simply sign up for an account, choose available tasks, and start completing them to earn rewards."
  },
  {
    question: "How can I track my earnings?",
    answer: "You can track your earnings in real-time through your BuzzRoom dashboard."
  },
  {
    question: "Is there a minimum balance required to withdraw rewards?",
    answer: "Yes, there is a minimum balance requirement. Check your account settings for specific details."
  },
  {
    question: "What payment methods are available for withdrawing rewards?",
    answer: "We offer multiple payment methods including PayPal, bank transfer, and gift cards."
  },
  {
    question: "What should I do if I encounter an issue with a task?",
    answer: "Contact our support team through the help center for immediate assistance with any task-related issues."
  }
]

export function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}