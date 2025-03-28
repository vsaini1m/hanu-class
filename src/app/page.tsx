import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, Clock, Server, Shield, Zap, BookOpen, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-muted/20 to-background pt-24 pb-16">
        <div className="container flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-background px-3 py-1 text-sm text-primary">
            <span className="font-semibold">New:</span>
            <span className="ml-1">Try Hanu Class free for 15 days</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Transform Your Educational Institution with <span className="text-primary">Hanu Class</span>
          </h1>
          <p className="mt-6 max-w-[42rem] text-muted-foreground sm:text-xl">
            A premium educational platform for schools and institutions with powerful online classes, recorded content, examinations, and institution management.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/register?trial=true">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span>No credit card required. 15-day free trial with all premium features.</span>
          </div>
          <div className="mt-12 w-full overflow-hidden rounded-lg border bg-background shadow-xl">
            <div className="relative aspect-video w-full bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-8 text-center">
                  <p className="text-2xl font-bold text-primary">Premium Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="container">
        <div className="text-center">
          <h2 className="text-xl font-medium text-muted-foreground">Trusted by educational institutions worldwide</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <div className="text-2xl font-bold text-muted-foreground/60">Princeton Edu</div>
            <div className="text-2xl font-bold text-muted-foreground/60">Global Learning</div>
            <div className="text-2xl font-bold text-muted-foreground/60">AcademiaX</div>
            <div className="text-2xl font-bold text-muted-foreground/60">EduTech Solutions</div>
            <div className="text-2xl font-bold text-muted-foreground/60">SmartClass</div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="container">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Award className="mr-1 h-4 w-4" />
            <span>Premium Features</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tighter sm:text-4xl">Enterprise-Grade Solutions</h2>
          <p className="mt-4 max-w-[42rem] text-muted-foreground">
            Our premium platform offers everything you need to run your educational institution efficiently.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Advanced Online Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Conduct live interactive classes with HD video, breakout rooms, and collaborative tools.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Premium Content Library</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access and manage a vast library of recorded lectures with smart search and analytics.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Secure Examinations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Create, conduct, and evaluate online exams with anti-cheating measures and automated grading.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/10 bg-gradient-to-br from-background to-primary/5">
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Comprehensive Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gain insights into student performance, attendance, and engagement through detailed reports.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mobile App Highlight */}
      <section className="bg-muted/20 py-16">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <span>Premium Feature</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Mobile App Access</h2>
              <p className="text-muted-foreground">
                Students get premium access to our mobile app, allowing them to attend classes, watch recorded content, and participate in exams from anywhere.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>2-hour premium access for standard student accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Unlimited access for premium and enterprise plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Available for iOS and Android devices</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/pricing">Explore Mobile Features</Link>
              </Button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-72 h-[500px] rounded-3xl bg-muted/60 border-4 border-background shadow-xl flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  [Mobile App Preview]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Hosting Highlight */}
      <section className="container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="flex-1 relative">
            <div className="aspect-square rounded-lg bg-muted/20 border flex items-center justify-center">
              <Server className="h-24 w-24 text-primary/30" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-lg border bg-background p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-primary/10 p-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Complete data control</span>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span>Enterprise Feature</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">On-Premise Hosting</h2>
            <p className="text-muted-foreground">
              We provide the option to host Hanu Class on your own servers, giving you complete control over your data and infrastructure.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Custom deployment on your institutional servers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Enhanced security and data sovereignty</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Custom integration with existing systems</span>
              </li>
            </ul>
            <Button asChild variant="outline">
              <Link href="/contact?subject=self-hosting">Learn More About Self-Hosting</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            <p className="mt-4 max-w-[42rem] text-muted-foreground">
              Getting started with Hanu Class is easy and straightforward.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-4 text-xl font-bold">Register Your Institution</h3>
              <p className="mt-2 text-muted-foreground">
                Create an account and set up your educational institution profile.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-4 text-xl font-bold">Customize Your Platform</h3>
              <p className="mt-2 text-muted-foreground">
                Set up classes, add teachers, students, and customize the platform to suit your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-4 text-xl font-bold">Start Teaching and Learning</h3>
              <p className="mt-2 text-muted-foreground">
                Begin conducting online classes, sharing content, and managing your institution efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Testimonials</h2>
          <p className="mt-4 max-w-[42rem] text-muted-foreground">
            See what our users have to say about Hanu Class.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Hanu Class has transformed how we conduct online education. The platform is intuitive, reliable, and packed with features that make teaching and learning enjoyable."
                </p>
                <div>
                  <p className="font-semibold">Dr. Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Principal, Lincoln High School</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The examination system is outstanding. It saves us countless hours in preparation, execution, and evaluation. Our teachers can focus more on actual teaching."
                </p>
                <div>
                  <p className="font-semibold">Prof. Michael Chen</p>
                  <p className="text-sm text-muted-foreground">Department Head, Westfield College</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "As a student, I love how organized everything is. I can attend classes, access recordings, and take exams all in one place. It has made remote learning so much easier."
                </p>
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Student, Northwood University</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5">
        <div className="container py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Try Hanu Class Free for 15 Days</h2>
            <p className="mt-4 max-w-[42rem]">
              Experience all premium features with no commitment. No credit card required.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:gap-8 max-w-md">
              <Button asChild size="lg">
                <Link href="/register?trial=true">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
