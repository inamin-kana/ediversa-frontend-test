import type { Professor } from "../types/professor";
import sarahImg from "../assets/img/FeaturedProfessorsSection/sarah_jenkins.jpg";
import sarahImg2x from "../assets/img/FeaturedProfessorsSection/sarah_jenkins@2x.jpg";
import marcusImg from "../assets/img/FeaturedProfessorsSection/marcus_chen.jpg";
import marcusImg2x from "../assets/img/FeaturedProfessorsSection/marcus_chen@2x.jpg";
import elenaImg from "../assets/img/FeaturedProfessorsSection/elena_rodriguez.jpg";
import elenaImg2x from "../assets/img/FeaturedProfessorsSection/elena_rodriguez@2x.jpg";
import davidImg from "../assets/img/FeaturedProfessorsSection/david_kim.jpg";
import davidImg2x from "../assets/img/FeaturedProfessorsSection/david_kim@2x.jpg";

export const featuredProfessors: Professor[] = [
  {
    id: "sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    jobTitle: "Specialist in Oncology",
    description:
      "Focused on targeted therapies and patient-centric cancer care protocols in clinical environments.",
    profileUrl: "#",
    image: sarahImg,
    image2x: sarahImg2x,
  },
  {
    id: "marcus-chen",
    name: "Dr. Marcus Chen",
    jobTitle: "Lead Researcher, Genomics",
    description:
      "Pioneering CRISPR applications and advancing pediatric research in genetic medicine.",
    profileUrl: "#",
    image: marcusImg,
    image2x: marcusImg2x,
  },
  {
    id: "elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    jobTitle: "Chief of Cardiology",
    description:
      "Advancing non-invasive surgical techniques for heart valve repair and cardiovascular health.",
    profileUrl: "#",
    image: elenaImg,
    image2x: elenaImg2x,
  },
  {
    id: "david-kim",
    name: "Dr. David Kim",
    jobTitle: "Neuroscience Chair",
    description:
      "Exploring the intersection of AI and neural mapping technologies to treat cognitive decline.",
    profileUrl: "#",
    image: davidImg,
    image2x: davidImg2x,
  },
];
