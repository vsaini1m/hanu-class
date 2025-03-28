import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Hanu Class</h3>
            <p className="text-muted-foreground text-sm">
              A comprehensive platform for online classes, recorded content, examinations, and institution management.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/online-classes" className="text-muted-foreground hover:text-primary transition-colors">
                  Online Classes
                </Link>
              </li>
              <li>
                <Link href="/recorded-content" className="text-muted-foreground hover:text-primary transition-colors">
                  Recorded Content
                </Link>
              </li>
              <li>
                <Link href="/examinations" className="text-muted-foreground hover:text-primary transition-colors">
                  Examinations
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@hanuclass.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Education Street, Learning City</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Hanu Class. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
