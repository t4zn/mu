import { Link } from "lib/transition"
import Image from "next/image"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import Search from "@/components/navigation/search"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <Image
          src="/icon.png"
          alt="Medicaps Resources Icon"
          width={128}
          height={128}
          className="h-16 w-16 sm:h-32 sm:w-32"
        />
        <h1 className="text-3xl font-bold sm:text-7xl">Medicaps Resources</h1>
      </div>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        Find notes, PYQs, cheat sheets, and study materials for Medicaps University. 
        Your comprehensive resource hub for academic success.
      </p>

      <div className="mb-6 w-full max-w-md">
        <Search />
      </div>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
