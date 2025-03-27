"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const isTrial = searchParams.get('trial') === 'true';
  const initialPlan = searchParams.get('plan') || '';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    institutionName: "",
    plan: initialPlan,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // This is where you would handle registration
    // For now, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    alert("Registration functionality would be implemented in a real application");
  };

  return (
    <div className="container flex min-h-screen items-center justify-center py-12">
      <Card className="mx-auto w-full max-w-lg">
        <CardHeader className="space-y-1">
          {isTrial ? (
            <>
              <div className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mx-auto">
                <span>15-Day Free Trial</span>
              </div>
              <CardTitle className="text-2xl font-bold text-center">Start Your Free Trial</CardTitle>
              <CardDescription className="text-center">
                Experience all premium features of Hanu Class for 15 days. No credit card required.
              </CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl font-bold text-center">Create an Account</CardTitle>
              <CardDescription className="text-center">
                Register to access Hanu Class and manage your educational institution
              </CardDescription>
            </>
          )}
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="institutionName">Institution Name</Label>
              <Input
                id="institutionName"
                name="institutionName"
                placeholder="Harvard University"
                value={formData.institutionName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">I am a</Label>
              <Select
                onValueChange={(value) => handleSelectChange('role', value)}
                value={formData.role}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="institution_admin">Institution Administrator</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {!isTrial && (
              <div className="space-y-2">
                <Label htmlFor="plan">Select a Plan</Label>
                <Select
                  onValueChange={(value) => handleSelectChange('plan', value)}
                  value={formData.plan}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic ($299/month)</SelectItem>
                    <SelectItem value="premium">Premium ($699/month)</SelectItem>
                    <SelectItem value="enterprise">Enterprise ($1,499/month)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {isTrial && (
              <div className="rounded-lg bg-muted/30 p-4 space-y-3">
                <p className="text-sm font-medium">Your free trial includes:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Access to all premium features</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">Unlimited students and teachers during trial</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">No commitment, cancel anytime</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading
                ? "Creating Account..."
                : isTrial
                  ? "Start Your Free Trial"
                  : "Create Account"
              }
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Log in
              </Link>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              By creating an account, you agree to our{" "}
              <Link href="/terms-of-service" className="underline underline-offset-4">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
