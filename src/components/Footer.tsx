import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent border-t border-gray-800">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-20">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/hover.jpeg"
                alt="SMIRROR LTD Icon"
                width={48}
                height={48}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold text-white tracking-tight">SMIRROR LTD</h3>
            </Link>
            <p className="text-gray-400 leading-relaxed text-lg max-w-md">
              Professional full-stack development that lets you relax. We build secure, scalable, and stunning digital solutions for modern businesses and individuals worldwide.
            </p>
            <div className="flex gap-4">
              {[
                { label: '𝕏', href: '#' },
                { label: 'in', href: '#' },
                { label: 'Gh', href: '#' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white">Explore</h4>
            <ul className="space-y-4 text-lg">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Portfolio</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Careers</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-6">
            <h4 className="font-bold text-xl text-white">Contact Us</h4>
            <div className="space-y-5 text-gray-400 text-lg">
              <p className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">✉</span>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">samuelsoita79@gmail.com</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl">📞</span>
                <span className="hover:text-blue-400 transition-colors cursor-pointer">+254 768 640 343</span>
              </p>
              <p className="flex items-start gap-4">
                <span className="text-blue-500 text-2xl"></span>
                <span>Nairobi, Kenya<br /><span className="text-sm font-medium opacity-60 italic text-blue-300">Serving Worldwide</span></span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800/80 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
          <p className="order-2 md:order-1">
            © {currentYear} SMIRROR LTD. All rights reserved.
          </p>
          <div className="flex gap-8 order-1 md:order-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
