import { FaqAccordion } from "@/components/faq-chat";

const defaultData = [
  {
    answer: "For backend I would suggest use supabase edge functions to move fast and when the time comes we needed to implement more complex solutions then we provision our own backend and infra.",
    icon: "❤️",
    iconPosition: "right",
    id: 1,
    question: "If I were to build a project that doesn't require complex backend what would be the tech stack you suggest?",
  },
  {
    answer: "React for complex apps with larger teams with wider scope for third party libraries, Vue for faster development with smaller teams - both are excellent choices. Regardless, business logic shall be separated from UI",
    id: 2,
    question: "What frontend tech stack do you suggest (React or Vue)?",
  },
  {
    answer: "Progressive Web Apps (PWAs) are web applications that work like native mobile apps with offline functionality, push notifications, and home screen installation - they're interesting because they offer app-like experiences without launching on app store while having the same codebase as your web project and launching updates are faster.",
    id: 3,
    question: "You say you have extensive experience with PWA. What is PWA and what's interesting about it?",
  },
  {
    answer: "Absolutely - AI tools are game-changers when used properly, but they're not magic bullets. I've been coding since before LLMs were mainstream, so I have the foundation to know when AI suggestions make sense and when they don't. The real value comes from understanding the fundamentals deeply enough to guide AI effectively and catch its mistakes. AI won't replace developers, but developers who leverage AI will definitely outpace those who don't - it's about augmenting experience, not replacing it.",
    icon: "⭐",
    iconPosition: "left",
    id: 4,
    question: "Do you use AI in your development approach? Do you think AI will take over your job?",
  },
  {
    answer: "The industry is rapidly evolving, especially with AI integration. I expect backend architectures to shift toward more efficient data transfer using formats like Protobuf, while frontend development will adapt to emerging technologies like AR/VR. Regardless of the specific tech stack, the core principle remains the same - problem solvers will always find ways to deliver better user experiences, whether that's through traditional web interfaces or entirely new mediums.",
    id: 5,
    question: "What's your general outlook in the software industry?",
  },
];

function FAQDefaultDemo() {
  return (
    
    <FaqAccordion 
    //  @ts-expect-error ignore this line 
      data={defaultData}
      className="max-w-[700px]"
    />
  );
}

function FAQSection() {
  return (
    <FaqAccordion 
     //  @ts-expect-error ignore this line too
      data={defaultData}
      className="max-w-[700px]"
      questionClassName="bg-secondary hover:bg-secondary/80"
      answerClassName="bg-secondary text-secondary-foreground"
      timestamp=""
    />
  );
}

export { FAQDefaultDemo, FAQSection };