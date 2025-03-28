import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Smartphone, Clock, Lock, Globe, Zap } from "lucide-react";

export const metadata = {
  title: "Mobile App - Hanu Class",
  description: "Access Hanu Class on the go with our mobile app for students and educators",
};

export default function MobilePage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Smartphone className="mr-2 h-4 w-4" />
            <span>Mobile Experience</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Hanu Class Mobile</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Experience premium education on-the-go with our advanced mobile application, giving students and teachers access to Hanu Class from anywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/register?trial=true">Start Free Trial</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-72 h-[500px] rounded-3xl bg-muted/60 border-4 border-background shadow-xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                [Mobile App Preview]
              </div>
            </div>
            <div className="absolute -left-6 top-24 p-3 bg-background rounded-lg shadow-md border">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">2-Hour Premium Access</span>
              </div>
            </div>
            <div className="absolute -right-6 bottom-24 p-3 bg-background rounded-lg shadow-md border">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Full Platform Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Access Highlight */}
      <div className="mt-20 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Premium Mobile Access</h2>
          <p className="mt-4 text-muted-foreground">
            Hanu Class offers flexible mobile access options based on your subscription plan.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="bg-background">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Basic Plan</CardTitle>
                <CardDescription>2-Hour Daily Access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students get 2 hours of premium mobile app access daily, perfect for quick reviews and on-the-go learning.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-primary">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>Unlimited Access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Unlimited mobile access for all users, with advanced features and full content library on the go.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Enterprise Plan</CardTitle>
                <CardDescription>Custom Branding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All the benefits of unlimited access plus custom branding and dedicated mobile features for your institution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Features */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Key Mobile Features</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-xl mx-auto">
          Our mobile app brings the power of Hanu Class to your smartphone, with features designed specifically for on-the-go learning.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M15 10v5"></path><path d="M9 10v5"></path><path d="M15 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path><path d="M9 15c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-.75-2-3-2Z"></path>
                <path d="M15 15c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-.75-2-3-2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Live Classes</h3>
            <p className="mt-2 text-muted-foreground">
              Join online classes from your mobile device with full video and audio capabilities.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="m9 9 5 12 1.774-5.226L21 14 9 9z"></path><path d="m16.071 16.071 4.243 4.243"></path>
                <path d="m7.188 2.239.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656-2.12 2.122"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Offline Content</h3>
            <p className="mt-2 text-muted-foreground">
              Download lectures and course materials for access even without an internet connection.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7v10"></path><path d="M11 7v10"></path><path d="m15 7 2 5-2 5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Mobile Assessments</h3>
            <p className="mt-2 text-muted-foreground">
              Take quizzes and exams directly from your smartphone with secure testing features.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><circle cx="12" cy="17" r=".5"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold">In-App Support</h3>
            <p className="mt-2 text-muted-foreground">
              Get help and communicate with teachers directly through the mobile app.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path><path d="M12 8v4l2 2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Schedule & Reminders</h3>
            <p className="mt-2 text-muted-foreground">
              Keep track of classes, assignments, and exams with built-in scheduling and notifications.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Progress Tracking</h3>
            <p className="mt-2 text-muted-foreground">
              View your academic progress, grades, and performance analytics on the go.
            </p>
          </div>
        </div>
      </div>

      {/* Platforms */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">Available On All Major Platforms</h2>
        <p className="mt-4 text-muted-foreground">
          Download the Hanu Class mobile app for iOS and Android devices.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="rounded-xl bg-muted/20 border px-6 py-4 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 19c0-4.2-2.8-7-7-7"></path><path d="M5 12V5h14v14h-7"></path>
            </svg>
            <span className="font-medium">iOS App Store</span>
          </div>
          <div className="rounded-xl bg-muted/20 border px-6 py-4 flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M17 15V5l-5 5-5-5v10l5-5z"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
            </svg>
            <span className="font-medium">Google Play Store</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">Experience Hanu Class Mobile Today</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Start your free 15-day trial to explore all features of our mobile app, including the premium access options.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/register?trial=true">Start Free Trial</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
