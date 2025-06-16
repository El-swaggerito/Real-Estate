import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-900">RealEstate Pro</h3>
            <p className="text-amber-700">Find your dream property with the most trusted real estate platform.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-amber-700 hover:text-amber-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-amber-700 hover:text-amber-900">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="text-amber-700 hover:text-amber-900">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-700 hover:text-amber-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-900">Contact Us</h4>
            <address className="text-amber-700 not-italic">
              <p>123 Real Estate Street</p>
              <p>Cityville, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@realestatepro.com</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-900">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-700 hover:text-amber-900">
                <Facebook />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-900">
                <Twitter />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-900">
                <Instagram />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-900">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-amber-100 py-4">
        <div className="container text-center text-amber-700">
          <p>&copy; 2025 RealEstate Pro. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="text-amber-700 hover:text-amber-900 mx-2">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-amber-700 hover:text-amber-900 mx-2">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
