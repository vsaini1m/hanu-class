import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Examinations - Hanu Class",
  description: "Create, conduct, and evaluate online examinations with various question formats and automated grading",
};

export default function ExaminationsPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Examinations</h1>
        <p className="text-muted-foreground text-lg">
          Create, conduct, and evaluate online examinations with various question formats and automated grading.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Diverse Question Types</CardTitle>
            <CardDescription>Flexible assessment options</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create exams with multiple-choice, true/false, short answer, essay, matching, and file upload questions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Bank</CardTitle>
            <CardDescription>Build your repository</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Create and categorize questions in a central repository for reuse across different examinations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automated Grading</CardTitle>
            <CardDescription>Save time and effort</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Automatically grade objective questions and provide templates for subjective assessment.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Anti-Cheating Measures</CardTitle>
            <CardDescription>Ensure exam integrity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Browser lockdown, randomized questions, time restrictions, and proctoring features.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Detailed Analytics</CardTitle>
            <CardDescription>Track performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Generate reports on individual and class performance, identify learning gaps, and analyze question effectiveness.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback System</CardTitle>
            <CardDescription>Enhance learning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Provide customized feedback for each answer, explaining correct solutions and learning resources.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Exam Types */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Supported Exam Types</h2>
        <p className="mt-4 text-muted-foreground">
          Hanu Class supports various examination formats to meet different assessment needs.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Quizzes & Assessments</h3>
            <p className="mt-2 text-muted-foreground">
              Short, frequent assessments to check understanding and reinforce learning.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Midterm & Final Exams</h3>
            <p className="mt-2 text-muted-foreground">
              Comprehensive assessments covering multiple topics or an entire course.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Practice Tests</h3>
            <p className="mt-2 text-muted-foreground">
              Unlimited attempts with instant feedback to help students prepare for actual exams.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Standardized Tests</h3>
            <p className="mt-2 text-muted-foreground">
              Simulate standardized tests with timing, sectioning, and specific question formats.
            </p>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Examination Process</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              1
            </div>
            <h3 className="text-xl font-bold">Create</h3>
            <p className="text-muted-foreground">
              Design your exam with various question types, set timing, and customize settings.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              2
            </div>
            <h3 className="text-xl font-bold">Administer</h3>
            <p className="text-muted-foreground">
              Schedule, distribute, and monitor exams with secure delivery options.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              3
            </div>
            <h3 className="text-xl font-bold">Grade</h3>
            <p className="text-muted-foreground">
              Automated grading for objective questions and structured tools for subjective assessment.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-medium text-primary-foreground">
              4
            </div>
            <h3 className="text-xl font-bold">Analyze</h3>
            <p className="text-muted-foreground">
              Generate reports, insights, and performance analytics to improve teaching and learning.
            </p>
          </div>
        </div>
      </div>

      {/* Example Use Case */}
      <div className="mt-16 rounded-lg bg-muted/50 p-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Success Story</h2>
        <div className="mt-6">
          <p className="italic">
            "Before using Hanu Class, our midterm exams took weeks to grade and analyze. Now, we get instant results and can provide immediate feedback to students. The question bank has allowed us to build comprehensive assessments that truly measure student understanding."
          </p>
          <p className="mt-4 font-semibold">
            — Dr. James Wilson, Assessment Coordinator at Westview Academy
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Button asChild size="lg">
          <Link href="/register">Transform Your Assessment Process</Link>
        </Button>
      </div>
    </div>
  );
}
