import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Pricing - Hanu Class",
  description: "Choose the perfect plan for your educational institution",
};

const PricingFeature = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
};

export default function PricingPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Flexible Pricing Plans</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Choose the perfect plan for your educational institution with our transparent pricing options
        </p>
      </div>

      {/* Free Trial Banner */}
      <div className="mt-10 rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 p-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Try Hanu Class Free for 15 Days</h2>
          <p className="mt-2 text-muted-foreground">
            Experience all premium features with no commitment. No credit card required.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/register?trial=true">Start Your Free Trial</Link>
          </Button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <Card className="border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Basic</CardTitle>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-bold">$299</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-2">For small institutions getting started</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingFeature>Up to 500 student accounts</PricingFeature>
            <PricingFeature>10 teacher accounts</PricingFeature>
            <PricingFeature>Basic online classes</PricingFeature>
            <PricingFeature>50 GB storage for recorded content</PricingFeature>
            <PricingFeature>Standard examination tools</PricingFeature>
            <PricingFeature>Email support</PricingFeature>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/register?plan=basic">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="relative border-primary shadow-lg">
          <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
            Most Popular
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Premium</CardTitle>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-bold">$699</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-2">For growing educational institutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingFeature>Up to 2,000 student accounts</PricingFeature>
            <PricingFeature>50 teacher accounts</PricingFeature>
            <PricingFeature>Advanced online classes with breakout rooms</PricingFeature>
            <PricingFeature>200 GB storage for recorded content</PricingFeature>
            <PricingFeature>Advanced examination tools with anti-cheating</PricingFeature>
            <PricingFeature>Priority email & phone support</PricingFeature>
            <PricingFeature>Student mobile app access (2 hours premium)</PricingFeature>
            <PricingFeature>Analytics dashboard</PricingFeature>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/register?plan=premium">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Enterprise</CardTitle>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-4xl font-bold">$1,499</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-2">For large educational organizations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <PricingFeature>Unlimited student accounts</PricingFeature>
            <PricingFeature>Unlimited teacher accounts</PricingFeature>
            <PricingFeature>Premium online classes with all features</PricingFeature>
            <PricingFeature>Unlimited storage for recorded content</PricingFeature>
            <PricingFeature>Enterprise-grade examination system</PricingFeature>
            <PricingFeature>24/7 priority support with dedicated account manager</PricingFeature>
            <PricingFeature>Full mobile app access for all users</PricingFeature>
            <PricingFeature>Advanced analytics and reporting</PricingFeature>
            <PricingFeature>Custom branding and white-labeling</PricingFeature>
            <PricingFeature>On-premise hosting option</PricingFeature>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/register?plan=enterprise">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Self-Hosting Option */}
      <div className="mt-16 rounded-lg border bg-muted/10 p-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Self-Hosting Solution</h2>
          <p className="mt-2 text-muted-foreground">
            Prefer to host Hanu Class on your own servers? We offer flexible licensing options for institutions that require complete control over their data and infrastructure.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Complete Data Sovereignty</h3>
                <p className="text-muted-foreground">
                  Keep all your data within your institution's infrastructure, ensuring maximum compliance with local regulations.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Custom Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly integrate with your existing systems and customize the platform to match your specific workflows.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Implement your own security protocols and access controls within your secure network environment.
                </p>
              </div>
            </div>
          </div>
          <Button asChild className="mt-6">
            <Link href="/contact?subject=self-hosting">Request Self-Hosting Information</Link>
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Can I upgrade or downgrade my plan?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, you can change your plan at any time. When upgrading, we'll prorate the remaining days in your billing cycle. When downgrading, the new rate will apply to your next billing cycle.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Is there a discount for annual billing?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, we offer a 15% discount when you choose annual billing on any of our plans. Contact our sales team for more information.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">What happens after my free trial?</h3>
            <p className="mt-2 text-muted-foreground">
              After your 15-day free trial ends, you can choose to subscribe to any of our plans. We'll notify you before the trial ends, and you won't be automatically charged.
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-xl font-bold">Do you offer educational discounts?</h3>
            <p className="mt-2 text-muted-foreground">
              Yes, we offer special pricing for public schools, non-profits, and educational institutions. Contact our sales team to learn more about our educational discount program.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Ready to transform your educational institution?</h2>
        <p className="mt-2 text-muted-foreground">
          Start your 15-day free trial today and experience the full power of Hanu Class.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/register?trial=true">Start Free Trial</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
