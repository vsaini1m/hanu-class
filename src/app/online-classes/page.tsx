import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Online Classes - Hanu Class",
  description: "Live interactive classes with video conferencing and collaboration tools",
};

export default function OnlineClassesPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Online Classes</h1>
        <p className="text-muted-foreground text-lg">
          Conduct live interactive classes with powerful video conferencing and collaboration tools.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>HD Video Conferencing</CardTitle>
            <CardDescription>Crystal clear audio and video quality</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Connect with up to 100 participants simultaneously with high-definition video and audio.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Whiteboard</CardTitle>
            <CardDescription>Collaborate in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Share your screen, annotate documents, and use the digital whiteboard to explain concepts effectively.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Breakout Rooms</CardTitle>
            <CardDescription>Group activities and discussions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Divide your class into smaller groups for focused discussions and collaborative work.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automatic Recording</CardTitle>
            <CardDescription>Never miss a class</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              All classes are automatically recorded and stored for future reference, helping students who missed the live session.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Polling & Quizzes</CardTitle>
            <CardDescription>Engage your students</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create instant polls and quizzes to check understanding and keep students engaged during class.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Tracking</CardTitle>
            <CardDescription>Monitor participation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Automatically track student attendance and participation during online classes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Demo Section */}
      <div className="mt-16 flex flex-col items-center rounded-lg border bg-muted/20 p-8 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">See It in Action</h2>
        <p className="mt-4 max-w-[42rem] text-muted-foreground">
          Request a demo to see how Hanu Class can transform your online teaching experience.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">How It Works</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Schedule a Class</h3>
            <p className="text-muted-foreground">
              Create a class schedule, set the duration, and invite students with a simple link.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Conduct Interactive Sessions</h3>
            <p className="text-muted-foreground">
              Use our powerful tools to deliver engaging lessons, share materials, and interact with students.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Review and Follow Up</h3>
            <p className="text-muted-foreground">
              Access recordings, review attendance, and follow up with students after class.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Button asChild size="lg">
          <Link href="/register">Get Started Today</Link>
        </Button>
      </div>
    </div>
  );
}
