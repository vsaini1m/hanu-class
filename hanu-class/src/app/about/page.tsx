import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us - Hanu Class",
  description: "Learn about Hanu Class and our mission to transform educational management",
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Hanu Class</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          A comprehensive educational platform designed to transform how institutions manage online education.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-16 mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="mt-4 text-muted-foreground">
          At Hanu Class, our mission is to provide educational institutions with powerful, user-friendly tools to deliver high-quality online education. We believe that technology should enhance teaching and learning, not complicate it.
        </p>
        <p className="mt-4 text-muted-foreground">
          We're dedicated to creating solutions that make education more accessible, engaging, and effective for students of all ages and backgrounds. By streamlining administrative processes and providing powerful tools for online teaching, we help educators focus on what matters most—their students.
        </p>
      </div>

      {/* Story Section */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Hanu Class was founded in 2023 by a team of educators and technology experts who experienced firsthand the challenges of transitioning to online education. During the global pandemic, they saw how existing tools fell short in meeting the comprehensive needs of educational institutions.
          </p>
          <p className="mt-4 text-muted-foreground">
            What began as a solution for a few local schools has grown into a platform serving educational institutions worldwide. Our team brings together expertise in education, software development, user experience design, and data security to create a platform that truly serves the needs of modern educational institutions.
          </p>
        </div>
        <div className="rounded-lg border bg-muted/20 p-8">
          <h3 className="text-xl font-bold">Why Choose Hanu Class?</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary text-center text-xs text-primary-foreground flex items-center justify-center">✓</div>
              <span>Comprehensive solution for online education management</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary text-center text-xs text-primary-foreground flex items-center justify-center">✓</div>
              <span>Built by educators for educators</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary text-center text-xs text-primary-foreground flex items-center justify-center">✓</div>
              <span>Continuous improvement based on user feedback</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary text-center text-xs text-primary-foreground flex items-center justify-center">✓</div>
              <span>Secure and reliable platform</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-5 w-5 rounded-full bg-primary text-center text-xs text-primary-foreground flex items-center justify-center">✓</div>
              <span>Exceptional customer support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="mt-2 text-muted-foreground">
              We continuously explore new ways to improve online education and stay ahead of evolving needs.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p className="mt-2 text-muted-foreground">
              We believe quality education should be accessible to all, regardless of physical location or circumstances.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Security</h3>
            <p className="mt-2 text-muted-foreground">
              We prioritize the security and privacy of our users' data through robust protocols and regular audits.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">User-Centric</h3>
            <p className="mt-2 text-muted-foreground">
              We design our platform with users in mind, focusing on intuitive interfaces and meaningful features.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold">Our Leadership Team</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-muted"></div>
            <h3 className="mt-4 text-xl font-bold">Dr. Sarah Chen</h3>
            <p className="text-muted-foreground">Co-Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-muted"></div>
            <h3 className="mt-4 text-xl font-bold">Michael Rodriguez</h3>
            <p className="text-muted-foreground">Co-Founder & CTO</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-muted"></div>
            <h3 className="mt-4 text-xl font-bold">Dr. Emily Johnson</h3>
            <p className="text-muted-foreground">Chief Education Officer</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg bg-muted/50 p-8 text-center">
        <h2 className="text-2xl font-bold">Join Our Mission</h2>
        <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
          Whether you're looking to transform your institution's approach to online education or join our growing team, we'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
