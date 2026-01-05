import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | Rubinum",
  description: "Learn about Rubinum's mission, our neural infrastructure philosophy, and the team building the future of digital technology.",
  alternates: {
    canonical: "https://rubinum.com/about",
  },
  openGraph: {
    title: "About Rubinum | The Neural Network",
    description: "We don't just write code; we architect ecosystems. Discover the philosophy behind Rubinum.",
    url: "https://rubinum.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
