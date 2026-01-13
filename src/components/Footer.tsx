import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <h3 className="text-xl font-bold">SMIRROR Solutions</h3>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Professional web development services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white text-sm transition-colors">
                About
              </Link>
              <Link href="/services" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Services
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-white text-sm transition-colors">
                Projects
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>samuelsoita79@gmail.com</p>
              <p>+254 768 640 343</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SMIRROR Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
