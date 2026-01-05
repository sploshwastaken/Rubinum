import { Metadata } from "next";
import CareerContent from "./CareerContent";

export const metadata: Metadata = {
  title: "Careers | Rubinum",
  description: "Join the Rubinum collective. We are looking for visionaries, engineers, and creators to help us shape the future.",
  alternates: {
    canonical: "https://rubinum.com/career",
  },
  openGraph: {
    title: "Join the Neural Network | Rubinum Careers",
    description: "Remote-first, cutting-edge tech, and a mission to redefine digital. Find your role at Rubinum.",
    url: "https://rubinum.com/career",
  },
};

export default function CareerPage() {
  return <CareerContent />;
}
