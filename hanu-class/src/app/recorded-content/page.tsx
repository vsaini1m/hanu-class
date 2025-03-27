import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Recorded Content - Hanu Class",
  description: "Access and manage a library of recorded lectures, tutorials, and educational materials",
};

export default function RecordedContentPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Recorded Content</h1>
        <p className="text-muted-foreground text-lg">
          Access and manage a comprehensive library of recorded lectures, tutorials, and educational materials.
        </p>
      </div>

      {/* Features Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Video Library</CardTitle>
            <CardDescription>Organized educational content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Store, organize, and categorize video content by subject, class, or topic for easy access.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Smart Search</CardTitle>
            <CardDescription>Find content quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Search through video transcripts, titles, and descriptions to find exactly what you're looking for.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Playback</CardTitle>
            <CardDescription>Enhanced learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Navigate through content with chapters, adjust playback speed, and add personal notes while watching.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Attachments</CardTitle>
            <CardDescription>Supplemental materials</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Attach PDFs, presentations, and supplementary materials to accompany recorded content.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>Monitor student engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Track which students have watched videos, for how long, and generate detailed engagement reports.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Discussion Threads</CardTitle>
            <CardDescription>Collaborative learning</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Enable students to ask questions and discuss content directly alongside recorded videos.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Types */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold sm:text-3xl">Content Types</h2>
        <p className="mt-4 text-muted-foreground">
          Hanu Class supports various types of educational content to enhance the learning experience.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Lecture Recordings</h3>
            <p className="mt-2 text-muted-foreground">
              Full recordings of live classes, automatically captured and processed for optimal viewing.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Tutorial Videos</h3>
            <p className="mt-2 text-muted-foreground">
              Step-by-step guides and how-to videos created specifically to explain complex concepts.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Educational Series</h3>
            <p className="mt-2 text-muted-foreground">
              Organized collections of related videos covering comprehensive topics or subjects.
            </p>
          </div>

          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Third-Party Content</h3>
            <p className="mt-2 text-muted-foreground">
              Integration with external educational content libraries and resources.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 rounded-lg bg-muted/50 p-8">
        <h2 className="text-2xl font-bold sm:text-3xl">Benefits for Students</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Learn at their own pace, rewatching difficult concepts as needed</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Access content anytime, anywhere, from any device</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Review material before exams and assessments</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Catch up on missed classes without falling behind</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Create bookmarks and personal notes for important content</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 h-6 w-6 rounded-full bg-primary text-center text-sm text-primary-foreground">✓</div>
            <span>Participate in discussions around specific video segments</span>
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Button asChild size="lg">
          <Link href="/register">Start Building Your Content Library</Link>
        </Button>
      </div>
    </div>
  );
}
