import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Koren"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="rounded-full">
            Work with us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-2 gap-8 px-8 py-16">
        <div className="bg-[#1c1c1c] p-12 rounded-lg">
          <h1 className="text-6xl font-light text-white mb-8">Deeply rooted.</h1>
          <p className="text-[#999999] text-lg">
            We're a creative studio that builds purposeful digital products — from creative websites to robust
            e-commerce solutions, web apps, and mobile applications, we deliver seamless experiences.
          </p>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 p-12 rounded-lg">
          <h2 className="text-lg mb-8">What we do:</h2>
          <div className="space-y-4">
            <h3 className="text-3xl font-light text-[#999999]">Web development</h3>
            <h3 className="text-3xl font-light text-[#999999]">App development</h3>
            <h3 className="text-3xl font-light text-[#999999]">UI/UX Design</h3>
            <h3 className="text-3xl font-bold">Product Design</h3>
            <h3 className="text-3xl font-light text-[#999999]">Brand Design</h3>
          </div>
          <Button variant="outline" className="mt-8 rounded-full">
            Schedule a meeting
          </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-8 py-16">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-lg mb-8">Recent projects:</h2>
            <div className="space-y-4">
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                savadeck.com
              </Link>
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                marijavolkman.com
              </Link>
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                roger.rs
              </Link>
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                bopa.rs
              </Link>
              <Link href="#" className="block text-2xl font-bold text-[#205247] hover:text-[#357266]">
                forests.digital
              </Link>
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                realvibestudio.com
              </Link>
              <Link href="#" className="block text-2xl font-light text-[#999999] hover:text-[#357266]">
                hirurgijadrdjokovice.com
              </Link>
            </div>
            <Button variant="outline" className="mt-8 rounded-full">
              Visit website
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/1.png"
              alt="Project 1"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/2.png"
              alt="Project 2"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/3.png"
              alt="Project 3"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full"
            />
            <Image
              src="/4.png"
              alt="Project 4"
              width={300}
              height={300}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8">
            Interested in
            <br />
            working together?
          </h2>
          <p className="text-[#999999] mb-4">Drop us an email:</p>
          <Link href="mailto:hello@koren.digital" className="text-2xl text-[#205247] hover:text-[#357266]">
            hello@koren.digital
          </Link>
          <div className="mt-8">
            <Button variant="outline" className="rounded-full">
              Schedule a meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-4 text-sm text-[#999999]">
        <div className="flex gap-4">
          <span>Design: Nikola</span>
          <span>Development: Igor</span>
        </div>
        <div className="flex gap-4">
          <span>Available for projects</span>
          <span>January 2025</span>
        </div>
        <div>
          <span>© 2024 Koren Studio | All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

