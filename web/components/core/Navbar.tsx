import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="w-screen bg-white gap-4 py-[25px] px-[44px] flex justify-between">
      <div className="flex font-title text-[23px] lowercase italic">
        <Link href="/">Electric Potential</Link>
      </div>
      <div className="flex lg:ml-auto gap-10 justify-between">
        <Link href="/about-us">
          <span className="text-dark-sky font-medium text-[16px]">
            About Us
          </span>
        </Link>
        <Link href="/programs">
          <span className="text-dark-sky font-medium text-[16px]">
            Programs
          </span>
        </Link>
        <Link href="/issues">
          <span className="text-dark-sky font-medium text-[16px]">Issues</span>
        </Link>
        <Link href="/newsletter">
          <span className="text-dark-sky font-medium text-[16px]">
            Newsletter
          </span>
        </Link>
      </div>
    </div>
  )
}
