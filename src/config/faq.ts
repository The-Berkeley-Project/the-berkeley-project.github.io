import { semester } from "./semester";

const { event } = semester;

export const faq = [
  {
    q: "Does it cost anything?",
    a: "No. Volunteering is free, and you get breakfast, lunch, and a free Berkeley Project Day shirt.",
  },
  {
    q: "Do I need any experience?",
    a: "No. Every site has a trained site leader who walks your team through the work when you arrive.",
  },
  {
    q: "How much time does it take?",
    a: `One day. Check in at ${event.meetingPlace} at ${event.meetingTime} on ${event.weekdayDate}, and work wraps up by ${event.endTime}. Plan to stay the whole day. There is nothing else to commit to after that.`,
  },
  {
    q: "Can I sign up with friends?",
    a: "Yes. You can sign up with friends and be placed at the same site.",
  },
  {
    q: "Can I get my service hours verified?",
    a: "Yes. We can verify your volunteer hours for Berkeley Project Day.",
  },
  {
    q: "What if it rains?",
    a: "Berkeley Project Day happens rain or shine. Wear closed toe shoes and clothes you don’t mind getting dirty.",
  },
  {
    q: "How do I get to my site?",
    a: "You travel with your team on foot or by AC Transit. Bring your Cal ID and your transit card.",
  },
  {
    q: "What is the difference between a volunteer and a site leader?",
    a: `Volunteers spend the day working at a site. Site leaders are trained ahead of time and lead a team of volunteers on the day. Both applications are due ${event.deadline}.`,
  },
] as const;
