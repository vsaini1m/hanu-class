import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Server, Shield, Database, Cog, Lock } from "lucide-react";

export const metadata = {
  title: "Self-Hosting - Hanu Class",
  description: "Deploy Hanu Class on your own infrastructure with complete control and customization",
};

export default function SelfHostingPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Server className="mr-2 h-4 w-4" />
            <span>Enterprise Solution</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">On-Premise Deployment</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Host Hanu Class on your own infrastructure with full control over data, security, and customization for your educational institution.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/contact?subject=self-hosting">Request Information</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative aspect-square rounded-xl border bg-muted/20 p-8 flex items-center justify-center">
            <Server className="h-32 w-32 text-primary/30" />
            <div className="absolute -right-4 top-1/4 p-3 bg-background rounded-lg shadow-md border">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -left-4 bottom-1/4 p-3 bg-background rounded-lg shadow-md border">
              <Database className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-3 bg-background rounded-lg shadow-md border">
              <Cog className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Key Benefits of Self-Hosting</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Take full advantage of Hanu Class's capabilities while maintaining complete control over your data and infrastructure.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-3 rounded-full bg-primary/10 p-2 w-fit">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Data Sovereignty</CardTitle>
              <CardDescription>Complete control over your data</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Keep all your institutional data within your own infrastructure, ensuring compliance with local regulations and internal data policies.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-3 rounded-full bg-primary/10 p-2 w-fit">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Enhanced Security</CardTitle>
              <CardDescription>Your security, your way</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Implement your own security protocols, access controls, and encryption within your secure network environment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="mb-3 rounded-full bg-primary/10 p-2 w-fit">
                <Cog className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Custom Integration</CardTitle>
              <CardDescription>Seamless connectivity</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Integrate Hanu Class with your existing systems, including authentication services, student information systems, and learning tools.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-20 rounded-xl bg-muted/10 p-8">
        <h2 className="text-3xl font-bold text-center">How Self-Hosting Works</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          We make the process of deploying Hanu Class on your infrastructure simple and straightforward.
        </p>
        <div className="mt-12 relative">
          <div className="absolute top-0 bottom-0 left-[50%] border-l border-dashed border-primary/30" />
          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground z-10">
                1
              </div>
              <div className="md:w-[calc(100%-4rem)] space-y-2">
                <h3 className="text-xl font-bold">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  Our technical team works with your IT department to assess your infrastructure requirements and plan the deployment strategy.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground z-10">
                2
              </div>
              <div className="md:w-[calc(100%-4rem)] space-y-2">
                <h3 className="text-xl font-bold">Custom Configuration</h3>
                <p className="text-muted-foreground">
                  We customize Hanu Class to meet your specific needs, including branding, integrations, and functional requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground z-10">
                3
              </div>
              <div className="md:w-[calc(100%-4rem)] space-y-2">
                <h3 className="text-xl font-bold">Deployment & Testing</h3>
                <p className="text-muted-foreground">
                  Our team assists with the deployment process, ensuring everything is properly installed, configured, and tested in your environment.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground z-10">
                4
              </div>
              <div className="md:w-[calc(100%-4rem)] space-y-2">
                <h3 className="text-xl font-bold">Training & Handover</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive training for your IT staff on system administration, maintenance, and troubleshooting.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground z-10">
                5
              </div>
              <div className="md:w-[calc(100%-4rem)] space-y-2">
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Even after deployment, our team provides ongoing support, updates, and maintenance assistance as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Requirements */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Technical Requirements</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          Hanu Class can be deployed on a variety of infrastructure configurations to meet your needs.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Recommended Server Specifications</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Minimum 8-core CPU for up to 1,000 concurrent users</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>32GB RAM minimum (64GB recommended)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>SSD storage: 500GB minimum for application, database needs separate consideration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>100Mbps+ network connection</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Redundant power and network connectivity</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Software Requirements</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Linux (Ubuntu 20.04 LTS or later recommended) or Windows Server 2019+</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Docker and Docker Compose (for containerized deployment)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>PostgreSQL 13+ or MySQL 8.0+ database</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Redis for caching</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>NGINX or Apache web server</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>SSL certificate for secure connections</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-20 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 p-8">
        <div className="mx-auto max-w-3xl text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40 mx-auto mb-4">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
          <p className="text-lg italic">
            "Hosting Hanu Class on our own servers has dramatically improved our data compliance posture while providing the exact customizations our unique academic programs require. The technical support during deployment was exceptional."
          </p>
          <div className="mt-6">
            <p className="font-semibold">David Reyes</p>
            <p className="text-sm text-muted-foreground">Chief Information Officer, Midwest University</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Can we customize the user interface?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, self-hosted installations can be fully customized with your institution's branding, including logos, colors, and terminology.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">How are updates handled?</h3>
            <p className="mt-2 text-muted-foreground">
              We provide regular updates that can be applied at your convenience. Our team can assist with update planning and implementation.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Is cloud-hybrid deployment possible?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, we support hybrid deployment models where some components can run in the cloud while sensitive data remains on your premises.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">How is licensing structured?</h3>
            <p className="mt-2 text-muted-foreground">
              Self-hosting licenses are typically structured based on the number of users and are available in annual subscription models. Contact us for specific pricing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-bold">Ready to Deploy Hanu Class on Your Infrastructure?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Contact our sales team to discuss your requirements and get a customized quote for self-hosting Hanu Class.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/contact?subject=self-hosting">Request Information</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
