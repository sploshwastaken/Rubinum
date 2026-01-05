import { Metadata } from "next";
import TechnologyContent from "./TechnologyContent";

export const metadata: Metadata = {
  title: "Technology Stack | Rubinum",
  description: "Explore the advanced technologies powering Rubinum's solutions: Next.js, Rust, AI, and Quantum-ready architecture.",
  alternates: {
    canonical: "https://rubinum.com/technology",
  },
  openGraph: {
    title: "Our Tech Stack | Rubinum",
    description: "Powered by Intelligence. See how we leverage the most advanced technologies to build scalable, secure systems.",
    url: "https://rubinum.com/technology",
  },
};

export default function TechnologyPage() {
  return <TechnologyContent />;
}
