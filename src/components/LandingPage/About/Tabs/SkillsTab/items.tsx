import Brain from "@/lib/icons/Hero/Brain";
import Point from "@/lib/icons/Hero/Point";
import Scan from "@/lib/icons/Hero/Scan";
import { SkillCardProps } from "./SkillCard";

export const skillItems: SkillCardProps[] = [
  {
    title: "Design Thinking",
    description:
      "Design thinking is my secret weapon for creating delightful user experiences. It's like having a compass that points me in the right direction to design for real human needs and desires. Plus, the iterative nature of the process keeps things exciting and constantly improves the design outcome.",
    icon: <Brain />,
    tools:
      "Mind maps, Personas, Empathy maps, Storyboards, Whiteboards, Rapid Iteration, Value Proposition, Assumption Testing Prototyping, Visualization",
    software:
      "Figma, FigJam, Miro, Sketch, Google Suite (Sheets, Docs, Forms,Slides)",
  },
  {
    title: "User Research",
    description:
      "Designing without user research is like throwing darts blindfolded. User research gives me a better understanding of the user's mental model, which helps me create designs that are more intuitive and easy to use.  By observing users in their natural environment and listening to their feedback, I can gain a better understanding of their needs, goals, and pain points.",
    icon: <Scan />,
    tools:
      "usability testing, feedbacks, user interviews, heat Maps, surveys, card sorting, tree testing, first-click testing, research documentation, notes taking, observation & active listening",
    software:
      "Analytic tools (Google analytics, Maze, HotJar,), Conference tools (Zoom, Meet.), Google suite",
  },
  {
    title: "Interactive Design",
    description:
      "At its core, interaction design is about creating conversations between humans and machines. I love exploring the nuances of these conversations and finding ways to make them more efficient, enjoyable, and effective.\nAs a designer, I'm constantly looking for ways to push the boundaries of what's possible in digital design. Interaction design allows me to experiment with new technologies, innovative interfaces, and cutting-edge interactions that can truly transform the user experience.",
    icon: <Point />,
    tools:
      "Typography, Images, Space, Time, Icons, Behaviour. Micro Interactions",
    software: "Figma, Invison, Adobe XD, Principle, Marvel ...",
  },
];
